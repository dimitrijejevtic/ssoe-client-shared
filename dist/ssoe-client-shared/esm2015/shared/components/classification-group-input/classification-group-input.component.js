/**
 * @fileoverview added by tsickle
 * Generated from: shared/components/classification-group-input/classification-group-input.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, Optional } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { ClassificationService } from '../../services/classification-service.service';
import { TranslationService } from '../../services/translation.service';
import { ErrorMessagesService } from '../../services/error-messages.service';
import { Utils } from '../../extensions/utils';
export class ClassificationGroupInputComponent {
    /**
     * @param {?} classificationService
     * @param {?} translationService
     * @param {?} errorMessageService
     * @param {?} formObject
     */
    constructor(classificationService, translationService, errorMessageService, formObject) {
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
    ngOnInit() {
        // tslint:disable-next-line:max-line-length
        this.classificationService.getGroupedClassificationValues(this.classificationName, this.classificationModel, this.isVolatile).subscribe((/**
         * @param {?} x
         * @return {?}
         */
        x => {
            /** @type {?} */
            let vals = [];
            for (let index = 0; index < x.value.length; index++) {
                /** @type {?} */
                const element = x.value[index];
                vals = [...vals, ...element.options];
            }
            this.options = vals;
            this.defaultValue = this.options.find((/**
             * @param {?} y
             * @return {?}
             */
            y => y.isDefaultValue === true));
            this.groups = x.value;
            if (!Utils.isNullEmptyOrUndefined(this.classificationValueId)) {
                /** @type {?} */
                const exValue = this.options.find((/**
                 * @param {?} y
                 * @return {?}
                 */
                y => '' + y.id === '' + this.classificationValueId));
                if (exValue !== undefined) {
                    this.classificationValueId = exValue.id;
                    this.objectClassificationValueChange.emit(exValue);
                }
                else {
                    this.classificationValueId = undefined;
                    this.classificationValueIdChange.emit(this.classificationValueId);
                }
            }
            else if (!Utils.isNullEmptyOrUndefined(this.selectedValue)) {
                /** @type {?} */
                const exValue = this.options.find((/**
                 * @param {?} y
                 * @return {?}
                 */
                y => '' + y.value === '' + this.selectedValue));
                if (exValue !== undefined) {
                    this.classificationValueId = exValue.id;
                    this.objectClassificationValueChange.emit(exValue);
                }
            }
            else if (!Utils.isNullEmptyOrUndefined(this.defaultValue)) {
                this.classificationValueId = this.defaultValue.id;
                this.objectClassificationValueChange.emit(this.defaultValue);
            }
            if (this.disabled === undefined)
                this.disabled = false;
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
        x => {
            if (!Utils.isNullEmptyOrUndefined(this.form.form.get(x.propertyName)) && x.isCleanup === false) {
                this.form.form.get(x.propertyName).setErrors({ incorrect: true });
                this.hasErrors = true;
            }
            else if (!Utils.isNullEmptyOrUndefined(this.form.form.get(x.propertyName)) && x.isCleanup === true) {
                this.hasErrors = false;
                this.form.form.get(x.propertyName).setErrors(null);
            }
        }));
        this.errorMessageService.removeFormErrorsSubject.subscribe((/**
         * @param {?} x
         * @return {?}
         */
        x => {
            this.hasErrors = false;
            if (!Utils.isNullEmptyOrUndefined(this.form.form.get(this.propertyName) && this.propertyName !== undefined))
                this.form.form.get(this.propertyName).setErrors(null);
        }));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    change(event) {
        this.classificationValueId = event.value;
        this.classificationValueIdChange.emit(this.classificationValueId);
        /** @type {?} */
        const exValue = this.options.find((/**
         * @param {?} y
         * @return {?}
         */
        y => '' + y.id === '' + this.classificationValueId));
        if (exValue !== undefined)
            this.objectClassificationValueChange.emit(exValue);
        /** @type {?} */
        const pname = this.propertyName;
        this.form.form.markAsDirty();
        this.form.form.patchValue({ pname: this.classificationValueId });
    }
}
ClassificationGroupInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-classification-group-input',
                template: "<form formValidator>\n  <mat-form-field>\n    <mat-select [name]=\"propertyName\" placeholder=\"{{placeholder}}\" (selectionChange)=\"change($event)\" [(ngModel)]=\"classificationValueId\" [disabled]=\"disabled\">\n      <mat-optgroup *ngFor=\"let group of groups\" [label]=\"group.description | translate: translationService.cultureCode\">\n        <mat-option *ngFor=\"let option of group.options\" [value]=\"option.id\" matTooltip=\"{{option.description | translate: translationService.cultureCode}}\">\n          {{option.caption | translate: translationService.cultureCode}}\n        </mat-option>\n      </mat-optgroup>\n    </mat-select>\n    <mat-error app-input-validation-message [propertyName]=\"propertyName\"></mat-error>\n  </mat-form-field>\n</form>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
ClassificationGroupInputComponent.ctorParameters = () => [
    { type: ClassificationService },
    { type: TranslationService },
    { type: ErrorMessagesService },
    { type: NgForm, decorators: [{ type: Optional }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NpZmljYXRpb24tZ3JvdXAtaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3NvZS1jbGllbnQtc2hhcmVkLyIsInNvdXJjZXMiOlsic2hhcmVkL2NvbXBvbmVudHMvY2xhc3NpZmljYXRpb24tZ3JvdXAtaW5wdXQvY2xhc3NpZmljYXRpb24tZ3JvdXAtaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN0RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFPL0MsTUFBTSxPQUFPLGlDQUFpQzs7Ozs7OztJQXVCNUMsWUFDVSxxQkFBNEMsRUFDN0Msa0JBQXNDLEVBQ3JDLG1CQUF5QyxFQUM3QixVQUFrQjtRQUg5QiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzdDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDckMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFzQjtRQUM3QixlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQ3RDLElBQUksQ0FBQywyQkFBMkIsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQzNELElBQUksQ0FBQywrQkFBK0IsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBQ2pFLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sMkNBQTJDO1FBQzNDLElBQUksQ0FBQyxxQkFB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QUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixFQUFDLENBQUMsQ0FBQztJQUNqRSxDQUFDOzs7WUFsSEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQ0FBZ0M7Z0JBQzFDLDB3QkFBMEQ7O2FBRTNEOzs7O1lBVFEscUJBQXFCO1lBQ3JCLGtCQUFrQjtZQUNsQixvQkFBb0I7WUFIUCxNQUFNLHVCQXNDdkIsUUFBUTs7O29DQXpCVixLQUFLO2lDQUNMLEtBQUs7a0NBQ0wsS0FBSzswQkFDTCxLQUFLO3lCQUNMLEtBQUs7MkJBQ0wsS0FBSzs0QkFDTCxLQUFLO3VCQUNMLEtBQUs7MkJBQ0wsS0FBSzswQ0FVTCxNQUFNOzhDQUNOLE1BQU07Ozs7SUFuQlAsa0VBQXVDOztJQUN2QywrREFBb0M7O0lBQ3BDLGdFQUFxQzs7SUFDckMsd0RBQTZCOztJQUM3Qix1REFBNkI7O0lBQzdCLHlEQUE4Qjs7SUFDOUIsMERBQStCOztJQUMvQixxREFBMkI7O0lBQzNCLHlEQUE4Qjs7SUFFOUIsc0RBQW1COztJQUNuQixtREFBNEQ7O0lBQzVELG9EQUFlOztJQUNmLHlEQUFrQjs7SUFDbEIsd0RBQWlCOztJQUNqQixzREFBdUI7O0lBQ3ZCLGlEQUFhOztJQUViLHdFQUF5RDs7SUFDekQsNEVBQTZEOzs7OztJQUczRCxrRUFBb0Q7O0lBQ3BELCtEQUE2Qzs7Ozs7SUFDN0MsZ0VBQWlEOzs7OztJQUNqRCx1REFBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIE5nRm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENsYXNzaWZpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NsYXNzaWZpY2F0aW9uLXNlcnZpY2Uuc2VydmljZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy90cmFuc2xhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IEVycm9yTWVzc2FnZXNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZXJyb3ItbWVzc2FnZXMuc2VydmljZSc7XG5pbXBvcnQgeyBVdGlscyB9IGZyb20gJy4uLy4uL2V4dGVuc2lvbnMvdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtY2xhc3NpZmljYXRpb24tZ3JvdXAtaW5wdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2xhc3NpZmljYXRpb24tZ3JvdXAtaW5wdXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jbGFzc2lmaWNhdGlvbi1ncm91cC1pbnB1dC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2xhc3NpZmljYXRpb25Hcm91cElucHV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBjbGFzc2lmaWNhdGlvblZhbHVlSWQ6IG51bWJlcjtcbiAgQElucHV0KCkgY2xhc3NpZmljYXRpb25OYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNsYXNzaWZpY2F0aW9uTW9kZWw6IHN0cmluZztcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQElucHV0KCkgaXNWb2xhdGlsZTogYm9vbGVhbjtcbiAgQElucHV0KCkgcHJvcGVydHlOYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNlbGVjdGVkVmFsdWU6IHN0cmluZztcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIG5nRm9ybU9iamVjdDogTmdGb3JtO1xuXG4gIGhhc0Vycm9yczogYm9vbGVhbjtcbiAgZ3JvdXBzOiB7b3B0aW9uczogYW55W10sIGRlc2NyaXB0aW9uOiBzdHJpbmcsIGlkOiBudW1iZXJ9W107XG4gIG9wdGlvbnM6IGFueVtdO1xuICBkZWZhdWx0VmFsdWU6IGFueTtcbiAgaGVscGVyVmFsdWU6IGFueTtcbiAgbmdDb250cm9sOiBGb3JtQ29udHJvbDtcbiAgZm9ybTogTmdGb3JtO1xuXG4gIEBPdXRwdXQoKSBjbGFzc2lmaWNhdGlvblZhbHVlSWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICBAT3V0cHV0KCkgb2JqZWN0Q2xhc3NpZmljYXRpb25WYWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjbGFzc2lmaWNhdGlvblNlcnZpY2U6IENsYXNzaWZpY2F0aW9uU2VydmljZSxcbiAgICBwdWJsaWMgdHJhbnNsYXRpb25TZXJ2aWNlOiBUcmFuc2xhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBlcnJvck1lc3NhZ2VTZXJ2aWNlOiBFcnJvck1lc3NhZ2VzU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGZvcm1PYmplY3Q6IE5nRm9ybSkge1xuICAgIHRoaXMuY2xhc3NpZmljYXRpb25WYWx1ZUlkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICAgdGhpcy5vYmplY3RDbGFzc2lmaWNhdGlvblZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gICAgdGhpcy5jbGFzc2lmaWNhdGlvblNlcnZpY2UuZ2V0R3JvdXBlZENsYXNzaWZpY2F0aW9uVmFsdWVzKHRoaXMuY2xhc3NpZmljYXRpb25OYW1lLCB0aGlzLmNsYXNzaWZpY2F0aW9uTW9kZWwsIHRoaXMuaXNWb2xhdGlsZSkuc3Vic2NyaWJlKHggPT4ge1xuICAgICAgbGV0IHZhbHMgPSBbXTtcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB4LnZhbHVlLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0geC52YWx1ZVtpbmRleF07XG4gICAgICAgIHZhbHMgPSBbLi4udmFscywgLi4uZWxlbWVudC5vcHRpb25zXTtcbiAgICAgIH1cbiAgICAgIHRoaXMub3B0aW9ucyA9IHZhbHM7XG5cbiAgICAgIHRoaXMuZGVmYXVsdFZhbHVlID0gdGhpcy5vcHRpb25zLmZpbmQoeSA9PiB5LmlzRGVmYXVsdFZhbHVlID09PSB0cnVlKTtcbiAgICAgIHRoaXMuZ3JvdXBzID0geC52YWx1ZTtcblxuICAgICAgaWYgKCFVdGlscy5pc051bGxFbXB0eU9yVW5kZWZpbmVkKHRoaXMuY2xhc3NpZmljYXRpb25WYWx1ZUlkKSkge1xuXG4gICAgICAgIGNvbnN0IGV4VmFsdWUgPSB0aGlzLm9wdGlvbnMuZmluZCh5ID0+ICcnICsgeS5pZCA9PT0gJycgKyB0aGlzLmNsYXNzaWZpY2F0aW9uVmFsdWVJZCk7XG4gICAgICAgIGlmIChleFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmNsYXNzaWZpY2F0aW9uVmFsdWVJZCA9IGV4VmFsdWUuaWQ7XG4gICAgICAgICAgdGhpcy5vYmplY3RDbGFzc2lmaWNhdGlvblZhbHVlQ2hhbmdlLmVtaXQoZXhWYWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jbGFzc2lmaWNhdGlvblZhbHVlSWQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgdGhpcy5jbGFzc2lmaWNhdGlvblZhbHVlSWRDaGFuZ2UuZW1pdCh0aGlzLmNsYXNzaWZpY2F0aW9uVmFsdWVJZCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoIVV0aWxzLmlzTnVsbEVtcHR5T3JVbmRlZmluZWQodGhpcy5zZWxlY3RlZFZhbHVlKSkge1xuICAgICAgICBjb25zdCBleFZhbHVlID0gdGhpcy5vcHRpb25zLmZpbmQoeSA9PiAnJyArIHkudmFsdWUgPT09ICcnICsgdGhpcy5zZWxlY3RlZFZhbHVlKTtcbiAgICAgICAgaWYgKGV4VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuY2xhc3NpZmljYXRpb25WYWx1ZUlkID0gZXhWYWx1ZS5pZDtcbiAgICAgICAgICB0aGlzLm9iamVjdENsYXNzaWZpY2F0aW9uVmFsdWVDaGFuZ2UuZW1pdChleFZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICghVXRpbHMuaXNOdWxsRW1wdHlPclVuZGVmaW5lZCh0aGlzLmRlZmF1bHRWYWx1ZSkpIHtcbiAgICAgICAgdGhpcy5jbGFzc2lmaWNhdGlvblZhbHVlSWQgPSB0aGlzLmRlZmF1bHRWYWx1ZS5pZDtcbiAgICAgICAgdGhpcy5vYmplY3RDbGFzc2lmaWNhdGlvblZhbHVlQ2hhbmdlLmVtaXQodGhpcy5kZWZhdWx0VmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCA9PT0gdW5kZWZpbmVkKVxuICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5wcm9wZXJ0eU5hbWUgPT09IHVuZGVmaW5lZClcbiAgICAgIHRoaXMucHJvcGVydHlOYW1lID0gVXRpbHMubmV3VGVjaG5pY2FsTnVtYmVyKCk7XG5cbiAgICBpZiAoVXRpbHMuaXNOdWxsRW1wdHlPclVuZGVmaW5lZCh0aGlzLm5nRm9ybU9iamVjdCkpXG4gICAgICAgIHRoaXMuZm9ybSA9IHRoaXMubmdGb3JtT2JqZWN0O1xuICAgIGlmIChVdGlscy5pc051bGxFbXB0eU9yVW5kZWZpbmVkKHRoaXMuZm9ybSkpIHtcbiAgICAgICAgdGhpcy5mb3JtID0gdGhpcy5mb3JtT2JqZWN0O1xuICAgICAgfVxuXG4gICAgdGhpcy5uZ0NvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcbiAgICBpZiAodGhpcy5mb3JtICE9PSB1bmRlZmluZWQgJiYgdGhpcy5mb3JtICE9PSBudWxsICYmIHRoaXMucHJvcGVydHlOYW1lICE9PSB1bmRlZmluZWQpXG4gICAgICB0aGlzLmZvcm0uZm9ybS5hZGRDb250cm9sKHRoaXMucHJvcGVydHlOYW1lLCB0aGlzLm5nQ29udHJvbCk7XG5cbiAgICB0aGlzLmVycm9yTWVzc2FnZVNlcnZpY2UuZXJyb3JQcm9wZXJ0eU1lc3NhZ2VTdWJqZWN0LnN1YnNjcmliZSh4ID0+IHtcbiAgICAgIGlmICghVXRpbHMuaXNOdWxsRW1wdHlPclVuZGVmaW5lZCh0aGlzLmZvcm0uZm9ybS5nZXQoeC5wcm9wZXJ0eU5hbWUpKSAmJiB4LmlzQ2xlYW51cCA9PT0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5mb3JtLmZvcm0uZ2V0KHgucHJvcGVydHlOYW1lKS5zZXRFcnJvcnMoeyBpbmNvcnJlY3Q6IHRydWUgfSk7XG4gICAgICAgIHRoaXMuaGFzRXJyb3JzID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoIVV0aWxzLmlzTnVsbEVtcHR5T3JVbmRlZmluZWQodGhpcy5mb3JtLmZvcm0uZ2V0KHgucHJvcGVydHlOYW1lKSkgJiYgeC5pc0NsZWFudXAgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy5oYXNFcnJvcnMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5mb3JtLmZvcm0uZ2V0KHgucHJvcGVydHlOYW1lKS5zZXRFcnJvcnMobnVsbCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5lcnJvck1lc3NhZ2VTZXJ2aWNlLnJlbW92ZUZvcm1FcnJvcnNTdWJqZWN0LnN1YnNjcmliZSh4ID0+IHtcbiAgICAgIHRoaXMuaGFzRXJyb3JzID0gZmFsc2U7XG4gICAgICBpZiAoIVV0aWxzLmlzTnVsbEVtcHR5T3JVbmRlZmluZWQodGhpcy5mb3JtLmZvcm0uZ2V0KHRoaXMucHJvcGVydHlOYW1lKSAmJiB0aGlzLnByb3BlcnR5TmFtZSAhPT0gdW5kZWZpbmVkKSlcbiAgICAgICAgdGhpcy5mb3JtLmZvcm0uZ2V0KHRoaXMucHJvcGVydHlOYW1lKS5zZXRFcnJvcnMobnVsbCk7XG4gICAgfSk7XG4gIH1cblxuICBjaGFuZ2UoZXZlbnQpIHtcbiAgICB0aGlzLmNsYXNzaWZpY2F0aW9uVmFsdWVJZCA9IGV2ZW50LnZhbHVlO1xuICAgIHRoaXMuY2xhc3NpZmljYXRpb25WYWx1ZUlkQ2hhbmdlLmVtaXQodGhpcy5jbGFzc2lmaWNhdGlvblZhbHVlSWQpO1xuXG4gICAgY29uc3QgZXhWYWx1ZSA9IHRoaXMub3B0aW9ucy5maW5kKHkgPT4gJycgKyB5LmlkID09PSAnJyArIHRoaXMuY2xhc3NpZmljYXRpb25WYWx1ZUlkKTtcbiAgICBpZiAoZXhWYWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgdGhpcy5vYmplY3RDbGFzc2lmaWNhdGlvblZhbHVlQ2hhbmdlLmVtaXQoZXhWYWx1ZSk7XG4gICAgY29uc3QgcG5hbWUgPSB0aGlzLnByb3BlcnR5TmFtZTtcbiAgICB0aGlzLmZvcm0uZm9ybS5tYXJrQXNEaXJ0eSgpO1xuICAgIHRoaXMuZm9ybS5mb3JtLnBhdGNoVmFsdWUoe3BuYW1lOiB0aGlzLmNsYXNzaWZpY2F0aW9uVmFsdWVJZH0pO1xuICB9XG59XG4iXX0=