/**
 * @fileoverview added by tsickle
 * Generated from: shared/components/actions-ribbon/actions-ribbon.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { ActionsRibbonService } from '../../services/actions-ribbon.service';
var ActionsRibbonComponent = /** @class */ (function () {
    function ActionsRibbonComponent(actionsRibbonService, cd) {
        this.actionsRibbonService = actionsRibbonService;
        this.cd = cd;
    }
    /**
     * @return {?}
     */
    ActionsRibbonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.actionsRibbonService.changeSubject.subscribe((/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            _this.cd.markForCheck();
        }));
    };
    ActionsRibbonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-actions-ribbon',
                    template: "<div class=\"ribbon\" *ngIf=\"!(actionsRibbonService.infoTemplate === undefined\r\n&& actionsRibbonService.spacerTemplate === undefined\r\n&& actionsRibbonService.actionsTemplate === undefined\r\n&& actionsRibbonService.actionsContextTemplate === undefined)\">\r\n  <div class=\"ribbon-info\">\r\n    <ng-template [ngTemplateOutlet]=\"actionsRibbonService.infoTemplate\">\r\n    </ng-template>\r\n  </div>\r\n  <ng-template [ngTemplateOutlet]=\"actionsRibbonService.spacerTemplate\">\r\n  </ng-template>\r\n  <span fxFlex></span><span fxFlex></span>\r\n  <div class=\"action ribbon-context-action\" [class.last]=\"actionsRibbonService.actionsTemplate === undefined\"\r\n    [class.has-action]=\"actionsRibbonService.actionsContextTemplate !== undefined\">\r\n    <ng-template [ngTemplateOutlet]=\"actionsRibbonService.actionsContextTemplate\">\r\n    </ng-template>\r\n  </div>\r\n  <div class=\"action ribbon-actions\" [class.has-action]=\"actionsRibbonService.actionsTemplate !== undefined\">\r\n    <ng-template [ngTemplateOutlet]=\"actionsRibbonService.actionsTemplate\">\r\n    </ng-template>\r\n  </div>\r\n</div>\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".ribbon{background-color:#dd2638;color:#fff;min-height:70px}"]
                }] }
    ];
    /** @nocollapse */
    ActionsRibbonComponent.ctorParameters = function () { return [
        { type: ActionsRibbonService },
        { type: ChangeDetectorRef }
    ]; };
    return ActionsRibbonComponent;
}());
export { ActionsRibbonComponent };
if (false) {
    /** @type {?} */
    ActionsRibbonComponent.prototype.actionsRibbonService;
    /**
     * @type {?}
     * @private
     */
    ActionsRibbonComponent.prototype.cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy1yaWJib24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3NvZS1jbGllbnQtc2hhcmVkLyIsInNvdXJjZXMiOlsic2hhcmVkL2NvbXBvbmVudHMvYWN0aW9ucy1yaWJib24vYWN0aW9ucy1yaWJib24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUU3RTtJQVFFLGdDQUNTLG9CQUEwQyxFQUN6QyxFQUFxQjtRQUR0Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQ3pDLE9BQUUsR0FBRixFQUFFLENBQW1CO0lBQUksQ0FBQzs7OztJQUVwQyx5Q0FBUTs7O0lBQVI7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsQ0FBQztZQUNqRCxLQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3pCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBaEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QiwrbUNBQThDO29CQUU5QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7aUJBQ2hEOzs7O2dCQVBRLG9CQUFvQjtnQkFERCxpQkFBaUI7O0lBcUI3Qyw2QkFBQztDQUFBLEFBbEJELElBa0JDO1NBWlksc0JBQXNCOzs7SUFHL0Isc0RBQWlEOzs7OztJQUNqRCxvQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGlvbnNSaWJib25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYWN0aW9ucy1yaWJib24uc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1hY3Rpb25zLXJpYmJvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FjdGlvbnMtcmliYm9uLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9hY3Rpb25zLXJpYmJvbi5jb21wb25lbnQuY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIEFjdGlvbnNSaWJib25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBhY3Rpb25zUmliYm9uU2VydmljZTogQWN0aW9uc1JpYmJvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5hY3Rpb25zUmliYm9uU2VydmljZS5jaGFuZ2VTdWJqZWN0LnN1YnNjcmliZSh4ID0+IHtcclxuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbn1cclxuIl19