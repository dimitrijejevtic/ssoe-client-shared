/**
 * @fileoverview added by tsickle
 * Generated from: shared/components/currency-amount/decimal-formatter.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, ElementRef, HostListener } from '@angular/core';
import { NgModel } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { Utils } from '../../extensions/utils';
export class DecimalFormatterDirective {
    /**
     * @param {?} elementRef
     * @param {?} ngModel
     */
    constructor(elementRef, ngModel) {
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
    ngOnInit() {
        if (this.decimals == null)
            this.decimals = '1.2-2';
        this.el.value = this.decimalFormatPipe.transform(this.el.value, this.decimals, this.locale);
        if (this.el.value === '0')
            this.el.value = '';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onFocus(value) {
        this.el.value = this.ngModel.viewModel;
        this.lastValue = this.ngModel.viewModel;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onBlur(value) {
        try {
            this.ngModel.viewModel = this.el.value;
            /** @type {?} */
            const nocomma = this.el.value.replace(',', '.');
            this.el.value = this.decimalFormatPipe.transform(nocomma, this.decimals, this.locale);
        }
        catch (ex) {
            if (!Utils.isNullEmptyOrUndefined(this.lastValue) && Utils.regexMatch(this.rgx, this.lastValue)) {
                this.el.value = this.decimalFormatPipe.transform(this.lastValue, this.decimals, this.locale);
                this.ngModel.viewModel = this.lastValue;
            }
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyPress(event) {
        this.lastValue = Utils.deepClone(event.target.value);
        if ((event.code === 'Comma' && this.lastValue.indexOf(',') === -1)
            || event.code === 'Delete' || event.code === 'Backspace' || !RegExp(/\D/).test(event.key)) {
            return true;
        }
        else {
            return false;
        }
    }
}
DecimalFormatterDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[decimalFormatter][ngModel]',
                providers: [NgModel]
            },] }
];
/** @nocollapse */
DecimalFormatterDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: NgModel }
];
DecimalFormatterDirective.propDecorators = {
    decimals: [{ type: Input, args: ['decimals',] }],
    onFocus: [{ type: HostListener, args: ['focus', ['$event.target.value'],] }],
    onBlur: [{ type: HostListener, args: ['blur', ['$event.target.value'],] }],
    onKeyPress: [{ type: HostListener, args: ['keydown', ['$event'],] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjaW1hbC1mb3JtYXR0ZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3NvZS1jbGllbnQtc2hhcmVkLyIsInNvdXJjZXMiOlsic2hhcmVkL2NvbXBvbmVudHMvY3VycmVuY3ktYW1vdW50L2RlY2ltYWwtZm9ybWF0dGVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkYsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUU5QyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFPL0MsTUFBTSxPQUFPLHlCQUF5Qjs7Ozs7SUFVcEMsWUFDa0IsVUFBc0IsRUFDdEIsT0FBZ0I7UUFEaEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixZQUFPLEdBQVAsT0FBTyxDQUFTO1FBUmxDLFdBQU0sR0FBRyxZQUFZLENBQUM7UUFHdEIsUUFBRyxHQUFHLDJCQUEyQixDQUFDO1FBT2hDLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFDeEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFFRixRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUk7WUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7UUFFMUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1RixJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxLQUFLLEdBQUc7WUFDdkIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBR0QsT0FBTyxDQUFDLEtBQUs7UUFDVCxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztRQUN2QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO0lBQzVDLENBQUM7Ozs7O0lBR0QsTUFBTSxDQUFDLEtBQUs7UUFDVixJQUFJO1lBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7O2tCQUNqQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7WUFDL0MsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDdkY7UUFBQyxPQUFPLEVBQUUsRUFBRTtZQUNYLElBQUksQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUU7Z0JBQy9GLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDN0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUN6QztTQUNGO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsS0FBSztRQUNaLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLE9BQU8sSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztlQUM3RCxLQUFLLENBQUMsSUFBSSxLQUFLLFFBQVEsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLFdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzNGLE9BQU8sSUFBSSxDQUFDO1NBQ2I7YUFBTTtZQUNMLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7SUFDSCxDQUFDOzs7WUE1REosU0FBUyxTQUFDOztnQkFFVCxRQUFRLEVBQUUsNkJBQTZCO2dCQUN2QyxTQUFTLEVBQUUsQ0FBQyxPQUFPLENBQUM7YUFDckI7Ozs7WUFWa0MsVUFBVTtZQUNwQyxPQUFPOzs7dUJBYWIsS0FBSyxTQUFDLFVBQVU7c0JBd0JoQixZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMscUJBQXFCLENBQUM7cUJBTTdDLFlBQVksU0FBQyxNQUFNLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQzt5QkFhNUMsWUFBWSxTQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7OztJQTNDbkMsNkNBQW9DOztJQUNwQywyQ0FBc0I7O0lBQ3RCLHNEQUErQjs7SUFDL0IsOENBQWU7O0lBQ2Ysd0NBQWtDOzs7OztJQUVsQyx1Q0FBNkI7Ozs7O0lBRW5CLCtDQUE4Qjs7Ozs7SUFDOUIsNENBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBPbkluaXQsIElucHV0LCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdNb2RlbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgRGVjaW1hbFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyB0YXAsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgVXRpbHMgfSBmcm9tICcuLi8uLi9leHRlbnNpb25zL3V0aWxzJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ1tkZWNpbWFsRm9ybWF0dGVyXVtuZ01vZGVsXScsXHJcbiAgcHJvdmlkZXJzOiBbTmdNb2RlbF1cclxufSlcclxuZXhwb3J0IGNsYXNzIERlY2ltYWxGb3JtYXR0ZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taW5wdXQtcmVuYW1lXHJcbiAgQElucHV0KCdkZWNpbWFscycpIGRlY2ltYWxzOiBzdHJpbmc7XHJcbiAgbG9jYWxlID0gJ3NyLUxhdG4tTUUnO1xyXG4gIGRlY2ltYWxGb3JtYXRQaXBlOiBEZWNpbWFsUGlwZTtcclxuICBsYXN0VmFsdWU6IGFueTtcclxuICByZ3ggPSAvXlxcZCooKFxcLHxcXC4pXFxkKik/KD8hXFx3KSQvZztcclxuXHJcbiAgcHJpdmF0ZSBlbDogSFRNTElucHV0RWxlbWVudDtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgICAgICAgICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgICAgICAgICBwcml2YXRlIG5nTW9kZWw6IE5nTW9kZWxcclxuICApIHtcclxuICAgIHRoaXMuZWwgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICAgIHRoaXMuZGVjaW1hbEZvcm1hdFBpcGUgPSBuZXcgRGVjaW1hbFBpcGUoJ3NyLUxhdG4tTUUnKTtcclxuICAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRlY2ltYWxzID09IG51bGwpXHJcbiAgICAgIHRoaXMuZGVjaW1hbHMgPSAnMS4yLTInO1xyXG5cclxuICAgIHRoaXMuZWwudmFsdWUgPSB0aGlzLmRlY2ltYWxGb3JtYXRQaXBlLnRyYW5zZm9ybSh0aGlzLmVsLnZhbHVlLCB0aGlzLmRlY2ltYWxzLCB0aGlzLmxvY2FsZSk7XHJcbiAgICBpZiAodGhpcy5lbC52YWx1ZSA9PT0gJzAnKVxyXG4gICAgICB0aGlzLmVsLnZhbHVlID0gJyc7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdmb2N1cycsIFsnJGV2ZW50LnRhcmdldC52YWx1ZSddKVxyXG4gIG9uRm9jdXModmFsdWUpIHtcclxuICAgICAgdGhpcy5lbC52YWx1ZSA9IHRoaXMubmdNb2RlbC52aWV3TW9kZWw7XHJcbiAgICAgIHRoaXMubGFzdFZhbHVlID0gdGhpcy5uZ01vZGVsLnZpZXdNb2RlbDtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2JsdXInLCBbJyRldmVudC50YXJnZXQudmFsdWUnXSlcclxuICBvbkJsdXIodmFsdWUpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHRoaXMubmdNb2RlbC52aWV3TW9kZWwgPSB0aGlzLmVsLnZhbHVlO1xyXG4gICAgICBjb25zdCBub2NvbW1hID0gdGhpcy5lbC52YWx1ZS5yZXBsYWNlKCcsJywgJy4nKTtcclxuICAgICAgdGhpcy5lbC52YWx1ZSA9IHRoaXMuZGVjaW1hbEZvcm1hdFBpcGUudHJhbnNmb3JtKG5vY29tbWEsIHRoaXMuZGVjaW1hbHMsIHRoaXMubG9jYWxlKTtcclxuICAgIH0gY2F0Y2ggKGV4KSB7XHJcbiAgICAgIGlmICghVXRpbHMuaXNOdWxsRW1wdHlPclVuZGVmaW5lZCh0aGlzLmxhc3RWYWx1ZSkgJiYgVXRpbHMucmVnZXhNYXRjaCh0aGlzLnJneCwgdGhpcy5sYXN0VmFsdWUpKSB7XHJcbiAgICAgICAgdGhpcy5lbC52YWx1ZSA9IHRoaXMuZGVjaW1hbEZvcm1hdFBpcGUudHJhbnNmb3JtKHRoaXMubGFzdFZhbHVlLCB0aGlzLmRlY2ltYWxzLCB0aGlzLmxvY2FsZSk7XHJcbiAgICAgICAgdGhpcy5uZ01vZGVsLnZpZXdNb2RlbCA9IHRoaXMubGFzdFZhbHVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbJyRldmVudCddKVxyXG4gIG9uS2V5UHJlc3MoZXZlbnQpIHtcclxuICAgICAgdGhpcy5sYXN0VmFsdWUgPSBVdGlscy5kZWVwQ2xvbmUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgaWYgKChldmVudC5jb2RlID09PSAnQ29tbWEnICYmIHRoaXMubGFzdFZhbHVlLmluZGV4T2YoJywnKSA9PT0gLTEpXHJcbiAgICAgICAgfHwgZXZlbnQuY29kZSA9PT0gJ0RlbGV0ZScgfHwgZXZlbnQuY29kZSA9PT0gJ0JhY2tzcGFjZScgfHwgIVJlZ0V4cCgvXFxELykudGVzdChldmVudC5rZXkpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19