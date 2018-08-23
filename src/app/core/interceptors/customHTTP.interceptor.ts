import { Injectable } from '@angular/core';
import {HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IAppConfig } from '../models/appConfig.model';
import * as fromRootStore from '../../core/store';

@Injectable()
export class CustomHTTPInterceptor implements HttpInterceptor {
  private EQUAL = '=';
  private AMP = '&';

  config: IAppConfig;

  constructor(private store: Store<fromRootStore.AppState>) {
    this.store.select(state => this.config = state.config.configs);
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const url = this.config + request.url;
    const body = Object.keys(request.body)
      .map(key => Array.isArray(body[key])
        ? body[key].map(value => key + this.EQUAL + encodeURIComponent(value)).join(this.AMP)
        : key + this.EQUAL + encodeURIComponent(body[key])
      ).join(this.AMP);

    request = request.clone({
      body: body,
      url: url,
      setHeaders: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      responseType: 'text'
    });

    return next.handle(request);
  }
}
