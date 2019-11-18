import { Utils } from './../extensions/utils';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emptyStringToDefault'
})
export class EmptyStringToDefaultPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    // if (value === undefined || value === null || value.value === undefined || value.value === null) return '-';
    // return value.value.caption;
    if (Utils.isNullEmptyOrUndefined(value)) return '-';
    return value;
  }
}
