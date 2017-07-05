import { Component, OnInit } from '@angular/core';
import { MixesService } from './mixes.service';




@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [MixesService]
})
export class AppComponent implements OnInit {
    
      ngOnInit() {

        }
    
    
}