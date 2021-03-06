import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { MixesService } from '../mixes.service';
import 'rxjs/add/operator/switchMap';
import { Mix } from '../mix';
import { Http, Response, Headers } from "@angular/http";

import {Observable} from 'rxjs/Rx';


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
mix={};
breedLink={};


ngOnInit()  {
      const id = this.route.params['value'].id
      if(this.mixesService.serviceMixes.length > 1) {       //Check if mixes have been loaded on main page first
          
       this['mix'] = this.mixesService.getMix(id);
       this['breedLink']['breed1'] = encodeURI(this['mix']['breed1']);  //Encode breed names so they can be used as links
       this['breedLink']['breed2'] = encodeURI(this['mix']['breed2']);
       
      }
      else {
          this.mixesService.getMixAsync(id)
              .subscribe(
                (foundmix: Mix) => {
                this['mix'] = foundmix;
                this['breedLink']['breed1'] = encodeURI(this['mix']['breed1']);
                this['breedLink']['breed2'] = encodeURI(this['mix']['breed2']);
            }
            );
      }
    
  }
    


goBack() {
  this.location.back();
}

upVote() {
        if (this.upsel == 1 && this.downsel == 0) {
             this['mix']['upvote'] --;
             this.upsel = 0;
             this.voteObservable('/like/-1')
                .subscribe(
                    data => console.log(""),
                    error => console.error(error)
                );
             return null
        }
        if (this.upsel == 0 || this.downsel == 1) {
            if (this.downsel == 1) {
                this['mix']['downvote'] --;
                this.voteObservable('/dislike/-1')
                .subscribe(
                    data => console.log(""),
                    error => console.error(error)
                );
            }
             this.upsel = 1;
             this.downsel = 0;
             this['mix']['upvote'] ++;
             this.voteObservable('/like/1')
                .subscribe(
                    data => console.log(""),
                    error => console.error(error)
                );
        }
       
                
}

downVote() {
    if (this.downsel == 1 && this.upsel == 0) {
             this['mix']['downvote'] --;
             this.downsel = 0;
             this.voteObservable('/dislike/-1')
                .subscribe(
                    data =>  console.log(""),
                    error => console.error(error)
                );
             return null
        }
      if (this.downsel == 0 || this.upsel == 1) {
        if (this.upsel == 1) {
            this['mix']['upvote'] --;
            this.voteObservable('/like/-1')
                .subscribe(
                    data => console.log(""),
                    error => console.error(error)
                );
        }
        

        this.downsel = 1;
        this.upsel = 0;
        this['mix']['downvote'] ++;
        this.voteObservable('/dislike/1')
                .subscribe(
                    data => console.log(""),
                    error => console.error(error)
                );
      }     
}

// Observable for upvote/downvote functionality
        


voteObservable(action: string) {
        const body="blank";
        return this.http.post('/getMixes/'+this['mix']['id']+action, body)
            .map((response: Response) => {
                const result = response.json();
                return result;
            })
            .catch((error: Response) => Observable.throw(error.json()));
}



}
