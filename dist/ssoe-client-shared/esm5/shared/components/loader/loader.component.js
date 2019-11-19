/**
 * @fileoverview added by tsickle
 * Generated from: shared/components/loader/loader.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { LoadingService } from '../../services/loading.service';
var LoaderComponent = /** @class */ (function () {
    function LoaderComponent(loaderService, cd) {
        this.loaderService = loaderService;
        this.cd = cd;
        this.loadingStatus = 0;
    }
    /**
     * @return {?}
     */
    LoaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.loaderService.loadingSubject.subscribe((/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            if (x === true)
                _this.loadingStatus++;
            else
                _this.loadingStatus--;
            if (_this.loadingStatus < 0)
                _this.loadingStatus = 0;
            _this.cd.markForCheck();
        }));
    };
    LoaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-loader',
                    template: "<div class=\" loading-shade\" *ngIf=\"loadingStatus > 0\">\r\n  <mat-spinner></mat-spinner>\r\n</div>\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    LoaderComponent.ctorParameters = function () { return [
        { type: LoadingService },
        { type: ChangeDetectorRef }
    ]; };
    return LoaderComponent;
}());
export { LoaderComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Nzb2UtY2xpZW50LXNoYXJlZC8iLCJzb3VyY2VzIjpbInNoYXJlZC9jb21wb25lbnRzL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBaUIsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRWhFO0lBU0UseUJBQW9CLGFBQTZCLEVBQVUsRUFBcUI7UUFBNUQsa0JBQWEsR0FBYixhQUFhLENBQWdCO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFEaEYsa0JBQWEsR0FBRyxDQUFDLENBQUM7SUFDa0UsQ0FBQzs7OztJQUVyRixrQ0FBUTs7O0lBQVI7UUFBQSxpQkFXQztRQVZDLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLENBQUM7WUFDM0MsSUFBSSxDQUFDLEtBQUssSUFBSTtnQkFDWixLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7O2dCQUNsQixLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFFMUIsSUFBSSxLQUFJLENBQUMsYUFBYSxHQUFHLENBQUM7Z0JBQ3hCLEtBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1lBRXpCLEtBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDekIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOztnQkF0QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixxSEFBc0M7b0JBRXRDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztpQkFDaEQ7Ozs7Z0JBUFEsY0FBYztnQkFEcUMsaUJBQWlCOztJQTJCN0Usc0JBQUM7Q0FBQSxBQXhCRCxJQXdCQztTQWxCWSxlQUFlOzs7SUFFMUIsd0NBQWtCOzs7OztJQUNOLHdDQUFxQzs7Ozs7SUFBRSw2QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBMb2FkaW5nU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xvYWRpbmcuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1sb2FkZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2FkZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2xvYWRlci5jb21wb25lbnQuY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIExvYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGxvYWRpbmdTdGF0dXMgPSAwO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9hZGVyU2VydmljZTogTG9hZGluZ1NlcnZpY2UsIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmxvYWRlclNlcnZpY2UubG9hZGluZ1N1YmplY3Quc3Vic2NyaWJlKHggPT4ge1xyXG4gICAgICBpZiAoeCA9PT0gdHJ1ZSlcclxuICAgICAgICB0aGlzLmxvYWRpbmdTdGF0dXMrKztcclxuICAgICAgZWxzZSB0aGlzLmxvYWRpbmdTdGF0dXMtLTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmxvYWRpbmdTdGF0dXMgPCAwKVxyXG4gICAgICAgIHRoaXMubG9hZGluZ1N0YXR1cyA9IDA7XHJcblxyXG4gICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=