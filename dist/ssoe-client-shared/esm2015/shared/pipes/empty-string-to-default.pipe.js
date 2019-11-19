/**
 * @fileoverview added by tsickle
 * Generated from: shared/pipes/empty-string-to-default.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Utils } from './../extensions/utils';
import { Pipe } from '@angular/core';
export class EmptyStringToDefaultPipe {
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    transform(value, args) {
        // if (value === undefined || value === null || value.value === undefined || value.value === null) return '-';
        // return value.value.caption;
        if (Utils.isNullEmptyOrUndefined(value))
            return '-';
        return value;
    }
}
EmptyStringToDefaultPipe.decorators = [
    { type: Pipe, args: [{
                name: 'emptyStringToDefault'
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wdHktc3RyaW5nLXRvLWRlZmF1bHQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Nzb2UtY2xpZW50LXNoYXJlZC8iLCJzb3VyY2VzIjpbInNoYXJlZC9waXBlcy9lbXB0eS1zdHJpbmctdG8tZGVmYXVsdC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzlDLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBS3BELE1BQU0sT0FBTyx3QkFBd0I7Ozs7OztJQUVuQyxTQUFTLENBQUMsS0FBVSxFQUFFLElBQVU7UUFDOUIsOEdBQThHO1FBQzlHLDhCQUE4QjtRQUM5QixJQUFJLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUM7WUFBRSxPQUFPLEdBQUcsQ0FBQztRQUNwRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7OztZQVZGLElBQUksU0FBQztnQkFDSixJQUFJLEVBQUUsc0JBQXNCO2FBQzdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXRpbHMgfSBmcm9tICcuLy4uL2V4dGVuc2lvbnMvdXRpbHMnO1xyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ2VtcHR5U3RyaW5nVG9EZWZhdWx0J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRW1wdHlTdHJpbmdUb0RlZmF1bHRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55LCBhcmdzPzogYW55KTogYW55IHtcclxuICAgIC8vIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsIHx8IHZhbHVlLnZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUudmFsdWUgPT09IG51bGwpIHJldHVybiAnLSc7XHJcbiAgICAvLyByZXR1cm4gdmFsdWUudmFsdWUuY2FwdGlvbjtcclxuICAgIGlmIChVdGlscy5pc051bGxFbXB0eU9yVW5kZWZpbmVkKHZhbHVlKSkgcmV0dXJuICctJztcclxuICAgIHJldHVybiB2YWx1ZTtcclxuICB9XHJcbn1cclxuIl19