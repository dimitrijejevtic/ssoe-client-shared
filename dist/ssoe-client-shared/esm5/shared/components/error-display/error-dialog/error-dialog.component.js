/**
 * @fileoverview added by tsickle
 * Generated from: shared/components/error-display/error-dialog/error-dialog.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { TranslationService } from 'src/lib/shared/services/translation.service';
/**
 * @record
 */
export function ErrorData() { }
if (false) {
    /** @type {?} */
    ErrorData.prototype.errors;
}
var ErrorDialogComponent = /** @class */ (function () {
    function ErrorDialogComponent(data, translationService) {
        this.data = data;
        this.translationService = translationService;
    }
    /**
     * @return {?}
     */
    ErrorDialogComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ErrorDialogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-error-dialog',
                    template: "<h1 mat-dialog-title>{{'There are errors' | translate: translationService.cultureCode}}</h1>\r\n<div mat-dialog-content>\r\n  <div fxLayout=\"column\">\r\n    <span class=\"mat-h4 m-t-15 mat-error\" *ngFor=\"let error of data.errors\" fxFlex>{{error}}</span>\r\n  </div>\r\n</div>\r\n<div mat-dialog-actions>\r\n</div>\r\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ErrorDialogComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] },
        { type: TranslationService }
    ]; };
    return ErrorDialogComponent;
}());
export { ErrorDialogComponent };
if (false) {
    /** @type {?} */
    ErrorDialogComponent.prototype.data;
    /** @type {?} */
    ErrorDialogComponent.prototype.translationService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Nzb2UtY2xpZW50LXNoYXJlZC8iLCJzb3VyY2VzIjpbInNoYXJlZC9jb21wb25lbnRzL2Vycm9yLWRpc3BsYXkvZXJyb3ItZGlhbG9nL2Vycm9yLWRpYWxvZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7Ozs7QUFFakYsK0JBRUM7OztJQURDLDJCQUFXOztBQUdiO0lBT0UsOEJBQTRDLElBQWUsRUFDeEMsa0JBQXNDO1FBRGIsU0FBSSxHQUFKLElBQUksQ0FBVztRQUN4Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO0lBQUksQ0FBQzs7OztJQUU5RCx1Q0FBUTs7O0lBQVI7SUFDQSxDQUFDOztnQkFYRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsOFVBQTRDOztpQkFFN0M7Ozs7Z0RBR2MsTUFBTSxTQUFDLGVBQWU7Z0JBYjVCLGtCQUFrQjs7SUFtQjNCLDJCQUFDO0NBQUEsQUFiRCxJQWFDO1NBUlksb0JBQW9COzs7SUFFbkIsb0NBQStDOztJQUMvQyxrREFBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICdzcmMvbGliL3NoYXJlZC9zZXJ2aWNlcy90cmFuc2xhdGlvbi5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRXJyb3JEYXRhIHtcclxuICBlcnJvcnM6IFtdO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1lcnJvci1kaWFsb2cnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9lcnJvci1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2Vycm9yLWRpYWxvZy5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEVycm9yRGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IoQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBFcnJvckRhdGEsXHJcbiAgICAgICAgICAgICAgcHVibGljIHRyYW5zbGF0aW9uU2VydmljZTogVHJhbnNsYXRpb25TZXJ2aWNlKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=