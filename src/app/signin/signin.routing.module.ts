import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromContainers from './containers';

const signinRoutes: Routes = [
    { path: '', component: fromContainers.SigninComponent }
];

@NgModule({
    imports: [RouterModule.forChild(signinRoutes)],
    exports: [RouterModule]
})
export class SigninRoutingModule {}
