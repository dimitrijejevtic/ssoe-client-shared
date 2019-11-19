import { PipeTransform } from '@angular/core';
import { ClassificationService } from '../services/classification-service.service';
export declare class ClassificationValueGet implements PipeTransform {
    private classificationService;
    constructor(classificationService: ClassificationService);
    transform(value: any, args?: any): any;
}
