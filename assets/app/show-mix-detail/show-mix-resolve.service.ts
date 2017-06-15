// hero-detail.resolve.service.ts

import { Injectable } from '@angular/core';
import {
    Router, Resolve,
    ActivatedRouteSnapshot
} from '@angular/router';
import { Mix } from '../mix';
import { MixesService } from '../mixes.service';

@Injectable()
export class ShowMixResolve implements Resolve {
    constructor(private mixesService: MixesService, private router: Router) { }
    
    resolve(route: ActivatedRouteSnapshot) {
        let id = route.params['id'];
        console.log( this.mixesService.getMix(id))
        return  this.mixesService.getMix(id)
    }
}