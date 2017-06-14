import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { ShowMixesComponent } from './show-mixes/show-mixes.component';
import { ShowMixDetailComponent } from './show-mix-detail/show-mix-detail.component';
import { AboutComponent} from './about/about.component';
import { ContributeComponent } from './show-mix-detail/contribute.component';
import { HallOfFameComponent } from './hall-of-fame/hall-of-fame.component.ts'
import { AppRoutingModule } from './app-routing.module';
import {FilterPipe} from './show-mixes/pipes';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    ShowMixesComponent,
    ShowMixDetailComponent,
    ContributeComponent,
    AboutComponent,
    HallOfFameComponent
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }