import { Pipe, PipeTransform } from '@angular/core';
import { TranslationService } from '../services/translation.service';
import { Utils } from '../extensions/utils';

@Pipe({
  name: 'booleanEvaluateStatusToString'
})
export class BooleanEvaluateStatusToStringPipe implements PipeTransform {

  constructor(private translationService: TranslationService) {
  }

  transform(value: boolean, args?: any): any {
    if (Utils.isNullEmptyOrUndefined(value))
      return '-';

    const key = value ? 'Evaluated (accepted)' : 'Evaluated (rejected)';
    return this.translationService.getForKey(key);
  }
}
