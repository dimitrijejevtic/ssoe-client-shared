import { Pipe, PipeTransform } from '@angular/core';
import { TranslationService } from '../services/translation.service';

@Pipe({
  name: 'lifecycleStatus'
})
export class LifecycleStatusPipe implements PipeTransform {
  statuses = {
    1: 'Ready',
    2: 'Active',
    4: 'Canceled',
    8: 'Completed',
    16: 'Terminated',
    32: 'Suspend',
    64: 'Published',
    128: 'Deleted',
    256: 'Deactivated',
    512: 'PublishPending'
  };

  constructor() {
  }
  transform(value: any, args?: any): any {
    const status = this.statuses[value];
    if (status === undefined)
      return value;
    return status;
  }

}
