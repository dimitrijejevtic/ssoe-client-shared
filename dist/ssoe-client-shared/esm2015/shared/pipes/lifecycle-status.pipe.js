/**
 * @fileoverview added by tsickle
 * Generated from: shared/pipes/lifecycle-status.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
export class LifecycleStatusPipe {
    constructor() {
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
    transform(value, args) {
        /** @type {?} */
        const status = this.statuses[value];
        if (status === undefined)
            return value;
        return status;
    }
}
LifecycleStatusPipe.decorators = [
    { type: Pipe, args: [{
                name: 'lifecycleStatus'
            },] }
];
/** @nocollapse */
LifecycleStatusPipe.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    LifecycleStatusPipe.prototype.statuses;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlmZWN5Y2xlLXN0YXR1cy5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3NvZS1jbGllbnQtc2hhcmVkLyIsInNvdXJjZXMiOlsic2hhcmVkL3BpcGVzL2xpZmVjeWNsZS1zdGF0dXMucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBTXBELE1BQU0sT0FBTyxtQkFBbUI7SUFjOUI7UUFiQSxhQUFRLEdBQUc7WUFDVCxDQUFDLEVBQUUsT0FBTztZQUNWLENBQUMsRUFBRSxRQUFRO1lBQ1gsQ0FBQyxFQUFFLFVBQVU7WUFDYixDQUFDLEVBQUUsV0FBVztZQUNkLEVBQUUsRUFBRSxZQUFZO1lBQ2hCLEVBQUUsRUFBRSxTQUFTO1lBQ2IsRUFBRSxFQUFFLFdBQVc7WUFDZixHQUFHLEVBQUUsU0FBUztZQUNkLEdBQUcsRUFBRSxhQUFhO1lBQ2xCLEdBQUcsRUFBRSxnQkFBZ0I7U0FDdEIsQ0FBQztJQUdGLENBQUM7Ozs7OztJQUNELFNBQVMsQ0FBQyxLQUFVLEVBQUUsSUFBVTs7Y0FDeEIsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQ25DLElBQUksTUFBTSxLQUFLLFNBQVM7WUFDdEIsT0FBTyxLQUFLLENBQUM7UUFDZixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7WUF4QkYsSUFBSSxTQUFDO2dCQUNKLElBQUksRUFBRSxpQkFBaUI7YUFDeEI7Ozs7OztJQUVDLHVDQVdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvdHJhbnNsYXRpb24uc2VydmljZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2xpZmVjeWNsZVN0YXR1cydcbn0pXG5leHBvcnQgY2xhc3MgTGlmZWN5Y2xlU3RhdHVzUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBzdGF0dXNlcyA9IHtcbiAgICAxOiAnUmVhZHknLFxuICAgIDI6ICdBY3RpdmUnLFxuICAgIDQ6ICdDYW5jZWxlZCcsXG4gICAgODogJ0NvbXBsZXRlZCcsXG4gICAgMTY6ICdUZXJtaW5hdGVkJyxcbiAgICAzMjogJ1N1c3BlbmQnLFxuICAgIDY0OiAnUHVibGlzaGVkJyxcbiAgICAxMjg6ICdEZWxldGVkJyxcbiAgICAyNTY6ICdEZWFjdGl2YXRlZCcsXG4gICAgNTEyOiAnUHVibGlzaFBlbmRpbmcnXG4gIH07XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGFyZ3M/OiBhbnkpOiBhbnkge1xuICAgIGNvbnN0IHN0YXR1cyA9IHRoaXMuc3RhdHVzZXNbdmFsdWVdO1xuICAgIGlmIChzdGF0dXMgPT09IHVuZGVmaW5lZClcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICByZXR1cm4gc3RhdHVzO1xuICB9XG5cbn1cbiJdfQ==