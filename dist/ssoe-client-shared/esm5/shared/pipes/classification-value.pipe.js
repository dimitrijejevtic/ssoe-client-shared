/**
 * @fileoverview added by tsickle
 * Generated from: shared/pipes/classification-value.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
var ClassificationValuePipe = /** @class */ (function () {
    function ClassificationValuePipe() {
    }
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    ClassificationValuePipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    function (value, args) {
        if (value === undefined || value === null || value.value === undefined || value.value === null)
            return '-';
        return value.value.caption;
    };
    ClassificationValuePipe.decorators = [
        { type: Pipe, args: [{
                    name: 'classificationValue'
                },] }
    ];
    return ClassificationValuePipe;
}());
export { ClassificationValuePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NpZmljYXRpb24tdmFsdWUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Nzb2UtY2xpZW50LXNoYXJlZC8iLCJzb3VyY2VzIjpbInNoYXJlZC9waXBlcy9jbGFzc2lmaWNhdGlvbi12YWx1ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFJcEQ7SUFBQTtJQVdBLENBQUM7Ozs7OztJQU5DLDJDQUFTOzs7OztJQUFULFVBQVUsS0FBVSxFQUFFLElBQVU7UUFDOUIsSUFBSSxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxDQUFDLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLEtBQUssS0FBSyxJQUFJO1lBQUUsT0FBTyxHQUFHLENBQUM7UUFFM0csT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztJQUM3QixDQUFDOztnQkFURixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLHFCQUFxQjtpQkFDNUI7O0lBU0QsOEJBQUM7Q0FBQSxBQVhELElBV0M7U0FSWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZVBpcGUgfSBmcm9tICcuL3RyYW5zbGF0ZS5waXBlJztcclxuaW1wb3J0IHsgVHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvdHJhbnNsYXRpb24uc2VydmljZSc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ2NsYXNzaWZpY2F0aW9uVmFsdWUnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbGFzc2lmaWNhdGlvblZhbHVlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgYXJncz86IGFueSk6IGFueSB7XHJcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZS52YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlLnZhbHVlID09PSBudWxsKSByZXR1cm4gJy0nO1xyXG5cclxuICAgIHJldHVybiB2YWx1ZS52YWx1ZS5jYXB0aW9uO1xyXG4gIH1cclxuXHJcbn1cclxuIl19