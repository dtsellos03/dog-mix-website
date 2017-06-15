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

breeds = {
    "Pug": "https://s-media-cache-ak0.pinimg.com/736x/0f/81/37/0f813753c90ec0cdf634b39fccfae1b6.jpg"
}


ngOnInit(): void {
       
        this.route.data
      .subscribe((data: { mix: Mix }) => {
         console.log(data)
        this.mix = data.mix;
      });
  }
    
    
    
//   this.route.params
//     .switchMap((params: Params) => this.mixesService.getMix(params['id']))
//     .subscribe(mix => this.mix = mix);
// }

goBack(): void {
  this.location.back();
}

upVote(): void {
        if (this.upsel == 1 && this.downsel == 0) {
             this.mix.upvote --;
             this.upsel = 0;
             this.upObservableDown()
                .subscribe(
                    data => console.log(data),
                    error => console.error(error)
                );
             return null
        }
        if (this.upsel == 0 || this.downsel == 1) {
            if (this.downsel == 1) {
                this.mix.downvote --;
                this.downObservableDown()
                .subscribe(
                    data => console.log(data),
                    error => console.error(error)
                );
            }
             this.upsel = 1;
             this.downsel = 0;
             this.mix.upvote ++;
             this.upObservableUp()
                .subscribe(
                    data => console.log(data),
                    error => console.error(error)
                );
        }
       
                
}

downVote(): void {
    if (this.downsel == 1 && this.upsel == 0) {
             this.mix.downvote --;
             this.downsel = 0;
             this.downObservableDown()
                .subscribe(
                    data => console.log(data),
                    error => console.error(error)
                );
             return null
        }
      if (this.downsel == 0 || this.upsel == 1) {
        if (this.upsel == 1) {
            this.mix.upvote --;
            this.upObservableDown()
                .subscribe(
                    data => console.log(data),
                    error => console.error(error)
                );
        }
        
        console.log("REACHED THIS ROUTE")
        this.downsel = 1;
        this.upsel = 0;
        this.mix.downvote ++;
        this.downObservableUp()
                .subscribe(
                    data => console.log(data),
                    error => console.error(error)
                );
      }     
}
        
upObservableUp(): void {
        const body="blank";
        return this.http.post('/mixes/'+this.mix.id+'/like/1', body)
            .map((response: Response) => {
                const result = response.json();
                return result;
            })
            .catch((error: Response) => Observable.throw(error.json()));
}


        
downObservableUp(): void {
        const body="blank";
        return this.http.post('/mixes/'+this.mix.id+'/dislike/1', body)
            .map((response: Response) => {
                const result = response.json();
                return result;
            })
            .catch((error: Response) => Observable.throw(error.json()));
}

upObservableDown(): void {
        const body="blank";
        return this.http.post('/mixes/'+this.mix.id+'/like/-1', body)
            .map((response: Response) => {
                const result = response.json();
                return result;
            })
            .catch((error: Response) => Observable.throw(error.json()));
}


        
downObservableDown(): void {
        const body="blank";
        return this.http.post('/mixes/'+this.mix.id+'/dislike/-1', body)
            .map((response: Response) => {
                const result = response.json();
                return result;
            })
            .catch((error: Response) => Observable.throw(error.json()));
}

}
