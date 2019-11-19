/**
 * @fileoverview added by tsickle
 * Generated from: shared/pipes/translate.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { TranslationService } from '../services/translation.service';
import { Utils } from '../extensions/utils';
var TranslatePipe = /** @class */ (function () {
    function TranslatePipe(translationService) {
        this.translationService = translationService;
    }
    /**
     * @param {?} value
     * @param {?=} args
     * @param {?=} byObject
     * @return {?}
     */
    TranslatePipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} args
     * @param {?=} byObject
     * @return {?}
     */
    function (value, args, byObject) {
        if (args === undefined || args === null)
            return;
        if (!Utils.isNullEmptyOrUndefined(byObject))
            return this.translationService.getForKeyByObject(value);
        // console.log(value);
        return this.translationService.getForKey(value);
    };
    TranslatePipe.decorators = [
        { type: Pipe, args: [{
                    name: 'translate'
                },] }
    ];
    /** @nocollapse */
    TranslatePipe.ctorParameters = function () { return [
        { type: TranslationService }
    ]; };
    return TranslatePipe;
}());
export { TranslatePipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    TranslatePipe.prototype.translationService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zc29lLWNsaWVudC1zaGFyZWQvIiwic291cmNlcyI6WyJzaGFyZWQvcGlwZXMvdHJhbnNsYXRlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFNUM7SUFLRSx1QkFBb0Isa0JBQXNDO1FBQXRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7SUFDMUQsQ0FBQzs7Ozs7OztJQUVELGlDQUFTOzs7Ozs7SUFBVCxVQUFVLEtBQVUsRUFBRSxJQUFVLEVBQUUsUUFBYztRQUM5QyxJQUFJLElBQUksS0FBSyxTQUFTLElBQUksSUFBSSxLQUFLLElBQUk7WUFDckMsT0FBTztRQUVULElBQUksQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUMsUUFBUSxDQUFDO1lBQ3hDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXpELHNCQUFzQjtRQUN4QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Z0JBakJGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsV0FBVztpQkFDbEI7Ozs7Z0JBTFEsa0JBQWtCOztJQXNCM0Isb0JBQUM7Q0FBQSxBQW5CRCxJQW1CQztTQWhCWSxhQUFhOzs7Ozs7SUFFWiwyQ0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRyYW5zbGF0aW9uU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBVdGlscyB9IGZyb20gJy4uL2V4dGVuc2lvbnMvdXRpbHMnO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICd0cmFuc2xhdGUnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJhbnNsYXRpb25TZXJ2aWNlOiBUcmFuc2xhdGlvblNlcnZpY2UpIHtcclxuICB9XHJcblxyXG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55LCBhcmdzPzogYW55LCBieU9iamVjdD86IGFueSk6IGFueSB7XHJcbiAgICBpZiAoYXJncyA9PT0gdW5kZWZpbmVkIHx8IGFyZ3MgPT09IG51bGwpXHJcbiAgICAgIHJldHVybjtcclxuXHJcbiAgICBpZiAoIVV0aWxzLmlzTnVsbEVtcHR5T3JVbmRlZmluZWQoYnlPYmplY3QpKVxyXG4gICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb25TZXJ2aWNlLmdldEZvcktleUJ5T2JqZWN0KHZhbHVlKTtcclxuXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0aW9uU2VydmljZS5nZXRGb3JLZXkodmFsdWUpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19