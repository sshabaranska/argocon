import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { IAppConfig } from '../models/app-config.model';

@Injectable()
export class AppService {
  constructor(private http: HttpClient) {}

  getConfig(filePath): Observable<IAppConfig> {
    return this.http
      .get<IAppConfig>(filePath)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
