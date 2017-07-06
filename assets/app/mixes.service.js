var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Http, Headers } from "@angular/http";
import { Injectable } from "@angular/core";
import 'rxjs/Rx';
import { Mix } from './mix';
import { Observable } from 'rxjs/Rx';
function shuffle(a) {
    for (var i = a.length; i; i--) {
        var j = Math.floor(Math.random() * i);
        _a = [a[j], a[i - 1]], a[i - 1] = _a[0], a[j] = _a[1];
    }
    var _a;
}
var MixesService = (function () {
    function MixesService(http) {
        this.http = http;
        this.serviceMixes = [];
        this.isLoaded = false;
        this.serviceBreeds = {};
    }
    MixesService.prototype.refreshMixes = function () {
        var _this = this;
        this.isLoaded = true;
        this.getMixes()
            .subscribe(function (mixes) {
            _this.serviceMixes = mixes;
            shuffle(_this.serviceMixes);
        });
    };
    MixesService.prototype.addMix = function (mix) {
        var body = JSON.stringify(mix);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post('/getMixes', body, { headers: headers })
            .map(function (response) {
            var result = response.json().obj;
            return result;
        })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    MixesService.prototype.getMixes = function () {
        var _this = this;
        return this.http.get('/getMixes')
            .map(function (response) {
            var mixes = response.json().obj;
            var transformedMixes = [];
            for (var _i = 0, mixes_1 = mixes; _i < mixes_1.length; _i++) {
                var mix = mixes_1[_i];
                transformedMixes.push(new Mix(mix._id, mix.Name, mix.image, mix.breed1, mix.breed2, mix.checkAll, mix.upvote, mix.downvote, mix.imagesource));
            }
            _this['mixes'] = transformedMixes;
            return transformedMixes;
        })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    MixesService.prototype.getTopMixes = function () {
        var _this = this;
        this.refreshMixes();
        return this.http.get('/topmixes')
            .map(function (response) {
            var topmixes = response.json().topMixes;
            var botmixes = response.json().botMixes;
            var topMixes = [];
            var botMixes = [];
            for (var _i = 0, topmixes_1 = topmixes; _i < topmixes_1.length; _i++) {
                var mix = topmixes_1[_i];
                topMixes.push(new Mix(mix._id, mix.Name, mix.image, mix.breed1, mix.breed2, mix.checkAll, mix.upvote, mix.downvote, mix.imagesource));
            }
            for (var _a = 0, botmixes_1 = botmixes; _a < botmixes_1.length; _a++) {
                var mix = botmixes_1[_a];
                botMixes.push(new Mix(mix._id, mix.Name, mix.image, mix.breed1, mix.breed2, mix.checkAll, mix.upvote, mix.downvote, mix.imagesource));
            }
            _this['topMixes'] = topMixes;
            _this['topMixes'] = botMixes;
            var returnobj = {
                topmixes: topMixes,
                botmixes: botMixes
            };
            return returnobj;
        });
        /** .catch((error: Response) => Observable.throw(error.json())); */
    };
    MixesService.prototype.getMix = function (desiredID) {
        return this.serviceMixes.find(function (mix) {
            return mix.id == desiredID;
        });
    };
    MixesService.prototype.getMixAsync = function (id) {
        //console.log(id)
        return this.http.get('/getMixes/' + id)
            .map(function (response) {
            //    console.log(response)
            var mix = response.json().obj;
            console.log(mix);
            var foundmix = new Mix(mix._id, mix.Name, mix.image, mix.breed1, mix.breed2, mix.checkAll, mix.upvote, mix.downvote, mix.imagesource);
            //  this['mix'] = foundmix;
            return foundmix;
        });
    };
    return MixesService;
}());
MixesService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], MixesService);
export { MixesService };
//# sourceMappingURL=mixes.service.js.map