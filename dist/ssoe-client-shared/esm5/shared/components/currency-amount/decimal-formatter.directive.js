/**
 * @fileoverview added by tsickle
 * Generated from: shared/components/currency-amount/decimal-formatter.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, ElementRef, HostListener } from '@angular/core';
import { NgModel } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { Utils } from '../../extensions/utils';
var DecimalFormatterDirective = /** @class */ (function () {
    function DecimalFormatterDirective(elementRef, ngModel) {
        this.elementRef = elementRef;
        this.ngModel = ngModel;
        this.locale = 'sr-Latn-ME';
        this.rgx = /^\d*((\,|\.)\d*)?(?!\w)$/g;
        this.el = this.elementRef.nativeElement;
        this.decimalFormatPipe = new DecimalPipe('sr-Latn-ME');
    }
    /**
     * @return {?}
     */
    DecimalFormatterDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.decimals == null)
            this.decimals = '1.2-2';
        this.el.value = this.decimalFormatPipe.transform(this.el.value, this.decimals, this.locale);
        if (this.el.value === '0')
            this.el.value = '';
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DecimalFormatterDirective.prototype.onFocus = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.el.value = this.ngModel.viewModel;
        this.lastValue = this.ngModel.viewModel;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DecimalFormatterDirective.prototype.onBlur = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        try {
            this.ngModel.viewModel = this.el.value;
            /** @type {?} */
            var nocomma = this.el.value.replace(',', '.');
            this.el.value = this.decimalFormatPipe.transform(nocomma, this.decimals, this.locale);
        }
        catch (ex) {
            if (!Utils.isNullEmptyOrUndefined(this.lastValue) && Utils.regexMatch(this.rgx, this.lastValue)) {
                this.el.value = this.decimalFormatPipe.transform(this.lastValue, this.decimals, this.locale);
                this.ngModel.viewModel = this.lastValue;
            }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DecimalFormatterDirective.prototype.onKeyPress = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.lastValue = Utils.deepClone(event.target.value);
        if ((event.code === 'Comma' && this.lastValue.indexOf(',') === -1)
            || event.code === 'Delete' || event.code === 'Backspace' || !RegExp(/\D/).test(event.key)) {
            return true;
        }
        else {
            return false;
        }
    };
    DecimalFormatterDirective.decorators = [
        { type: Directive, args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: '[decimalFormatter][ngModel]',
                    providers: [NgModel]
                },] }
    ];
    /** @nocollapse */
    DecimalFormatterDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgModel }
    ]; };
    DecimalFormatterDirective.propDecorators = {
        decimals: [{ type: Input, args: ['decimals',] }],
        onFocus: [{ type: HostListener, args: ['focus', ['$event.target.value'],] }],
        onBlur: [{ type: HostListener, args: ['blur', ['$event.target.value'],] }],
        onKeyPress: [{ type: HostListener, args: ['keydown', ['$event'],] }]
    };
    return DecimalFormatterDirective;
}());
export { DecimalFormatterDirective };
if (false) {
    /** @type {?} */
    DecimalFormatterDirective.prototype.decimals;
    /** @type {?} */
    DecimalFormatterDirective.prototype.locale;
    /** @type {?} */
    DecimalFormatterDirective.prototype.decimalFormatPipe;
    /** @type {?} */
    DecimalFormatterDirective.prototype.lastValue;
    /** @type {?} */
    DecimalFormatterDirective.prototype.rgx;
    /**
     * @type {?}
     * @private
     */
    DecimalFormatterDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    DecimalFormatterDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    DecimalFormatterDirective.prototype.ngModel;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjaW1hbC1mb3JtYXR0ZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3NvZS1jbGllbnQtc2hhcmVkLyIsInNvdXJjZXMiOlsic2hhcmVkL2NvbXBvbmVudHMvY3VycmVuY3ktYW1vdW50L2RlY2ltYWwtZm9ybWF0dGVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkYsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUU5QyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFL0M7SUFlRSxtQ0FDa0IsVUFBc0IsRUFDdEIsT0FBZ0I7UUFEaEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixZQUFPLEdBQVAsT0FBTyxDQUFTO1FBUmxDLFdBQU0sR0FBRyxZQUFZLENBQUM7UUFHdEIsUUFBRyxHQUFHLDJCQUEyQixDQUFDO1FBT2hDLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFDeEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFFRiw0Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSTtZQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUUxQixJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFD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IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgT25Jbml0LCBJbnB1dCwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nTW9kZWwgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IERlY2ltYWxQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgdGFwLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi4vLi4vZXh0ZW5zaW9ucy91dGlscyc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdbZGVjaW1hbEZvcm1hdHRlcl1bbmdNb2RlbF0nLFxyXG4gIHByb3ZpZGVyczogW05nTW9kZWxdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEZWNpbWFsRm9ybWF0dGVyRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWlucHV0LXJlbmFtZVxyXG4gIEBJbnB1dCgnZGVjaW1hbHMnKSBkZWNpbWFsczogc3RyaW5nO1xyXG4gIGxvY2FsZSA9ICdzci1MYXRuLU1FJztcclxuICBkZWNpbWFsRm9ybWF0UGlwZTogRGVjaW1hbFBpcGU7XHJcbiAgbGFzdFZhbHVlOiBhbnk7XHJcbiAgcmd4ID0gL15cXGQqKChcXCx8XFwuKVxcZCopPyg/IVxcdykkL2c7XHJcblxyXG4gIHByaXZhdGUgZWw6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgICAgICAgICAgcHJpdmF0ZSBuZ01vZGVsOiBOZ01vZGVsXHJcbiAgKSB7XHJcbiAgICB0aGlzLmVsID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICB0aGlzLmRlY2ltYWxGb3JtYXRQaXBlID0gbmV3IERlY2ltYWxQaXBlKCdzci1MYXRuLU1FJyk7XHJcbiAgIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5kZWNpbWFscyA9PSBudWxsKVxyXG4gICAgICB0aGlzLmRlY2ltYWxzID0gJzEuMi0yJztcclxuXHJcbiAgICB0aGlzLmVsLnZhbHVlID0gdGhpcy5kZWNpbWFsRm9ybWF0UGlwZS50cmFuc2Zvcm0odGhpcy5lbC52YWx1ZSwgdGhpcy5kZWNpbWFscywgdGhpcy5sb2NhbGUpO1xyXG4gICAgaWYgKHRoaXMuZWwudmFsdWUgPT09ICcwJylcclxuICAgICAgdGhpcy5lbC52YWx1ZSA9ICcnO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignZm9jdXMnLCBbJyRldmVudC50YXJnZXQudmFsdWUnXSlcclxuICBvbkZvY3VzKHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuZWwudmFsdWUgPSB0aGlzLm5nTW9kZWwudmlld01vZGVsO1xyXG4gICAgICB0aGlzLmxhc3RWYWx1ZSA9IHRoaXMubmdNb2RlbC52aWV3TW9kZWw7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdibHVyJywgWyckZXZlbnQudGFyZ2V0LnZhbHVlJ10pXHJcbiAgb25CbHVyKHZhbHVlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICB0aGlzLm5nTW9kZWwudmlld01vZGVsID0gdGhpcy5lbC52YWx1ZTtcclxuICAgICAgY29uc3Qgbm9jb21tYSA9IHRoaXMuZWwudmFsdWUucmVwbGFjZSgnLCcsICcuJyk7XHJcbiAgICAgIHRoaXMuZWwudmFsdWUgPSB0aGlzLmRlY2ltYWxGb3JtYXRQaXBlLnRyYW5zZm9ybShub2NvbW1hLCB0aGlzLmRlY2ltYWxzLCB0aGlzLmxvY2FsZSk7XHJcbiAgICB9IGNhdGNoIChleCkge1xyXG4gICAgICBpZiAoIVV0aWxzLmlzTnVsbEVtcHR5T3JVbmRlZmluZWQodGhpcy5sYXN0VmFsdWUpICYmIFV0aWxzLnJlZ2V4TWF0Y2godGhpcy5yZ3gsIHRoaXMubGFzdFZhbHVlKSkge1xyXG4gICAgICAgIHRoaXMuZWwudmFsdWUgPSB0aGlzLmRlY2ltYWxGb3JtYXRQaXBlLnRyYW5zZm9ybSh0aGlzLmxhc3RWYWx1ZSwgdGhpcy5kZWNpbWFscywgdGhpcy5sb2NhbGUpO1xyXG4gICAgICAgIHRoaXMubmdNb2RlbC52aWV3TW9kZWwgPSB0aGlzLmxhc3RWYWx1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSlcclxuICBvbktleVByZXNzKGV2ZW50KSB7XHJcbiAgICAgIHRoaXMubGFzdFZhbHVlID0gVXRpbHMuZGVlcENsb25lKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgIGlmICgoZXZlbnQuY29kZSA9PT0gJ0NvbW1hJyAmJiB0aGlzLmxhc3RWYWx1ZS5pbmRleE9mKCcsJykgPT09IC0xKVxyXG4gICAgICAgIHx8IGV2ZW50LmNvZGUgPT09ICdEZWxldGUnIHx8IGV2ZW50LmNvZGUgPT09ICdCYWNrc3BhY2UnIHx8ICFSZWdFeHAoL1xcRC8pLnRlc3QoZXZlbnQua2V5KSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==