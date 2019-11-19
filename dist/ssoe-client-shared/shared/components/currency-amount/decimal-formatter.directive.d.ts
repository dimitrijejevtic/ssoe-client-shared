import { OnInit, ElementRef } from '@angular/core';
import { NgModel } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
export declare class DecimalFormatterDirective implements OnInit {
    private elementRef;
    private ngModel;
    decimals: string;
    locale: string;
    decimalFormatPipe: DecimalPipe;
    lastValue: any;
    rgx: RegExp;
    private el;
    constructor(elementRef: ElementRef, ngModel: NgModel);
    ngOnInit(): void;
    onFocus(value: any): void;
    onBlur(value: any): void;
    onKeyPress(event: any): boolean;
}
