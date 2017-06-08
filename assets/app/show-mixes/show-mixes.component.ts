import { Component, OnInit } from '@angular/core';
import { MixesService } from '../mixes.service';
import { Mix} from '../mix';
import {FilterPipe} from './pipes'

@Component({
  selector: 'app-show-mixes',
  templateUrl: './show-mixes.component.html',
  styleUrls: ['./show-mixes.component.css'],
  providers: [MixesService]
})
export class ShowMixesComponent implements OnInit {


     mixes: Mix[]
    activeBreed = "all";
    
    breeds=["Husky", "German Shepard", "Pitbull", "Pug", "Corgi", "Dalmation"]
    
    constructor(private mixesService: MixesService) {}

    // getMixes(): void {
    //     this.mixesService.getMixes().then(mixes => this.mixes = mixes);
    //   }
    
    ngOnInit() {
        this.mixesService.getMixes()
        .subscribe(
            (mixes: Mix[]) => {
                this.mixes = mixes;
               // console.log(this.mixes)
            }
        );
    }
    
    
    
    onClickMe(breed: string) {
        this.activeBreed=breed
        console.log(this.activeBreed)
        
    }
    

}

