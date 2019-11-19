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
export class OptionsScrollDirective {
    /**
     * @param {?} autoComplete
     */
    constructor(autoComplete) {
        this.autoComplete = autoComplete;
        this.tressholdPercent = 0.8;
        // tslint:disable-next-line:no-output-rename
        this.scroll = new EventEmitter();
        // tslint:disable-next-line:variable-name
        this._onDestroy = new Subject();
        this.autoComplete.opened.pipe(tap((/**
         * @return {?}
         */
        () => {
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.removeScrollEventListener();
                this.autoComplete.panel.nativeElement.addEventListener('scroll', this.onScroll.bind(this));
            }), 1);
        })), takeUntil(this._onDestroy)).subscribe();
        this.autoComplete.closed.pipe(tap((/**
         * @return {?}
         */
        () => this.removeScrollEventListener())), takeUntil(this._onDestroy)).subscribe();
    }
    /**
     * @private
     * @return {?}
     */
    removeScrollEventListener() {
        if (!Utils.isNullEmptyOrUndefined(this.autoComplete.panel))
            this.autoComplete.panel.nativeElement
                .removeEventListener('scroll', this.onScroll);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._onDestroy.next();
        this._onDestroy.complete();
        this.removeScrollEventListener();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onScroll(event) {
        if (this.tressholdPercent === undefined)
            this.scroll.next({ autoComplete: this.autoComplete, scrollEvent: event });
        else {
            /** @type {?} */
            const tress = this.tressholdPercent * 100 * this.autoComplete.panel.nativeElement.scrollHeight / 100;
            /** @type {?} */
            const current = this.autoComplete.panel.nativeElement.scrollTop + this.autoComplete.panel.nativeElement.clientHeight;
            if (current > tress)
                this.scroll.next({ autoComplete: this.autoComplete, scrollEvent: event });
        }
    }
}
OptionsScrollDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: 'mat-autocomplete[optionsScroll]'
            },] }
];
/** @nocollapse */
OptionsScrollDirective.ctorParameters = () => [
    { type: MatAutocomplete }
];
OptionsScrollDirective.propDecorators = {
    tressholdPercent: [{ type: Input }],
    scroll: [{ type: Output, args: ['optionsScroll',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9ucy1zY3JvbGwuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3NvZS1jbGllbnQtc2hhcmVkLyIsInNvdXJjZXMiOlsic2hhcmVkL2NvbXBvbmVudHMvdHlwZWFoZWFkLWlucHV0L29wdGlvbnMtc2Nyb2xsLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDbEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFFL0MsOENBR0M7OztJQUZDLGdEQUE4Qjs7SUFDOUIsK0NBQW1COztBQU9yQixNQUFNLE9BQU8sc0JBQXNCOzs7O0lBU2pDLFlBQW1CLFlBQTZCO1FBQTdCLGlCQUFZLEdBQVosWUFBWSxDQUFpQjtRQU52QyxxQkFBZ0IsR0FBRyxHQUFHLENBQUM7O1FBRVAsV0FBTSxHQUFHLElBQUksWUFBWSxFQUE0QixDQUFDOztRQUcvRSxlQUFVLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUV6QixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQzNCLEdBQUc7OztRQUFDLEdBQUcsRUFBRTtZQUNQLFVBQVU7OztZQUFDLEdBQUcsRUFBRTtnQkFDZCxJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztnQkFDakMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzdGLENBQUMsR0FBRSxDQUFDLENBQUMsQ0FBQztRQUNSLENBQUMsRUFBQyxFQUNGLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQzNCLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFZCxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQzNCLEdBQUc7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxFQUFDLEVBQzNDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUM1QyxDQUFDOzs7OztJQUNPLHlCQUF5QjtRQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO1lBQ3hELElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLGFBQWE7aUJBQ2xDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7OztJQUNELFdBQVc7UUFDVCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7SUFDbkMsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsS0FBWTtRQUNuQixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsS0FBSyxTQUFTO1lBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7YUFDdkU7O2tCQUNHLEtBQUssR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxZQUFZLEdBQUcsR0FBRzs7a0JBQzlGLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxZQUFZO1lBRXBILElBQUksT0FBTyxHQUFHLEtBQUs7Z0JBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDN0U7SUFDSCxDQUFDOzs7WUFqREYsU0FBUyxTQUFDOztnQkFFVCxRQUFRLEVBQUUsaUNBQWlDO2FBQzVDOzs7O1lBYlEsZUFBZTs7OytCQWlCckIsS0FBSztxQkFFTCxNQUFNLFNBQUMsZUFBZTs7OztJQUZ2QixrREFBZ0M7O0lBRWhDLHdDQUErRTs7SUFHL0UsNENBQTJCOztJQUNmLDhDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0QXV0b2NvbXBsZXRlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRhcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBVdGlscyB9IGZyb20gJy4uLy4uL2V4dGVuc2lvbnMvdXRpbHMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQXV0b0NvbXBsZXRlU2Nyb2xsRXZlbnQge1xyXG4gIGF1dG9Db21wbGV0ZTogTWF0QXV0b2NvbXBsZXRlO1xyXG4gIHNjcm9sbEV2ZW50OiBFdmVudDtcclxufVxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnbWF0LWF1dG9jb21wbGV0ZVtvcHRpb25zU2Nyb2xsXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE9wdGlvbnNTY3JvbGxEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG5cclxuXHJcbiAgQElucHV0KCkgdHJlc3Nob2xkUGVyY2VudCA9IDAuODtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tb3V0cHV0LXJlbmFtZVxyXG4gIEBPdXRwdXQoJ29wdGlvbnNTY3JvbGwnKSBzY3JvbGwgPSBuZXcgRXZlbnRFbWl0dGVyPElBdXRvQ29tcGxldGVTY3JvbGxFdmVudD4oKTtcclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhcmlhYmxlLW5hbWVcclxuICBfb25EZXN0cm95ID0gbmV3IFN1YmplY3QoKTtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgYXV0b0NvbXBsZXRlOiBNYXRBdXRvY29tcGxldGUpIHtcclxuICAgIHRoaXMuYXV0b0NvbXBsZXRlLm9wZW5lZC5waXBlKFxyXG4gICAgICB0YXAoKCkgPT4ge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5yZW1vdmVTY3JvbGxFdmVudExpc3RlbmVyKCk7XHJcbiAgICAgICAgICB0aGlzLmF1dG9Db21wbGV0ZS5wYW5lbC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25TY3JvbGwuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgfSwgMSk7XHJcbiAgICAgIH0pLFxyXG4gICAgICB0YWtlVW50aWwodGhpcy5fb25EZXN0cm95KVxyXG4gICAgKS5zdWJzY3JpYmUoKTtcclxuXHJcbiAgICB0aGlzLmF1dG9Db21wbGV0ZS5jbG9zZWQucGlwZShcclxuICAgICAgdGFwKCgpID0+IHRoaXMucmVtb3ZlU2Nyb2xsRXZlbnRMaXN0ZW5lcigpKSxcclxuICAgICAgdGFrZVVudGlsKHRoaXMuX29uRGVzdHJveSkpLnN1YnNjcmliZSgpO1xyXG4gIH1cclxuICBwcml2YXRlIHJlbW92ZVNjcm9sbEV2ZW50TGlzdGVuZXIoKSB7XHJcbiAgICBpZiAoIVV0aWxzLmlzTnVsbEVtcHR5T3JVbmRlZmluZWQodGhpcy5hdXRvQ29tcGxldGUucGFuZWwpKVxyXG4gICAgICB0aGlzLmF1dG9Db21wbGV0ZS5wYW5lbC5uYXRpdmVFbGVtZW50XHJcbiAgICAgICAgLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25TY3JvbGwpO1xyXG4gIH1cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuX29uRGVzdHJveS5uZXh0KCk7XHJcbiAgICB0aGlzLl9vbkRlc3Ryb3kuY29tcGxldGUoKTtcclxuICAgIHRoaXMucmVtb3ZlU2Nyb2xsRXZlbnRMaXN0ZW5lcigpO1xyXG4gIH1cclxuXHJcbiAgb25TY3JvbGwoZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy50cmVzc2hvbGRQZXJjZW50ID09PSB1bmRlZmluZWQpXHJcbiAgICAgIHRoaXMuc2Nyb2xsLm5leHQoeyBhdXRvQ29tcGxldGU6IHRoaXMuYXV0b0NvbXBsZXRlLCBzY3JvbGxFdmVudDogZXZlbnQgfSk7XHJcbiAgICBlbHNlIHtcclxuICAgICAgY29uc3QgdHJlc3MgPSB0aGlzLnRyZXNzaG9sZFBlcmNlbnQgKiAxMDAgKiB0aGlzLmF1dG9Db21wbGV0ZS5wYW5lbC5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodCAvIDEwMDtcclxuICAgICAgY29uc3QgY3VycmVudCA9IHRoaXMuYXV0b0NvbXBsZXRlLnBhbmVsLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wICsgdGhpcy5hdXRvQ29tcGxldGUucGFuZWwubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQ7XHJcblxyXG4gICAgICBpZiAoY3VycmVudCA+IHRyZXNzKVxyXG4gICAgICAgIHRoaXMuc2Nyb2xsLm5leHQoeyBhdXRvQ29tcGxldGU6IHRoaXMuYXV0b0NvbXBsZXRlLCBzY3JvbGxFdmVudDogZXZlbnQgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==