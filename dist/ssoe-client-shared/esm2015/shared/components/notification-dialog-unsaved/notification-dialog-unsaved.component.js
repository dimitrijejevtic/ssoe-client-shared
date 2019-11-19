/**
 * @fileoverview added by tsickle
 * Generated from: shared/components/notification-dialog-unsaved/notification-dialog-unsaved.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { TranslationService } from '../../services/translation.service';
import { Utils } from '../../extensions/utils';
export class NotificationDialogUnsavedComponent {
    /**
     * @param {?} data
     * @param {?} dialogRef
     * @param {?} translateService
     */
    constructor(data, dialogRef, translateService) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.translateService = translateService;
        this.saveDataText = 'Save data?';
        this.bodyText = 'You have unsaved changes! Do you want to continue?';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!Utils.isNullEmptyOrUndefined(this.data)) {
            if (!Utils.isNullEmptyOrUndefined(this.data.saveDataText))
                this.saveDataText = this.data.saveDataText;
            if (!Utils.isNullEmptyOrUndefined(this.data.bodyText))
                this.bodyText = this.data.bodyText;
        }
    }
}
NotificationDialogUnsavedComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-notification-dialog-unsaved',
                template: "<h1 mat-dialog-title>{{saveDataText | translate : translateService.cultureCode}}</h1>\r\n<div mat-dialog-content>\r\n    <mat-card>\r\n        <mat-card-content>\r\n           <div>{{bodyText | translate : translateService.cultureCode}}</div>\r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n</div>\r\n<div mat-dialog-actions class=\"m-t-10\">\r\n  <button mat-dialog-close mat-raised-button color=\"accent\">{{'No' | translate : translateService.cultureCode}}</button>\r\n  <button  mat-raised-button color=\"primary\" [mat-dialog-close]=\"true\">{{'Yes' | translate : translateService.cultureCode}}</button>\r\n</div>\r\n",
                styles: [""]
            }] }
];
/** @nocollapse */
NotificationDialogUnsavedComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] },
    { type: MatDialogRef },
    { type: TranslationService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLWRpYWxvZy11bnNhdmVkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Nzb2UtY2xpZW50LXNoYXJlZC8iLCJzb3VyY2VzIjpbInNoYXJlZC9jb21wb25lbnRzL25vdGlmaWNhdGlvbi1kaWFsb2ctdW5zYXZlZC9ub3RpZmljYXRpb24tZGlhbG9nLXVuc2F2ZWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFPL0MsTUFBTSxPQUFPLGtDQUFrQzs7Ozs7O0lBSzdDLFlBQ2tDLElBQVMsRUFDbEMsU0FBMkQsRUFDM0QsZ0JBQW9DO1FBRlgsU0FBSSxHQUFKLElBQUksQ0FBSztRQUNsQyxjQUFTLEdBQVQsU0FBUyxDQUFrRDtRQUMzRCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQW9CO1FBTjdDLGlCQUFZLEdBQUcsWUFBWSxDQUFDO1FBQzVCLGFBQVEsR0FBRyxvREFBb0QsQ0FBQztJQUtmLENBQUM7Ozs7SUFFbEQsUUFBUTtRQUNOLElBQUksQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzVDLElBQUksQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ3ZELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7WUFFN0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDbkQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUN0QztJQUNILENBQUM7OztZQXZCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlDQUFpQztnQkFDM0MsbW9CQUEyRDs7YUFFNUQ7Ozs7NENBT0ksTUFBTSxTQUFDLGVBQWU7WUFmRCxZQUFZO1lBQzdCLGtCQUFrQjs7OztJQVV6QiwwREFBNEI7O0lBQzVCLHNEQUFnRTs7SUFHOUQsa0RBQXlDOztJQUN6Qyx1REFBa0U7O0lBQ2xFLDhEQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTUFUX0RJQUxPR19EQVRBLCBNYXREaWFsb2dSZWYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IFRyYW5zbGF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBVdGlscyB9IGZyb20gJy4uLy4uL2V4dGVuc2lvbnMvdXRpbHMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtbm90aWZpY2F0aW9uLWRpYWxvZy11bnNhdmVkJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbm90aWZpY2F0aW9uLWRpYWxvZy11bnNhdmVkLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9ub3RpZmljYXRpb24tZGlhbG9nLXVuc2F2ZWQuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25EaWFsb2dVbnNhdmVkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgc2F2ZURhdGFUZXh0ID0gJ1NhdmUgZGF0YT8nO1xyXG4gIGJvZHlUZXh0ID0gJ1lvdSBoYXZlIHVuc2F2ZWQgY2hhbmdlcyEgRG8geW91IHdhbnQgdG8gY29udGludWU/JztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IGFueSxcclxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxOb3RpZmljYXRpb25EaWFsb2dVbnNhdmVkQ29tcG9uZW50PixcclxuICAgIHB1YmxpYyB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGlvblNlcnZpY2UpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmICghVXRpbHMuaXNOdWxsRW1wdHlPclVuZGVmaW5lZCh0aGlzLmRhdGEpKSB7XHJcbiAgICAgIGlmICghVXRpbHMuaXNOdWxsRW1wdHlPclVuZGVmaW5lZCh0aGlzLmRhdGEuc2F2ZURhdGFUZXh0KSlcclxuICAgICAgICB0aGlzLnNhdmVEYXRhVGV4dCA9IHRoaXMuZGF0YS5zYXZlRGF0YVRleHQ7XHJcblxyXG4gICAgICBpZiAoIVV0aWxzLmlzTnVsbEVtcHR5T3JVbmRlZmluZWQodGhpcy5kYXRhLmJvZHlUZXh0KSlcclxuICAgICAgICB0aGlzLmJvZHlUZXh0ID0gdGhpcy5kYXRhLmJvZHlUZXh0O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=