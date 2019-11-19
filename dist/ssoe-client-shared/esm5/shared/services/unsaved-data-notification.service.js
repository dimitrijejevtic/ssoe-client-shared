/**
 * @fileoverview added by tsickle
 * Generated from: shared/services/unsaved-data-notification.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NotificationDialogUnsavedComponent } from '../components/notification-dialog-unsaved/notification-dialog-unsaved.component';
var UnsavedDataNotificationService = /** @class */ (function () {
    function UnsavedDataNotificationService(dialog) {
        this.dialog = dialog;
        this.hasChangedData = false;
    }
    /**
     * @param {?} ngForm
     * @return {?}
     */
    UnsavedDataNotificationService.prototype.startTracking = /**
     * @param {?} ngForm
     * @return {?}
     */
    function (ngForm) {
        var _this = this;
        this.currentForm = ngForm;
        this.currentForm.form.markAsPristine();
        this.formChangesSubscription = ngForm.form.valueChanges.subscribe((/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            if (_this.currentForm.form.dirty)
                _this.hasChangedData = true;
        }));
    };
    /**
     * @return {?}
     */
    UnsavedDataNotificationService.prototype.trackingCheckpoint = /**
     * @return {?}
     */
    function () {
        this.currentForm.form.markAsPristine();
        this.hasChangedData = false;
    };
    /**
     * @return {?}
     */
    UnsavedDataNotificationService.prototype.stopTracking = /**
     * @return {?}
     */
    function () {
        this.hasChangedData = false;
        this.formChangesSubscription.unsubscribe();
    };
    /**
     * @param {?} action
     * @param {?=} fallbackAction
     * @param {?=} modalData
     * @return {?}
     */
    UnsavedDataNotificationService.prototype.doActionWithCheckUnsaved = /**
     * @param {?} action
     * @param {?=} fallbackAction
     * @param {?=} modalData
     * @return {?}
     */
    function (action, fallbackAction, modalData) {
        var _this = this;
        if (!this.hasChangedData) {
            action();
            return;
        }
        /** @type {?} */
        var dialogRef = this.dialog.open(NotificationDialogUnsavedComponent, {
            width: '356px',
            data: modalData
        });
        dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            if (result === true) {
                _this.hasChangedData = false;
                action();
            }
            else {
                if (fallbackAction !== undefined)
                    fallbackAction();
            }
        }));
    };
    /**
     * @param {?} hasChanges
     * @param {?} noChanges
     * @param {?=} modalData
     * @return {?}
     */
    UnsavedDataNotificationService.prototype.checkChangesAction = /**
     * @param {?} hasChanges
     * @param {?} noChanges
     * @param {?=} modalData
     * @return {?}
     */
    function (hasChanges, noChanges, modalData) {
        var _this = this;
        if (!this.hasChangedData) {
            noChanges();
            return;
        }
        /** @type {?} */
        var dialogRef = this.dialog.open(NotificationDialogUnsavedComponent, {
            width: '356px',
            data: modalData
        });
        dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            if (result === true) {
                _this.hasChangedData = false;
                hasChanges();
            }
            else
                noChanges();
        }));
    };
    UnsavedDataNotificationService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    UnsavedDataNotificationService.ctorParameters = function () { return [
        { type: MatDialog }
    ]; };
    return UnsavedDataNotificationService;
}());
export { UnsavedDataNotificationService };
if (false) {
    /** @type {?} */
    UnsavedDataNotificationService.prototype.hasChangedData;
    /** @type {?} */
    UnsavedDataNotificationService.prototype.formChangesSubscription;
    /** @type {?} */
    UnsavedDataNotificationService.prototype.currentForm;
    /** @type {?} */
    UnsavedDataNotificationService.prototype.dialog;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5zYXZlZC1kYXRhLW5vdGlmaWNhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3NvZS1jbGllbnQtc2hhcmVkLyIsInNvdXJjZXMiOlsic2hhcmVkL3NlcnZpY2VzL3Vuc2F2ZWQtZGF0YS1ub3RpZmljYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLGlGQUFpRixDQUFDO0FBSXJJO0lBR0Usd0NBQW1CLE1BQWlCO1FBQWpCLFdBQU0sR0FBTixNQUFNLENBQVc7UUFFcEMsbUJBQWMsR0FBRyxLQUFLLENBQUM7SUFGaUIsQ0FBQzs7Ozs7SUFNekMsc0RBQWE7Ozs7SUFBYixVQUFjLE1BQWM7UUFBNUIsaUJBT0M7UUFOQyxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztRQUMxQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsQ0FBQztZQUNqRSxJQUFJLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUs7Z0JBQzdCLEtBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBQy9CLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUNELDJEQUFrQjs7O0lBQWxCO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7SUFDOUIsQ0FBQzs7OztJQUVELHFEQUFZOzs7SUFBWjtRQUNFLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM3QyxDQUFDOzs7Ozs7O0lBRUQsaUVBQXdCOzs7Ozs7SUFBeEIsVUFBeUIsTUFBTSxFQUFFLGNBQWUsRUFBRSxTQUFVO1FBQTVELGlCQW9CQztRQW5CQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN4QixNQUFNLEVBQUUsQ0FBQztZQUNULE9BQU87U0FDUjs7WUFFSyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0NBQWtDLEVBQUU7WUFDckUsS0FBSyxFQUFFLE9BQU87WUFDZCxJQUFJLEVBQUUsU0FBUztTQUNoQixDQUFDO1FBRUYsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLE1BQU07WUFDdEMsSUFBSSxNQUFNLEtBQUssSUFBSSxFQUFFO2dCQUNuQixLQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztnQkFDNUIsTUFBTSxFQUFFLENBQUM7YUFDVjtpQkFBTTtnQkFDTCxJQUFJLGNBQWMsS0FBSyxTQUFTO29CQUM5QixjQUFjLEVBQUUsQ0FBQzthQUNwQjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7OztJQUNELDJEQUFrQjs7Ozs7O0lBQWxCLFVBQW1CLFVBQVUsRUFBRSxTQUFTLEVBQUUsU0FBVTtRQUFwRCxpQkFrQkM7UUFqQkMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDeEIsU0FBUyxFQUFFLENBQUM7WUFDWixPQUFPO1NBQ1I7O1lBRUssU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGtDQUFrQyxFQUFFO1lBQ3JFLEtBQUssRUFBRSxPQUFPO1lBQ2QsSUFBSSxFQUFFLFNBQVM7U0FDaEIsQ0FBQztRQUVGLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxNQUFNO1lBQ3RDLElBQUksTUFBTSxLQUFLLElBQUksRUFBRTtnQkFDbkIsS0FBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7Z0JBQzVCLFVBQVUsRUFBRSxDQUFDO2FBQ2Q7O2dCQUNDLFNBQVMsRUFBRSxDQUFDO1FBQ2hCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBbEVGLFVBQVU7Ozs7Z0JBTEYsU0FBUzs7SUF3RWxCLHFDQUFDO0NBQUEsQUFuRUQsSUFtRUM7U0FsRVksOEJBQThCOzs7SUFJekMsd0RBQXVCOztJQUN2QixpRUFBc0M7O0lBQ3RDLHFEQUFvQjs7SUFKUixnREFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9uRGlhbG9nVW5zYXZlZENvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uLWRpYWxvZy11bnNhdmVkL25vdGlmaWNhdGlvbi1kaWFsb2ctdW5zYXZlZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTmdGb3JtIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVW5zYXZlZERhdGFOb3RpZmljYXRpb25TZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZzogTWF0RGlhbG9nKSB7IH1cclxuXHJcbiAgaGFzQ2hhbmdlZERhdGEgPSBmYWxzZTtcclxuICBmb3JtQ2hhbmdlc1N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gIGN1cnJlbnRGb3JtOiBOZ0Zvcm07XHJcblxyXG4gIHN0YXJ0VHJhY2tpbmcobmdGb3JtOiBOZ0Zvcm0pIHtcclxuICAgIHRoaXMuY3VycmVudEZvcm0gPSBuZ0Zvcm07XHJcbiAgICB0aGlzLmN1cnJlbnRGb3JtLmZvcm0ubWFya0FzUHJpc3RpbmUoKTtcclxuICAgIHRoaXMuZm9ybUNoYW5nZXNTdWJzY3JpcHRpb24gPSBuZ0Zvcm0uZm9ybS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHggPT4ge1xyXG4gICAgICBpZiAodGhpcy5jdXJyZW50Rm9ybS5mb3JtLmRpcnR5KVxyXG4gICAgICAgIHRoaXMuaGFzQ2hhbmdlZERhdGEgPSB0cnVlO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHRyYWNraW5nQ2hlY2twb2ludCgpIHtcclxuICAgIHRoaXMuY3VycmVudEZvcm0uZm9ybS5tYXJrQXNQcmlzdGluZSgpO1xyXG4gICAgdGhpcy5oYXNDaGFuZ2VkRGF0YSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgc3RvcFRyYWNraW5nKCkge1xyXG4gICAgdGhpcy5oYXNDaGFuZ2VkRGF0YSA9IGZhbHNlO1xyXG4gICAgdGhpcy5mb3JtQ2hhbmdlc1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgZG9BY3Rpb25XaXRoQ2hlY2tVbnNhdmVkKGFjdGlvbiwgZmFsbGJhY2tBY3Rpb24/LCBtb2RhbERhdGE/KSB7XHJcbiAgICBpZiAoIXRoaXMuaGFzQ2hhbmdlZERhdGEpIHtcclxuICAgICAgYWN0aW9uKCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKE5vdGlmaWNhdGlvbkRpYWxvZ1Vuc2F2ZWRDb21wb25lbnQsIHtcclxuICAgICAgd2lkdGg6ICczNTZweCcsXHJcbiAgICAgIGRhdGE6IG1vZGFsRGF0YVxyXG4gICAgfSk7XHJcblxyXG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgIGlmIChyZXN1bHQgPT09IHRydWUpIHtcclxuICAgICAgICB0aGlzLmhhc0NoYW5nZWREYXRhID0gZmFsc2U7XHJcbiAgICAgICAgYWN0aW9uKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKGZhbGxiYWNrQWN0aW9uICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICBmYWxsYmFja0FjdGlvbigpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgY2hlY2tDaGFuZ2VzQWN0aW9uKGhhc0NoYW5nZXMsIG5vQ2hhbmdlcywgbW9kYWxEYXRhPykge1xyXG4gICAgaWYgKCF0aGlzLmhhc0NoYW5nZWREYXRhKSB7XHJcbiAgICAgIG5vQ2hhbmdlcygpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihOb3RpZmljYXRpb25EaWFsb2dVbnNhdmVkQ29tcG9uZW50LCB7XHJcbiAgICAgIHdpZHRoOiAnMzU2cHgnLFxyXG4gICAgICBkYXRhOiBtb2RhbERhdGFcclxuICAgIH0pO1xyXG5cclxuICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICBpZiAocmVzdWx0ID09PSB0cnVlKSB7XHJcbiAgICAgICAgdGhpcy5oYXNDaGFuZ2VkRGF0YSA9IGZhbHNlO1xyXG4gICAgICAgIGhhc0NoYW5nZXMoKTtcclxuICAgICAgfSBlbHNlXHJcbiAgICAgICAgbm9DaGFuZ2VzKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19