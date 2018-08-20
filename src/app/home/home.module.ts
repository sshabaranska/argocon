import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as fromContainers from './containers';
import { HomeRoutingModule } from './home.routing.module';
import { SharedModule } from '../core/shared/shared.module';

import { HomeService } from './services/home.service';

@NgModule({
  declarations: [...fromContainers.containers],
  imports: [
    HomeRoutingModule,
    CommonModule,
    SharedModule
  ],
  providers: [
    HomeService
  ]
})
export class HomeModule { }
