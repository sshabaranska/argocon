import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as appActions from '../actions/app.actions';
import * as fromServices from '../../services';


@Injectable()
export class AppEffects {
  constructor(
    private actions$: Actions,
    private appService: fromServices.AppService
  ) {}

  @Effect()
  loadConfig$ = this.actions$.ofType(appActions.LOAD_CONFIG).pipe(
    map((action: appActions.LoadConfig) => action.payload),
    switchMap((filePath) => {
      return this.appService.getConfig(filePath)
        .pipe(
          map(config => new appActions.LoadConfigSuccess(config)),
          catchError(error => of(new appActions.LoadConfigFail(error)))
        );
    })
  );
}
