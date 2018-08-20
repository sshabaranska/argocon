import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppConfig } from './core/containers/app/app.config';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects, metaReducers } from './core/store';
import * as fromRootServices from './core/services';

import { AppComponent } from './core/containers/app/app.component';
import { AppRoutingModule } from './app.routing.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './core/shared/shared.module';

export function initializeApp(appConfig: AppConfig) {
  return () => appConfig.load();
}

const environment = {
  development: true,
  production: false,
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot(effects),
    AppRoutingModule,
    HomeModule,
    SharedModule,
    environment.development ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [
    ...fromRootServices.services,
    AppConfig,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [AppConfig], multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
