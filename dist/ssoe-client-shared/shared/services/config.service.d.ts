import { HttpClient } from '@angular/common/http';
import { IConfigServiceConfig } from '../interfaces/IConfigServiceConfig';
import { Configuration } from '../poco/configuration';
export declare class ConfigService {
    private http;
    private configurations;
    constructor(http: HttpClient);
    delayInit(): Promise<any>;
    getConfiguration(config: IConfigServiceConfig): Promise<any>;
    getConfig(): Configuration;
}
