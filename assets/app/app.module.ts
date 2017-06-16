import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { ShowMixesComponent } from './show-mixes/show-mixes.component';
import { ShowMixDetailComponent } from './show-mix-detail/show-mix-detail.component';
import { AboutComponent} from './about/about.component';
import { ContributeComponent } from './contribute.component';
import { HallOfFameComponent } from './hall-of-fame/hall-of-fame.component'
import { AppRoutingModule } from './app-routing.module';
import { ShowMixResolve} from './show-mix-detail/show-mix-resolve.service';
import {FilterPipe} from './show-mixes/pipes';
import {MixesService} from './mixes.service';
import { NgSemanticModule } from 'ng-semantic/ng-semantic';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    ShowMixesComponent,
    ShowMixDetailComponent,
    ContributeComponent,
    AboutComponent,
    HallOfFameComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule, 
    NgSemanticModule
  ],
  providers: [MixesService, ShowMixResolve],
  bootstrap: [AppComponent]
})
export class AppModule { }