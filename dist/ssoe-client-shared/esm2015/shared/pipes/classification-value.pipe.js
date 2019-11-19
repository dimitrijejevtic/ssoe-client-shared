/**
 * @fileoverview added by tsickle
 * Generated from: shared/pipes/classification-value.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
export class ClassificationValuePipe {
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    transform(value, args) {
        if (value === undefined || value === null || value.value === undefined || value.value === null)
            return '-';
        return value.value.caption;
    }
}
ClassificationValuePipe.decorators = [
    { type: Pipe, args: [{
                name: 'classificationValue'
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NpZmljYXRpb24tdmFsdWUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Nzb2UtY2xpZW50LXNoYXJlZC8iLCJzb3VyY2VzIjpbInNoYXJlZC9waXBlcy9jbGFzc2lmaWNhdGlvbi12YWx1ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFPcEQsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7O0lBRWxDLFNBQVMsQ0FBQyxLQUFVLEVBQUUsSUFBVTtRQUM5QixJQUFJLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLENBQUMsS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsS0FBSyxLQUFLLElBQUk7WUFBRSxPQUFPLEdBQUcsQ0FBQztRQUUzRyxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO0lBQzdCLENBQUM7OztZQVRGLElBQUksU0FBQztnQkFDSixJQUFJLEVBQUUscUJBQXFCO2FBQzVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVQaXBlIH0gZnJvbSAnLi90cmFuc2xhdGUucGlwZSc7XHJcbmltcG9ydCB7IFRyYW5zbGF0aW9uU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdjbGFzc2lmaWNhdGlvblZhbHVlJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2xhc3NpZmljYXRpb25WYWx1ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGFyZ3M/OiBhbnkpOiBhbnkge1xyXG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwgfHwgdmFsdWUudmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZS52YWx1ZSA9PT0gbnVsbCkgcmV0dXJuICctJztcclxuXHJcbiAgICByZXR1cm4gdmFsdWUudmFsdWUuY2FwdGlvbjtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==