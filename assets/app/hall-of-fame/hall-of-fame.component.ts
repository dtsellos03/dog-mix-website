import { Component, OnInit } from '@angular/core';
import { MixesService } from '../mixes.service';
import { Mix} from '../mix';


@Component({
  selector: 'app-hall-fame',
  templateUrl: './hall-of-fame.component.html',
  styleUrls: ['./hall-of-fame.component.css'],
  providers: [MixesService]
})
export class HallOfFameComponent implements OnInit {


     topMixes: Mix[];
     botMixes: Mix[];

    
    constructor(private mixesService: MixesService) {}

    // getMixes(): void {
    //     this.mixesService.getMixes().then(mixes => this.mixes = mixes);
    //   }
    
    ngOnInit() {
        this.mixesService.getTopMixes()
        .subscribe(
            (returnobj) => {
                this.topMixes = returnobj.topmixes;
                this.botMixes = returnobj.botmixes;
            }
        );
    }
    
    

}

