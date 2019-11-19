import { PipeTransform } from '@angular/core';
import { TranslationService } from '../services/translation.service';
export declare class TranslatePipe implements PipeTransform {
    private translationService;
    constructor(translationService: TranslationService);
    transform(value: any, args?: any, byObject?: any): any;
}
