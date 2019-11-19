import { ApiService } from './api.service';
import { Subject } from 'rxjs';
export declare class TranslationKeyContract {
    key: string;
    value: string;
}
export declare class TranslationService {
    private apiService;
    private translations;
    cultureCode: number;
    private _cultureCode;
    cultureChange: Subject<any>;
    constructor(apiService: ApiService);
    setCultureCode(code: number): void;
    getCultureCode(): number;
    getTranslations(cultureCode?: any): import("rxjs").Observable<any>;
    setTranslations(trans: TranslationKeyContract[]): void;
    getForKey(key: string): string;
    getForKeyByObject(key: string): string;
    loadStorage(): void;
}
