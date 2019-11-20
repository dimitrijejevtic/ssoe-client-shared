import { OnInit } from '@angular/core';
import { TranslationService } from '../../../services/translation.service';
export interface ErrorData {
    errors: [];
}
export declare class ErrorDialogComponent implements OnInit {
    data: ErrorData;
    translationService: TranslationService;
    constructor(data: ErrorData, translationService: TranslationService);
    ngOnInit(): void;
}
