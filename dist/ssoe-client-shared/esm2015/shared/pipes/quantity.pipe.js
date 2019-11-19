/**
 * @fileoverview added by tsickle
 * Generated from: shared/pipes/quantity.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
export class QuantityPipe {
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    transform(value, args) {
        /** @type {?} */
        let v = '' + value.amount;
        if (value.unitOfMeasure !== undefined)
            v += ' ' + value.unitOfMeasure;
        return v;
    }
}
QuantityPipe.decorators = [
    { type: Pipe, args: [{
                name: 'quantity'
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVhbnRpdHkucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Nzb2UtY2xpZW50LXNoYXJlZC8iLCJzb3VyY2VzIjpbInNoYXJlZC9waXBlcy9xdWFudGl0eS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFPcEQsTUFBTSxPQUFPLFlBQVk7Ozs7OztJQUV2QixTQUFTLENBQUMsS0FBZSxFQUFFLElBQVU7O1lBQy9CLENBQUMsR0FBRyxFQUFFLEdBQUcsS0FBSyxDQUFDLE1BQU07UUFDekIsSUFBSSxLQUFLLENBQUMsYUFBYSxLQUFLLFNBQVM7WUFDbkMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDO1FBQ2pDLE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQzs7O1lBVkYsSUFBSSxTQUFDO2dCQUNKLElBQUksRUFBRSxVQUFVO2FBQ2pCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tICcuLi9leHRlbnNpb25zL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IFF1YW50aXR5IH0gZnJvbSAnLi4vUE9DTy9RdWFudGl0eSc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ3F1YW50aXR5J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUXVhbnRpdHlQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gIHRyYW5zZm9ybSh2YWx1ZTogUXVhbnRpdHksIGFyZ3M/OiBhbnkpOiBhbnkge1xyXG4gICAgbGV0IHYgPSAnJyArIHZhbHVlLmFtb3VudDtcclxuICAgIGlmICh2YWx1ZS51bml0T2ZNZWFzdXJlICE9PSB1bmRlZmluZWQpXHJcbiAgICAgIHYgKz0gJyAnICsgdmFsdWUudW5pdE9mTWVhc3VyZTtcclxuICAgIHJldHVybiB2O1xyXG4gIH1cclxuXHJcbn1cclxuIl19