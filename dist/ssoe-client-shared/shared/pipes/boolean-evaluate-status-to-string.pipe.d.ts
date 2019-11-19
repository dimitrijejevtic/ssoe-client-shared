import { PipeTransform } from '@angular/core';
import { TranslationService } from '../services/translation.service';
export declare class BooleanEvaluateStatusToStringPipe implements PipeTransform {
    private translationService;
    constructor(translationService: TranslationService);
    transform(value: boolean, args?: any): any;
}
