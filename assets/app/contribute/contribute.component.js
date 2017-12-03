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
import { Mix } from '../mix';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MixesService } from '../mixes.service';
import { Router } from '@angular/router';
var ContributeComponent = (function () {
    function ContributeComponent(mixesService, router) {
        this.mixesService = mixesService;
        this.router = router;
        this.breedchoices = [];
        this.breederror = 0;
        this.successmessage = 0;
    }
    ContributeComponent.prototype.onSubmit = function () {
        // Variable to check if duplicate mix is submitted
        var _this = this;
        this.breederror = 0;
        var nullcheck = 0;
        var submittedMix = this.submitMix.value;
        this.mixesService.serviceMixes.forEach(function (mix) {
            var combo1 = mix.breed1.toString() + mix.breed2.toString();
            var formcombo1 = submittedMix.breed1.toString() + submittedMix.breed2.toString();
            var formcombo2 = submittedMix.breed2.toString() + submittedMix.breed1.toString();
            if (formcombo1 == combo1 || formcombo2 == combo1) {
                // Set duplicate mix error
                nullcheck = 1;
            }
        });
        if (nullcheck == 1) {
            this.breederror = 1;
            return null;
        }
        //Otherwise, display success message
        this.successmessage = 1;
        var newMix = new Mix(" ", submittedMix.mixName, submittedMix.mixURL, submittedMix.breed1, submittedMix.breed2, "all", 0, 0, submittedMix.imageURL);
        // Get mixes from server again
        this.mixesService.isLoaded = false;
        this.mixesService.addMix(newMix).subscribe(function (mix) {
            //Redirect to mixes page
            _this.router.navigate(['/mixes']);
        });
    };
    ContributeComponent.prototype.ngOnInit = function () {
        // Initiialize array of breeds to choose from
        for (var name in this.mixesService.serviceBreeds) {
            this.breedchoices.push(name);
        }
        this.submitMix = new FormGroup({
            'mixName': new FormControl(null, Validators.required),
            'mixURL': new FormControl(null, Validators.required),
            'breed1': new FormControl(null, Validators.required),
            'breed2': new FormControl(null, Validators.required),
            'imageURL': new FormControl(null, Validators.required)
        });
    };
    return ContributeComponent;
}());
ContributeComponent = __decorate([
    Component({
        selector: 'app-contribute',
        templateUrl: './contribute.component.html',
        styleUrls: ['./contribute.component.css']
    }),
    __metadata("design:paramtypes", [MixesService, Router])
], ContributeComponent);
export { ContributeComponent };
//# sourceMappingURL=contribute.component.js.map