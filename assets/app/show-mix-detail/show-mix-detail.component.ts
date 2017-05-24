import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { MixesService } from '../mixes.service';
import 'rxjs/add/operator/switchMap';
import { Mix } from '../mix';



@Component({
  selector: 'app-show-mix-detail',
  templateUrl: './show-mix-detail.component.html',
  styleUrls: ['./show-mix-detail.component.css']
})
export class ShowMixDetailComponent implements OnInit {

  constructor(
    private mixesService: MixesService,
   private route: ActivatedRoute,
   private location: Location
) {}

ngOnInit(): void {
  this.route.params
    .switchMap((params: Params) => this.mixesService.getMix(params['id']))
    .subscribe(mix => this.mix = mix);
}

goBack(): void {
  this.location.back();
}

}
