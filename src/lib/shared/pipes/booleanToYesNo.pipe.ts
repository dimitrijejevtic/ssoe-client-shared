import { Pipe, PipeTransform } from '@angular/core';
import { TranslationService } from '../services/translation.service';

@Pipe({
  name: 'booleanToYesNo'
})
export class BooleanToYesNoPipe implements PipeTransform {

    constructor(private translationService: TranslationService) {
    }

    transform(value: boolean, args?: any): any {
        const key = value ? 'Yes' : 'No';
        return this.translationService.getForKey(key);
    }
}
