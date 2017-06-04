import { Component, OnInit } from '@angular/core';
import { MixesService } from '../mixes.service';
import { Mix} from '../mix';

@Component({
  selector: 'app-show-mixes',
  templateUrl: './show-mixes.component.html',
  styleUrls: ['./show-mixes.component.css'],
  providers: [MixesService]
})
export class ShowMixesComponent implements OnInit {


     mixes: Mix[]
    activeBreed = "";
    
    breeds=["Doggie", "German Shepard", "Samoyed", "Pug"]
    
    constructor(private mixesService: MixesService) {}

    // getMixes(): void {
    //     this.mixesService.getMixes().then(mixes => this.mixes = mixes);
    //   }
    
    ngOnInit() {
        this.mixesService.getMixes()
        .subscribe(
            (mixes: Mix[]) => {
                this.mixes = mixes;
                console.log(this.mixes)
            }
        );
    }
    
    
    
    onClickMe(breed: string) {
        console.log(breed)
        this.activeBreed=breed
        
    }
    

}

