import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpParams, HttpClient } from '@angular/common/http';
import { IQueryContract } from '../interfaces/IQueryContract';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  constructor(private apiService: ApiService, private http: HttpClient) { }

  public get(zone: string, route: string, contract: IQueryContract) {
    let params = new HttpParams();
    const vl = Object.entries<any>(contract);
    for (let i = 0; i < vl.length; i++) {
      const val = vl[i];
      params = params.append(val[0], val[1]);
    }
    return this.apiService.get(zone, route, params);
  }

  public getBlobDocument(zone: string, path: string) {
    return this.http.get(`${this.apiService.getApiUrl()}/${zone}/${path}`
      , { responseType: 'blob', observe: 'response' });
  }
}
