import { OnInit, EventEmitter } from '@angular/core';
import { ClassificationService } from '../../services/classification-service.service';
import { TranslationService } from '../../services/translation.service';
import { FormControl, NgForm } from '@angular/forms';
import { ErrorMessagesService } from '../../services/error-messages.service';
import { Subject } from 'rxjs';
export declare class ClassificationInputComponent implements OnInit {
    private classificationService;
    translationService: TranslationService;
    private errorMessageService;
    private formObject;
    classificationValueId: number;
    classificationName: string;
    classificationModel: string;
    placeholder: string;
    isVolatile: boolean;
    propertyName: string;
    selectedValue: string;
    disabled: boolean;
    resetToDefault: Subject<any>;
    ngFormObject: NgForm;
    hasErrors: boolean;
    options: any[];
    defaultValue: any;
    helperValue: any;
    ngControl: FormControl;
    form: NgForm;
    classificationValueIdChange: EventEmitter<any>;
    objectClassificationValueChange: EventEmitter<any>;
    constructor(classificationService: ClassificationService, translationService: TranslationService, errorMessageService: ErrorMessagesService, formObject: NgForm);
    ngOnInit(): void;
    change(event: any): void;
}
