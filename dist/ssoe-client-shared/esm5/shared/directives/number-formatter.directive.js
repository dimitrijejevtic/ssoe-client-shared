/**
 * @fileoverview added by tsickle
 * Generated from: shared/directives/number-formatter.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, ElementRef, HostListener } from '@angular/core';
var NumberFormatterDirective = /** @class */ (function () {
    function NumberFormatterDirective(el) {
        this.el = el;
        this.regexStr = '^[0-9]*$';
    }
    /**
     * @param {?} event
     * @return {?}
     */
    NumberFormatterDirective.prototype.onKeyPress = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return new RegExp(this.regexStr).test(event.key);
    };
    NumberFormatterDirective.decorators = [
        { type: Directive, args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: '[numberFormatter]'
                },] }
    ];
    /** @nocollapse */
    NumberFormatterDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    NumberFormatterDirective.propDecorators = {
        isAlphaNumeric: [{ type: Input }],
        onKeyPress: [{ type: HostListener, args: ['keypress', ['$event'],] }]
    };
    return NumberFormatterDirective;
}());
export { NumberFormatterDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWZvcm1hdHRlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zc29lLWNsaWVudC1zaGFyZWQvIiwic291cmNlcyI6WyJzaGFyZWQvZGlyZWN0aXZlcy9udW1iZXItZm9ybWF0dGVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0U7SUFTRSxrQ0FBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7UUFIbEMsYUFBUSxHQUFHLFVBQVUsQ0FBQztJQUdnQixDQUFDOzs7OztJQUdELDZDQUFVOzs7O0lBQWhELFVBQWlELEtBQUs7UUFDcEQsT0FBTyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuRCxDQUFDOztnQkFkRixTQUFTLFNBQUM7O29CQUVULFFBQVEsRUFBRSxtQkFBbUI7aUJBQzlCOzs7O2dCQUwwQixVQUFVOzs7aUNBU2xDLEtBQUs7NkJBS0wsWUFBWSxTQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7SUFHdEMsK0JBQUM7Q0FBQSxBQWZELElBZUM7U0FYWSx3QkFBd0I7OztJQUVuQyw0Q0FBc0I7O0lBQ3RCLGtEQUFpQzs7Ozs7SUFFckIsc0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdbbnVtYmVyRm9ybWF0dGVyXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE51bWJlckZvcm1hdHRlckRpcmVjdGl2ZSB7XHJcblxyXG4gIHJlZ2V4U3RyID0gJ15bMC05XSokJztcclxuICBASW5wdXQoKSBpc0FscGhhTnVtZXJpYzogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikgeyB9XHJcblxyXG5cclxuICBASG9zdExpc3RlbmVyKCdrZXlwcmVzcycsIFsnJGV2ZW50J10pIG9uS2V5UHJlc3MoZXZlbnQpIHtcclxuICAgIHJldHVybiBuZXcgUmVnRXhwKHRoaXMucmVnZXhTdHIpLnRlc3QoZXZlbnQua2V5KTtcclxuICB9XHJcbn1cclxuIl19