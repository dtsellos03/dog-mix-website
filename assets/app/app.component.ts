import { Component, OnInit } from '@angular/core';
import { MixesService } from './mixes.service';
import { Mix} from './mix';



@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [MixesService]
})
export class AppComponent implements OnInit {
    

    
}