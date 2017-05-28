import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { MixesService } from '../mixes.service';
import 'rxjs/add/operator/switchMap';
import { Mix } from '../mix';
import { Http, Response, Headers } from "@angular/http";



@Component({
  selector: 'app-show-mix-detail',
  templateUrl: './show-mix-detail.component.html',
  styleUrls: ['./show-mix-detail.component.css']
})
export class ShowMixDetailComponent implements OnInit {

  constructor(
    private mixesService: MixesService,
   private route: ActivatedRoute,
   private location: Location,
   private http: Http
) {}



ngOnInit(): void {
  this.route.params
    .switchMap((params: Params) => this.mixesService.getMix(params['id']))
    .subscribe(mix => this.mix = mix);
}

goBack(): void {
  this.location.back();
}

upVote(): void {
        this.postObservable()
                .subscribe(
                    data => console.log(data),
                    error => console.error(error)
                );
                
}
        
postObservable(): void {
        const body="blank";
        return this.http.post('/mixes/59276d3eed864c18a8d9aa79/like', body)
            .map((response: Response) => {
                const result = response.json();
                return result;
            })
            .catch((error: Response) => Observable.throw(error.json()));
}

}
