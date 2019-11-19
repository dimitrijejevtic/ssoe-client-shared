import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { ISearchParams } from '../interfaces/ISearchParams';
export declare class SearchService {
    private apiService;
    constructor(apiService: ApiService);
    search(searchParams: ISearchParams): Observable<any>;
}
