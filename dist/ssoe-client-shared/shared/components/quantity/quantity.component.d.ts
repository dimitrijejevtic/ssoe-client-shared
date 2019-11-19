import { OnInit, EventEmitter } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { NgForm, FormControl } from '@angular/forms';
import { Quantity } from '../../POCO/Quantity';
export declare class QuantityComponent implements OnInit {
    translationService: TranslationService;
    private form;
    quantity: Quantity;
    isReadOnly: boolean;
    placeholder: string;
    propertyName: string;
    ngControlAmount: FormControl;
    ngControlUnitOfMeasure: FormControl;
    quantityChange: EventEmitter<Quantity>;
    units: any[];
    constructor(translationService: TranslationService, form: NgForm);
    ngOnInit(): void;
    getUnits(): void;
}
