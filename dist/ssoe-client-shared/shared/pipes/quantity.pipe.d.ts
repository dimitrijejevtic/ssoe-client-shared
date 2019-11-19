import { PipeTransform } from '@angular/core';
import { Quantity } from '../POCO/Quantity';
export declare class QuantityPipe implements PipeTransform {
    transform(value: Quantity, args?: any): any;
}
