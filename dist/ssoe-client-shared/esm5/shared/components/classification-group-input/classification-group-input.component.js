/**
 * @fileoverview added by tsickle
 * Generated from: shared/components/classification-group-input/classification-group-input.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, Optional } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { ClassificationService } from '../../services/classification-service.service';
import { TranslationService } from '../../services/translation.service';
import { ErrorMessagesService } from '../../services/error-messages.service';
import { Utils } from '../../extensions/utils';
var ClassificationGroupInputComponent = /** @class */ (function () {
    function ClassificationGroupInputComponent(classificationService, translationService, errorMessageService, formObject) {
        this.classificationService = classificationService;
        this.translationService = translationService;
        this.errorMessageService = errorMessageService;
        this.formObject = formObject;
        this.classificationValueIdChange = new EventEmitter();
        this.objectClassificationValueChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ClassificationGroupInputComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // tslint:disable-next-line:max-line-length
        this.classificationService.getGroupedClassificationValues(this.classificationName, this.classificationModel, this.isVolatile).subscribe((/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            /** @type {?} */
            var vals = [];
            for (var index = 0; index < x.value.length; index++) {
                /** @type {?} */
                var element = x.value[index];
                vals = tslib_1.__spread(vals, element.options);
            }
            _this.options = vals;
            _this.defaultValue = _this.options.find((/**
             * @param {?} y
             * @return {?}
             */
            function (y) { return y.isDefaultValue === true; }));
            _this.groups = x.value;
            if (!Utils.isNullEmptyOrUndefined(_this.classificationValueId)) {
                /** @type {?} */
                var exValue = _this.options.find((/**
                 * @param {?} y
                 * @return {?}
                 */
                function (y) { return '' + y.id === '' + _this.classificationValueId; }));
                if (exValue !== undefined) {
                    _this.classificationValueId = exValue.id;
                    _this.objectClassificationValueChange.emit(exValue);
                }
                else {
                    _this.classificationValueId = undefined;
                    _this.classificationValueIdChange.emit(_this.classificationValueId);
                }
            }
            else if (!Utils.isNullEmptyOrUndefined(_this.selectedValue)) {
                /** @type {?} */
                var exValue = _this.options.find((/**
                 * @param {?} y
                 * @return {?}
                 */
                function (y) { return '' + y.value === '' + _this.selectedValue; }));
                if (exValue !== undefined) {
                    _this.classificationValueId = exValue.id;
                    _this.objectClassificationValueChange.emit(exValue);
                }
            }
            else if (!Utils.isNullEmptyOrUndefined(_this.defaultValue)) {
                _this.classificationValueId = _this.defaultValue.id;
                _this.objectClassificationValueChange.emit(_this.defaultValue);
            }
            if (_this.disabled === undefined)
                _this.disabled = false;
        }));
        if (this.propertyName === undefined)
            this.propertyName = Utils.newTechnicalNumber();
        if (Utils.isNullEmptyOrUndefined(this.ngFormObject))
            this.form = this.ngFormObject;
        if (Utils.isNullEmptyOrUndefined(this.form)) {
            this.form = this.formObject;
        }
        this.ngControl = new FormControl();
        if (this.form !== undefined && this.form !== null && this.propertyName !== undefined)
            this.form.form.addControl(this.propertyName, this.ngControl);
        this.errorMessageService.errorPropertyMessageSubject.subscribe((/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            if (!Utils.isNullEmptyOrUndefined(_this.form.form.get(x.propertyName)) && x.isCleanup === false) {
                _this.form.form.get(x.propertyName).setErrors({ incorrect: true });
                _this.hasErrors = true;
            }
            else if (!Utils.isNullEmptyOrUndefined(_this.form.form.get(x.propertyName)) && x.isCleanup === true) {
                _this.hasErrors = false;
                _this.form.form.get(x.propertyName).setErrors(null);
            }
        }));
        this.errorMessageService.removeFormErrorsSubject.subscribe((/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            _this.hasErrors = false;
            if (!Utils.isNullEmptyOrUndefined(_this.form.form.get(_this.propertyName) && _this.propertyName !== undefined))
                _this.form.form.get(_this.propertyName).setErrors(null);
        }));
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ClassificationGroupInputComponent.prototype.change = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        this.classificationValueId = event.value;
        this.classificationValueIdChange.emit(this.classificationValueId);
        /** @type {?} */
        var exValue = this.options.find((/**
         * @param {?} y
         * @return {?}
         */
        function (y) { return '' + y.id === '' + _this.classificationValueId; }));
        if (exValue !== undefined)
            this.objectClassificationValueChange.emit(exValue);
        /** @type {?} */
        var pname = this.propertyName;
        this.form.form.markAsDirty();
        this.form.form.patchValue({ pname: this.classificationValueId });
    };
    ClassificationGroupInputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-classification-group-input',
                    template: "<form formValidator>\n  <mat-form-field>\n    <mat-select [name]=\"propertyName\" placeholder=\"{{placeholder}}\" (selectionChange)=\"change($event)\" [(ngModel)]=\"classificationValueId\" [disabled]=\"disabled\">\n      <mat-optgroup *ngFor=\"let group of groups\" [label]=\"group.description | translate: translationService.cultureCode\">\n        <mat-option *ngFor=\"let option of group.options\" [value]=\"option.id\" matTooltip=\"{{option.description | translate: translationService.cultureCode}}\">\n          {{option.caption | translate: translationService.cultureCode}}\n        </mat-option>\n      </mat-optgroup>\n    </mat-select>\n    <mat-error app-input-validation-message [propertyName]=\"propertyName\"></mat-error>\n  </mat-form-field>\n</form>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ClassificationGroupInputComponent.ctorParameters = function () { return [
        { type: ClassificationService },
        { type: TranslationService },
        { type: ErrorMessagesService },
        { type: NgForm, decorators: [{ type: Optional }] }
    ]; };
    ClassificationGroupInputComponent.propDecorators = {
        classificationValueId: [{ type: Input }],
        classificationName: [{ type: Input }],
        classificationModel: [{ type: Input }],
        placeholder: [{ type: Input }],
        isVolatile: [{ type: Input }],
        propertyName: [{ type: Input }],
        selectedValue: [{ type: Input }],
        disabled: [{ type: Input }],
        ngFormObject: [{ type: Input }],
        classificationValueIdChange: [{ type: Output }],
        objectClassificationValueChange: [{ type: Output }]
    };
    return ClassificationGroupInputComponent;
}());
export { ClassificationGroupInputComponent };
if (false) {
    /** @type {?} */
    ClassificationGroupInputComponent.prototype.classificationValueId;
    /** @type {?} */
    ClassificationGroupInputComponent.prototype.classificationName;
    /** @type {?} */
    ClassificationGroupInputComponent.prototype.classificationModel;
    /** @type {?} */
    ClassificationGroupInputComponent.prototype.placeholder;
    /** @type {?} */
    ClassificationGroupInputComponent.prototype.isVolatile;
    /** @type {?} */
    ClassificationGroupInputComponent.prototype.propertyName;
    /** @type {?} */
    ClassificationGroupInputComponent.prototype.selectedValue;
    /** @type {?} */
    ClassificationGroupInputComponent.prototype.disabled;
    /** @type {?} */
    ClassificationGroupInputComponent.prototype.ngFormObject;
    /** @type {?} */
    ClassificationGroupInputComponent.prototype.hasErrors;
    /** @type {?} */
    ClassificationGroupInputComponent.prototype.groups;
    /** @type {?} */
    ClassificationGroupInputComponent.prototype.options;
    /** @type {?} */
    ClassificationGroupInputComponent.prototype.defaultValue;
    /** @type {?} */
    ClassificationGroupInputComponent.prototype.helperValue;
    /** @type {?} */
    ClassificationGroupInputComponent.prototype.ngControl;
    /** @type {?} */
    ClassificationGroupInputComponent.prototype.form;
    /** @type {?} */
    ClassificationGroupInputComponent.prototype.classificationValueIdChange;
    /** @type {?} */
    ClassificationGroupInputComponent.prototype.objectClassificationValueChange;
    /**
     * @type {?}
     * @private
     */
    ClassificationGroupInputComponent.prototype.classificationService;
    /** @type {?} */
    ClassificationGroupInputComponent.prototype.translationService;
    /**
     * @type {?}
     * @private
     */
    ClassificationGroupInputComponent.prototype.errorMessageService;
    /**
     * @type {?}
     * @private
     */
    ClassificationGroupInputComponent.prototype.formObject;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NpZmljYXRpb24tZ3JvdXAtaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3NvZS1jbGllbnQtc2hhcmVkLyIsInNvdXJjZXMiOlsic2hhcmVkL2NvbXBvbmVudHMvY2xhc3NpZmljYXRpb24tZ3JvdXAtaW5wdXQvY2xhc3NpZmljYXRpb24tZ3JvdXAtaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDdEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDeEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDN0UsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRS9DO0lBNEJFLDJDQUNVLHFCQUE0QyxFQUM3QyxrQkFBc0MsRUFDckMsbUJBQXlDLEVBQzdCLFVBQWtCO1FBSDlCLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDN0MsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUNyQyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXNCO1FBQzdCLGVBQVUsR0FBVixVQUFVLENBQVE7UUFDdEMsSUFBSSxDQUFDLDJCQUEyQixHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDM0QsSUFBSSxDQUFDLCtCQUErQixHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFDakUsQ0FBQzs7OztJQUVELG9EQUFROzs7SUFBUjtRQUFBLGlCQWlFQztRQWhFQywyQ0FBMkM7UUFDM0MsSUFBSSxDQUFDLHFCQUFx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Q0FBQyxZQUFZO1FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFDLEtBQUssRUFBRSxJQUFJLENBQUMscUJBQXFCLEVBQUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7O2dCQWxIRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdDQUFnQztvQkFDMUMsMHdCQUEwRDs7aUJBRTNEOzs7O2dCQVRRLHFCQUFxQjtnQkFDckIsa0JBQWtCO2dCQUNsQixvQkFBb0I7Z0JBSFAsTUFBTSx1QkFzQ3ZCLFFBQVE7Ozt3Q0F6QlYsS0FBSztxQ0FDTCxLQUFLO3NDQUNMLEtBQUs7OEJBQ0wsS0FBSzs2QkFDTCxLQUFLOytCQUNMLEtBQUs7Z0NBQ0wsS0FBSzsyQkFDTCxLQUFLOytCQUNMLEtBQUs7OENBVUwsTUFBTTtrREFDTixNQUFNOztJQXlGVCx3Q0FBQztDQUFBLEFBbkhELElBbUhDO1NBOUdZLGlDQUFpQzs7O0lBRTVDLGtFQUF1Qzs7SUFDdkMsK0RBQW9DOztJQUNwQyxnRUFBcUM7O0lBQ3JDLHdEQUE2Qjs7SUFDN0IsdURBQTZCOztJQUM3Qix5REFBOEI7O0lBQzlCLDBEQUErQjs7SUFDL0IscURBQTJCOztJQUMzQix5REFBOEI7O0lBRTlCLHNEQUFtQjs7SUFDbkIsbURBQTREOztJQUM1RCxvREFBZTs7SUFDZix5REFBa0I7O0lBQ2xCLHdEQUFpQjs7SUFDakIsc0RBQXVCOztJQUN2QixpREFBYTs7SUFFYix3RUFBeUQ7O0lBQ3pELDRFQUE2RDs7Ozs7SUFHM0Qsa0VBQW9EOztJQUNwRCwrREFBNkM7Ozs7O0lBQzdDLGdFQUFpRDs7Ozs7SUFDakQsdURBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sLCBOZ0Zvcm0gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDbGFzc2lmaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jbGFzc2lmaWNhdGlvbi1zZXJ2aWNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdHJhbnNsYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBFcnJvck1lc3NhZ2VzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Vycm9yLW1lc3NhZ2VzLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXRpbHMgfSBmcm9tICcuLi8uLi9leHRlbnNpb25zL3V0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWNsYXNzaWZpY2F0aW9uLWdyb3VwLWlucHV0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NsYXNzaWZpY2F0aW9uLWdyb3VwLWlucHV0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2xhc3NpZmljYXRpb24tZ3JvdXAtaW5wdXQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENsYXNzaWZpY2F0aW9uR3JvdXBJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgY2xhc3NpZmljYXRpb25WYWx1ZUlkOiBudW1iZXI7XG4gIEBJbnB1dCgpIGNsYXNzaWZpY2F0aW9uTmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBjbGFzc2lmaWNhdGlvbk1vZGVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGlzVm9sYXRpbGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHByb3BlcnR5TmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBzZWxlY3RlZFZhbHVlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xuICBASW5wdXQoKSBuZ0Zvcm1PYmplY3Q6IE5nRm9ybTtcblxuICBoYXNFcnJvcnM6IGJvb2xlYW47XG4gIGdyb3Vwczoge29wdGlvbnM6IGFueVtdLCBkZXNjcmlwdGlvbjogc3RyaW5nLCBpZDogbnVtYmVyfVtdO1xuICBvcHRpb25zOiBhbnlbXTtcbiAgZGVmYXVsdFZhbHVlOiBhbnk7XG4gIGhlbHBlclZhbHVlOiBhbnk7XG4gIG5nQ29udHJvbDogRm9ybUNvbnRyb2w7XG4gIGZvcm06IE5nRm9ybTtcblxuICBAT3V0cHV0KCkgY2xhc3NpZmljYXRpb25WYWx1ZUlkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgQE91dHB1dCgpIG9iamVjdENsYXNzaWZpY2F0aW9uVmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2xhc3NpZmljYXRpb25TZXJ2aWNlOiBDbGFzc2lmaWNhdGlvblNlcnZpY2UsXG4gICAgcHVibGljIHRyYW5zbGF0aW9uU2VydmljZTogVHJhbnNsYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgZXJyb3JNZXNzYWdlU2VydmljZTogRXJyb3JNZXNzYWdlc1NlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBmb3JtT2JqZWN0OiBOZ0Zvcm0pIHtcbiAgICB0aGlzLmNsYXNzaWZpY2F0aW9uVmFsdWVJZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAgIHRoaXMub2JqZWN0Q2xhc3NpZmljYXRpb25WYWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICAgIHRoaXMuY2xhc3NpZmljYXRpb25TZXJ2aWNlLmdldEdyb3VwZWRDbGFzc2lmaWNhdGlvblZhbHVlcyh0aGlzLmNsYXNzaWZpY2F0aW9uTmFtZSwgdGhpcy5jbGFzc2lmaWNhdGlvbk1vZGVsLCB0aGlzLmlzVm9sYXRpbGUpLnN1YnNjcmliZSh4ID0+IHtcbiAgICAgIGxldCB2YWxzID0gW107XG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgeC52YWx1ZS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHgudmFsdWVbaW5kZXhdO1xuICAgICAgICB2YWxzID0gWy4uLnZhbHMsIC4uLmVsZW1lbnQub3B0aW9uc107XG4gICAgICB9XG4gICAgICB0aGlzLm9wdGlvbnMgPSB2YWxzO1xuXG4gICAgICB0aGlzLmRlZmF1bHRWYWx1ZSA9IHRoaXMub3B0aW9ucy5maW5kKHkgPT4geS5pc0RlZmF1bHRWYWx1ZSA9PT0gdHJ1ZSk7XG4gICAgICB0aGlzLmdyb3VwcyA9IHgudmFsdWU7XG5cbiAgICAgIGlmICghVXRpbHMuaXNOdWxsRW1wdHlPclVuZGVmaW5lZCh0aGlzLmNsYXNzaWZpY2F0aW9uVmFsdWVJZCkpIHtcblxuICAgICAgICBjb25zdCBleFZhbHVlID0gdGhpcy5vcHRpb25zLmZpbmQoeSA9PiAnJyArIHkuaWQgPT09ICcnICsgdGhpcy5jbGFzc2lmaWNhdGlvblZhbHVlSWQpO1xuICAgICAgICBpZiAoZXhWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5jbGFzc2lmaWNhdGlvblZhbHVlSWQgPSBleFZhbHVlLmlkO1xuICAgICAgICAgIHRoaXMub2JqZWN0Q2xhc3NpZmljYXRpb25WYWx1ZUNoYW5nZS5lbWl0KGV4VmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY2xhc3NpZmljYXRpb25WYWx1ZUlkID0gdW5kZWZpbmVkO1xuICAgICAgICAgIHRoaXMuY2xhc3NpZmljYXRpb25WYWx1ZUlkQ2hhbmdlLmVtaXQodGhpcy5jbGFzc2lmaWNhdGlvblZhbHVlSWQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKCFVdGlscy5pc051bGxFbXB0eU9yVW5kZWZpbmVkKHRoaXMuc2VsZWN0ZWRWYWx1ZSkpIHtcbiAgICAgICAgY29uc3QgZXhWYWx1ZSA9IHRoaXMub3B0aW9ucy5maW5kKHkgPT4gJycgKyB5LnZhbHVlID09PSAnJyArIHRoaXMuc2VsZWN0ZWRWYWx1ZSk7XG4gICAgICAgIGlmIChleFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmNsYXNzaWZpY2F0aW9uVmFsdWVJZCA9IGV4VmFsdWUuaWQ7XG4gICAgICAgICAgdGhpcy5vYmplY3RDbGFzc2lmaWNhdGlvblZhbHVlQ2hhbmdlLmVtaXQoZXhWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoIVV0aWxzLmlzTnVsbEVtcHR5T3JVbmRlZmluZWQodGhpcy5kZWZhdWx0VmFsdWUpKSB7XG4gICAgICAgIHRoaXMuY2xhc3NpZmljYXRpb25WYWx1ZUlkID0gdGhpcy5kZWZhdWx0VmFsdWUuaWQ7XG4gICAgICAgIHRoaXMub2JqZWN0Q2xhc3NpZmljYXRpb25WYWx1ZUNoYW5nZS5lbWl0KHRoaXMuZGVmYXVsdFZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgPT09IHVuZGVmaW5lZClcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMucHJvcGVydHlOYW1lID09PSB1bmRlZmluZWQpXG4gICAgICB0aGlzLnByb3BlcnR5TmFtZSA9IFV0aWxzLm5ld1RlY2huaWNhbE51bWJlcigpO1xuXG4gICAgaWYgKFV0aWxzLmlzTnVsbEVtcHR5T3JVbmRlZmluZWQodGhpcy5uZ0Zvcm1PYmplY3QpKVxuICAgICAgICB0aGlzLmZvcm0gPSB0aGlzLm5nRm9ybU9iamVjdDtcbiAgICBpZiAoVXRpbHMuaXNOdWxsRW1wdHlPclVuZGVmaW5lZCh0aGlzLmZvcm0pKSB7XG4gICAgICAgIHRoaXMuZm9ybSA9IHRoaXMuZm9ybU9iamVjdDtcbiAgICAgIH1cblxuICAgIHRoaXMubmdDb250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XG4gICAgaWYgKHRoaXMuZm9ybSAhPT0gdW5kZWZpbmVkICYmIHRoaXMuZm9ybSAhPT0gbnVsbCAmJiB0aGlzLnByb3BlcnR5TmFtZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgdGhpcy5mb3JtLmZvcm0uYWRkQ29udHJvbCh0aGlzLnByb3BlcnR5TmFtZSwgdGhpcy5uZ0NvbnRyb2wpO1xuXG4gICAgdGhpcy5lcnJvck1lc3NhZ2VTZXJ2aWNlLmVycm9yUHJvcGVydHlNZXNzYWdlU3ViamVjdC5zdWJzY3JpYmUoeCA9PiB7XG4gICAgICBpZiAoIVV0aWxzLmlzTnVsbEVtcHR5T3JVbmRlZmluZWQodGhpcy5mb3JtLmZvcm0uZ2V0KHgucHJvcGVydHlOYW1lKSkgJiYgeC5pc0NsZWFudXAgPT09IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuZm9ybS5mb3JtLmdldCh4LnByb3BlcnR5TmFtZSkuc2V0RXJyb3JzKHsgaW5jb3JyZWN0OiB0cnVlIH0pO1xuICAgICAgICB0aGlzLmhhc0Vycm9ycyA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKCFVdGlscy5pc051bGxFbXB0eU9yVW5kZWZpbmVkKHRoaXMuZm9ybS5mb3JtLmdldCh4LnByb3BlcnR5TmFtZSkpICYmIHguaXNDbGVhbnVwID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMuaGFzRXJyb3JzID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZm9ybS5mb3JtLmdldCh4LnByb3BlcnR5TmFtZSkuc2V0RXJyb3JzKG51bGwpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuZXJyb3JNZXNzYWdlU2VydmljZS5yZW1vdmVGb3JtRXJyb3JzU3ViamVjdC5zdWJzY3JpYmUoeCA9PiB7XG4gICAgICB0aGlzLmhhc0Vycm9ycyA9IGZhbHNlO1xuICAgICAgaWYgKCFVdGlscy5pc051bGxFbXB0eU9yVW5kZWZpbmVkKHRoaXMuZm9ybS5mb3JtLmdldCh0aGlzLnByb3BlcnR5TmFtZSkgJiYgdGhpcy5wcm9wZXJ0eU5hbWUgIT09IHVuZGVmaW5lZCkpXG4gICAgICAgIHRoaXMuZm9ybS5mb3JtLmdldCh0aGlzLnByb3BlcnR5TmFtZSkuc2V0RXJyb3JzKG51bGwpO1xuICAgIH0pO1xuICB9XG5cbiAgY2hhbmdlKGV2ZW50KSB7XG4gICAgdGhpcy5jbGFzc2lmaWNhdGlvblZhbHVlSWQgPSBldmVudC52YWx1ZTtcbiAgICB0aGlzLmNsYXNzaWZpY2F0aW9uVmFsdWVJZENoYW5nZS5lbWl0KHRoaXMuY2xhc3NpZmljYXRpb25WYWx1ZUlkKTtcblxuICAgIGNvbnN0IGV4VmFsdWUgPSB0aGlzLm9wdGlvbnMuZmluZCh5ID0+ICcnICsgeS5pZCA9PT0gJycgKyB0aGlzLmNsYXNzaWZpY2F0aW9uVmFsdWVJZCk7XG4gICAgaWYgKGV4VmFsdWUgIT09IHVuZGVmaW5lZClcbiAgICAgIHRoaXMub2JqZWN0Q2xhc3NpZmljYXRpb25WYWx1ZUNoYW5nZS5lbWl0KGV4VmFsdWUpO1xuICAgIGNvbnN0IHBuYW1lID0gdGhpcy5wcm9wZXJ0eU5hbWU7XG4gICAgdGhpcy5mb3JtLmZvcm0ubWFya0FzRGlydHkoKTtcbiAgICB0aGlzLmZvcm0uZm9ybS5wYXRjaFZhbHVlKHtwbmFtZTogdGhpcy5jbGFzc2lmaWNhdGlvblZhbHVlSWR9KTtcbiAgfVxufVxuIl19