import { Pipe, PipeTransform } from '@angular/core';
import { TranslatePipe } from './translate.pipe';
import { TranslationService } from '../services/translation.service';

@Pipe({
  name: 'classificationValue'
})
export class ClassificationValuePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value === undefined || value === null || value.value === undefined || value.value === null) return '-';

    return value.value.caption;
  }

}
