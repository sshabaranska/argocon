import * as fromApp from '../actions/app.actions';
import { IAppConfig } from '../../models/app-config.model';

export interface ConfigState {
  configs: IAppConfig;
  loaded: boolean;
  loading: boolean;
}

export const initialState: ConfigState = {
  configs: {
    env: '',
    wssURL: '',
    restURL: '',
    destinations: []
  },
  loaded: false,
  loading: false,
};

export function reducer(
  state = initialState,
  action: fromApp.AppAction
): ConfigState {
  switch (action.type) {
    case fromApp.LOAD_CONFIG: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromApp.LOAD_CONFIG_SUCCESS: {
      const configs = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        configs,
      };
    }

    case fromApp.LOAD_CONFIG_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }
  }

  return state;
}

export const getConfig = (state: ConfigState) => state.configs;
export const getConfigLoading = (state: ConfigState) => state.loading;
export const getConfigLoaded = (state: ConfigState) => state.loaded;

