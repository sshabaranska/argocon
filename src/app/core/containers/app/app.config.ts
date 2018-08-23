import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRootStore from '../../store';
import { environment } from '../../../../environments/environment';

@Injectable()
export class AppConfig {

  constructor(private store: Store<fromRootStore.AppState>) {}

  load() {
    const jsonFile = `src/config/config.${environment.name}.json`;

    this.store.dispatch(new fromRootStore.LoadConfig(jsonFile));

    // this.store.dispatch(new fromRootStore.init());
  }
}
