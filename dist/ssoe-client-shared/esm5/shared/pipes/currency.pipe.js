/**
 * @fileoverview added by tsickle
 * Generated from: shared/pipes/currency.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { Constants } from '../extensions/constants';
import { DecimalPipe } from '@angular/common';
import { Utils } from '../extensions/utils';
var CurrencyPipe = /** @class */ (function () {
    function CurrencyPipe() {
        this.decimalPipe = new DecimalPipe('sr-Latn-ME');
    }
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    CurrencyPipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    function (value, args) {
        if (Utils.isNullEmptyOrUndefined(value) || Utils.isNullEmptyOrUndefined(value.amount))
            return '';
        /** @type {?} */
        var v = '' + this.decimalPipe.transform(value.amount, '1.2-2');
        if (!Utils.isNullEmptyOrUndefined(value.currencyCode))
            v += ' ' + (Constants.currencyCodes[value.currencyCode] !== undefined ? Constants.currencyCodes[value.currencyCode] : '');
        return v;
    };
    CurrencyPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'currencyAmmount'
                },] }
    ];
    return CurrencyPipe;
}());
export { CurrencyPipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CurrencyPipe.prototype.decimalPipe;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY3kucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Nzb2UtY2xpZW50LXNoYXJlZC8iLCJzb3VyY2VzIjpbInNoYXJlZC9waXBlcy9jdXJyZW5jeS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFHNUM7SUFBQTtRQUlVLGdCQUFXLEdBQUcsSUFBSSxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7SUFXdEQsQ0FBQzs7Ozs7O0lBVEMsZ0NBQVM7Ozs7O0lBQVQsVUFBVSxLQUFxQixFQUFFLElBQVU7UUFDekMsSUFBSSxLQUFLLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFBRSxPQUFPLEVBQUUsQ0FBQzs7WUFDN0YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQztRQUM5RCxJQUFJLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUM7WUFDbkQsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRTVILE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQzs7Z0JBYkYsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxpQkFBaUI7aUJBQ3hCOztJQWFELG1CQUFDO0NBQUEsQUFmRCxJQWVDO1NBWlksWUFBWTs7Ozs7O0lBQ3ZCLG1DQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSAnLi4vZXh0ZW5zaW9ucy9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBEZWNpbWFsUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi4vZXh0ZW5zaW9ucy91dGlscyc7XHJcbmltcG9ydCB7IEN1cnJlbmN5QW1vdW50IH0gZnJvbSAnLi4vUE9DTy9jdXJyZW5jeUFtb3VudCc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ2N1cnJlbmN5QW1tb3VudCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEN1cnJlbmN5UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIHByaXZhdGUgZGVjaW1hbFBpcGUgPSBuZXcgRGVjaW1hbFBpcGUoJ3NyLUxhdG4tTUUnKTtcclxuXHJcbiAgdHJhbnNmb3JtKHZhbHVlOiBDdXJyZW5jeUFtb3VudCwgYXJncz86IGFueSk6IGFueSB7XHJcbiAgICBpZiAoVXRpbHMuaXNOdWxsRW1wdHlPclVuZGVmaW5lZCh2YWx1ZSkgfHwgVXRpbHMuaXNOdWxsRW1wdHlPclVuZGVmaW5lZCh2YWx1ZS5hbW91bnQpKSByZXR1cm4gJyc7XHJcbiAgICBsZXQgdiA9ICcnICsgdGhpcy5kZWNpbWFsUGlwZS50cmFuc2Zvcm0odmFsdWUuYW1vdW50LCAnMS4yLTInKTtcclxuICAgIGlmICghVXRpbHMuaXNOdWxsRW1wdHlPclVuZGVmaW5lZCh2YWx1ZS5jdXJyZW5jeUNvZGUpKVxyXG4gICAgICB2ICs9ICcgJyArIChDb25zdGFudHMuY3VycmVuY3lDb2Rlc1t2YWx1ZS5jdXJyZW5jeUNvZGVdICE9PSB1bmRlZmluZWQgPyBDb25zdGFudHMuY3VycmVuY3lDb2Rlc1t2YWx1ZS5jdXJyZW5jeUNvZGVdIDogJycpO1xyXG5cclxuICAgIHJldHVybiB2O1xyXG4gIH1cclxuXHJcbn1cclxuIl19