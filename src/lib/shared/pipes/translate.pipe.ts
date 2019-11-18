import { Pipe, PipeTransform } from '@angular/core';
import { TranslationService } from '../services/translation.service';
import { Utils } from '../extensions/utils';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  constructor(private translationService: TranslationService) {
  }

  transform(value: any, args?: any, byObject?: any): any {
    if (args === undefined || args === null)
      return;

    if (!Utils.isNullEmptyOrUndefined(byObject))
       return this.translationService.getForKeyByObject(value);

      // console.log(value);
    return this.translationService.getForKey(value);
  }

}
