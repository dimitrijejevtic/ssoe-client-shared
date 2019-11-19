import { PipeTransform } from '@angular/core';
import { CurrencyAmount } from '../POCO/currencyAmount';
export declare class CurrencyPipe implements PipeTransform {
    private decimalPipe;
    transform(value: CurrencyAmount, args?: any): any;
}
