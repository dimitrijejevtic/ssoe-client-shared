import { OnInit, EventEmitter } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { ClassificationService } from '../../services/classification-service.service';
import { TranslationService } from '../../services/translation.service';
import { ErrorMessagesService } from '../../services/error-messages.service';
export declare class ClassificationGroupInputComponent implements OnInit {
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
    ngFormObject: NgForm;
    hasErrors: boolean;
    groups: {
        options: any[];
        description: string;
        id: number;
    }[];
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
