/**
 * @fileoverview added by tsickle
 * Generated from: shared/components/base-selected-tab/base-selected-tab.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
var BaseSelectedTabComponent = /** @class */ (function () {
    function BaseSelectedTabComponent(activatedRoute, route) {
        this.activatedRoute = activatedRoute;
        this.route = route;
    }
    /**
     * @return {?}
     */
    BaseSelectedTabComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    BaseSelectedTabComponent.prototype.setUpTab = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe((/**
         * @param {?} params
         * @return {?}
         */
        function (params) {
            if (params.tab) {
                _this.tabSelectedIndex = +params.tab;
                _this.route.navigate([], {
                    queryParams: {
                        tab: null,
                    },
                    queryParamsHandling: 'merge',
                });
            }
        }));
    };
    /**
     * @param {?} selectedIndex
     * @param {?=} tabSubjects
     * @return {?}
     */
    BaseSelectedTabComponent.prototype.navigateToTabWithSubject = /**
     * @param {?} selectedIndex
     * @param {?=} tabSubjects
     * @return {?}
     */
    function (selectedIndex, tabSubjects) {
        tabSubjects[selectedIndex].next();
        // tabSubjects[selectedIndex].complete();
    };
    BaseSelectedTabComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-base-selected-tab',
                    template: "\n    <p>\n      NO UI TO BE FOUND HERE!\n    </p>\n  ",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    BaseSelectedTabComponent.ctorParameters = function () { return [
        { type: ActivatedRoute },
        { type: Router }
    ]; };
    return BaseSelectedTabComponent;
}());
export { BaseSelectedTabComponent };
if (false) {
    /** @type {?} */
    BaseSelectedTabComponent.prototype.tabSelectedIndex;
    /**
     * @type {?}
     * @private
     */
    BaseSelectedTabComponent.prototype.activatedRoute;
    /**
     * @type {?}
     * @private
     */
    BaseSelectedTabComponent.prototype.route;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1zZWxlY3RlZC10YWIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3NvZS1jbGllbnQtc2hhcmVkLyIsInNvdXJjZXMiOlsic2hhcmVkL2NvbXBvbmVudHMvYmFzZS1zZWxlY3RlZC10YWIvYmFzZS1zZWxlY3RlZC10YWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBS3pEO0lBYUUsa0NBQW9CLGNBQThCLEVBQzlCLEtBQWE7UUFEYixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsVUFBSyxHQUFMLEtBQUssQ0FBUTtJQUFJLENBQUM7Ozs7SUFFdEMsMkNBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7OztJQUVELDJDQUFROzs7SUFBUjtRQUFBLGlCQVlDO1FBWEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsTUFBTTtZQUMvQyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUU7Z0JBQ2QsS0FBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztnQkFDcEMsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFO29CQUN0QixXQUFXLEVBQUU7d0JBQ1gsR0FBRyxFQUFFLElBQUk7cUJBQ1Y7b0JBQ0QsbUJBQW1CLEVBQUUsT0FBTztpQkFDN0IsQ0FBQyxDQUFDO2FBQ0o7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUdELDJEQUF3Qjs7Ozs7SUFBeEIsVUFBeUIsYUFBYSxFQUFFLFdBQTRCO1FBQ2xFLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNsQyx5Q0FBeUM7SUFDM0MsQ0FBQzs7Z0JBckNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxRQUFRLEVBQUUsd0RBSVQ7O2lCQUVGOzs7O2dCQWJRLGNBQWM7Z0JBQUUsTUFBTTs7SUEyQy9CLCtCQUFDO0NBQUEsQUF0Q0QsSUFzQ0M7U0E3Qlksd0JBQXdCOzs7SUFFbkMsb0RBQXNCOzs7OztJQUVWLGtEQUFzQzs7Ozs7SUFDdEMseUNBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi4vLi4vZXh0ZW5zaW9ucy91dGlscyc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1iYXNlLXNlbGVjdGVkLXRhYicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxwPlxyXG4gICAgICBOTyBVSSBUTyBCRSBGT1VORCBIRVJFIVxyXG4gICAgPC9wPlxyXG4gIGAsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYmFzZS1zZWxlY3RlZC10YWIuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCYXNlU2VsZWN0ZWRUYWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICB0YWJTZWxlY3RlZEluZGV4OiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGU6IFJvdXRlcikgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAgc2V0VXBUYWIoKSB7XHJcbiAgICB0aGlzLmFjdGl2YXRlZFJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZSgocGFyYW1zKSA9PiB7XHJcbiAgICAgIGlmIChwYXJhbXMudGFiKSB7XHJcbiAgICAgICAgdGhpcy50YWJTZWxlY3RlZEluZGV4ID0gK3BhcmFtcy50YWI7XHJcbiAgICAgICAgdGhpcy5yb3V0ZS5uYXZpZ2F0ZShbXSwge1xyXG4gICAgICAgICAgcXVlcnlQYXJhbXM6IHtcclxuICAgICAgICAgICAgdGFiOiBudWxsLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHF1ZXJ5UGFyYW1zSGFuZGxpbmc6ICdtZXJnZScsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG4gIG5hdmlnYXRlVG9UYWJXaXRoU3ViamVjdChzZWxlY3RlZEluZGV4LCB0YWJTdWJqZWN0cz86IFN1YmplY3Q8YW55PltdKSB7XHJcbiAgICB0YWJTdWJqZWN0c1tzZWxlY3RlZEluZGV4XS5uZXh0KCk7XHJcbiAgICAvLyB0YWJTdWJqZWN0c1tzZWxlY3RlZEluZGV4XS5jb21wbGV0ZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=