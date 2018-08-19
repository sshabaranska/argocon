import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { HomeService } from '../../services/home.service';

@Injectable()
export class HomeResolve implements Resolve<boolean> {
  constructor(private homeService: HomeService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
     return this.homeService.isConnected();
  }
}
