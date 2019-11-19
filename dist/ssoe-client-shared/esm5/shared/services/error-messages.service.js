/**
 * @fileoverview added by tsickle
 * Generated from: shared/services/error-messages.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var ErrorMessagesService = /** @class */ (function () {
    function ErrorMessagesService(translationService, dialog, snackBar) {
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
    ErrorMessagesService.prototype.showErrorDialog = /**
     * @param {?} errs
     * @return {?}
     */
    function (errs) {
        this.dialog.open(ErrorDialogComponent, {
            data: { errors: errs }, panelClass: 'dialog-error'
        });
    };
    /**
     * @param {?} errors
     * @param {?=} source
     * @return {?}
     */
    ErrorMessagesService.prototype.publishMessages = /**
     * @param {?} errors
     * @param {?=} source
     * @return {?}
     */
    function (errors, source) {
        // TODO: errors with property name 'popup' should not go to propertyvalidators
        var _a;
        // TODO: errors with property name 'popup' should not go to propertyvalidators
        /** @type {?} */
        var errorM = new ErrorMessage();
        errorM.source = source;
        errorM.errors = [];
        /** @type {?} */
        var ex = this.propertyValidationErrors[source];
        if (ex !== undefined) {
            /** @type {?} */
            var becameValid = [];
            /** @type {?} */
            var stillInvalid = [];
            var _loop_1 = function (index) {
                /** @type {?} */
                var element = ex[index];
                /** @type {?} */
                var stillInvalidProperty = errors.find((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) { return x.propertyName === element.propertyName; }));
                if (stillInvalidProperty !== undefined) {
                    stillInvalidProperty.isCleanup = false;
                    stillInvalid.push(stillInvalidProperty);
                }
                else {
                    element.isCleanup = true;
                    becameValid.push(element);
                }
            };
            for (var index = 0; index < ex.length; index++) {
                _loop_1(index);
            }
            var _loop_2 = function (index) {
                /** @type {?} */
                var element = errors[index];
                /** @type {?} */
                var newError = ex.find((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) { return x.propertyName === element.propertyName; }));
                if (newError === undefined) {
                    element.isCleanup = false;
                    stillInvalid.push(element);
                }
            };
            for (var index = 0; index < errors.length; index++) {
                _loop_2(index);
            }
            this.propertyValidationErrors[source] = stillInvalid;
            for (var index = 0; index < becameValid.length; index++) {
                /** @type {?} */
                var element = becameValid[index];
                this.publishPropertyMessage(element);
            }
        }
        else {
            for (var index = 0; index < errors.length; index++) {
                /** @type {?} */
                var element = errors[index];
                element.isCleanup = false;
            }
            this.propertyValidationErrors[source] = errors;
        }
        for (var index = 0; index < this.propertyValidationErrors[source].length; index++) {
            /** @type {?} */
            var element = this.propertyValidationErrors[source][index];
            this.publishPropertyMessage(element);
        }
        /** @type {?} */
        var generalErrors = errors.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.propertyName === 'popup'; }));
        for (var index = 0; index < generalErrors.length; index++) {
            /** @type {?} */
            var element = generalErrors[index];
            (_a = errorM.errors).push.apply(_a, tslib_1.__spread(element.errorMessage.split('###')));
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
    };
    /**
     * @param {?} source
     * @return {?}
     */
    ErrorMessagesService.prototype.clearMessages = /**
     * @param {?} source
     * @return {?}
     */
    function (source) {
        /** @type {?} */
        var errorM = new ErrorMessage();
        errorM.source = source;
        errorM.isCleanup = true;
        this.errorMessagesSubject.next(errorM);
    };
    /**
     * @param {?} validationMessage
     * @return {?}
     */
    ErrorMessagesService.prototype.publishPropertyMessage = /**
     * @param {?} validationMessage
     * @return {?}
     */
    function (validationMessage) {
        this.errorPropertyMessageSubject.next(validationMessage);
    };
    ErrorMessagesService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ErrorMessagesService.ctorParameters = function () { return [
        { type: TranslationService },
        { type: MatDialog },
        { type: MatSnackBar }
    ]; };
    /** @nocollapse */ ErrorMessagesService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ErrorMessagesService_Factory() { return new ErrorMessagesService(i0.ɵɵinject(i1.TranslationService), i0.ɵɵinject(i2.MatDialog), i0.ɵɵinject(i3.MatSnackBar)); }, token: ErrorMessagesService, providedIn: "root" });
    return ErrorMessagesService;
}());
export { ErrorMessagesService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItbWVzc2FnZXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Nzb2UtY2xpZW50LXNoYXJlZC8iLCJzb3VyY2VzIjpbInNoYXJlZC9zZXJ2aWNlcy9lcnJvci1tZXNzYWdlcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzNELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzNELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBRXZHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7QUFFcEQ7SUFXRSw4QkFDVSxrQkFBc0MsRUFDdEMsTUFBaUIsRUFDakIsUUFBcUI7UUFGckIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2pCLGFBQVEsR0FBUixRQUFRLENBQWE7UUFMdkIsNkJBQXdCLEdBQTRDLEVBQUUsQ0FBQztRQU83RSxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUMxQyxJQUFJLENBQUMsMkJBQTJCLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUNqRCxJQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQUMvQyxDQUFDOzs7OztJQUVELDhDQUFlOzs7O0lBQWYsVUFBZ0IsSUFBSTtRQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtZQUNyQyxJQUFJLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDLEVBQUUsVUFBVSxFQUFFLGNB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QUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7Ozs7SUFFRCxxREFBc0I7Ozs7SUFBdEIsVUFBdUIsaUJBQW9DO1FBQ3pELElBQUksQ0FBQywyQkFBMkIsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUMzRCxDQUFDOztnQkF6R0YsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFQUSxrQkFBa0I7Z0JBREwsU0FBUztnQkFBdEIsV0FBVzs7OytCQUZwQjtDQWtIQyxBQTFHRCxJQTBHQztTQXZHWSxvQkFBb0I7OztJQUUvQixvREFBbUQ7O0lBQ25ELDJEQUErRDs7SUFDL0QsdURBQWlEOzs7OztJQUVqRCx3REFBK0U7Ozs7O0lBRzdFLGtEQUE4Qzs7Ozs7SUFDOUMsc0NBQXlCOzs7OztJQUN6Qix3Q0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTWF0U25hY2tCYXIsIE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHsgVHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi90cmFuc2xhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRXJyb3JEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2Vycm9yLWRpc3BsYXkvZXJyb3ItZGlhbG9nL2Vycm9yLWRpYWxvZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBWYWxpZGF0aW9uRmFpbHVyZSB9IGZyb20gJy4uL3BvY28vdmFsaWRhdGlvbkZhaWx1cmUnO1xyXG5pbXBvcnQgeyBFcnJvck1lc3NhZ2UgfSBmcm9tICcuLi9wb2NvL2Vycm9yTWVzc2FnZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFcnJvck1lc3NhZ2VzU2VydmljZSB7XHJcblxyXG4gIHB1YmxpYyBlcnJvck1lc3NhZ2VzU3ViamVjdDogU3ViamVjdDxFcnJvck1lc3NhZ2U+O1xyXG4gIHB1YmxpYyBlcnJvclByb3BlcnR5TWVzc2FnZVN1YmplY3Q6IFN1YmplY3Q8VmFsaWRhdGlvbkZhaWx1cmU+O1xyXG4gIHB1YmxpYyByZW1vdmVGb3JtRXJyb3JzU3ViamVjdDogU3ViamVjdDxib29sZWFuPjtcclxuXHJcbiAgcHJpdmF0ZSBwcm9wZXJ0eVZhbGlkYXRpb25FcnJvcnM6IHtbc291cmNlOiBzdHJpbmddOiBWYWxpZGF0aW9uRmFpbHVyZVtdfSA9IHt9O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgdHJhbnNsYXRpb25TZXJ2aWNlOiBUcmFuc2xhdGlvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGRpYWxvZzogTWF0RGlhbG9nLFxyXG4gICAgcHJpdmF0ZSBzbmFja0JhcjogTWF0U25hY2tCYXJcclxuICApIHtcclxuICAgIHRoaXMuZXJyb3JNZXNzYWdlc1N1YmplY3QgPSBuZXcgU3ViamVjdCgpO1xyXG4gICAgdGhpcy5lcnJvclByb3BlcnR5TWVzc2FnZVN1YmplY3QgPSBuZXcgU3ViamVjdCgpO1xyXG4gICAgdGhpcy5yZW1vdmVGb3JtRXJyb3JzU3ViamVjdCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgfVxyXG5cclxuICBzaG93RXJyb3JEaWFsb2coZXJycykge1xyXG4gICAgdGhpcy5kaWFsb2cub3BlbihFcnJvckRpYWxvZ0NvbXBvbmVudCwge1xyXG4gICAgICBkYXRhOiB7ZXJyb3JzOiBlcnJzfSwgcGFuZWxDbGFzczogJ2RpYWxvZy1lcnJvcidcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGlzaE1lc3NhZ2VzKGVycm9yczogVmFsaWRhdGlvbkZhaWx1cmVbXSwgc291cmNlPzogc3RyaW5nKSB7XHJcblxyXG4gICAgLy8gVE9ETzogZXJyb3JzIHdpdGggcHJvcGVydHkgbmFtZSAncG9wdXAnIHNob3VsZCBub3QgZ28gdG8gcHJvcGVydHl2YWxpZGF0b3JzXHJcblxyXG4gICAgY29uc3QgZXJyb3JNID0gbmV3IEVycm9yTWVzc2FnZSgpO1xyXG4gICAgZXJyb3JNLnNvdXJjZSA9IHNvdXJjZTtcclxuICAgIGVycm9yTS5lcnJvcnMgPSBbXTtcclxuXHJcbiAgICBjb25zdCBleCA9IHRoaXMucHJvcGVydHlWYWxpZGF0aW9uRXJyb3JzW3NvdXJjZV07XHJcbiAgICBpZiAoZXggIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBjb25zdCBiZWNhbWVWYWxpZCA9IFtdO1xyXG4gICAgICBjb25zdCBzdGlsbEludmFsaWQgPSBbXTtcclxuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGV4Lmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBleFtpbmRleF07XHJcbiAgICAgICAgY29uc3Qgc3RpbGxJbnZhbGlkUHJvcGVydHkgPSBlcnJvcnMuZmluZCh4ID0+IHgucHJvcGVydHlOYW1lID09PSBlbGVtZW50LnByb3BlcnR5TmFtZSk7XHJcbiAgICAgICAgaWYgKHN0aWxsSW52YWxpZFByb3BlcnR5ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHN0aWxsSW52YWxpZFByb3BlcnR5LmlzQ2xlYW51cCA9IGZhbHNlO1xyXG4gICAgICAgICAgc3RpbGxJbnZhbGlkLnB1c2goc3RpbGxJbnZhbGlkUHJvcGVydHkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBlbGVtZW50LmlzQ2xlYW51cCA9IHRydWU7XHJcbiAgICAgICAgICBiZWNhbWVWYWxpZC5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGVycm9ycy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZXJyb3JzW2luZGV4XTtcclxuICAgICAgICBjb25zdCBuZXdFcnJvciA9IGV4LmZpbmQoeCA9PiB4LnByb3BlcnR5TmFtZSA9PT0gZWxlbWVudC5wcm9wZXJ0eU5hbWUpO1xyXG4gICAgICAgIGlmIChuZXdFcnJvciA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICBlbGVtZW50LmlzQ2xlYW51cCA9IGZhbHNlO1xyXG4gICAgICAgICAgc3RpbGxJbnZhbGlkLnB1c2goZWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnByb3BlcnR5VmFsaWRhdGlvbkVycm9yc1tzb3VyY2VdID0gc3RpbGxJbnZhbGlkO1xyXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYmVjYW1lVmFsaWQubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGJlY2FtZVZhbGlkW2luZGV4XTtcclxuICAgICAgICB0aGlzLnB1Ymxpc2hQcm9wZXJ0eU1lc3NhZ2UoZWxlbWVudCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZXJyb3JzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBlcnJvcnNbaW5kZXhdO1xyXG4gICAgICAgIGVsZW1lbnQuaXNDbGVhbnVwID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5wcm9wZXJ0eVZhbGlkYXRpb25FcnJvcnNbc291cmNlXSA9IGVycm9ycztcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5wcm9wZXJ0eVZhbGlkYXRpb25FcnJvcnNbc291cmNlXS5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMucHJvcGVydHlWYWxpZGF0aW9uRXJyb3JzW3NvdXJjZV1baW5kZXhdO1xyXG4gICAgICB0aGlzLnB1Ymxpc2hQcm9wZXJ0eU1lc3NhZ2UoZWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2VuZXJhbEVycm9ycyA9IGVycm9ycy5maWx0ZXIoeCA9PiB4LnByb3BlcnR5TmFtZSA9PT0gJ3BvcHVwJyk7XHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZ2VuZXJhbEVycm9ycy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgY29uc3QgZWxlbWVudCA9IGdlbmVyYWxFcnJvcnNbaW5kZXhdO1xyXG4gICAgICBlcnJvck0uZXJyb3JzLnB1c2goLi4uZWxlbWVudC5lcnJvck1lc3NhZ2Uuc3BsaXQoJyMjIycpKTtcclxuICAgICAgLy8gZXJyb3JNLmVycm9ycy5wdXNoKGVsZW1lbnQuZXJyb3JNZXNzYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5wcm9wZXJ0eVZhbGlkYXRpb25FcnJvcnNbc291cmNlXS5sZW5ndGggPiAwICYmIGdlbmVyYWxFcnJvcnMubGVuZ3RoID09PSAwICYmIHNvdXJjZSAhPT0gJ2xvZ2luJykge1xyXG4gICAgICB0aGlzLnNuYWNrQmFyLm9wZW4odGhpcy50cmFuc2xhdGlvblNlcnZpY2UuZ2V0Rm9yS2V5KCdUaGVyZSB3ZXJlIGVycm9ycyEnKSwgbnVsbCwge1xyXG4gICAgICAgIGR1cmF0aW9uOiAyMDAwLFxyXG4gICAgICAgIHZlcnRpY2FsUG9zaXRpb246ICd0b3AnLFxyXG4gICAgICAgIHBhbmVsQ2xhc3M6ICdkYW5nZXInXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5lcnJvck1lc3NhZ2VzU3ViamVjdC5uZXh0KGVycm9yTSk7XHJcbiAgfVxyXG5cclxuICBjbGVhck1lc3NhZ2VzKHNvdXJjZTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBlcnJvck0gPSBuZXcgRXJyb3JNZXNzYWdlKCk7XHJcbiAgICBlcnJvck0uc291cmNlID0gc291cmNlO1xyXG4gICAgZXJyb3JNLmlzQ2xlYW51cCA9IHRydWU7XHJcbiAgICB0aGlzLmVycm9yTWVzc2FnZXNTdWJqZWN0Lm5leHQoZXJyb3JNKTtcclxuICB9XHJcblxyXG4gIHB1Ymxpc2hQcm9wZXJ0eU1lc3NhZ2UodmFsaWRhdGlvbk1lc3NhZ2U6IFZhbGlkYXRpb25GYWlsdXJlKSB7XHJcbiAgICB0aGlzLmVycm9yUHJvcGVydHlNZXNzYWdlU3ViamVjdC5uZXh0KHZhbGlkYXRpb25NZXNzYWdlKTtcclxuICB9XHJcbn1cclxuIl19