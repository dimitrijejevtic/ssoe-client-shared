/**
 * @fileoverview added by tsickle
 * Generated from: shared/components/loader/loader.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { LoadingService } from '../../services/loading.service';
export class LoaderComponent {
    /**
     * @param {?} loaderService
     * @param {?} cd
     */
    constructor(loaderService, cd) {
        this.loaderService = loaderService;
        this.cd = cd;
        this.loadingStatus = 0;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.loaderService.loadingSubject.subscribe((/**
         * @param {?} x
         * @return {?}
         */
        x => {
            if (x === true)
                this.loadingStatus++;
            else
                this.loadingStatus--;
            if (this.loadingStatus < 0)
                this.loadingStatus = 0;
            this.cd.markForCheck();
        }));
    }
}
LoaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-loader',
                template: "<div class=\" loading-shade\" *ngIf=\"loadingStatus > 0\">\r\n  <mat-spinner></mat-spinner>\r\n</div>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            }] }
];
/** @nocollapse */
LoaderComponent.ctorParameters = () => [
    { type: LoadingService },
    { type: ChangeDetectorRef }
];
if (false) {
    /** @type {?} */
    LoaderComponent.prototype.loadingStatus;
    /**
     * @type {?}
     * @private
     */
    LoaderComponent.prototype.loaderService;
    /**
     * @type {?}
     * @private
     */
    LoaderComponent.prototype.cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Nzb2UtY2xpZW50LXNoYXJlZC8iLCJzb3VyY2VzIjpbInNoYXJlZC9jb21wb25lbnRzL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBaUIsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBUWhFLE1BQU0sT0FBTyxlQUFlOzs7OztJQUcxQixZQUFvQixhQUE2QixFQUFVLEVBQXFCO1FBQTVELGtCQUFhLEdBQWIsYUFBYSxDQUFnQjtRQUFVLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBRGhGLGtCQUFhLEdBQUcsQ0FBQyxDQUFDO0lBQ2tFLENBQUM7Ozs7SUFFckYsUUFBUTtRQUNOLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRTtZQUM5QyxJQUFJLENBQUMsS0FBSyxJQUFJO2dCQUNaLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQzs7Z0JBQ2xCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUUxQixJQUFJLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQztnQkFDeEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7WUFFekIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN6QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7OztZQXRCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLHFIQUFzQztnQkFFdEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2hEOzs7O1lBUFEsY0FBYztZQURxQyxpQkFBaUI7Ozs7SUFXM0Usd0NBQWtCOzs7OztJQUNOLHdDQUFxQzs7Ozs7SUFBRSw2QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBMb2FkaW5nU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xvYWRpbmcuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1sb2FkZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2FkZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2xvYWRlci5jb21wb25lbnQuY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIExvYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGxvYWRpbmdTdGF0dXMgPSAwO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9hZGVyU2VydmljZTogTG9hZGluZ1NlcnZpY2UsIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmxvYWRlclNlcnZpY2UubG9hZGluZ1N1YmplY3Quc3Vic2NyaWJlKHggPT4ge1xyXG4gICAgICBpZiAoeCA9PT0gdHJ1ZSlcclxuICAgICAgICB0aGlzLmxvYWRpbmdTdGF0dXMrKztcclxuICAgICAgZWxzZSB0aGlzLmxvYWRpbmdTdGF0dXMtLTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmxvYWRpbmdTdGF0dXMgPCAwKVxyXG4gICAgICAgIHRoaXMubG9hZGluZ1N0YXR1cyA9IDA7XHJcblxyXG4gICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=