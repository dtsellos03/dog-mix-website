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
var HallOfFameComponent = (function () {
    function HallOfFameComponent(mixesService) {
        this.mixesService = mixesService;
    }
    // getMixes(): void {
    //     this.mixesService.getMixes().then(mixes => this.mixes = mixes);
    //   }
    HallOfFameComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mixesService.getTopMixes()
            .subscribe(function (returnobj) {
            _this.topMixes = returnobj.topmixes;
            _this.botMixes = returnobj.botmixes;
        });
    };
    return HallOfFameComponent;
}());
HallOfFameComponent = __decorate([
    Component({
        selector: 'app-hall-fame',
        templateUrl: './hall-of-fame.component.html',
        styleUrls: ['./hall-of-fame.component.css'],
        providers: [MixesService]
    }),
    __metadata("design:paramtypes", [MixesService])
], HallOfFameComponent);
export { HallOfFameComponent };
//# sourceMappingURL=hall-of-fame.component.js.map