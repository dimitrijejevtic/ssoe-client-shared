import { ApiService } from './api.service';
import { Observable } from 'rxjs';
export declare class ClassificationService {
    private apiService;
    private classificationCache;
    private classificationValueCache;
    constructor(apiService: ApiService);
    getClassificationValues(classificationName: string, classificationModel?: string, volatile?: boolean): Observable<any>;
    getGroupedClassificationValues(classificationName: string, classificationModel?: string, volatile?: boolean): Observable<any>;
    getClassificationValue(valueId: string): Observable<any>;
}
