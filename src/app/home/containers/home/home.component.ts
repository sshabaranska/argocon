import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromRootStore from '../../../core/store';
import { IAppConfig} from '../../models/app-config.model';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  config$: Observable<IAppConfig>;

  constructor(private store: Store<fromRootStore.AppState>) {
    console.log('in home');
  }

  ngOnInit() {
    this.config$ = this.store.select(state => state.config.configs);
    console.log(this.config$);
  }
}
