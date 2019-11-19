/**
 * @fileoverview added by tsickle
 * Generated from: shared/components/actions-ribbon/actions-ribbon.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { ActionsRibbonService } from '../../services/actions-ribbon.service';
export class ActionsRibbonComponent {
    /**
     * @param {?} actionsRibbonService
     * @param {?} cd
     */
    constructor(actionsRibbonService, cd) {
        this.actionsRibbonService = actionsRibbonService;
        this.cd = cd;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.actionsRibbonService.changeSubject.subscribe((/**
         * @param {?} x
         * @return {?}
         */
        x => {
            this.cd.markForCheck();
        }));
    }
}
ActionsRibbonComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-actions-ribbon',
                template: "<div class=\"ribbon\" *ngIf=\"!(actionsRibbonService.infoTemplate === undefined\r\n&& actionsRibbonService.spacerTemplate === undefined\r\n&& actionsRibbonService.actionsTemplate === undefined\r\n&& actionsRibbonService.actionsContextTemplate === undefined)\">\r\n  <div class=\"ribbon-info\">\r\n    <ng-template [ngTemplateOutlet]=\"actionsRibbonService.infoTemplate\">\r\n    </ng-template>\r\n  </div>\r\n  <ng-template [ngTemplateOutlet]=\"actionsRibbonService.spacerTemplate\">\r\n  </ng-template>\r\n  <span fxFlex></span><span fxFlex></span>\r\n  <div class=\"action ribbon-context-action\" [class.last]=\"actionsRibbonService.actionsTemplate === undefined\"\r\n    [class.has-action]=\"actionsRibbonService.actionsContextTemplate !== undefined\">\r\n    <ng-template [ngTemplateOutlet]=\"actionsRibbonService.actionsContextTemplate\">\r\n    </ng-template>\r\n  </div>\r\n  <div class=\"action ribbon-actions\" [class.has-action]=\"actionsRibbonService.actionsTemplate !== undefined\">\r\n    <ng-template [ngTemplateOutlet]=\"actionsRibbonService.actionsTemplate\">\r\n    </ng-template>\r\n  </div>\r\n</div>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".ribbon{background-color:#dd2638;color:#fff;min-height:70px}"]
            }] }
];
/** @nocollapse */
ActionsRibbonComponent.ctorParameters = () => [
    { type: ActionsRibbonService },
    { type: ChangeDetectorRef }
];
if (false) {
    /** @type {?} */
    ActionsRibbonComponent.prototype.actionsRibbonService;
    /**
     * @type {?}
     * @private
     */
    ActionsRibbonComponent.prototype.cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy1yaWJib24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3NvZS1jbGllbnQtc2hhcmVkLyIsInNvdXJjZXMiOlsic2hhcmVkL2NvbXBvbmVudHMvYWN0aW9ucy1yaWJib24vYWN0aW9ucy1yaWJib24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQVE3RSxNQUFNLE9BQU8sc0JBQXNCOzs7OztJQUVqQyxZQUNTLG9CQUEwQyxFQUN6QyxFQUFxQjtRQUR0Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQ3pDLE9BQUUsR0FBRixFQUFFLENBQW1CO0lBQUksQ0FBQzs7OztJQUVwQyxRQUFRO1FBQ04sSUFBSSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDcEQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN6QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7OztZQWhCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsK21DQUE4QztnQkFFOUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2hEOzs7O1lBUFEsb0JBQW9CO1lBREQsaUJBQWlCOzs7O0lBWXpDLHNEQUFpRDs7Ozs7SUFDakQsb0NBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdG9yUmVmLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3Rpb25zUmliYm9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FjdGlvbnMtcmliYm9uLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtYWN0aW9ucy1yaWJib24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hY3Rpb25zLXJpYmJvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYWN0aW9ucy1yaWJib24uY29tcG9uZW50LmNzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBY3Rpb25zUmliYm9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgYWN0aW9uc1JpYmJvblNlcnZpY2U6IEFjdGlvbnNSaWJib25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuYWN0aW9uc1JpYmJvblNlcnZpY2UuY2hhbmdlU3ViamVjdC5zdWJzY3JpYmUoeCA9PiB7XHJcbiAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==