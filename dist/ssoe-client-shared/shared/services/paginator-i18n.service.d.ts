import { MatPaginatorIntl } from '@angular/material';
import { TranslationService } from './translation.service';
export declare class PaginatorI18nService extends MatPaginatorIntl {
    private translationService;
    itemsPerPageLabel: string;
    nextPageLabel: string;
    previousPageLabel: string;
    firstPageLabel: string;
    lastPageLabel: string;
    ofLabel: string;
    zeroOfLabel: string;
    constructor(translationService: TranslationService);
    getRangeLabel: (page: number, pageSize: number, length: number) => string;
}
