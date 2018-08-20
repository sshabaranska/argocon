import { ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store';

import { environment } from '../../../../environments/environment';

import * as fromApp from './app.reducers';

export interface AppState {
  config: fromApp.ConfigState;
}

export const reducers: ActionReducerMap<AppState> = {
  config: fromApp.reducer
};

export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return function(state: AppState, action: any): AppState {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [logger]
  : [];
