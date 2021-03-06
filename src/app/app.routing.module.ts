import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const ROUTES: Routes = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule',
    data: { preload: true }
  },
  {
    path: 'signin',
    loadChildren: './signin/signin.module#SigninModule',
    data: { preload: true }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
