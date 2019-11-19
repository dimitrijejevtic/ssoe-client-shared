import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';
export declare class ApiService {
    private http;
    private configService;
    constructor(http: HttpClient, configService: ConfigService);
    private formatErrors;
    get(zone: string, path: string, params?: HttpParams): Observable<any>;
    put(zone: string, path: string, body?: Object): Observable<any>;
    post(zone: string, path: string, id?: string, body?: Object, withCredentials?: boolean): Observable<any>;
    postFile(zone: string, path: string, id?: string, body?: Object, withCredentials?: boolean, reportProgress?: boolean): Observable<any>;
    delete(zone: string, path: string): Observable<any>;
    uploadFile(zone: string, path: string, file: File, typeName?: string, parentObjectId?: number): Observable<Object>;
    getApiUrl(): string;
}
