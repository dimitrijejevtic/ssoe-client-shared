/**
 * @fileoverview added by tsickle
 * Generated from: shared/pipes/booleanToYesNo.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { TranslationService } from '../services/translation.service';
var BooleanToYesNoPipe = /** @class */ (function () {
    function BooleanToYesNoPipe(translationService) {
        this.translationService = translationService;
    }
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    BooleanToYesNoPipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    function (value, args) {
        /** @type {?} */
        var key = value ? 'Yes' : 'No';
        return this.translationService.getForKey(key);
    };
    BooleanToYesNoPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'booleanToYesNo'
                },] }
    ];
    /** @nocollapse */
    BooleanToYesNoPipe.ctorParameters = function () { return [
        { type: TranslationService }
    ]; };
    return BooleanToYesNoPipe;
}());
export { BooleanToYesNoPipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    BooleanToYesNoPipe.prototype.translationService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhblRvWWVzTm8ucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Nzb2UtY2xpZW50LXNoYXJlZC8iLCJzb3VyY2VzIjpbInNoYXJlZC9waXBlcy9ib29sZWFuVG9ZZXNOby5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFckU7SUFLSSw0QkFBb0Isa0JBQXNDO1FBQXRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7SUFDMUQsQ0FBQzs7Ozs7O0lBRUQsc0NBQVM7Ozs7O0lBQVQsVUFBVSxLQUFjLEVBQUUsSUFBVTs7WUFDMUIsR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNsRCxDQUFDOztnQkFYSixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLGdCQUFnQjtpQkFDdkI7Ozs7Z0JBSlEsa0JBQWtCOztJQWMzQix5QkFBQztDQUFBLEFBWkQsSUFZQztTQVRZLGtCQUFrQjs7Ozs7O0lBRWYsZ0RBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy90cmFuc2xhdGlvbi5zZXJ2aWNlJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnYm9vbGVhblRvWWVzTm8nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCb29sZWFuVG9ZZXNOb1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyYW5zbGF0aW9uU2VydmljZTogVHJhbnNsYXRpb25TZXJ2aWNlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgdHJhbnNmb3JtKHZhbHVlOiBib29sZWFuLCBhcmdzPzogYW55KTogYW55IHtcclxuICAgICAgICBjb25zdCBrZXkgPSB2YWx1ZSA/ICdZZXMnIDogJ05vJztcclxuICAgICAgICByZXR1cm4gdGhpcy50cmFuc2xhdGlvblNlcnZpY2UuZ2V0Rm9yS2V5KGtleSk7XHJcbiAgICB9XHJcbn1cclxuIl19