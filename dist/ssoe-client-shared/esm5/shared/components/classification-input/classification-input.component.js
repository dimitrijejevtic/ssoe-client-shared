/**
 * @fileoverview added by tsickle
 * Generated from: shared/components/classification-input/classification-input.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, Optional } from '@angular/core';
import { ClassificationService } from '../../services/classification-service.service';
import { Utils } from '../../extensions/utils';
import { TranslationService } from '../../services/translation.service';
import { FormControl, NgForm } from '@angular/forms';
import { ErrorMessagesService } from '../../services/error-messages.service';
import { Subject } from 'rxjs';
var ClassificationInputComponent = /** @class */ (function () {
    function ClassificationInputComponent(classificationService, translationService, errorMessageService, formObject) {
        this.classificationService = classificationService;
        this.translationService = translationService;
        this.errorMessageService = errorMessageService;
        this.formObject = formObject;
        this.classificationValueIdChange = new EventEmitter();
        this.objectClassificationValueChange = new EventEmitter();
        if (Utils.isNullEmptyOrUndefined(this.ngFormObject))
            this.form = this.ngFormObject;
        if (Utils.isNullEmptyOrUndefined(this.form)) {
            this.form = this.formObject;
        }
    }
    /**
     * @return {?}
     */
    ClassificationInputComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.classificationService.getClassificationValues(this.classificationName, this.classificationModel, this.isVolatile).subscribe((/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            _this.defaultValue = x.value.find((/**
             * @param {?} y
             * @return {?}
             */
            function (y) { return y.isDefaultValue === true; }));
            _this.options = x.value;
            if (!Utils.isNullEmptyOrUndefined(_this.classificationValueId)) {
                /** @type {?} */
                var exValue = _this.options.find((/**
                 * @param {?} y
                 * @return {?}
                 */
                function (y) { return '' + y.id === '' + _this.classificationValueId; }));
                if (exValue !== undefined) {
                    _this.classificationValueId = exValue.id;
                    _this.classificationValueIdChange.emit(exValue.id);
                    _this.objectClassificationValueChange.emit(exValue);
                }
                else {
                    _this.classificationValueId = undefined;
                    _this.classificationValueIdChange.emit(undefined);
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
                    _this.classificationValueIdChange.emit(exValue.id);
                    _this.objectClassificationValueChange.emit(exValue);
                }
            }
            else if (!Utils.isNullEmptyOrUndefined(_this.defaultValue)) {
                _this.classificationValueId = _this.defaultValue.id;
                _this.objectClassificationValueChange.emit(_this.defaultValue);
                /** @type {?} */
                var pName = _this.propertyName;
                _this.form.form.patchValue({ pName: _this.defaultValue.id });
            }
            if (_this.disabled === undefined)
                _this.disabled = false;
        }));
        if (this.propertyName === undefined)
            this.propertyName = Utils.newTechnicalNumber();
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
        if (this.resetToDefault !== undefined) {
            this.resetToDefault.subscribe((/**
             * @param {?} x
             * @return {?}
             */
            function (x) {
                if (!Utils.isNullEmptyOrUndefined(_this.defaultValue)) {
                    _this.classificationValueId = _this.defaultValue.id;
                    _this.classificationValueIdChange.emit(_this.defaultValue.id);
                    _this.objectClassificationValueChange.emit(_this.defaultValue);
                }
            }));
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ClassificationInputComponent.prototype.change = /**
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
    ClassificationInputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-classification-input',
                    template: "  <form formValidator>\r\n    <mat-form-field>\r\n      <mat-select [name]=\"propertyName\" placeholder=\"{{placeholder}}\" (selectionChange)=\"change($event)\" [(ngModel)]=\"classificationValueId\" [disabled]=\"disabled\">\r\n        <mat-option *ngFor=\"let option of options\" [value]=\"option.id\" matTooltip=\"{{option.description | translate: translationService.cultureCode}}\">\r\n          {{option.caption | translate: translationService.cultureCode}}\r\n        </mat-option>\r\n      </mat-select>\r\n      <mat-error app-input-validation-message [propertyName]=\"propertyName\"></mat-error>\r\n    </mat-form-field>\r\n  </form>\r\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ClassificationInputComponent.ctorParameters = function () { return [
        { type: ClassificationService },
        { type: TranslationService },
        { type: ErrorMessagesService },
        { type: NgForm, decorators: [{ type: Optional }] }
    ]; };
    ClassificationInputComponent.propDecorators = {
        classificationValueId: [{ type: Input }],
        classificationName: [{ type: Input }],
        classificationModel: [{ type: Input }],
        placeholder: [{ type: Input }],
        isVolatile: [{ type: Input }],
        propertyName: [{ type: Input }],
        selectedValue: [{ type: Input }],
        disabled: [{ type: Input }],
        resetToDefault: [{ type: Input }],
        ngFormObject: [{ type: Input }],
        classificationValueIdChange: [{ type: Output }],
        objectClassificationValueChange: [{ type: Output }]
    };
    return ClassificationInputComponent;
}());
export { ClassificationInputComponent };
if (false) {
    /** @type {?} */
    ClassificationInputComponent.prototype.classificationValueId;
    /** @type {?} */
    ClassificationInputComponent.prototype.classificationName;
    /** @type {?} */
    ClassificationInputComponent.prototype.classificationModel;
    /** @type {?} */
    ClassificationInputComponent.prototype.placeholder;
    /** @type {?} */
    ClassificationInputComponent.prototype.isVolatile;
    /** @type {?} */
    ClassificationInputComponent.prototype.propertyName;
    /** @type {?} */
    ClassificationInputComponent.prototype.selectedValue;
    /** @type {?} */
    ClassificationInputComponent.prototype.disabled;
    /** @type {?} */
    ClassificationInputComponent.prototype.resetToDefault;
    /** @type {?} */
    ClassificationInputComponent.prototype.ngFormObject;
    /** @type {?} */
    ClassificationInputComponent.prototype.hasErrors;
    /** @type {?} */
    ClassificationInputComponent.prototype.options;
    /** @type {?} */
    ClassificationInputComponent.prototype.defaultValue;
    /** @type {?} */
    ClassificationInputComponent.prototype.helperValue;
    /** @type {?} */
    ClassificationInputComponent.prototype.ngControl;
    /** @type {?} */
    ClassificationInputComponent.prototype.form;
    /** @type {?} */
    ClassificationInputComponent.prototype.classificationValueIdChange;
    /** @type {?} */
    ClassificationInputComponent.prototype.objectClassificationValueChange;
    /**
     * @type {?}
     * @private
     */
    ClassificationInputComponent.prototype.classificationService;
    /** @type {?} */
    ClassificationInputComponent.prototype.translationService;
    /**
     * @type {?}
     * @private
     */
    ClassificationInputComponent.prototype.errorMessageService;
    /**
     * @type {?}
     * @private
     */
    ClassificationInputComponent.prototype.formObject;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NpZmljYXRpb24taW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3NvZS1jbGllbnQtc2hhcmVkLyIsInNvdXJjZXMiOlsic2hhcmVkL2NvbXBvbmVudHMvY2xhc3NpZmljYXRpb24taW5wdXQvY2xhc3NpZmljYXRpb24taW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDdEYsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQy9DLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDN0UsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQjtJQTRCRSxzQ0FDVSxxQkFBNEMsRUFDN0Msa0JBQXNDLEVBQ3JDLG1CQUF5QyxFQUM3QixVQUFrQjtRQUg5QiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzdDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDckMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFzQjtRQUM3QixlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQ3RDLElBQUksQ0FBQywyQkFBMkIsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQzNELElBQUksQ0FBQywrQkFBK0IsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBRS9ELElBQUksS0FBSyxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7WUFD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QUEsQUE1SEQsSUE0SEM7U0F2SFksNEJBQTRCOzs7SUFFdkMsNkRBQXVDOztJQUN2QywwREFBb0M7O0lBQ3BDLDJEQUFxQzs7SUFDckMsbURBQTZCOztJQUM3QixrREFBNkI7O0lBQzdCLG9EQUE4Qjs7SUFDOUIscURBQStCOztJQUMvQixnREFBMkI7O0lBQzNCLHNEQUFzQzs7SUFDdEMsb0RBQThCOztJQUU5QixpREFBbUI7O0lBQ25CLCtDQUFlOztJQUNmLG9EQUFrQjs7SUFDbEIsbURBQWlCOztJQUNqQixpREFBdUI7O0lBQ3ZCLDRDQUFhOztJQUViLG1FQUF5RDs7SUFDekQsdUVBQTZEOzs7OztJQUczRCw2REFBb0Q7O0lBQ3BELDBEQUE2Qzs7Ozs7SUFDN0MsMkRBQWlEOzs7OztJQUNqRCxrREFBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDbGFzc2lmaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jbGFzc2lmaWNhdGlvbi1zZXJ2aWNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBVdGlscyB9IGZyb20gJy4uLy4uL2V4dGVuc2lvbnMvdXRpbHMnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy90cmFuc2xhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIE5nRm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgRXJyb3JNZXNzYWdlc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9lcnJvci1tZXNzYWdlcy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtY2xhc3NpZmljYXRpb24taW5wdXQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbGFzc2lmaWNhdGlvbi1pbnB1dC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY2xhc3NpZmljYXRpb24taW5wdXQuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbGFzc2lmaWNhdGlvbklucHV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgY2xhc3NpZmljYXRpb25WYWx1ZUlkOiBudW1iZXI7XHJcbiAgQElucHV0KCkgY2xhc3NpZmljYXRpb25OYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgY2xhc3NpZmljYXRpb25Nb2RlbDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaXNWb2xhdGlsZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBwcm9wZXJ0eU5hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBzZWxlY3RlZFZhbHVlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgcmVzZXRUb0RlZmF1bHQ6IFN1YmplY3Q8YW55PjtcclxuICBASW5wdXQoKSBuZ0Zvcm1PYmplY3Q6IE5nRm9ybTtcclxuXHJcbiAgaGFzRXJyb3JzOiBib29sZWFuO1xyXG4gIG9wdGlvbnM6IGFueVtdO1xyXG4gIGRlZmF1bHRWYWx1ZTogYW55O1xyXG4gIGhlbHBlclZhbHVlOiBhbnk7XHJcbiAgbmdDb250cm9sOiBGb3JtQ29udHJvbDtcclxuICBmb3JtOiBOZ0Zvcm07XHJcblxyXG4gIEBPdXRwdXQoKSBjbGFzc2lmaWNhdGlvblZhbHVlSWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG4gIEBPdXRwdXQoKSBvYmplY3RDbGFzc2lmaWNhdGlvblZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNsYXNzaWZpY2F0aW9uU2VydmljZTogQ2xhc3NpZmljYXRpb25TZXJ2aWNlLFxyXG4gICAgcHVibGljIHRyYW5zbGF0aW9uU2VydmljZTogVHJhbnNsYXRpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBlcnJvck1lc3NhZ2VTZXJ2aWNlOiBFcnJvck1lc3NhZ2VzU2VydmljZSxcclxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZm9ybU9iamVjdDogTmdGb3JtKSB7XHJcbiAgICB0aGlzLmNsYXNzaWZpY2F0aW9uVmFsdWVJZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgdGhpcy5vYmplY3RDbGFzc2lmaWNhdGlvblZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gICAgaWYgKFV0aWxzLmlzTnVsbEVtcHR5T3JVbmRlZmluZWQodGhpcy5uZ0Zvcm1PYmplY3QpKVxyXG4gICAgICB0aGlzLmZvcm0gPSB0aGlzLm5nRm9ybU9iamVjdDtcclxuICAgIGlmIChVdGlscy5pc051bGxFbXB0eU9yVW5kZWZpbmVkKHRoaXMuZm9ybSkpIHtcclxuICAgICAgdGhpcy5mb3JtID0gdGhpcy5mb3JtT2JqZWN0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmNsYXNzaWZpY2F0aW9uU2VydmljZS5nZXRDbGFzc2lmaWNhdGlvblZhbHVlcyh0aGlzLmNsYXNzaWZpY2F0aW9uTmFtZSwgdGhpcy5jbGFzc2lmaWNhdGlvbk1vZGVsLCB0aGlzLmlzVm9sYXRpbGUpLnN1YnNjcmliZSh4ID0+IHtcclxuICAgICAgdGhpcy5kZWZhdWx0VmFsdWUgPSB4LnZhbHVlLmZpbmQoeSA9PiB5LmlzRGVmYXVsdFZhbHVlID09PSB0cnVlKTtcclxuICAgICAgdGhpcy5vcHRpb25zID0geC52YWx1ZTtcclxuXHJcbiAgICAgIGlmICghVXRpbHMuaXNOdWxsRW1wdHlPclVuZGVmaW5lZCh0aGlzLmNsYXNzaWZpY2F0aW9uVmFsdWVJZCkpIHtcclxuICAgICAgICBjb25zdCBleFZhbHVlID0gdGhpcy5vcHRpb25zLmZpbmQoeSA9PiAnJyArIHkuaWQgPT09ICcnICsgdGhpcy5jbGFzc2lmaWNhdGlvblZhbHVlSWQpO1xyXG4gICAgICAgIGlmIChleFZhbHVlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHRoaXMuY2xhc3NpZmljYXRpb25WYWx1ZUlkID0gZXhWYWx1ZS5pZDtcclxuICAgICAgICAgIHRoaXMuY2xhc3NpZmljYXRpb25WYWx1ZUlkQ2hhbmdlLmVtaXQoZXhWYWx1ZS5pZCk7XHJcbiAgICAgICAgICB0aGlzLm9iamVjdENsYXNzaWZpY2F0aW9uVmFsdWVDaGFuZ2UuZW1pdChleFZhbHVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5jbGFzc2lmaWNhdGlvblZhbHVlSWQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICB0aGlzLmNsYXNzaWZpY2F0aW9uVmFsdWVJZENoYW5nZS5lbWl0KHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICB0aGlzLmNsYXNzaWZpY2F0aW9uVmFsdWVJZENoYW5nZS5lbWl0KHRoaXMuY2xhc3NpZmljYXRpb25WYWx1ZUlkKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAoIVV0aWxzLmlzTnVsbEVtcHR5T3JVbmRlZmluZWQodGhpcy5zZWxlY3RlZFZhbHVlKSkge1xyXG4gICAgICAgIGNvbnN0IGV4VmFsdWUgPSB0aGlzLm9wdGlvbnMuZmluZCh5ID0+ICcnICsgeS52YWx1ZSA9PT0gJycgKyB0aGlzLnNlbGVjdGVkVmFsdWUpO1xyXG4gICAgICAgIGlmIChleFZhbHVlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHRoaXMuY2xhc3NpZmljYXRpb25WYWx1ZUlkID0gZXhWYWx1ZS5pZDtcclxuICAgICAgICAgIHRoaXMuY2xhc3NpZmljYXRpb25WYWx1ZUlkQ2hhbmdlLmVtaXQoZXhWYWx1ZS5pZCk7XHJcbiAgICAgICAgICB0aGlzLm9iamVjdENsYXNzaWZpY2F0aW9uVmFsdWVDaGFuZ2UuZW1pdChleFZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAoIVV0aWxzLmlzTnVsbEVtcHR5T3JVbmRlZmluZWQodGhpcy5kZWZhdWx0VmFsdWUpKSB7XHJcbiAgICAgICAgdGhpcy5jbGFzc2lmaWNhdGlvblZhbHVlSWQgPSB0aGlzLmRlZmF1bHRWYWx1ZS5pZDtcclxuICAgICAgICB0aGlzLm9iamVjdENsYXNzaWZpY2F0aW9uVmFsdWVDaGFuZ2UuZW1pdCh0aGlzLmRlZmF1bHRWYWx1ZSk7XHJcbiAgICAgICAgY29uc3QgcE5hbWUgPSB0aGlzLnByb3BlcnR5TmFtZTtcclxuICAgICAgICB0aGlzLmZvcm0uZm9ybS5wYXRjaFZhbHVlKHtwTmFtZTogdGhpcy5kZWZhdWx0VmFsdWUuaWR9KTtcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICAgIGlmICh0aGlzLmRpc2FibGVkID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHRoaXMucHJvcGVydHlOYW1lID09PSB1bmRlZmluZWQpXHJcbiAgICAgIHRoaXMucHJvcGVydHlOYW1lID0gVXRpbHMubmV3VGVjaG5pY2FsTnVtYmVyKCk7XHJcblxyXG4gICAgdGhpcy5uZ0NvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcclxuXHJcblxyXG4gICAgaWYgKHRoaXMuZm9ybSAhPT0gdW5kZWZpbmVkICYmIHRoaXMuZm9ybSAhPT0gbnVsbCAmJiB0aGlzLnByb3BlcnR5TmFtZSAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICB0aGlzLmZvcm0uZm9ybS5hZGRDb250cm9sKHRoaXMucHJvcGVydHlOYW1lLCB0aGlzLm5nQ29udHJvbCk7XHJcblxyXG4gICAgdGhpcy5lcnJvck1lc3NhZ2VTZXJ2aWNlLmVycm9yUHJvcGVydHlNZXNzYWdlU3ViamVjdC5zdWJzY3JpYmUoeCA9PiB7XHJcbiAgICAgIGlmICghVXRpbHMuaXNOdWxsRW1wdHlPclVuZGVmaW5lZCh0aGlzLmZvcm0uZm9ybS5nZXQoeC5wcm9wZXJ0eU5hbWUpKSAmJiB4LmlzQ2xlYW51cCA9PT0gZmFsc2UpIHtcclxuICAgICAgICB0aGlzLmZvcm0uZm9ybS5nZXQoeC5wcm9wZXJ0eU5hbWUpLnNldEVycm9ycyh7IGluY29ycmVjdDogdHJ1ZSB9KTtcclxuICAgICAgICB0aGlzLmhhc0Vycm9ycyA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSBpZiAoIVV0aWxzLmlzTnVsbEVtcHR5T3JVbmRlZmluZWQodGhpcy5mb3JtLmZvcm0uZ2V0KHgucHJvcGVydHlOYW1lKSkgJiYgeC5pc0NsZWFudXAgPT09IHRydWUpIHtcclxuICAgICAgICB0aGlzLmhhc0Vycm9ycyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZm9ybS5mb3JtLmdldCh4LnByb3BlcnR5TmFtZSkuc2V0RXJyb3JzKG51bGwpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMuZXJyb3JNZXNzYWdlU2VydmljZS5yZW1vdmVGb3JtRXJyb3JzU3ViamVjdC5zdWJzY3JpYmUoeCA9PiB7XHJcbiAgICAgIHRoaXMuaGFzRXJyb3JzID0gZmFsc2U7XHJcbiAgICAgIGlmICghVXRpbHMuaXNOdWxsRW1wdHlPclVuZGVmaW5lZCh0aGlzLmZvcm0uZm9ybS5nZXQodGhpcy5wcm9wZXJ0eU5hbWUpICYmIHRoaXMucHJvcGVydHlOYW1lICE9PSB1bmRlZmluZWQpKVxyXG4gICAgICAgIHRoaXMuZm9ybS5mb3JtLmdldCh0aGlzLnByb3BlcnR5TmFtZSkuc2V0RXJyb3JzKG51bGwpO1xyXG4gICAgfSk7XHJcbiAgICBpZiAodGhpcy5yZXNldFRvRGVmYXVsdCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMucmVzZXRUb0RlZmF1bHQuc3Vic2NyaWJlKHggPT4ge1xyXG4gICAgICAgIGlmICghVXRpbHMuaXNOdWxsRW1wdHlPclVuZGVmaW5lZCh0aGlzLmRlZmF1bHRWYWx1ZSkpIHtcclxuICAgICAgICAgIHRoaXMuY2xhc3NpZmljYXRpb25WYWx1ZUlkID0gdGhpcy5kZWZhdWx0VmFsdWUuaWQ7XHJcbiAgICAgICAgICB0aGlzLmNsYXNzaWZpY2F0aW9uVmFsdWVJZENoYW5nZS5lbWl0KHRoaXMuZGVmYXVsdFZhbHVlLmlkKTtcclxuICAgICAgICAgIHRoaXMub2JqZWN0Q2xhc3NpZmljYXRpb25WYWx1ZUNoYW5nZS5lbWl0KHRoaXMuZGVmYXVsdFZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hhbmdlKGV2ZW50KSB7XHJcbiAgICB0aGlzLmNsYXNzaWZpY2F0aW9uVmFsdWVJZCA9IGV2ZW50LnZhbHVlO1xyXG4gICAgdGhpcy5jbGFzc2lmaWNhdGlvblZhbHVlSWRDaGFuZ2UuZW1pdCh0aGlzLmNsYXNzaWZpY2F0aW9uVmFsdWVJZCk7XHJcblxyXG4gICAgY29uc3QgZXhWYWx1ZSA9IHRoaXMub3B0aW9ucy5maW5kKHkgPT4gJycgKyB5LmlkID09PSAnJyArIHRoaXMuY2xhc3NpZmljYXRpb25WYWx1ZUlkKTtcclxuICAgIGlmIChleFZhbHVlICE9PSB1bmRlZmluZWQpXHJcbiAgICAgIHRoaXMub2JqZWN0Q2xhc3NpZmljYXRpb25WYWx1ZUNoYW5nZS5lbWl0KGV4VmFsdWUpO1xyXG4gICAgY29uc3QgcG5hbWUgPSB0aGlzLnByb3BlcnR5TmFtZTtcclxuICAgIHRoaXMuZm9ybS5mb3JtLm1hcmtBc0RpcnR5KCk7XHJcbiAgICB0aGlzLmZvcm0uZm9ybS5wYXRjaFZhbHVlKHtwbmFtZTogdGhpcy5jbGFzc2lmaWNhdGlvblZhbHVlSWR9KTtcclxuXHJcbiAgfVxyXG59XHJcbiJdfQ==