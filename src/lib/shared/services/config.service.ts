import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IConfigServiceConfig } from '../interfaces/IConfigServiceConfig';
import { Configuration } from '../poco/configuration';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private configurations;
  constructor(private http: HttpClient) { }

  delayInit(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 10);
    });
  }
  getConfiguration(config: IConfigServiceConfig) {
    return this.http.get(`${config.apiUrl}/${config.getConfigEndpoint}`).toPromise()
      .then((response: Response) => {
        this.configurations = response;
        // environment.configuration = this.configurations;
        return this.configurations;
       }
      // ).then((_) => {
      //   return this.http.get(`${environment.configuration.apiUrl}/common/getTranslations`).toPromise().then((resp: any) => {
      //     const keyarray = [];
      //     for (let index = 0; index < resp.value.length; index++) {
      //       const el = resp.value[index];
      //       if (localTranslations.findIndex(x => x.key === el.key) < 0)
      //         localTranslations.push({ key: el.key, value: el.value });
      //     }
      //   });
      //   }
      ).catch(err => {
        // if (environment.production)
        //   return Promise.reject(err);
        // else {
        //   this.configurations = environment.configuration;
        //   return Promise.resolve(environment.configuration);
        // }
      });
  }

  public getConfig(): Configuration {
    return this.configurations;
  }
}
