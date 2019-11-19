/**
 * @fileoverview added by tsickle
 * Generated from: shared/components/notification-dialog-unsaved/notification-dialog-unsaved.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { TranslationService } from '../../services/translation.service';
import { Utils } from '../../extensions/utils';
var NotificationDialogUnsavedComponent = /** @class */ (function () {
    function NotificationDialogUnsavedComponent(data, dialogRef, translateService) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.translateService = translateService;
        this.saveDataText = 'Save data?';
        this.bodyText = 'You have unsaved changes! Do you want to continue?';
    }
    /**
     * @return {?}
     */
    NotificationDialogUnsavedComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!Utils.isNullEmptyOrUndefined(this.data)) {
            if (!Utils.isNullEmptyOrUndefined(this.data.saveDataText))
                this.saveDataText = this.data.saveDataText;
            if (!Utils.isNullEmptyOrUndefined(this.data.bodyText))
                this.bodyText = this.data.bodyText;
        }
    };
    NotificationDialogUnsavedComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-notification-dialog-unsaved',
                    template: "<h1 mat-dialog-title>{{saveDataText | translate : translateService.cultureCode}}</h1>\r\n<div mat-dialog-content>\r\n    <mat-card>\r\n        <mat-card-content>\r\n           <div>{{bodyText | translate : translateService.cultureCode}}</div>\r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n</div>\r\n<div mat-dialog-actions class=\"m-t-10\">\r\n  <button mat-dialog-close mat-raised-button color=\"accent\">{{'No' | translate : translateService.cultureCode}}</button>\r\n  <button  mat-raised-button color=\"primary\" [mat-dialog-close]=\"true\">{{'Yes' | translate : translateService.cultureCode}}</button>\r\n</div>\r\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    NotificationDialogUnsavedComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] },
        { type: MatDialogRef },
        { type: TranslationService }
    ]; };
    return NotificationDialogUnsavedComponent;
}());
export { NotificationDialogUnsavedComponent };
if (false) {
    /** @type {?} */
    NotificationDialogUnsavedComponent.prototype.saveDataText;
    /** @type {?} */
    NotificationDialogUnsavedComponent.prototype.bodyText;
    /** @type {?} */
    NotificationDialogUnsavedComponent.prototype.data;
    /** @type {?} */
    NotificationDialogUnsavedComponent.prototype.dialogRef;
    /** @type {?} */
    NotificationDialogUnsavedComponent.prototype.translateService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLWRpYWxvZy11bnNhdmVkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Nzb2UtY2xpZW50LXNoYXJlZC8iLCJzb3VyY2VzIjpbInNoYXJlZC9jb21wb25lbnRzL25vdGlmaWNhdGlvbi1kaWFsb2ctdW5zYXZlZC9ub3RpZmljYXRpb24tZGlhbG9nLXVuc2F2ZWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFL0M7SUFVRSw0Q0FDa0MsSUFBUyxFQUNsQyxTQUEyRCxFQUMzRCxnQkFBb0M7UUFGWCxTQUFJLEdBQUosSUFBSSxDQUFLO1FBQ2xDLGNBQVMsR0FBVCxTQUFTLENBQWtEO1FBQzNELHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBb0I7UUFON0MsaUJBQVksR0FBRyxZQUFZLENBQUM7UUFDNUIsYUFBUSxHQUFHLG9EQUFvRCxDQUFDO0lBS2YsQ0FBQzs7OztJQUVsRCxxREFBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM1QyxJQUFJLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUN2RCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBRTdDLElBQUksQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ25ELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDdEM7SUFDSCxDQUFDOztnQkF2QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQ0FBaUM7b0JBQzNDLG1vQkFBMkQ7O2lCQUU1RDs7OztnREFPSSxNQUFNLFNBQUMsZUFBZTtnQkFmRCxZQUFZO2dCQUM3QixrQkFBa0I7O0lBMkIzQix5Q0FBQztDQUFBLEFBeEJELElBd0JDO1NBbkJZLGtDQUFrQzs7O0lBRTdDLDBEQUE0Qjs7SUFDNUIsc0RBQWdFOztJQUc5RCxrREFBeUM7O0lBQ3pDLHVEQUFrRTs7SUFDbEUsOERBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNQVRfRElBTE9HX0RBVEEsIE1hdERpYWxvZ1JlZiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHsgVHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdHJhbnNsYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi4vLi4vZXh0ZW5zaW9ucy91dGlscyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1ub3RpZmljYXRpb24tZGlhbG9nLXVuc2F2ZWQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9ub3RpZmljYXRpb24tZGlhbG9nLXVuc2F2ZWQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL25vdGlmaWNhdGlvbi1kaWFsb2ctdW5zYXZlZC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvbkRpYWxvZ1Vuc2F2ZWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBzYXZlRGF0YVRleHQgPSAnU2F2ZSBkYXRhPyc7XHJcbiAgYm9keVRleHQgPSAnWW91IGhhdmUgdW5zYXZlZCBjaGFuZ2VzISBEbyB5b3Ugd2FudCB0byBjb250aW51ZT8nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogYW55LFxyXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPE5vdGlmaWNhdGlvbkRpYWxvZ1Vuc2F2ZWRDb21wb25lbnQ+LFxyXG4gICAgcHVibGljIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0aW9uU2VydmljZSkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgaWYgKCFVdGlscy5pc051bGxFbXB0eU9yVW5kZWZpbmVkKHRoaXMuZGF0YSkpIHtcclxuICAgICAgaWYgKCFVdGlscy5pc051bGxFbXB0eU9yVW5kZWZpbmVkKHRoaXMuZGF0YS5zYXZlRGF0YVRleHQpKVxyXG4gICAgICAgIHRoaXMuc2F2ZURhdGFUZXh0ID0gdGhpcy5kYXRhLnNhdmVEYXRhVGV4dDtcclxuXHJcbiAgICAgIGlmICghVXRpbHMuaXNOdWxsRW1wdHlPclVuZGVmaW5lZCh0aGlzLmRhdGEuYm9keVRleHQpKVxyXG4gICAgICAgIHRoaXMuYm9keVRleHQgPSB0aGlzLmRhdGEuYm9keVRleHQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==