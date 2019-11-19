/**
 * @fileoverview added by tsickle
 * Generated from: shared/services/unsaved-data-notification.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NotificationDialogUnsavedComponent } from '../components/notification-dialog-unsaved/notification-dialog-unsaved.component';
export class UnsavedDataNotificationService {
    /**
     * @param {?} dialog
     */
    constructor(dialog) {
        this.dialog = dialog;
        this.hasChangedData = false;
    }
    /**
     * @param {?} ngForm
     * @return {?}
     */
    startTracking(ngForm) {
        this.currentForm = ngForm;
        this.currentForm.form.markAsPristine();
        this.formChangesSubscription = ngForm.form.valueChanges.subscribe((/**
         * @param {?} x
         * @return {?}
         */
        x => {
            if (this.currentForm.form.dirty)
                this.hasChangedData = true;
        }));
    }
    /**
     * @return {?}
     */
    trackingCheckpoint() {
        this.currentForm.form.markAsPristine();
        this.hasChangedData = false;
    }
    /**
     * @return {?}
     */
    stopTracking() {
        this.hasChangedData = false;
        this.formChangesSubscription.unsubscribe();
    }
    /**
     * @param {?} action
     * @param {?=} fallbackAction
     * @param {?=} modalData
     * @return {?}
     */
    doActionWithCheckUnsaved(action, fallbackAction, modalData) {
        if (!this.hasChangedData) {
            action();
            return;
        }
        /** @type {?} */
        const dialogRef = this.dialog.open(NotificationDialogUnsavedComponent, {
            width: '356px',
            data: modalData
        });
        dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        result => {
            if (result === true) {
                this.hasChangedData = false;
                action();
            }
            else {
                if (fallbackAction !== undefined)
                    fallbackAction();
            }
        }));
    }
    /**
     * @param {?} hasChanges
     * @param {?} noChanges
     * @param {?=} modalData
     * @return {?}
     */
    checkChangesAction(hasChanges, noChanges, modalData) {
        if (!this.hasChangedData) {
            noChanges();
            return;
        }
        /** @type {?} */
        const dialogRef = this.dialog.open(NotificationDialogUnsavedComponent, {
            width: '356px',
            data: modalData
        });
        dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        result => {
            if (result === true) {
                this.hasChangedData = false;
                hasChanges();
            }
            else
                noChanges();
        }));
    }
}
UnsavedDataNotificationService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
UnsavedDataNotificationService.ctorParameters = () => [
    { type: MatDialog }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5zYXZlZC1kYXRhLW5vdGlmaWNhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3NvZS1jbGllbnQtc2hhcmVkLyIsInNvdXJjZXMiOlsic2hhcmVkL3NlcnZpY2VzL3Vuc2F2ZWQtZGF0YS1ub3RpZmljYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLGlGQUFpRixDQUFDO0FBS3JJLE1BQU0sT0FBTyw4QkFBOEI7Ozs7SUFFekMsWUFBbUIsTUFBaUI7UUFBakIsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUVwQyxtQkFBYyxHQUFHLEtBQUssQ0FBQztJQUZpQixDQUFDOzs7OztJQU16QyxhQUFhLENBQUMsTUFBYztRQUMxQixJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztRQUMxQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3BFLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSztnQkFDN0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7UUFDL0IsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBQ0Qsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO0lBQzlCLENBQUM7Ozs7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7UUFDNUIsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzdDLENBQUM7Ozs7Ozs7SUFFRCx3QkFBd0IsQ0FBQyxNQUFNLEVBQUUsY0FBZSxFQUFFLFNBQVU7UUFDMUQsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDeEIsTUFBTSxFQUFFLENBQUM7WUFDVCxPQUFPO1NBQ1I7O2NBRUssU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGtDQUFrQyxFQUFFO1lBQ3JFLEtBQUssRUFBRSxPQUFPO1lBQ2QsSUFBSSxFQUFFLFNBQVM7U0FDaEIsQ0FBQztRQUVGLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsTUFBTSxDQUFDLEVBQUU7WUFDekMsSUFBSSxNQUFNLEtBQUssSUFBSSxFQUFFO2dCQUNuQixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztnQkFDNUIsTUFBTSxFQUFFLENBQUM7YUFDVjtpQkFBTTtnQkFDTCxJQUFJLGNBQWMsS0FBSyxTQUFTO29CQUM5QixjQUFjLEVBQUUsQ0FBQzthQUNwQjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7OztJQUNELGtCQUFrQixDQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUUsU0FBVTtRQUNsRCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN4QixTQUFTLEVBQUUsQ0FBQztZQUNaLE9BQU87U0FDUjs7Y0FFSyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0NBQWtDLEVBQUU7WUFDckUsS0FBSyxFQUFFLE9BQU87WUFDZCxJQUFJLEVBQUUsU0FBUztTQUNoQixDQUFDO1FBRUYsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVM7Ozs7UUFBQyxNQUFNLENBQUMsRUFBRTtZQUN6QyxJQUFJLE1BQU0sS0FBSyxJQUFJLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO2dCQUM1QixVQUFVLEVBQUUsQ0FBQzthQUNkOztnQkFDQyxTQUFTLEVBQUUsQ0FBQztRQUNoQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7OztZQWxFRixVQUFVOzs7O1lBTEYsU0FBUzs7OztJQVVoQix3REFBdUI7O0lBQ3ZCLGlFQUFzQzs7SUFDdEMscURBQW9COztJQUpSLGdEQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25EaWFsb2dVbnNhdmVkQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9ub3RpZmljYXRpb24tZGlhbG9nLXVuc2F2ZWQvbm90aWZpY2F0aW9uLWRpYWxvZy11bnNhdmVkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBOZ0Zvcm0gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVbnNhdmVkRGF0YU5vdGlmaWNhdGlvblNlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2cpIHsgfVxyXG5cclxuICBoYXNDaGFuZ2VkRGF0YSA9IGZhbHNlO1xyXG4gIGZvcm1DaGFuZ2VzU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcbiAgY3VycmVudEZvcm06IE5nRm9ybTtcclxuXHJcbiAgc3RhcnRUcmFja2luZyhuZ0Zvcm06IE5nRm9ybSkge1xyXG4gICAgdGhpcy5jdXJyZW50Rm9ybSA9IG5nRm9ybTtcclxuICAgIHRoaXMuY3VycmVudEZvcm0uZm9ybS5tYXJrQXNQcmlzdGluZSgpO1xyXG4gICAgdGhpcy5mb3JtQ2hhbmdlc1N1YnNjcmlwdGlvbiA9IG5nRm9ybS5mb3JtLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoeCA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRGb3JtLmZvcm0uZGlydHkpXHJcbiAgICAgICAgdGhpcy5oYXNDaGFuZ2VkRGF0YSA9IHRydWU7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgdHJhY2tpbmdDaGVja3BvaW50KCkge1xyXG4gICAgdGhpcy5jdXJyZW50Rm9ybS5mb3JtLm1hcmtBc1ByaXN0aW5lKCk7XHJcbiAgICB0aGlzLmhhc0NoYW5nZWREYXRhID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBzdG9wVHJhY2tpbmcoKSB7XHJcbiAgICB0aGlzLmhhc0NoYW5nZWREYXRhID0gZmFsc2U7XHJcbiAgICB0aGlzLmZvcm1DaGFuZ2VzU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICBkb0FjdGlvbldpdGhDaGVja1Vuc2F2ZWQoYWN0aW9uLCBmYWxsYmFja0FjdGlvbj8sIG1vZGFsRGF0YT8pIHtcclxuICAgIGlmICghdGhpcy5oYXNDaGFuZ2VkRGF0YSkge1xyXG4gICAgICBhY3Rpb24oKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oTm90aWZpY2F0aW9uRGlhbG9nVW5zYXZlZENvbXBvbmVudCwge1xyXG4gICAgICB3aWR0aDogJzM1NnB4JyxcclxuICAgICAgZGF0YTogbW9kYWxEYXRhXHJcbiAgICB9KTtcclxuXHJcbiAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgaWYgKHJlc3VsdCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIHRoaXMuaGFzQ2hhbmdlZERhdGEgPSBmYWxzZTtcclxuICAgICAgICBhY3Rpb24oKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoZmFsbGJhY2tBY3Rpb24gIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgIGZhbGxiYWNrQWN0aW9uKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICBjaGVja0NoYW5nZXNBY3Rpb24oaGFzQ2hhbmdlcywgbm9DaGFuZ2VzLCBtb2RhbERhdGE/KSB7XHJcbiAgICBpZiAoIXRoaXMuaGFzQ2hhbmdlZERhdGEpIHtcclxuICAgICAgbm9DaGFuZ2VzKCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKE5vdGlmaWNhdGlvbkRpYWxvZ1Vuc2F2ZWRDb21wb25lbnQsIHtcclxuICAgICAgd2lkdGg6ICczNTZweCcsXHJcbiAgICAgIGRhdGE6IG1vZGFsRGF0YVxyXG4gICAgfSk7XHJcblxyXG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgIGlmIChyZXN1bHQgPT09IHRydWUpIHtcclxuICAgICAgICB0aGlzLmhhc0NoYW5nZWREYXRhID0gZmFsc2U7XHJcbiAgICAgICAgaGFzQ2hhbmdlcygpO1xyXG4gICAgICB9IGVsc2VcclxuICAgICAgICBub0NoYW5nZXMoKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=