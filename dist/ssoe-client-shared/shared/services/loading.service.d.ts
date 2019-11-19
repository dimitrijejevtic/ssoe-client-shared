import { Subject } from 'rxjs';
export declare class LoadingService {
    loadingSubject: Subject<boolean>;
    moduleLoadingSubject: Subject<boolean>;
    constructor();
    loader(loading: any): void;
    moduleLoading(loading: any): void;
}
