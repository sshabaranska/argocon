import { environment } from '../environments/environment';
import { IAppConfig } from './models/app-config.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppConfig {

  settings: IAppConfig;

  constructor(private http: HttpClient,
              private appService: AppService) {}

  loadConfig() {
    const jsonFile = `src/config/config.${environment.name}.json`;

    /*this.settings = this.store.select(fromStore.getSettings(jsonFile))
      .pipe(() => {
        this.isConnected = this.store.select(fromStore.getSettings(jsonFile)
      });*/


    this.http.get<IAppConfig>(jsonFile)
      .subscribe((value: IAppConfig) => {
        this.appService.init();
        // AppConfig.settings = value;

      }, (err) => {
        console.log(`Could not load file '${jsonFile}': ${JSON.stringify(err)}`);
      });
  }
}
