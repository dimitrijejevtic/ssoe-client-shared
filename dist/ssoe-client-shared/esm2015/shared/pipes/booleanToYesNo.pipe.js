/**
 * @fileoverview added by tsickle
 * Generated from: shared/pipes/booleanToYesNo.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { TranslationService } from '../services/translation.service';
export class BooleanToYesNoPipe {
    /**
     * @param {?} translationService
     */
    constructor(translationService) {
        this.translationService = translationService;
    }
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    transform(value, args) {
        /** @type {?} */
        const key = value ? 'Yes' : 'No';
        return this.translationService.getForKey(key);
    }
}
BooleanToYesNoPipe.decorators = [
    { type: Pipe, args: [{
                name: 'booleanToYesNo'
            },] }
];
/** @nocollapse */
BooleanToYesNoPipe.ctorParameters = () => [
    { type: TranslationService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    BooleanToYesNoPipe.prototype.translationService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhblRvWWVzTm8ucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Nzb2UtY2xpZW50LXNoYXJlZC8iLCJzb3VyY2VzIjpbInNoYXJlZC9waXBlcy9ib29sZWFuVG9ZZXNOby5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFLckUsTUFBTSxPQUFPLGtCQUFrQjs7OztJQUUzQixZQUFvQixrQkFBc0M7UUFBdEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtJQUMxRCxDQUFDOzs7Ozs7SUFFRCxTQUFTLENBQUMsS0FBYyxFQUFFLElBQVU7O2NBQzFCLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSTtRQUNoQyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7O1lBWEosSUFBSSxTQUFDO2dCQUNKLElBQUksRUFBRSxnQkFBZ0I7YUFDdkI7Ozs7WUFKUSxrQkFBa0I7Ozs7Ozs7SUFPWCxnREFBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRyYW5zbGF0aW9uU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdib29sZWFuVG9ZZXNObydcclxufSlcclxuZXhwb3J0IGNsYXNzIEJvb2xlYW5Ub1llc05vUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJhbnNsYXRpb25TZXJ2aWNlOiBUcmFuc2xhdGlvblNlcnZpY2UpIHtcclxuICAgIH1cclxuXHJcbiAgICB0cmFuc2Zvcm0odmFsdWU6IGJvb2xlYW4sIGFyZ3M/OiBhbnkpOiBhbnkge1xyXG4gICAgICAgIGNvbnN0IGtleSA9IHZhbHVlID8gJ1llcycgOiAnTm8nO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRyYW5zbGF0aW9uU2VydmljZS5nZXRGb3JLZXkoa2V5KTtcclxuICAgIH1cclxufVxyXG4iXX0=