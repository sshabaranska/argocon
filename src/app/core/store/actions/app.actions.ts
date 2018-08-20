import { Action } from '@ngrx/store';

import { IAppConfig } from '../../models/app-config.model';

// load config
export const LOAD_CONFIG = '[App] Load Config';
export const LOAD_CONFIG_FAIL = '[App] Load Config Fail';
export const LOAD_CONFIG_SUCCESS = '[App] Load Config Success';

export class LoadConfig implements Action {
  readonly type = LOAD_CONFIG;
  constructor(public payload: string) {}
}

export class LoadConfigFail implements Action {
  readonly type = LOAD_CONFIG_FAIL;
  constructor(public payload: any) {}
}

export class LoadConfigSuccess implements Action {
  readonly type = LOAD_CONFIG_SUCCESS;
  constructor(public payload: IAppConfig) {}
}

// action types
export type AppAction =
  | LoadConfig
  | LoadConfigFail
  | LoadConfigSuccess;
