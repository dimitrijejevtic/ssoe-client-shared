/**
 * @fileoverview added by tsickle
 * Generated from: shared/pipes/classification-value-get.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { ClassificationService } from '../services/classification-service.service';
var ClassificationValueGet = /** @class */ (function () {
    function ClassificationValueGet(classificationService) {
        this.classificationService = classificationService;
    }
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    ClassificationValueGet.prototype.transform = /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    function (value, args) {
        if (value === undefined || value === null || typeof (value) === 'object')
            return '';
        return this.classificationService.getClassificationValue(value);
    };
    ClassificationValueGet.decorators = [
        { type: Pipe, args: [{
                    name: 'classificationValueGet'
                },] }
    ];
    /** @nocollapse */
    ClassificationValueGet.ctorParameters = function () { return [
        { type: ClassificationService }
    ]; };
    return ClassificationValueGet;
}());
export { ClassificationValueGet };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ClassificationValueGet.prototype.classificationService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NpZmljYXRpb24tdmFsdWUtZ2V0LnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zc29lLWNsaWVudC1zaGFyZWQvIiwic291cmNlcyI6WyJzaGFyZWQvcGlwZXMvY2xhc3NpZmljYXRpb24tdmFsdWUtZ2V0LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUVuRjtJQUtFLGdDQUFvQixxQkFBNEM7UUFBNUMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtJQUNoRSxDQUFDOzs7Ozs7SUFDRCwwQ0FBUzs7Ozs7SUFBVCxVQUFVLEtBQVUsRUFBRSxJQUFVO1FBQzlCLElBQUksS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSSxJQUFJLE9BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxRQUFRO1lBQUUsT0FBTyxFQUFFLENBQUM7UUFFbkYsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFbEUsQ0FBQzs7Z0JBWkYsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSx3QkFBd0I7aUJBQy9COzs7O2dCQUpRLHFCQUFxQjs7SUFlOUIsNkJBQUM7Q0FBQSxBQWJELElBYUM7U0FWWSxzQkFBc0I7Ozs7OztJQUVyQix1REFBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENsYXNzaWZpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2NsYXNzaWZpY2F0aW9uLXNlcnZpY2Uuc2VydmljZSc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ2NsYXNzaWZpY2F0aW9uVmFsdWVHZXQnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbGFzc2lmaWNhdGlvblZhbHVlR2V0IGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2xhc3NpZmljYXRpb25TZXJ2aWNlOiBDbGFzc2lmaWNhdGlvblNlcnZpY2UpIHtcclxuICB9XHJcbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGFyZ3M/OiBhbnkpOiBhbnkge1xyXG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwgfHwgdHlwZW9mKHZhbHVlKSA9PT0gJ29iamVjdCcpIHJldHVybiAnJztcclxuXHJcbiAgICByZXR1cm4gdGhpcy5jbGFzc2lmaWNhdGlvblNlcnZpY2UuZ2V0Q2xhc3NpZmljYXRpb25WYWx1ZSh2YWx1ZSk7XHJcblxyXG4gIH1cclxufVxyXG4iXX0=