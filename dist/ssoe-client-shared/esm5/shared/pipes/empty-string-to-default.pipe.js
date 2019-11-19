/**
 * @fileoverview added by tsickle
 * Generated from: shared/pipes/empty-string-to-default.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Utils } from './../extensions/utils';
import { Pipe } from '@angular/core';
var EmptyStringToDefaultPipe = /** @class */ (function () {
    function EmptyStringToDefaultPipe() {
    }
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    EmptyStringToDefaultPipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    function (value, args) {
        // if (value === undefined || value === null || value.value === undefined || value.value === null) return '-';
        // return value.value.caption;
        if (Utils.isNullEmptyOrUndefined(value))
            return '-';
        return value;
    };
    EmptyStringToDefaultPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'emptyStringToDefault'
                },] }
    ];
    return EmptyStringToDefaultPipe;
}());
export { EmptyStringToDefaultPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wdHktc3RyaW5nLXRvLWRlZmF1bHQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Nzb2UtY2xpZW50LXNoYXJlZC8iLCJzb3VyY2VzIjpbInNoYXJlZC9waXBlcy9lbXB0eS1zdHJpbmctdG8tZGVmYXVsdC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzlDLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXBEO0lBQUE7SUFXQSxDQUFDOzs7Ozs7SUFOQyw0Q0FBUzs7Ozs7SUFBVCxVQUFVLEtBQVUsRUFBRSxJQUFVO1FBQzlCLDhHQUE4RztRQUM5Ryw4QkFBOEI7UUFDOUIsSUFBSSxLQUFLLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDO1lBQUUsT0FBTyxHQUFHLENBQUM7UUFDcEQsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOztnQkFWRixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLHNCQUFzQjtpQkFDN0I7O0lBU0QsK0JBQUM7Q0FBQSxBQVhELElBV0M7U0FSWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVdGlscyB9IGZyb20gJy4vLi4vZXh0ZW5zaW9ucy91dGlscyc7XHJcbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnZW1wdHlTdHJpbmdUb0RlZmF1bHQnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFbXB0eVN0cmluZ1RvRGVmYXVsdFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGFyZ3M/OiBhbnkpOiBhbnkge1xyXG4gICAgLy8gaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwgfHwgdmFsdWUudmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZS52YWx1ZSA9PT0gbnVsbCkgcmV0dXJuICctJztcclxuICAgIC8vIHJldHVybiB2YWx1ZS52YWx1ZS5jYXB0aW9uO1xyXG4gICAgaWYgKFV0aWxzLmlzTnVsbEVtcHR5T3JVbmRlZmluZWQodmFsdWUpKSByZXR1cm4gJy0nO1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG4gIH1cclxufVxyXG4iXX0=