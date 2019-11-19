import { OnInit } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
export declare class GeneralErrorPageComponent implements OnInit {
    translationService: TranslationService;
    constructor(translationService: TranslationService);
    ngOnInit(): void;
}
