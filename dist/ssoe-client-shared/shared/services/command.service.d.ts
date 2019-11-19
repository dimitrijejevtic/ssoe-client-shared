import { ApiService } from './api.service';
import { ICommandContract } from '../interfaces/ICommandContract';
import { TranslationService } from './translation.service';
export declare class CommandService {
    private apiService;
    private translateService;
    constructor(apiService: ApiService, translateService: TranslationService);
    private locationCache;
    post(zone: string, route: string, contract: ICommandContract): import("rxjs").Observable<any>;
}
