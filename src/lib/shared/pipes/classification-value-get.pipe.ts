import { Pipe, PipeTransform } from '@angular/core';
import { ClassificationService } from '../services/classification-service.service';

@Pipe({
  name: 'classificationValueGet'
})
export class ClassificationValueGet implements PipeTransform {

  constructor(private classificationService: ClassificationService) {
  }
  transform(value: any, args?: any): any {
    if (value === undefined || value === null || typeof(value) === 'object') return '';

    return this.classificationService.getClassificationValue(value);

  }
}
