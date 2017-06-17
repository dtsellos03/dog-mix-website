import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ShowMixesComponent } from './show-mixes/show-mixes.component';
import { ShowMixDetailComponent } from './show-mix-detail/show-mix-detail.component';
import { HallOfFameComponent } from './hall-of-fame/hall-of-fame.component';
import { AboutComponent} from './about/about.component';
import { ShowMixResolve } from './show-mix-detail/show-mix-resolve.service.ts';
import { ContributeComponent } from './contribute.component';


const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about',  component: AboutComponent },
  { path: 'contribute', component: ContributeComponent },
  { path: 'mixes/:id', component: ShowMixDetailComponent },
  { path: 'mixes',     component: ShowMixesComponent },
  { path: 'halloffame', component: HallOfFameComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [ShowMixResolve]
})
export class AppRoutingModule {}
