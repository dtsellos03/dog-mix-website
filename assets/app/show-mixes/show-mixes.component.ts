import { Component, OnInit } from '@angular/core';
import { MixesService } from '../mixes.service';
import { Mix} from '../mix';
import {FilterPipe} from './pipes'

@Component({
  selector: 'app-show-mixes',
  templateUrl: './show-mixes.component.html',
  styleUrls: ['./show-mixes.component.css'],
  providers: []
    // make fade in animation available to this component

})
export class ShowMixesComponent implements OnInit {


     mixes: Mix[]
    activeBreed = "all";
    
    breeds=["Husky", "German Shepard", "Pitbull", "Pug", "Corgi", "Dalmation",
  "Maltese","Labrador Retriever","Corgi","Labrador","German Shepherd","Greyhound","Pit Bull","Alaskan Malamute","Perkingese","Pug","Papillon","Jack Russell Terrier","Shiba Inu","French Bulldog","Dachshund","Yorkshire Terrier","Australian Shepherd","Basset Hound","Boxer","Shih Tzu","Boston Terrier","Pitbull","Chihuahua","Pomeranian","Chow Chow","Beagle","Akita","Golden Retriever","Siberian Husky"
]
    
    constructor(private mixesService: MixesService) {}

    // getMixes(): void {
    //     this.mixesService.getMixes().then(mixes => this.mixes = mixes);
    //   }
    
    ngOnInit() {
        console.log("From mixessercie" + this.mixesService.isLoaded)
        // if (this.mixesService.isLoaded == true) {
        //     this.mixes = this.mixesService.serviceMixes;
        // }
        if (false) {
            this.mixes = this.mixesService.serviceMixes;
        }
        else {
            this.mixesService.getMixes()
            .subscribe(
                (mixes: Mix[]) => {
                this.mixes = mixes;
              // console.log(this.mixes)
            }
            );
            this.mixesService.doStuff();
        }

    }
    
    
    
    onClickMe(breed: string) {
        this.queryString=breed
        console.log(this.activeBreed)
        
    }
    

}

