import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as fromContainers from './containers';

import { SigninRoutingModule } from './signin.routing.module';

@NgModule({
  declarations: [
    fromContainers.SigninComponent
  ],
  imports: [
    CommonModule,
    SigninRoutingModule,
  ]
})
export class SigninModule { }
