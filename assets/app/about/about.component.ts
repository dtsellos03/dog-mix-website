import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';
@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() { console.log('now: ', _.now());
  }

}
