import { Pipe, PipeTransform } from '@angular/core';
import { Constants } from '../extensions/constants';
import { DecimalPipe } from '@angular/common';
import { Utils } from '../extensions/utils';
import { CurrencyAmount } from '../POCO/currencyAmount';

@Pipe({
  name: 'currencyAmmount'
})
export class CurrencyPipe implements PipeTransform {
  private decimalPipe = new DecimalPipe('sr-Latn-ME');

  transform(value: CurrencyAmount, args?: any): any {
    if (Utils.isNullEmptyOrUndefined(value) || Utils.isNullEmptyOrUndefined(value.amount)) return '';
    let v = '' + this.decimalPipe.transform(value.amount, '1.2-2');
    if (!Utils.isNullEmptyOrUndefined(value.currencyCode))
      v += ' ' + (Constants.currencyCodes[value.currencyCode] !== undefined ? Constants.currencyCodes[value.currencyCode] : '');

    return v;
  }

}
