import { OnInit, EventEmitter } from '@angular/core';
import { ClassificationService } from '../../services/classification-service.service';
import { FormControl, NgForm } from '@angular/forms';
import { ErrorMessagesService } from '../../services/error-messages.service';
import { CurrencyAmount } from '../../POCO/currencyAmount';
export declare class CurrencyAmountComponent implements OnInit {
    private classificationService;
    private errorMessageService;
    private formObject;
    currencyAmount: CurrencyAmount;
    isReadOnly: boolean;
    placeholder: string;
    propertyName: string;
    showCurrency: boolean;
    ngFormObject: NgForm;
    currencyAmountChange: EventEmitter<CurrencyAmount>;
    currencies: any[];
    form: NgForm;
    ngControlAmount: FormControl;
    ngControlCurrency: FormControl;
    constructor(classificationService: ClassificationService, errorMessageService: ErrorMessagesService, formObject: NgForm);
    ngOnInit(): void;
    getCurrency(): void;
}
