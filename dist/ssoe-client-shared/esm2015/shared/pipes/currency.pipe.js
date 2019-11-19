/**
 * @fileoverview added by tsickle
 * Generated from: shared/pipes/currency.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { Constants } from '../extensions/constants';
import { DecimalPipe } from '@angular/common';
import { Utils } from '../extensions/utils';
export class CurrencyPipe {
    constructor() {
        this.decimalPipe = new DecimalPipe('sr-Latn-ME');
    }
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    transform(value, args) {
        if (Utils.isNullEmptyOrUndefined(value) || Utils.isNullEmptyOrUndefined(value.amount))
            return '';
        /** @type {?} */
        let v = '' + this.decimalPipe.transform(value.amount, '1.2-2');
        if (!Utils.isNullEmptyOrUndefined(value.currencyCode))
            v += ' ' + (Constants.currencyCodes[value.currencyCode] !== undefined ? Constants.currencyCodes[value.currencyCode] : '');
        return v;
    }
}
CurrencyPipe.decorators = [
    { type: Pipe, args: [{
                name: 'currencyAmmount'
            },] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CurrencyPipe.prototype.decimalPipe;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY3kucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Nzb2UtY2xpZW50LXNoYXJlZC8iLCJzb3VyY2VzIjpbInNoYXJlZC9waXBlcy9jdXJyZW5jeS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFNNUMsTUFBTSxPQUFPLFlBQVk7SUFIekI7UUFJVSxnQkFBVyxHQUFHLElBQUksV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBV3RELENBQUM7Ozs7OztJQVRDLFNBQVMsQ0FBQyxLQUFxQixFQUFFLElBQVU7UUFDekMsSUFBSSxLQUFLLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFBRSxPQUFPLEVBQUUsQ0FBQzs7WUFDN0YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQztRQUM5RCxJQUFJLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUM7WUFDbkQsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRTVILE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQzs7O1lBYkYsSUFBSSxTQUFDO2dCQUNKLElBQUksRUFBRSxpQkFBaUI7YUFDeEI7Ozs7Ozs7SUFFQyxtQ0FBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gJy4uL2V4dGVuc2lvbnMvY29uc3RhbnRzJztcclxuaW1wb3J0IHsgRGVjaW1hbFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBVdGlscyB9IGZyb20gJy4uL2V4dGVuc2lvbnMvdXRpbHMnO1xyXG5pbXBvcnQgeyBDdXJyZW5jeUFtb3VudCB9IGZyb20gJy4uL1BPQ08vY3VycmVuY3lBbW91bnQnO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdjdXJyZW5jeUFtbW91bnQnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDdXJyZW5jeVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICBwcml2YXRlIGRlY2ltYWxQaXBlID0gbmV3IERlY2ltYWxQaXBlKCdzci1MYXRuLU1FJyk7XHJcblxyXG4gIHRyYW5zZm9ybSh2YWx1ZTogQ3VycmVuY3lBbW91bnQsIGFyZ3M/OiBhbnkpOiBhbnkge1xyXG4gICAgaWYgKFV0aWxzLmlzTnVsbEVtcHR5T3JVbmRlZmluZWQodmFsdWUpIHx8IFV0aWxzLmlzTnVsbEVtcHR5T3JVbmRlZmluZWQodmFsdWUuYW1vdW50KSkgcmV0dXJuICcnO1xyXG4gICAgbGV0IHYgPSAnJyArIHRoaXMuZGVjaW1hbFBpcGUudHJhbnNmb3JtKHZhbHVlLmFtb3VudCwgJzEuMi0yJyk7XHJcbiAgICBpZiAoIVV0aWxzLmlzTnVsbEVtcHR5T3JVbmRlZmluZWQodmFsdWUuY3VycmVuY3lDb2RlKSlcclxuICAgICAgdiArPSAnICcgKyAoQ29uc3RhbnRzLmN1cnJlbmN5Q29kZXNbdmFsdWUuY3VycmVuY3lDb2RlXSAhPT0gdW5kZWZpbmVkID8gQ29uc3RhbnRzLmN1cnJlbmN5Q29kZXNbdmFsdWUuY3VycmVuY3lDb2RlXSA6ICcnKTtcclxuXHJcbiAgICByZXR1cm4gdjtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==