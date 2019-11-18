import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ConfigService } from 'src/app/core/services/config.service';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private configService: ConfigService) { }

  private formatErrors(error: any) {
    console.error(error);
    return throwError(error.error);
  }
  get(zone: string, path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${this.getApiUrl()}/${zone}/${path}`
      , { params })
      .pipe(catchError(this.formatErrors));
  }

  put(zone: string, path: string, body: Object = {}): Observable<any> {
    return this.http.put(
      `${this.getApiUrl()}${zone}/${path}`,
      JSON.stringify(body)
    ).pipe(catchError(this.formatErrors));
  }

  post(zone: string, path: string, id?: string, body: Object = {}, withCredentials = false): Observable<any> {
    if (id !== undefined)
      id = '/' + id;
    else id = '';

    let withCr;
    if (withCredentials === true)
      withCr = { withCredentials: true };

    return this.http.post(
      `${this.getApiUrl()}/${zone}/${path}${id}`,
      JSON.stringify(body), withCr
    ).pipe(catchError(this.formatErrors));
  }

  postFile(zone: string, path: string, id?: string, body: Object = {}, withCredentials = false, reportProgress?: boolean): Observable<any> {
    if (id !== undefined)
      id = '/' + id;
    else id = '';

    let withCr;
    if (withCredentials === true)
      withCr = { withCredentials: true };

    if (reportProgress === undefined)
      reportProgress == false;

    return this.http.post(
      `${this.getApiUrl()}/${zone}/${path}${id}`,
      body, { withCredentials : withCr, reportProgress: reportProgress, observe: 'events' }
    ).pipe(catchError(this.formatErrors));
  }

  delete(zone: string, path: string): Observable<any> {
    return this.http.delete(
      `${this.getApiUrl()}/${zone}/${path}`
    ).pipe(catchError(this.formatErrors));
  }

  uploadFile(zone: string, path: string, file: File, typeName?: string, parentObjectId?: number) {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    return this.http.post(`${this.configService.getConfig().apiUrl}/${zone}/${path}/${typeName}/${parentObjectId}`, formData);
  }

  public getApiUrl() {
    return this.configService.getConfig().apiUrl;
  }
}
