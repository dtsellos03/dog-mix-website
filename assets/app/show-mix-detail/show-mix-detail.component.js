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
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MixesService } from '../mixes.service';
import 'rxjs/add/operator/switchMap';
import { Http } from "@angular/http";
import { Observable } from 'rxjs/Rx';
var ShowMixDetailComponent = (function () {
    function ShowMixDetailComponent(mixesService, route, location, http) {
        this.mixesService = mixesService;
        this.route = route;
        this.location = location;
        this.http = http;
        this.upsel = 0;
        this.downsel = 0;
        this.mix = '';
    }
    ShowMixDetailComponent.prototype.ngOnInit = function () {
        var id = this.route.params['value'].id;
        this['mix'] = this.mixesService.getMix(id);
    };
    ShowMixDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    ShowMixDetailComponent.prototype.upVote = function () {
        if (this.upsel == 1 && this.downsel == 0) {
            this['mix']['upvote']--;
            this.upsel = 0;
            this.upObservableDown()
                .subscribe(function (data) { return console.log(""); }, function (error) { return console.error(error); });
            return null;
        }
        if (this.upsel == 0 || this.downsel == 1) {
            if (this.downsel == 1) {
                this['mix']['downvote']--;
                this.downObservableDown()
                    .subscribe(function (data) { return console.log(""); }, function (error) { return console.error(error); });
            }
            this.upsel = 1;
            this.downsel = 0;
            this['mix']['upvote']++;
            this.upObservableUp()
                .subscribe(function (data) { return console.log(""); }, function (error) { return console.error(error); });
        }
    };
    ShowMixDetailComponent.prototype.downVote = function () {
        if (this.downsel == 1 && this.upsel == 0) {
            this['mix']['downvote']--;
            this.downsel = 0;
            this.downObservableDown()
                .subscribe(function (data) { return console.log(""); }, function (error) { return console.error(error); });
            return null;
        }
        if (this.downsel == 0 || this.upsel == 1) {
            if (this.upsel == 1) {
                this['mix']['upvote']--;
                this.upObservableDown()
                    .subscribe(function (data) { return console.log(""); }, function (error) { return console.error(error); });
            }
            this.downsel = 1;
            this.upsel = 0;
            this['mix']['downvote']++;
            this.downObservableUp()
                .subscribe(function (data) { return console.log(""); }, function (error) { return console.error(error); });
        }
    };
    ShowMixDetailComponent.prototype.upObservableUp = function () {
        var body = "blank";
        return this.http.post('/mixes/' + this['mix']['id'] + '/like/1', body)
            .map(function (response) {
            var result = response.json();
            return result;
        })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    ShowMixDetailComponent.prototype.downObservableUp = function () {
        var body = "blank";
        return this.http.post('/mixes/' + this['mix']['id'] + '/dislike/1', body)
            .map(function (response) {
            var result = response.json();
            return result;
        })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    ShowMixDetailComponent.prototype.upObservableDown = function () {
        var body = "blank";
        return this.http.post('/mixes/' + this['mix']['id'] + '/like/-1', body)
            .map(function (response) {
            var result = response.json();
            return result;
        })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    ShowMixDetailComponent.prototype.downObservableDown = function () {
        var body = "blank";
        return this.http.post('/mixes/' + this['mix']['id'] + '/dislike/-1', body)
            .map(function (response) {
            var result = response.json();
            return result;
        })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    return ShowMixDetailComponent;
}());
ShowMixDetailComponent = __decorate([
    Component({
        selector: 'app-show-mix-detail',
        templateUrl: './show-mix-detail.component.html',
        styleUrls: ['./show-mix-detail.component.css']
    }),
    __metadata("design:paramtypes", [MixesService,
        ActivatedRoute,
        Location,
        Http])
], ShowMixDetailComponent);
export { ShowMixDetailComponent };
//# sourceMappingURL=show-mix-detail.component.js.map