import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { IQueryContract } from '../interfaces/IQueryContract';
export declare class QueryService {
    private apiService;
    private http;
    constructor(apiService: ApiService, http: HttpClient);
    get(zone: string, route: string, contract: IQueryContract): import("rxjs").Observable<any>;
    getBlobDocument(zone: string, path: string): import("rxjs").Observable<import("@angular/common/http").HttpResponse<Blob>>;
}
