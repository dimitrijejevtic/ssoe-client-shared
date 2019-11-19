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
export class ConfirmDialogComponent {
    /**
     * @param {?} data
     * @param {?} dialogRef
     * @param {?} translateService
     */
    constructor(data, dialogRef, translateService) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.translateService = translateService;
    }
    /**
     * @return {?}
     */
    get showText() {
        return !Utils.isNullEmptyOrUndefined(this.data.text);
    }
    /**
     * @return {?}
     */
    get showTranslatedText() {
        return !Utils.isNullEmptyOrUndefined(this.data.translatedText);
    }
    /**
     * @return {?}
     */
    get showOkButton() {
        return !Utils.isNullEmptyOrUndefined(this.data.confirmLabel);
    }
    /**
     * @return {?}
     */
    get showCloseButton() {
        return !Utils.isNullEmptyOrUndefined(this.data.cancelLabel);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ok() {
        if (this.data.action !== undefined)
            this.data.action(this.data.parameters);
        this.dialogRef.close(true);
    }
    /**
     * @return {?}
     */
    close() {
        this.dialogRef.close();
    }
}
ConfirmDialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-confirm-dialog',
                template: "<div mat-dialog-title>\r\n  {{data.title | translate: translateService.cultureCode}}\r\n</div>\r\n<div mat-dialog-content>\r\n  <mat-card>\r\n    <mat-card-content>\r\n      <div *ngIf=\"showText\">\r\n        {{data.text | translate: translateService.cultureCode}}\r\n      </div>\r\n      <div *ngIf=\"showTranslatedText\">\r\n        {{data.translatedText}}\r\n      </div>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n<div mat-dialog-actions class=\"m-t-10\">\r\n  <span fxFlex></span>\r\n  <button mat-raised-button color=\"accent\" class=\"cancelBtn\" (click)=\"close()\" *ngIf=\"showCloseButton\">{{data.cancelLabel | translate: translateService.cultureCode}}</button>\r\n  <button mat-raised-button color=\"primary\" class=\"doneBtn\" (click)=\"ok()\" *ngIf=\"showOkButton\">{{data.confirmLabel | translate: translateService.cultureCode}}</button>\r\n</div>\r\n",
                styles: [".mat-card{box-shadow:none;padding-left:0!important}.mat-dialog-title{padding-left:15px}.mat-dialog-actions{margin-bottom:-14px}"]
            }] }
];
/** @nocollapse */
ConfirmDialogComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] },
    { type: MatDialogRef },
    { type: TranslationService }
];
if (false) {
    /** @type {?} */
    ConfirmDialogComponent.prototype.data;
    /** @type {?} */
    ConfirmDialogComponent.prototype.dialogRef;
    /** @type {?} */
    ConfirmDialogComponent.prototype.translateService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybS1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3NvZS1jbGllbnQtc2hhcmVkLyIsInNvdXJjZXMiOlsic2hhcmVkL2NvbXBvbmVudHMvY29uZmlybS1kaWFsb2cvY29uZmlybS1kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDeEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFFL0Msd0NBUUM7OztJQVBDLG1DQUFjOztJQUNkLGtDQUFhOztJQUNiLDRDQUF1Qjs7SUFDdkIsMENBQXFCOztJQUNyQix5Q0FBb0I7O0lBQ3BCLG9DQUFZOztJQUNaLHdDQUFnQjs7QUFTbEIsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7O0lBa0JqQyxZQUNrQyxJQUF3QixFQUNqRCxTQUErQyxFQUMvQyxnQkFBb0M7UUFGWCxTQUFJLEdBQUosSUFBSSxDQUFvQjtRQUNqRCxjQUFTLEdBQVQsU0FBUyxDQUFzQztRQUMvQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQW9CO0lBQUksQ0FBQzs7OztJQW5CbEQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7SUFFRCxJQUFJLGtCQUFrQjtRQUNwQixPQUFPLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDakUsQ0FBQzs7OztJQUVELElBQUksWUFBWTtRQUNkLE9BQU8sQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMvRCxDQUFDOzs7O0lBRUQsSUFBSSxlQUFlO1FBQ2pCLE9BQU8sQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7O0lBT0QsUUFBUTtJQUNSLENBQUM7Ozs7SUFFRCxFQUFFO1FBQ0EsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTO1lBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVELEtBQUs7UUFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7OztZQXhDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsNjNCQUE4Qzs7YUFFL0M7Ozs7NENBcUJJLE1BQU0sU0FBQyxlQUFlO1lBdENELFlBQVk7WUFEN0Isa0JBQWtCOzs7O0lBdUN2QixzQ0FBd0Q7O0lBQ3hELDJDQUFzRDs7SUFDdEQsa0RBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy90cmFuc2xhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTUFUX0RJQUxPR19EQVRBLCBNYXREaWFsb2dSZWYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi4vLi4vZXh0ZW5zaW9ucy91dGlscyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDb25maXJtRGlhbG9nRGF0YSB7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICB0ZXh0OiBzdHJpbmc7XHJcbiAgdHJhbnNsYXRlZFRleHQ6IHN0cmluZztcclxuICBjb25maXJtTGFiZWw6IHN0cmluZztcclxuICBjYW5jZWxMYWJlbDogc3RyaW5nO1xyXG4gIGFjdGlvbjogYW55O1xyXG4gIHBhcmFtZXRlcnM6IGFueTtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtY29uZmlybS1kaWFsb2cnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jb25maXJtLWRpYWxvZy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY29uZmlybS1kaWFsb2cuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ29uZmlybURpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGdldCBzaG93VGV4dCgpIHtcclxuICAgIHJldHVybiAhVXRpbHMuaXNOdWxsRW1wdHlPclVuZGVmaW5lZCh0aGlzLmRhdGEudGV4dCk7XHJcbiAgfVxyXG5cclxuICBnZXQgc2hvd1RyYW5zbGF0ZWRUZXh0KCkge1xyXG4gICAgcmV0dXJuICFVdGlscy5pc051bGxFbXB0eU9yVW5kZWZpbmVkKHRoaXMuZGF0YS50cmFuc2xhdGVkVGV4dCk7XHJcbiAgfVxyXG5cclxuICBnZXQgc2hvd09rQnV0dG9uKCkge1xyXG4gICAgcmV0dXJuICFVdGlscy5pc051bGxFbXB0eU9yVW5kZWZpbmVkKHRoaXMuZGF0YS5jb25maXJtTGFiZWwpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNob3dDbG9zZUJ1dHRvbigpIHtcclxuICAgIHJldHVybiAhVXRpbHMuaXNOdWxsRW1wdHlPclVuZGVmaW5lZCh0aGlzLmRhdGEuY2FuY2VsTGFiZWwpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IElDb25maXJtRGlhbG9nRGF0YSxcclxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxDb25maXJtRGlhbG9nQ29tcG9uZW50PixcclxuICAgIHB1YmxpYyB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGlvblNlcnZpY2UpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG4gIG9rKCkge1xyXG4gICAgaWYgKHRoaXMuZGF0YS5hY3Rpb24gIT09IHVuZGVmaW5lZClcclxuICAgICAgdGhpcy5kYXRhLmFjdGlvbih0aGlzLmRhdGEucGFyYW1ldGVycyk7XHJcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSh0cnVlKTtcclxuICB9XHJcblxyXG4gIGNsb3NlKCkge1xyXG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcclxuICB9XHJcbn1cclxuIl19