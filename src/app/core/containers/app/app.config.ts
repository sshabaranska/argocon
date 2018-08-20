import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
//import { Observable } from 'rxjs';

import * as fromRootStore from '../../store';
import { environment } from '../../../../environments/environment';
//import { IAppConfig} from '../../models/app-config.model';

@Injectable()
export class AppConfig {
  //config$: Observable<IAppConfig>;

  constructor(private store: Store<fromRootStore.AppState>) {}

  load() {
    const jsonFile = `src/config/config.${environment.name}.json`;

    this.store.dispatch(new fromRootStore.LoadConfig(jsonFile));

    //this.config$ = this.store.select(fromRootStore.getConfig);
    //console.log(this.config$);
    // this.store.dispatch(new fromRootStore.init());
  }
}
