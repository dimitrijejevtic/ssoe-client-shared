/**
 * @fileoverview added by tsickle
 * Generated from: shared/components/confirm-dialog/confirm-dialog.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Utils } from '../../extensions/utils';
/**
 * @record
 */
export function IConfirmDialogData() { }
if (false) {
    /** @type {?} */
    IConfirmDialogData.prototype.title;
    /** @type {?} */
    IConfirmDialogData.prototype.text;
    /** @type {?} */
    IConfirmDialogData.prototype.translatedText;
    /** @type {?} */
    IConfirmDialogData.prototype.confirmLabel;
    /** @type {?} */
    IConfirmDialogData.prototype.cancelLabel;
    /** @type {?} */
    IConfirmDialogData.prototype.action;
    /** @type {?} */
    IConfirmDialogData.prototype.parameters;
}
var ConfirmDialogComponent = /** @class */ (function () {
    function ConfirmDialogComponent(data, dialogRef, translateService) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.translateService = translateService;
    }
    Object.defineProperty(ConfirmDialogComponent.prototype, "showText", {
        get: /**
         * @return {?}
         */
        function () {
            return !Utils.isNullEmptyOrUndefined(this.data.text);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfirmDialogComponent.prototype, "showTranslatedText", {
        get: /**
         * @return {?}
         */
        function () {
            return !Utils.isNullEmptyOrUndefined(this.data.translatedText);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfirmDialogComponent.prototype, "showOkButton", {
        get: /**
         * @return {?}
         */
        function () {
            return !Utils.isNullEmptyOrUndefined(this.data.confirmLabel);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfirmDialogComponent.prototype, "showCloseButton", {
        get: /**
         * @return {?}
         */
        function () {
            return !Utils.isNullEmptyOrUndefined(this.data.cancelLabel);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ConfirmDialogComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    ConfirmDialogComponent.prototype.ok = /**
     * @return {?}
     */
    function () {
        if (this.data.action !== undefined)
            this.data.action(this.data.parameters);
        this.dialogRef.close(true);
    };
    /**
     * @return {?}
     */
    ConfirmDialogComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close();
    };
    ConfirmDialogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-confirm-dialog',
                    template: "<div mat-dialog-title>\r\n  {{data.title | translate: translateService.cultureCode}}\r\n</div>\r\n<div mat-dialog-content>\r\n  <mat-card>\r\n    <mat-card-content>\r\n      <div *ngIf=\"showText\">\r\n        {{data.text | translate: translateService.cultureCode}}\r\n      </div>\r\n      <div *ngIf=\"showTranslatedText\">\r\n        {{data.translatedText}}\r\n      </div>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n<div mat-dialog-actions class=\"m-t-10\">\r\n  <span fxFlex></span>\r\n  <button mat-raised-button color=\"accent\" class=\"cancelBtn\" (click)=\"close()\" *ngIf=\"showCloseButton\">{{data.cancelLabel | translate: translateService.cultureCode}}</button>\r\n  <button mat-raised-button color=\"primary\" class=\"doneBtn\" (click)=\"ok()\" *ngIf=\"showOkButton\">{{data.confirmLabel | translate: translateService.cultureCode}}</button>\r\n</div>\r\n",
                    styles: [".mat-card{box-shadow:none;padding-left:0!important}.mat-dialog-title{padding-left:15px}.mat-dialog-actions{margin-bottom:-14px}"]
                }] }
    ];
    /** @nocollapse */
    ConfirmDialogComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] },
        { type: MatDialogRef },
        { type: TranslationService }
    ]; };
    return ConfirmDialogComponent;
}());
export { ConfirmDialogComponent };
if (false) {
    /** @type {?} */
    ConfirmDialogComponent.prototype.data;
    /** @type {?} */
    ConfirmDialogComponent.prototype.dialogRef;
    /** @type {?} */
    ConfirmDialogComponent.prototype.translateService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybS1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3NvZS1jbGllbnQtc2hhcmVkLyIsInNvdXJjZXMiOlsic2hhcmVkL2NvbXBvbmVudHMvY29uZmlybS1kaWFsb2cvY29uZmlybS1kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDeEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFFL0Msd0NBUUM7OztJQVBDLG1DQUFjOztJQUNkLGtDQUFhOztJQUNiLDRDQUF1Qjs7SUFDdkIsMENBQXFCOztJQUNyQix5Q0FBb0I7O0lBQ3BCLG9DQUFZOztJQUNaLHdDQUFnQjs7QUFHbEI7SUF3QkUsZ0NBQ2tDLElBQXdCLEVBQ2pELFNBQStDLEVBQy9DLGdCQUFvQztRQUZYLFNBQUksR0FBSixJQUFJLENBQW9CO1FBQ2pELGNBQVMsR0FBVCxTQUFTLENBQXNDO1FBQy9DLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBb0I7SUFBSSxDQUFDO0lBbkJsRCxzQkFBSSw0Q0FBUTs7OztRQUFaO1lBQ0UsT0FBTyxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZELENBQUM7OztPQUFBO0lBRUQsc0JBQUksc0RBQWtCOzs7O1FBQXRCO1lBQ0UsT0FBTyxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ2pFLENBQUM7OztPQUFBO0lBRUQsc0JBQUksZ0RBQVk7Ozs7UUFBaEI7WUFDRSxPQUFPLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDL0QsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxtREFBZTs7OztRQUFuQjtZQUNFLE9BQU8sQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM5RCxDQUFDOzs7T0FBQTs7OztJQU9ELHlDQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7SUFFRCxtQ0FBRTs7O0lBQUY7UUFDRSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLFNBQVM7WUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsc0NBQUs7OztJQUFMO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDOztnQkF4Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLDYzQkFBOEM7O2lCQUUvQzs7OztnREFxQkksTUFBTSxTQUFDLGVBQWU7Z0JBdENELFlBQVk7Z0JBRDdCLGtCQUFrQjs7SUF1RDNCLDZCQUFDO0NBQUEsQUF6Q0QsSUF5Q0M7U0FuQ1ksc0JBQXNCOzs7SUFtQi9CLHNDQUF3RDs7SUFDeEQsMkNBQXNEOztJQUN0RCxrREFBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRyYW5zbGF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNQVRfRElBTE9HX0RBVEEsIE1hdERpYWxvZ1JlZiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHsgVXRpbHMgfSBmcm9tICcuLi8uLi9leHRlbnNpb25zL3V0aWxzJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbmZpcm1EaWFsb2dEYXRhIHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIHRleHQ6IHN0cmluZztcclxuICB0cmFuc2xhdGVkVGV4dDogc3RyaW5nO1xyXG4gIGNvbmZpcm1MYWJlbDogc3RyaW5nO1xyXG4gIGNhbmNlbExhYmVsOiBzdHJpbmc7XHJcbiAgYWN0aW9uOiBhbnk7XHJcbiAgcGFyYW1ldGVyczogYW55O1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1jb25maXJtLWRpYWxvZycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbmZpcm0tZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jb25maXJtLWRpYWxvZy5jb21wb25lbnQuY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDb25maXJtRGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgZ2V0IHNob3dUZXh0KCkge1xyXG4gICAgcmV0dXJuICFVdGlscy5pc051bGxFbXB0eU9yVW5kZWZpbmVkKHRoaXMuZGF0YS50ZXh0KTtcclxuICB9XHJcblxyXG4gIGdldCBzaG93VHJhbnNsYXRlZFRleHQoKSB7XHJcbiAgICByZXR1cm4gIVV0aWxzLmlzTnVsbEVtcHR5T3JVbmRlZmluZWQodGhpcy5kYXRhLnRyYW5zbGF0ZWRUZXh0KTtcclxuICB9XHJcblxyXG4gIGdldCBzaG93T2tCdXR0b24oKSB7XHJcbiAgICByZXR1cm4gIVV0aWxzLmlzTnVsbEVtcHR5T3JVbmRlZmluZWQodGhpcy5kYXRhLmNvbmZpcm1MYWJlbCk7XHJcbiAgfVxyXG5cclxuICBnZXQgc2hvd0Nsb3NlQnV0dG9uKCkge1xyXG4gICAgcmV0dXJuICFVdGlscy5pc051bGxFbXB0eU9yVW5kZWZpbmVkKHRoaXMuZGF0YS5jYW5jZWxMYWJlbCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogSUNvbmZpcm1EaWFsb2dEYXRhLFxyXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPENvbmZpcm1EaWFsb2dDb21wb25lbnQ+LFxyXG4gICAgcHVibGljIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0aW9uU2VydmljZSkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAgb2soKSB7XHJcbiAgICBpZiAodGhpcy5kYXRhLmFjdGlvbiAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICB0aGlzLmRhdGEuYWN0aW9uKHRoaXMuZGF0YS5wYXJhbWV0ZXJzKTtcclxuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgY2xvc2UoKSB7XHJcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=