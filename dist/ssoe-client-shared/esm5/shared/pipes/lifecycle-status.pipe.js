/**
 * @fileoverview added by tsickle
 * Generated from: shared/pipes/lifecycle-status.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
var LifecycleStatusPipe = /** @class */ (function () {
    function LifecycleStatusPipe() {
        this.statuses = {
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
    }
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    LifecycleStatusPipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    function (value, args) {
        /** @type {?} */
        var status = this.statuses[value];
        if (status === undefined)
            return value;
        return status;
    };
    LifecycleStatusPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'lifecycleStatus'
                },] }
    ];
    /** @nocollapse */
    LifecycleStatusPipe.ctorParameters = function () { return []; };
    return LifecycleStatusPipe;
}());
export { LifecycleStatusPipe };
if (false) {
    /** @type {?} */
    LifecycleStatusPipe.prototype.statuses;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlmZWN5Y2xlLXN0YXR1cy5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3NvZS1jbGllbnQtc2hhcmVkLyIsInNvdXJjZXMiOlsic2hhcmVkL3BpcGVzL2xpZmVjeWNsZS1zdGF0dXMucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBR3BEO0lBaUJFO1FBYkEsYUFBUSxHQUFHO1lBQ1QsQ0FBQyxFQUFFLE9BQU87WUFDVixDQUFDLEVBQUUsUUFBUTtZQUNYLENBQUMsRUFBRSxVQUFVO1lBQ2IsQ0FBQyxFQUFFLFdBQVc7WUFDZCxFQUFFLEVBQUUsWUFBWTtZQUNoQixFQUFFLEVBQUUsU0FBUztZQUNiLEVBQUUsRUFBRSxXQUFXO1lBQ2YsR0FBRyxFQUFFLFNBQVM7WUFDZCxHQUFHLEVBQUUsYUFBYTtZQUNsQixHQUFHLEVBQUUsZ0JBQWdCO1NBQ3RCLENBQUM7SUFHRixDQUFDOzs7Ozs7SUFDRCx1Q0FBUzs7Ozs7SUFBVCxVQUFVLEtBQVUsRUFBRSxJQUFVOztZQUN4QixNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFDbkMsSUFBSSxNQUFNLEtBQUssU0FBUztZQUN0QixPQUFPLEtBQUssQ0FBQztRQUNmLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7O2dCQXhCRixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLGlCQUFpQjtpQkFDeEI7Ozs7SUF3QkQsMEJBQUM7Q0FBQSxBQTFCRCxJQTBCQztTQXZCWSxtQkFBbUI7OztJQUM5Qix1Q0FXRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdsaWZlY3ljbGVTdGF0dXMnXG59KVxuZXhwb3J0IGNsYXNzIExpZmVjeWNsZVN0YXR1c1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgc3RhdHVzZXMgPSB7XG4gICAgMTogJ1JlYWR5JyxcbiAgICAyOiAnQWN0aXZlJyxcbiAgICA0OiAnQ2FuY2VsZWQnLFxuICAgIDg6ICdDb21wbGV0ZWQnLFxuICAgIDE2OiAnVGVybWluYXRlZCcsXG4gICAgMzI6ICdTdXNwZW5kJyxcbiAgICA2NDogJ1B1Ymxpc2hlZCcsXG4gICAgMTI4OiAnRGVsZXRlZCcsXG4gICAgMjU2OiAnRGVhY3RpdmF0ZWQnLFxuICAgIDUxMjogJ1B1Ymxpc2hQZW5kaW5nJ1xuICB9O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55LCBhcmdzPzogYW55KTogYW55IHtcbiAgICBjb25zdCBzdGF0dXMgPSB0aGlzLnN0YXR1c2VzW3ZhbHVlXTtcbiAgICBpZiAoc3RhdHVzID09PSB1bmRlZmluZWQpXG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgcmV0dXJuIHN0YXR1cztcbiAgfVxuXG59XG4iXX0=