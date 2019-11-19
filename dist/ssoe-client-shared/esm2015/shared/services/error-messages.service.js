/**
 * @fileoverview added by tsickle
 * Generated from: shared/services/error-messages.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MatSnackBar, MatDialog } from '@angular/material';
import { TranslationService } from './translation.service';
import { ErrorDialogComponent } from '../components/error-display/error-dialog/error-dialog.component';
import { ErrorMessage } from '../poco/errorMessage';
import * as i0 from "@angular/core";
import * as i1 from "./translation.service";
import * as i2 from "@angular/material/dialog";
import * as i3 from "@angular/material/snack-bar";
export class ErrorMessagesService {
    /**
     * @param {?} translationService
     * @param {?} dialog
     * @param {?} snackBar
     */
    constructor(translationService, dialog, snackBar) {
        this.translationService = translationService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.propertyValidationErrors = {};
        this.errorMessagesSubject = new Subject();
        this.errorPropertyMessageSubject = new Subject();
        this.removeFormErrorsSubject = new Subject();
    }
    /**
     * @param {?} errs
     * @return {?}
     */
    showErrorDialog(errs) {
        this.dialog.open(ErrorDialogComponent, {
            data: { errors: errs }, panelClass: 'dialog-error'
        });
    }
    /**
     * @param {?} errors
     * @param {?=} source
     * @return {?}
     */
    publishMessages(errors, source) {
        // TODO: errors with property name 'popup' should not go to propertyvalidators
        // TODO: errors with property name 'popup' should not go to propertyvalidators
        /** @type {?} */
        const errorM = new ErrorMessage();
        errorM.source = source;
        errorM.errors = [];
        /** @type {?} */
        const ex = this.propertyValidationErrors[source];
        if (ex !== undefined) {
            /** @type {?} */
            const becameValid = [];
            /** @type {?} */
            const stillInvalid = [];
            for (let index = 0; index < ex.length; index++) {
                /** @type {?} */
                const element = ex[index];
                /** @type {?} */
                const stillInvalidProperty = errors.find((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => x.propertyName === element.propertyName));
                if (stillInvalidProperty !== undefined) {
                    stillInvalidProperty.isCleanup = false;
                    stillInvalid.push(stillInvalidProperty);
                }
                else {
                    element.isCleanup = true;
                    becameValid.push(element);
                }
            }
            for (let index = 0; index < errors.length; index++) {
                /** @type {?} */
                const element = errors[index];
                /** @type {?} */
                const newError = ex.find((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => x.propertyName === element.propertyName));
                if (newError === undefined) {
                    element.isCleanup = false;
                    stillInvalid.push(element);
                }
            }
            this.propertyValidationErrors[source] = stillInvalid;
            for (let index = 0; index < becameValid.length; index++) {
                /** @type {?} */
                const element = becameValid[index];
                this.publishPropertyMessage(element);
            }
        }
        else {
            for (let index = 0; index < errors.length; index++) {
                /** @type {?} */
                const element = errors[index];
                element.isCleanup = false;
            }
            this.propertyValidationErrors[source] = errors;
        }
        for (let index = 0; index < this.propertyValidationErrors[source].length; index++) {
            /** @type {?} */
            const element = this.propertyValidationErrors[source][index];
            this.publishPropertyMessage(element);
        }
        /** @type {?} */
        const generalErrors = errors.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x.propertyName === 'popup'));
        for (let index = 0; index < generalErrors.length; index++) {
            /** @type {?} */
            const element = generalErrors[index];
            errorM.errors.push(...element.errorMessage.split('###'));
            // errorM.errors.push(element.errorMessage);
        }
        if (this.propertyValidationErrors[source].length > 0 && generalErrors.length === 0 && source !== 'login') {
            this.snackBar.open(this.translationService.getForKey('There were errors!'), null, {
                duration: 2000,
                verticalPosition: 'top',
                panelClass: 'danger'
            });
        }
        this.errorMessagesSubject.next(errorM);
    }
    /**
     * @param {?} source
     * @return {?}
     */
    clearMessages(source) {
        /** @type {?} */
        const errorM = new ErrorMessage();
        errorM.source = source;
        errorM.isCleanup = true;
        this.errorMessagesSubject.next(errorM);
    }
    /**
     * @param {?} validationMessage
     * @return {?}
     */
    publishPropertyMessage(validationMessage) {
        this.errorPropertyMessageSubject.next(validationMessage);
    }
}
ErrorMessagesService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ErrorMessagesService.ctorParameters = () => [
    { type: TranslationService },
    { type: MatDialog },
    { type: MatSnackBar }
];
/** @nocollapse */ ErrorMessagesService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ErrorMessagesService_Factory() { return new ErrorMessagesService(i0.ɵɵinject(i1.TranslationService), i0.ɵɵinject(i2.MatDialog), i0.ɵɵinject(i3.MatSnackBar)); }, token: ErrorMessagesService, providedIn: "root" });
if (false) {
    /** @type {?} */
    ErrorMessagesService.prototype.errorMessagesSubject;
    /** @type {?} */
    ErrorMessagesService.prototype.errorPropertyMessageSubject;
    /** @type {?} */
    ErrorMessagesService.prototype.removeFormErrorsSubject;
    /**
     * @type {?}
     * @private
     */
    ErrorMessagesService.prototype.propertyValidationErrors;
    /**
     * @type {?}
     * @private
     */
    ErrorMessagesService.prototype.translationService;
    /**
     * @type {?}
     * @private
     */
    ErrorMessagesService.prototype.dialog;
    /**
     * @type {?}
     * @private
     */
    ErrorMessagesService.prototype.snackBar;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItbWVzc2FnZXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Nzb2UtY2xpZW50LXNoYXJlZC8iLCJzb3VyY2VzIjpbInNoYXJlZC9zZXJ2aWNlcy9lcnJvci1tZXNzYWdlcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDM0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDM0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFFdkcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7OztBQUtwRCxNQUFNLE9BQU8sb0JBQW9COzs7Ozs7SUFRL0IsWUFDVSxrQkFBc0MsRUFDdEMsTUFBaUIsRUFDakIsUUFBcUI7UUFGckIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2pCLGFBQVEsR0FBUixRQUFRLENBQWE7UUFMdkIsNkJBQXdCLEdBQTRDLEVBQUUsQ0FBQztRQU83RSxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUMxQyxJQUFJLENBQUMsMkJBQTJCLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUNqRCxJQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQUMvQyxDQUFDOzs7OztJQUVELGVBQWUsQ0FBQyxJQUFJO1FBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFO1lBQ3JDLElBQUksRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUMsRUFBRSxVQUFVLEVBQUUsY0FBYztTQUNqRCxDQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFRCxlQUFlLENBQUMsTUFBMkIsRUFBRSxNQUFlO1FBRTFELDhFQUE4RTs7O2NBRXhFLE1BQU0sR0FBRyxJQUFJLFlBQVksRUFBRTtRQUNqQyxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN2QixNQUFNLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQzs7Y0FFYixFQUFFLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQztRQUNoRCxJQUFJLEVBQUUsS0FBSyxTQUFTLEVBQUU7O2tCQUNkLFdBQVcsR0FBRyxFQUFFOztrQkFDaEIsWUFBWSxHQUFHLEVBQUU7WUFDdkIsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7O3NCQUN4QyxPQUFPLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQzs7c0JBQ25CLG9CQUFvQixHQUFHLE1BQU0sQ0FBQyxJQUFJOzs7O2dCQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFlBQVksS0FBSyxPQUFPLENBQUMsWUFBWSxFQUFDO2dCQUN0RixJQUFJLG9CQUFvQixLQUFLLFNBQVMsRUFBRTtvQkFDdEMsb0JBQW9CLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztvQkFDdkMsWUFBWSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO2lCQUN6QztxQkFBTTtvQkFDTCxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztvQkFDekIsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDM0I7YUFDRjtZQUVELEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFOztzQkFDNUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7O3NCQUN2QixRQUFRLEdBQUcsRUFBRSxDQUFDLElBQUk7Ozs7Z0JBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxLQUFLLE9BQU8sQ0FBQyxZQUFZLEVBQUM7Z0JBQ3RFLElBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtvQkFDMUIsT0FBTyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7b0JBQzFCLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQzVCO2FBQ0Y7WUFFRCxJQUFJLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDLEdBQUcsWUFBWSxDQUFDO1lBQ3JELEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxXQUFXLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFOztzQkFDakQsT0FBTyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUM7Z0JBQ2xDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUN0QztTQUVGO2FBQU07WUFDTCxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTs7c0JBQzVDLE9BQU8sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO2dCQUM3QixPQUFPLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQzthQUMzQjtZQUNELElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUM7U0FDaEQ7UUFFRCxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTs7a0JBQzNFLE9BQU8sR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQzVELElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN0Qzs7Y0FFSyxhQUFhLEdBQUcsTUFBTSxDQUFDLE1BQU07Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZLEtBQUssT0FBTyxFQUFDO1FBQ3BFLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxhQUFhLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFOztrQkFDbkQsT0FBTyxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUM7WUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3pELDRDQUE0QztTQUM3QztRQUVELElBQUksSUFBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksYUFBYSxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksTUFBTSxLQUFLLE9BQU8sRUFBRTtZQUN4RyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLG9CQUFvQixDQUFDLEVBQUUsSUFBSSxFQUFFO2dCQUNoRixRQUFRLEVBQUUsSUFBSTtnQkFDZCxnQkFBZ0IsRUFBRSxLQUFLO2dCQUN2QixVQUFVLEVBQUUsUUFBUTthQUNyQixDQUFDLENBQUM7U0FDSjtRQUNELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsTUFBYzs7Y0FDcEIsTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFO1FBQ2pDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7Ozs7SUFFRCxzQkFBc0IsQ0FBQyxpQkFBb0M7UUFDekQsSUFBSSxDQUFDLDJCQUEyQixDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzNELENBQUM7OztZQXpHRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFQUSxrQkFBa0I7WUFETCxTQUFTO1lBQXRCLFdBQVc7Ozs7O0lBV2xCLG9EQUFtRDs7SUFDbkQsMkRBQStEOztJQUMvRCx1REFBaUQ7Ozs7O0lBRWpELHdEQUErRTs7Ozs7SUFHN0Usa0RBQThDOzs7OztJQUM5QyxzQ0FBeUI7Ozs7O0lBQ3pCLHdDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBNYXRTbmFja0JhciwgTWF0RGlhbG9nIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICcuL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFcnJvckRpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvZXJyb3ItZGlzcGxheS9lcnJvci1kaWFsb2cvZXJyb3ItZGlhbG9nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFZhbGlkYXRpb25GYWlsdXJlIH0gZnJvbSAnLi4vcG9jby92YWxpZGF0aW9uRmFpbHVyZSc7XHJcbmltcG9ydCB7IEVycm9yTWVzc2FnZSB9IGZyb20gJy4uL3BvY28vZXJyb3JNZXNzYWdlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEVycm9yTWVzc2FnZXNTZXJ2aWNlIHtcclxuXHJcbiAgcHVibGljIGVycm9yTWVzc2FnZXNTdWJqZWN0OiBTdWJqZWN0PEVycm9yTWVzc2FnZT47XHJcbiAgcHVibGljIGVycm9yUHJvcGVydHlNZXNzYWdlU3ViamVjdDogU3ViamVjdDxWYWxpZGF0aW9uRmFpbHVyZT47XHJcbiAgcHVibGljIHJlbW92ZUZvcm1FcnJvcnNTdWJqZWN0OiBTdWJqZWN0PGJvb2xlYW4+O1xyXG5cclxuICBwcml2YXRlIHByb3BlcnR5VmFsaWRhdGlvbkVycm9yczoge1tzb3VyY2U6IHN0cmluZ106IFZhbGlkYXRpb25GYWlsdXJlW119ID0ge307XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGlvblNlcnZpY2U6IFRyYW5zbGF0aW9uU2VydmljZSxcclxuICAgIHByaXZhdGUgZGlhbG9nOiBNYXREaWFsb2csXHJcbiAgICBwcml2YXRlIHNuYWNrQmFyOiBNYXRTbmFja0JhclxyXG4gICkge1xyXG4gICAgdGhpcy5lcnJvck1lc3NhZ2VzU3ViamVjdCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgICB0aGlzLmVycm9yUHJvcGVydHlNZXNzYWdlU3ViamVjdCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgICB0aGlzLnJlbW92ZUZvcm1FcnJvcnNTdWJqZWN0ID0gbmV3IFN1YmplY3QoKTtcclxuICB9XHJcblxyXG4gIHNob3dFcnJvckRpYWxvZyhlcnJzKSB7XHJcbiAgICB0aGlzLmRpYWxvZy5vcGVuKEVycm9yRGlhbG9nQ29tcG9uZW50LCB7XHJcbiAgICAgIGRhdGE6IHtlcnJvcnM6IGVycnN9LCBwYW5lbENsYXNzOiAnZGlhbG9nLWVycm9yJ1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaXNoTWVzc2FnZXMoZXJyb3JzOiBWYWxpZGF0aW9uRmFpbHVyZVtdLCBzb3VyY2U/OiBzdHJpbmcpIHtcclxuXHJcbiAgICAvLyBUT0RPOiBlcnJvcnMgd2l0aCBwcm9wZXJ0eSBuYW1lICdwb3B1cCcgc2hvdWxkIG5vdCBnbyB0byBwcm9wZXJ0eXZhbGlkYXRvcnNcclxuXHJcbiAgICBjb25zdCBlcnJvck0gPSBuZXcgRXJyb3JNZXNzYWdlKCk7XHJcbiAgICBlcnJvck0uc291cmNlID0gc291cmNlO1xyXG4gICAgZXJyb3JNLmVycm9ycyA9IFtdO1xyXG5cclxuICAgIGNvbnN0IGV4ID0gdGhpcy5wcm9wZXJ0eVZhbGlkYXRpb25FcnJvcnNbc291cmNlXTtcclxuICAgIGlmIChleCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGNvbnN0IGJlY2FtZVZhbGlkID0gW107XHJcbiAgICAgIGNvbnN0IHN0aWxsSW52YWxpZCA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZXgubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGV4W2luZGV4XTtcclxuICAgICAgICBjb25zdCBzdGlsbEludmFsaWRQcm9wZXJ0eSA9IGVycm9ycy5maW5kKHggPT4geC5wcm9wZXJ0eU5hbWUgPT09IGVsZW1lbnQucHJvcGVydHlOYW1lKTtcclxuICAgICAgICBpZiAoc3RpbGxJbnZhbGlkUHJvcGVydHkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgc3RpbGxJbnZhbGlkUHJvcGVydHkuaXNDbGVhbnVwID0gZmFsc2U7XHJcbiAgICAgICAgICBzdGlsbEludmFsaWQucHVzaChzdGlsbEludmFsaWRQcm9wZXJ0eSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGVsZW1lbnQuaXNDbGVhbnVwID0gdHJ1ZTtcclxuICAgICAgICAgIGJlY2FtZVZhbGlkLnB1c2goZWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZXJyb3JzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBlcnJvcnNbaW5kZXhdO1xyXG4gICAgICAgIGNvbnN0IG5ld0Vycm9yID0gZXguZmluZCh4ID0+IHgucHJvcGVydHlOYW1lID09PSBlbGVtZW50LnByb3BlcnR5TmFtZSk7XHJcbiAgICAgICAgaWYgKG5ld0Vycm9yID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIGVsZW1lbnQuaXNDbGVhbnVwID0gZmFsc2U7XHJcbiAgICAgICAgICBzdGlsbEludmFsaWQucHVzaChlbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMucHJvcGVydHlWYWxpZGF0aW9uRXJyb3JzW3NvdXJjZV0gPSBzdGlsbEludmFsaWQ7XHJcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBiZWNhbWVWYWxpZC5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gYmVjYW1lVmFsaWRbaW5kZXhdO1xyXG4gICAgICAgIHRoaXMucHVibGlzaFByb3BlcnR5TWVzc2FnZShlbGVtZW50KTtcclxuICAgICAgfVxyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBlcnJvcnMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGVycm9yc1tpbmRleF07XHJcbiAgICAgICAgZWxlbWVudC5pc0NsZWFudXAgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnByb3BlcnR5VmFsaWRhdGlvbkVycm9yc1tzb3VyY2VdID0gZXJyb3JzO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLnByb3BlcnR5VmFsaWRhdGlvbkVycm9yc1tzb3VyY2VdLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5wcm9wZXJ0eVZhbGlkYXRpb25FcnJvcnNbc291cmNlXVtpbmRleF07XHJcbiAgICAgIHRoaXMucHVibGlzaFByb3BlcnR5TWVzc2FnZShlbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZW5lcmFsRXJyb3JzID0gZXJyb3JzLmZpbHRlcih4ID0+IHgucHJvcGVydHlOYW1lID09PSAncG9wdXAnKTtcclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBnZW5lcmFsRXJyb3JzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICBjb25zdCBlbGVtZW50ID0gZ2VuZXJhbEVycm9yc1tpbmRleF07XHJcbiAgICAgIGVycm9yTS5lcnJvcnMucHVzaCguLi5lbGVtZW50LmVycm9yTWVzc2FnZS5zcGxpdCgnIyMjJykpO1xyXG4gICAgICAvLyBlcnJvck0uZXJyb3JzLnB1c2goZWxlbWVudC5lcnJvck1lc3NhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnByb3BlcnR5VmFsaWRhdGlvbkVycm9yc1tzb3VyY2VdLmxlbmd0aCA+IDAgJiYgZ2VuZXJhbEVycm9ycy5sZW5ndGggPT09IDAgJiYgc291cmNlICE9PSAnbG9naW4nKSB7XHJcbiAgICAgIHRoaXMuc25hY2tCYXIub3Blbih0aGlzLnRyYW5zbGF0aW9uU2VydmljZS5nZXRGb3JLZXkoJ1RoZXJlIHdlcmUgZXJyb3JzIScpLCBudWxsLCB7XHJcbiAgICAgICAgZHVyYXRpb246IDIwMDAsXHJcbiAgICAgICAgdmVydGljYWxQb3NpdGlvbjogJ3RvcCcsXHJcbiAgICAgICAgcGFuZWxDbGFzczogJ2RhbmdlcidcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmVycm9yTWVzc2FnZXNTdWJqZWN0Lm5leHQoZXJyb3JNKTtcclxuICB9XHJcblxyXG4gIGNsZWFyTWVzc2FnZXMoc291cmNlOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGVycm9yTSA9IG5ldyBFcnJvck1lc3NhZ2UoKTtcclxuICAgIGVycm9yTS5zb3VyY2UgPSBzb3VyY2U7XHJcbiAgICBlcnJvck0uaXNDbGVhbnVwID0gdHJ1ZTtcclxuICAgIHRoaXMuZXJyb3JNZXNzYWdlc1N1YmplY3QubmV4dChlcnJvck0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGlzaFByb3BlcnR5TWVzc2FnZSh2YWxpZGF0aW9uTWVzc2FnZTogVmFsaWRhdGlvbkZhaWx1cmUpIHtcclxuICAgIHRoaXMuZXJyb3JQcm9wZXJ0eU1lc3NhZ2VTdWJqZWN0Lm5leHQodmFsaWRhdGlvbk1lc3NhZ2UpO1xyXG4gIH1cclxufVxyXG4iXX0=