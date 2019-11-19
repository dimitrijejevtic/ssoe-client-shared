/**
 * @fileoverview added by tsickle
 * Generated from: shared/directives/number-formatter.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, ElementRef, HostListener } from '@angular/core';
export class NumberFormatterDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this.regexStr = '^[0-9]*$';
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyPress(event) {
        return new RegExp(this.regexStr).test(event.key);
    }
}
NumberFormatterDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[numberFormatter]'
            },] }
];
/** @nocollapse */
NumberFormatterDirective.ctorParameters = () => [
    { type: ElementRef }
];
NumberFormatterDirective.propDecorators = {
    isAlphaNumeric: [{ type: Input }],
    onKeyPress: [{ type: HostListener, args: ['keypress', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    NumberFormatterDirective.prototype.regexStr;
    /** @type {?} */
    NumberFormatterDirective.prototype.isAlphaNumeric;
    /**
     * @type {?}
     * @private
     */
    NumberFormatterDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWZvcm1hdHRlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zc29lLWNsaWVudC1zaGFyZWQvIiwic291cmNlcyI6WyJzaGFyZWQvZGlyZWN0aXZlcy9udW1iZXItZm9ybWF0dGVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFNM0UsTUFBTSxPQUFPLHdCQUF3Qjs7OztJQUtuQyxZQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUhsQyxhQUFRLEdBQUcsVUFBVSxDQUFDO0lBR2dCLENBQUM7Ozs7O0lBR0QsVUFBVSxDQUFDLEtBQUs7UUFDcEQsT0FBTyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7WUFkRixTQUFTLFNBQUM7O2dCQUVULFFBQVEsRUFBRSxtQkFBbUI7YUFDOUI7Ozs7WUFMMEIsVUFBVTs7OzZCQVNsQyxLQUFLO3lCQUtMLFlBQVksU0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7SUFOcEMsNENBQXNCOztJQUN0QixrREFBaUM7Ozs7O0lBRXJCLHNDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnW251bWJlckZvcm1hdHRlcl0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOdW1iZXJGb3JtYXR0ZXJEaXJlY3RpdmUge1xyXG5cclxuICByZWdleFN0ciA9ICdeWzAtOV0qJCc7XHJcbiAgQElucHV0KCkgaXNBbHBoYU51bWVyaWM6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHsgfVxyXG5cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcigna2V5cHJlc3MnLCBbJyRldmVudCddKSBvbktleVByZXNzKGV2ZW50KSB7XHJcbiAgICByZXR1cm4gbmV3IFJlZ0V4cCh0aGlzLnJlZ2V4U3RyKS50ZXN0KGV2ZW50LmtleSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==