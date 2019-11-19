import { ElementRef } from '@angular/core';
export declare class NumberFormatterDirective {
    private el;
    regexStr: string;
    isAlphaNumeric: boolean;
    constructor(el: ElementRef);
    onKeyPress(event: any): boolean;
}
