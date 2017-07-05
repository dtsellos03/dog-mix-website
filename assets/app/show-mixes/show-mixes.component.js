var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { MixesService } from '../mixes.service';
function importAll(r) {
    var images = {};
    r.keys().map(function (item, index) { images[item.replace('./', '').replace('.jpg', '')] = r(item); });
    return images;
}
function shuffle(a) {
    for (var i = a.length; i; i--) {
        var j = Math.floor(Math.random() * i);
        _a = [a[j], a[i - 1]], a[i - 1] = _a[0], a[j] = _a[1];
    }
    var _a;
}
var ShowMixesComponent = (function () {
    function ShowMixesComponent(mixesService) {
        this.mixesService = mixesService;
        this.breeds = [{ "name": "Dachshund", "image": "dachshund" },
            { "name": "Corgi", "image": "corgi" },
            { "name": "Maltese", "image": "maltese" },
            { "name": "Pug", "image": "pug" },
            { "name": "French Bulldog", "image": "frenchbulldog" },
            { "name": "Boxer", "image": "boxer" },
            { "name": "Boston Terrier", "image": "bostonterrier" },
            { "name": "Chihuahua", "image": "chihuahua" },
            { "name": "Pomeranian", "image": "pomeranian" },
            { "name": "Yorkshire Terrier", "image": "yorkshireterrier" },
            { "name": "Labrador Retriever", "image": "labradorretriever" },
            { "name": "Golden Retriever", "image": "goldenretriever" },
            { "name": "Papillon", "image": "papillon" },
            { "name": "Shiba Inu", "image": "shibainu" },
            { "name": "Beagle", "image": "beagle" },
            { "name": "Australian Shepherd", "image": "australianshepherd" },
            { "name": "German Shepherd", "image": "germanshepherd" },
            { "name": "Greyhound", "image": "greyhound" },
            { "name": "Pit Bull", "image": "pitbull" },
            { "name": "Chow Chow", "image": "chowchow" },
            { "name": "Alaskan Malamute", "image": "malamute" },
            { "name": "Pekingese", "image": "pekingese" },
            { "name": "Jack Russell Terrier", "image": "jackrussellterrier" },
            { "name": "Basset Hound", "image": "bassethound" },
            { "name": "Shih Tzu", "image": "shihtzu" },
            { "name": "Akita", "image": "akita" },
            { "name": "Husky", "image": "husky" },
            { "name": "Dalmation", "image": "dalmation" },
            { "name": "English Bulldog", "image": "englishbulldog" }];
        this.queryString = '';
        this.activeBreed = "all";
    }
    ShowMixesComponent.prototype.onClickMe = function (breed) {
        this['queryString'] = breed;
    };
    ShowMixesComponent.prototype.ngOnInit = function () {
        var _this = this;
        var images = importAll(require['context']('../../../assets/images', false, /\.(png|jpe?g|svg)$/));
        var breedsToService = {};
        this.breeds.forEach(function (element) {
            element.image = images[element.image];
            breedsToService[element.name] = element.image;
        });
        this.mixesService.serviceBreeds = breedsToService;
        if (this.mixesService.isLoaded == true) {
            this.mixes = this.mixesService.serviceMixes;
        }
        else {
            this.mixesService.getMixes()
                .subscribe(function (mixes) {
                _this.mixes = mixes;
            });
            this.mixesService.refreshMixes();
        }
    };
    return ShowMixesComponent;
}());
ShowMixesComponent = __decorate([
    Component({
        selector: 'app-show-mixes',
        templateUrl: './show-mixes.component.html',
        styleUrls: ['./show-mixes.component.css'],
        providers: []
        // make fade in animation available to this component
    }),
    __metadata("design:paramtypes", [MixesService])
], ShowMixesComponent);
export { ShowMixesComponent };
//# sourceMappingURL=show-mixes.component.js.map