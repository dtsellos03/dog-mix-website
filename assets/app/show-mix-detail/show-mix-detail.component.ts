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

upsel = 0;
downsel = 0;

ngOnInit(): void {
  this.route.params
    .switchMap((params: Params) => this.mixesService.getMix(params['id']))
    .subscribe(mix => this.mix = mix);
}

goBack(): void {
  this.location.back();
}

upVote(): void {
        if (this.upsel == 0 || this.downsel == 1) {
            if (this.downsel == 1) {
                this.mix.downvote --;
            }
             this.upsel = 1;
             this.downsel = 0;
             this.mix.upvote ++;
             this.upObservable()
                .subscribe(
                    data => console.log(data),
                    error => console.error(error)
                );
        }
       
                
}
        
upObservable(): void {
        const body="blank";
        return this.http.post('/mixes/'+this.mix.id+'/like', body)
            .map((response: Response) => {
                const result = response.json();
                return result;
            })
            .catch((error: Response) => Observable.throw(error.json()));
}

downVote(): void {
    if (this.downsel == 1 && this.upsel == 0) {
             this.mix.downvote --;
             this.downsel = 0;
             console.log("REACHED NULL ROUTE")
             return null
        }
      if (this.downsel == 0 || this.upsel == 1) {
        if (this.upsel == 1) {
            this.mix.upvote --;
        }
        
        console.log("REACHED THIS ROUTE")
        this.downsel = 1;
        this.upsel = 0;
        this.mix.downvote ++;
        this.downObservable()
                .subscribe(
                    data => console.log(data),
                    error => console.error(error)
                );
      }     
}
        
downObservable(): void {
        const body="blank";
        return this.http.post('/mixes/'+this.mix.id+'/dislike', body)
            .map((response: Response) => {
                const result = response.json();
                return result;
            })
            .catch((error: Response) => Observable.throw(error.json()));
}

}
