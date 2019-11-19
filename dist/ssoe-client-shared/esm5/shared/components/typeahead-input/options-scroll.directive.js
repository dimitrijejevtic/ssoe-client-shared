/**
 * @fileoverview added by tsickle
 * Generated from: shared/components/typeahead-input/options-scroll.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, Output, EventEmitter } from '@angular/core';
import { MatAutocomplete } from '@angular/material';
import { Subject } from 'rxjs';
import { tap, takeUntil } from 'rxjs/operators';
import { Utils } from '../../extensions/utils';
/**
 * @record
 */
export function IAutoCompleteScrollEvent() { }
if (false) {
    /** @type {?} */
    IAutoCompleteScrollEvent.prototype.autoComplete;
    /** @type {?} */
    IAutoCompleteScrollEvent.prototype.scrollEvent;
}
var OptionsScrollDirective = /** @class */ (function () {
    function OptionsScrollDirective(autoComplete) {
        var _this = this;
        this.autoComplete = autoComplete;
        this.tressholdPercent = 0.8;
        // tslint:disable-next-line:no-output-rename
        this.scroll = new EventEmitter();
        // tslint:disable-next-line:variable-name
        this._onDestroy = new Subject();
        this.autoComplete.opened.pipe(tap((/**
         * @return {?}
         */
        function () {
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.removeScrollEventListener();
                _this.autoComplete.panel.nativeElement.addEventListener('scroll', _this.onScroll.bind(_this));
            }), 1);
        })), takeUntil(this._onDestroy)).subscribe();
        this.autoComplete.closed.pipe(tap((/**
         * @return {?}
         */
        function () { return _this.removeScrollEventListener(); })), takeUntil(this._onDestroy)).subscribe();
    }
    /**
     * @private
     * @return {?}
     */
    OptionsScrollDirective.prototype.removeScrollEventListener = /**
     * @private
     * @return {?}
     */
    function () {
        if (!Utils.isNullEmptyOrUndefined(this.autoComplete.panel))
            this.autoComplete.panel.nativeElement
                .removeEventListener('scroll', this.onScroll);
    };
    /**
     * @return {?}
     */
    OptionsScrollDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._onDestroy.next();
        this._onDestroy.complete();
        this.removeScrollEventListener();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    OptionsScrollDirective.prototype.onScroll = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.tressholdPercent === undefined)
            this.scroll.next({ autoComplete: this.autoComplete, scrollEvent: event });
        else {
            /** @type {?} */
            var tress = this.tressholdPercent * 100 * this.autoComplete.panel.nativeElement.scrollHeight / 100;
            /** @type {?} */
            var current = this.autoComplete.panel.nativeElement.scrollTop + this.autoComplete.panel.nativeElement.clientHeight;
            if (current > tress)
                this.scroll.next({ autoComplete: this.autoComplete, scrollEvent: event });
        }
    };
    OptionsScrollDirective.decorators = [
        { type: Directive, args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: 'mat-autocomplete[optionsScroll]'
                },] }
    ];
    /** @nocollapse */
    OptionsScrollDirective.ctorParameters = function () { return [
        { type: MatAutocomplete }
    ]; };
    OptionsScrollDirective.propDecorators = {
        tressholdPercent: [{ type: Input }],
        scroll: [{ type: Output, args: ['optionsScroll',] }]
    };
    return OptionsScrollDirective;
}());
export { OptionsScrollDirective };
if (false) {
    /** @type {?} */
    OptionsScrollDirective.prototype.tressholdPercent;
    /** @type {?} */
    OptionsScrollDirective.prototype.scroll;
    /** @type {?} */
    OptionsScrollDirective.prototype._onDestroy;
    /** @type {?} */
    OptionsScrollDirective.prototype.autoComplete;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9ucy1zY3JvbGwuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3NvZS1jbGllbnQtc2hhcmVkLyIsInNvdXJjZXMiOlsic2hhcmVkL2NvbXBvbmVudHMvdHlwZWFoZWFkLWlucHV0L29wdGlvbnMtc2Nyb2xsLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDbEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFFL0MsOENBR0M7OztJQUZDLGdEQUE4Qjs7SUFDOUIsK0NBQW1COztBQUdyQjtJQWFFLGdDQUFtQixZQUE2QjtRQUFoRCxpQkFjQztRQWRrQixpQkFBWSxHQUFaLFlBQVksQ0FBaUI7UUFOdkMscUJBQWdCLEdBQUcsR0FBRyxDQUFDOztRQUVQLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBNEIsQ0FBQzs7UUFHL0UsZUFBVSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFFekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUMzQixHQUFHOzs7UUFBQztZQUNGLFVBQVU7OztZQUFDO2dCQUNULEtBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO2dCQUNqQyxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDLENBQUM7WUFDN0YsQ0FBQyxHQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ1IsQ0FBQyxFQUFDLEVBQ0YsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FDM0IsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUVkLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDM0IsR0FBRzs7O1FBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyx5QkFBeUIsRUFBRSxFQUFoQyxDQUFnQyxFQUFDLEVBQzNDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUM1QyxDQUFDOzs7OztJQUNPLDBEQUF5Qjs7OztJQUFqQztRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7WUFDeEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsYUFBYTtpQkFDbEMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7O0lBQ0QsNENBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO0lBQ25DLENBQUM7Ozs7O0lBRUQseUNBQVE7Ozs7SUFBUixVQUFTLEtBQVk7UUFDbkIsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEtBQUssU0FBUztZQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO2FBQ3ZFOztnQkFDRyxLQUFLLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsWUFBWSxHQUFHLEdBQUc7O2dCQUM5RixPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsWUFBWTtZQUVwSCxJQUFJLE9BQU8sR0FBRyxLQUFLO2dCQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1NBQzdFO0lBQ0gsQ0FBQzs7Z0JBakRGLFNBQVMsU0FBQzs7b0JBRVQsUUFBUSxFQUFFLGlDQUFpQztpQkFDNUM7Ozs7Z0JBYlEsZUFBZTs7O21DQWlCckIsS0FBSzt5QkFFTCxNQUFNLFNBQUMsZUFBZTs7SUF5Q3pCLDZCQUFDO0NBQUEsQUFsREQsSUFrREM7U0E5Q1ksc0JBQXNCOzs7SUFHakMsa0RBQWdDOztJQUVoQyx3Q0FBK0U7O0lBRy9FLDRDQUEyQjs7SUFDZiw4Q0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdEF1dG9jb21wbGV0ZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YXAsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgVXRpbHMgfSBmcm9tICcuLi8uLi9leHRlbnNpb25zL3V0aWxzJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUF1dG9Db21wbGV0ZVNjcm9sbEV2ZW50IHtcclxuICBhdXRvQ29tcGxldGU6IE1hdEF1dG9jb21wbGV0ZTtcclxuICBzY3JvbGxFdmVudDogRXZlbnQ7XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ21hdC1hdXRvY29tcGxldGVbb3B0aW9uc1Njcm9sbF0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPcHRpb25zU2Nyb2xsRGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuXHJcblxyXG4gIEBJbnB1dCgpIHRyZXNzaG9sZFBlcmNlbnQgPSAwLjg7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLW91dHB1dC1yZW5hbWVcclxuICBAT3V0cHV0KCdvcHRpb25zU2Nyb2xsJykgc2Nyb2xsID0gbmV3IEV2ZW50RW1pdHRlcjxJQXV0b0NvbXBsZXRlU2Nyb2xsRXZlbnQ+KCk7XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp2YXJpYWJsZS1uYW1lXHJcbiAgX29uRGVzdHJveSA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgY29uc3RydWN0b3IocHVibGljIGF1dG9Db21wbGV0ZTogTWF0QXV0b2NvbXBsZXRlKSB7XHJcbiAgICB0aGlzLmF1dG9Db21wbGV0ZS5vcGVuZWQucGlwZShcclxuICAgICAgdGFwKCgpID0+IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHRoaXMucmVtb3ZlU2Nyb2xsRXZlbnRMaXN0ZW5lcigpO1xyXG4gICAgICAgICAgdGhpcy5hdXRvQ29tcGxldGUucGFuZWwubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uU2Nyb2xsLmJpbmQodGhpcykpO1xyXG4gICAgICAgIH0sIDEpO1xyXG4gICAgICB9KSxcclxuICAgICAgdGFrZVVudGlsKHRoaXMuX29uRGVzdHJveSlcclxuICAgICkuc3Vic2NyaWJlKCk7XHJcblxyXG4gICAgdGhpcy5hdXRvQ29tcGxldGUuY2xvc2VkLnBpcGUoXHJcbiAgICAgIHRhcCgoKSA9PiB0aGlzLnJlbW92ZVNjcm9sbEV2ZW50TGlzdGVuZXIoKSksXHJcbiAgICAgIHRha2VVbnRpbCh0aGlzLl9vbkRlc3Ryb3kpKS5zdWJzY3JpYmUoKTtcclxuICB9XHJcbiAgcHJpdmF0ZSByZW1vdmVTY3JvbGxFdmVudExpc3RlbmVyKCkge1xyXG4gICAgaWYgKCFVdGlscy5pc051bGxFbXB0eU9yVW5kZWZpbmVkKHRoaXMuYXV0b0NvbXBsZXRlLnBhbmVsKSlcclxuICAgICAgdGhpcy5hdXRvQ29tcGxldGUucGFuZWwubmF0aXZlRWxlbWVudFxyXG4gICAgICAgIC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uU2Nyb2xsKTtcclxuICB9XHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLl9vbkRlc3Ryb3kubmV4dCgpO1xyXG4gICAgdGhpcy5fb25EZXN0cm95LmNvbXBsZXRlKCk7XHJcbiAgICB0aGlzLnJlbW92ZVNjcm9sbEV2ZW50TGlzdGVuZXIoKTtcclxuICB9XHJcblxyXG4gIG9uU2Nyb2xsKGV2ZW50OiBFdmVudCkge1xyXG4gICAgaWYgKHRoaXMudHJlc3Nob2xkUGVyY2VudCA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICB0aGlzLnNjcm9sbC5uZXh0KHsgYXV0b0NvbXBsZXRlOiB0aGlzLmF1dG9Db21wbGV0ZSwgc2Nyb2xsRXZlbnQ6IGV2ZW50IH0pO1xyXG4gICAgZWxzZSB7XHJcbiAgICAgIGNvbnN0IHRyZXNzID0gdGhpcy50cmVzc2hvbGRQZXJjZW50ICogMTAwICogdGhpcy5hdXRvQ29tcGxldGUucGFuZWwubmF0aXZlRWxlbWVudC5zY3JvbGxIZWlnaHQgLyAxMDA7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLmF1dG9Db21wbGV0ZS5wYW5lbC5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcCArIHRoaXMuYXV0b0NvbXBsZXRlLnBhbmVsLm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0O1xyXG5cclxuICAgICAgaWYgKGN1cnJlbnQgPiB0cmVzcylcclxuICAgICAgICB0aGlzLnNjcm9sbC5uZXh0KHsgYXV0b0NvbXBsZXRlOiB0aGlzLmF1dG9Db21wbGV0ZSwgc2Nyb2xsRXZlbnQ6IGV2ZW50IH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=