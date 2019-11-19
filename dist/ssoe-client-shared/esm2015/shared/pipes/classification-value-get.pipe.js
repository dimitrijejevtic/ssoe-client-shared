/**
 * @fileoverview added by tsickle
 * Generated from: shared/pipes/classification-value-get.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { ClassificationService } from '../services/classification-service.service';
export class ClassificationValueGet {
    /**
     * @param {?} classificationService
     */
    constructor(classificationService) {
        this.classificationService = classificationService;
    }
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    transform(value, args) {
        if (value === undefined || value === null || typeof (value) === 'object')
            return '';
        return this.classificationService.getClassificationValue(value);
    }
}
ClassificationValueGet.decorators = [
    { type: Pipe, args: [{
                name: 'classificationValueGet'
            },] }
];
/** @nocollapse */
ClassificationValueGet.ctorParameters = () => [
    { type: ClassificationService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ClassificationValueGet.prototype.classificationService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NpZmljYXRpb24tdmFsdWUtZ2V0LnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zc29lLWNsaWVudC1zaGFyZWQvIiwic291cmNlcyI6WyJzaGFyZWQvcGlwZXMvY2xhc3NpZmljYXRpb24tdmFsdWUtZ2V0LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUtuRixNQUFNLE9BQU8sc0JBQXNCOzs7O0lBRWpDLFlBQW9CLHFCQUE0QztRQUE1QywwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO0lBQ2hFLENBQUM7Ozs7OztJQUNELFNBQVMsQ0FBQyxLQUFVLEVBQUUsSUFBVTtRQUM5QixJQUFJLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxPQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssUUFBUTtZQUFFLE9BQU8sRUFBRSxDQUFDO1FBRW5GLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRWxFLENBQUM7OztZQVpGLElBQUksU0FBQztnQkFDSixJQUFJLEVBQUUsd0JBQXdCO2FBQy9COzs7O1lBSlEscUJBQXFCOzs7Ozs7O0lBT2hCLHVEQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2xhc3NpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY2xhc3NpZmljYXRpb24tc2VydmljZS5zZXJ2aWNlJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnY2xhc3NpZmljYXRpb25WYWx1ZUdldCdcclxufSlcclxuZXhwb3J0IGNsYXNzIENsYXNzaWZpY2F0aW9uVmFsdWVHZXQgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjbGFzc2lmaWNhdGlvblNlcnZpY2U6IENsYXNzaWZpY2F0aW9uU2VydmljZSkge1xyXG4gIH1cclxuICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgYXJncz86IGFueSk6IGFueSB7XHJcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCB8fCB0eXBlb2YodmFsdWUpID09PSAnb2JqZWN0JykgcmV0dXJuICcnO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmNsYXNzaWZpY2F0aW9uU2VydmljZS5nZXRDbGFzc2lmaWNhdGlvblZhbHVlKHZhbHVlKTtcclxuXHJcbiAgfVxyXG59XHJcbiJdfQ==