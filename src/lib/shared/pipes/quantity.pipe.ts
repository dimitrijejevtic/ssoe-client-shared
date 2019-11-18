import { Pipe, PipeTransform } from '@angular/core';
import { Constants } from '../extensions/constants';
import { Quantity } from '../POCO/Quantity';

@Pipe({
  name: 'quantity'
})
export class QuantityPipe implements PipeTransform {

  transform(value: Quantity, args?: any): any {
    let v = '' + value.amount;
    if (value.unitOfMeasure !== undefined)
      v += ' ' + value.unitOfMeasure;
    return v;
  }

}
