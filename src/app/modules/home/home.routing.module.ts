import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromContainers from './containers';
import { HomeResolve } from './containers/home/home.resolve';

const ROUTES: Routes = [
   { path: '',
     component: fromContainers.HomeComponent,
     resolve: {
       isConnected: HomeResolve
     }
   }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
