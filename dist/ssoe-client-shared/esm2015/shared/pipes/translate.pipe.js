/**
 * @fileoverview added by tsickle
 * Generated from: shared/pipes/translate.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { TranslationService } from '../services/translation.service';
import { Utils } from '../extensions/utils';
export class TranslatePipe {
    /**
     * @param {?} translationService
     */
    constructor(translationService) {
        this.translationService = translationService;
    }
    /**
     * @param {?} value
     * @param {?=} args
     * @param {?=} byObject
     * @return {?}
     */
    transform(value, args, byObject) {
        if (args === undefined || args === null)
            return;
        if (!Utils.isNullEmptyOrUndefined(byObject))
            return this.translationService.getForKeyByObject(value);
        // console.log(value);
        return this.translationService.getForKey(value);
    }
}
TranslatePipe.decorators = [
    { type: Pipe, args: [{
                name: 'translate'
            },] }
];
/** @nocollapse */
TranslatePipe.ctorParameters = () => [
    { type: TranslationService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    TranslatePipe.prototype.translationService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zc29lLWNsaWVudC1zaGFyZWQvIiwic291cmNlcyI6WyJzaGFyZWQvcGlwZXMvdHJhbnNsYXRlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFLNUMsTUFBTSxPQUFPLGFBQWE7Ozs7SUFFeEIsWUFBb0Isa0JBQXNDO1FBQXRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7SUFDMUQsQ0FBQzs7Ozs7OztJQUVELFNBQVMsQ0FBQyxLQUFVLEVBQUUsSUFBVSxFQUFFLFFBQWM7UUFDOUMsSUFBSSxJQUFJLEtBQUssU0FBUyxJQUFJLElBQUksS0FBSyxJQUFJO1lBQ3JDLE9BQU87UUFFVCxJQUFJLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDLFFBQVEsQ0FBQztZQUN4QyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV6RCxzQkFBc0I7UUFDeEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xELENBQUM7OztZQWpCRixJQUFJLFNBQUM7Z0JBQ0osSUFBSSxFQUFFLFdBQVc7YUFDbEI7Ozs7WUFMUSxrQkFBa0I7Ozs7Ozs7SUFRYiwyQ0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRyYW5zbGF0aW9uU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBVdGlscyB9IGZyb20gJy4uL2V4dGVuc2lvbnMvdXRpbHMnO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICd0cmFuc2xhdGUnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJhbnNsYXRpb25TZXJ2aWNlOiBUcmFuc2xhdGlvblNlcnZpY2UpIHtcclxuICB9XHJcblxyXG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55LCBhcmdzPzogYW55LCBieU9iamVjdD86IGFueSk6IGFueSB7XHJcbiAgICBpZiAoYXJncyA9PT0gdW5kZWZpbmVkIHx8IGFyZ3MgPT09IG51bGwpXHJcbiAgICAgIHJldHVybjtcclxuXHJcbiAgICBpZiAoIVV0aWxzLmlzTnVsbEVtcHR5T3JVbmRlZmluZWQoYnlPYmplY3QpKVxyXG4gICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb25TZXJ2aWNlLmdldEZvcktleUJ5T2JqZWN0KHZhbHVlKTtcclxuXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0aW9uU2VydmljZS5nZXRGb3JLZXkodmFsdWUpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19