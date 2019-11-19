/**
 * @fileoverview added by tsickle
 * Generated from: shared/components/typeahead-input/typeahead-input.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatAutocomplete, MatAutocompleteTrigger } from '@angular/material';
import { Subject, merge, of } from 'rxjs';
import { debounceTime, switchMap, distinctUntilChanged } from 'rxjs/operators';
import { SearchService } from '../../services/search.service';
import { Utils } from '../../extensions/utils';
import { TranslationService } from '../../services/translation.service';
import { FormControl, NgForm } from '@angular/forms';
import { ErrorMessagesService } from '../../services/error-messages.service';
export class TypeaheadInputComponent {
    /**
     * @param {?} searchService
     * @param {?} translateService
     * @param {?} formObject
     * @param {?} errorMessageService
     */
    constructor(searchService, translateService, formObject, errorMessageService) {
        this.searchService = searchService;
        this.translateService = translateService;
        this.formObject = formObject;
        this.errorMessageService = errorMessageService;
        this.typeaheadSkipValue = 6;
        this.minNumOfCharToSearch = 3;
        this.readonly = false;
        this.hasErrors = false;
        this.isLoading = false;
        this.nextPage = new Subject();
        this.valueChosen = false;
        this.typeaheadValueChange = new EventEmitter();
        this.typeaheadSelectedValueChange = new EventEmitter();
        this.inputChangeSubject = new Subject();
        this.nextPage = new Subject();
        this.skip = 0;
        this.top = this.typeaheadSkipValue;
        this.results = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        merge(this.inputChangeSubject.pipe(debounceTime(400), distinctUntilChanged((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => {
            if (b.length < this.minNumOfCharToSearch || a === b)
                return true;
            this.resetFilter();
            return false;
        }))), this.nextPage.pipe(distinctUntilChanged((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => {
            if (a === b)
                return true;
            return false;
        }))))
            .pipe(switchMap((/**
         * @param {?} x
         * @return {?}
         */
        (x) => {
            if (Utils.isNullEmptyOrUndefined(this.currentValue) || this.currentValue.length < this.minNumOfCharToSearch) {
                this.resetFilter();
                return of({ value: [] });
            }
            /** @type {?} */
            let searchTermJson = null;
            this.isLoading = true;
            if (this.filterFormatFn === undefined)
                searchTermJson = { name: this.currentValue };
            else
                searchTermJson = this.filterFormatFn(this.currentValue);
            return this.searchService.search({
                typename: this.typename, searchTerm: JSON.stringify(searchTermJson),
                skip: this.skip, top: this.top
            });
        })))
            .subscribe((/**
         * @param {?} x
         * @return {?}
         */
        x => {
            if (x.value.length === this.typeaheadSkipValue)
                this.skip += this.typeaheadSkipValue;
            this.results = [...this.results, ...x.value];
            this.autocomplete.opened.next();
            this.isLoading = false;
        }));
        if (this.propertyName === undefined)
            this.propertyName = Utils.newTechnicalNumber();
        if (Utils.isNullEmptyOrUndefined(this.ngFormObject))
            this.form = this.ngFormObject;
        if (Utils.isNullEmptyOrUndefined(this.form)) {
            this.form = this.formObject;
        }
        this.ngControl = new FormControl();
        if (this.form !== undefined)
            this.form.form.addControl(this.propertyName, this.ngControl);
        this.errorMessageService.errorPropertyMessageSubject.subscribe((/**
         * @param {?} x
         * @return {?}
         */
        x => {
            if (!Utils.isNullEmptyOrUndefined(this.form.form.get(x.propertyName)) && x.isCleanup === false) {
                this.form.form.get(x.propertyName).setErrors({ incorrect: true });
                this.form.form.get(x.propertyName).markAsDirty();
                this.form.form.get(x.propertyName).markAsTouched();
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
        if (this.selectedValue !== undefined && this.selectedValue.hasOwnProperty('id'))
            this.valueChosen = true;
    }
    /**
     * @return {?}
     */
    onScroll() {
        this.nextPage.next(this.skip);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    search(event) {
        this.currentValue = event.target.value;
        if (Utils.isNullEmptyOrUndefined(this.currentValue)) {
            this.skip = 0;
            return;
        }
        if (event.keyCode === 8 || event.keyCode === 46)
            this.clearSelectedValue();
        this.inputChangeSubject.next(this.currentValue);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    optionSelected(event) {
        this.typeaheadValue = event.option.value.id;
        this.selectedValue = event.option.value;
        this.valueChosen = true;
        this.currentValue = this.displayResultFn(event.option.value);
        this.typeaheadSelectedValueChange.emit(this.selectedValue);
        this.typeaheadValueChange.emit(this.typeaheadValue);
        /** @type {?} */
        const pname = this.propertyName;
        this.form.form.markAsDirty();
        this.form.form.patchValue({ pname: this.typeaheadValue });
    }
    /**
     * @return {?}
     */
    clearSelectedValue() {
        this.typeaheadValue = undefined;
        this.selectedValue = undefined;
        this.currentValue = '';
        this.valueChosen = false;
        this.typeaheadSelectedValueChange.emit(this.selectedValue);
        this.typeaheadValueChange.emit(this.typeaheadValue);
    }
    /**
     * @return {?}
     */
    get checkHasValue() {
        return !this.valueChosen
            && (this.selectedValue === undefined || this.selectedValue === null || !this.selectedValue.hasOwnProperty('id'));
    }
    /**
     * @private
     * @return {?}
     */
    resetFilter() {
        this.results = [];
        this.skip = 0;
        this.valueChosen = false;
        this.top = this.typeaheadSkipValue;
    }
}
TypeaheadInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-typeahead-input',
                template: "<form formValidator>\r\n  <mat-form-field>\r\n    <input matInput [name]=\"propertyName\" placeholder=\"{{placeholder}}\" readonly=\"{{readonly}}\" [matAutocomplete]=\"autocomplete\" (keyup)=\"search($event)\" [(ngModel)]=\"selectedValue\" >\r\n    <mat-icon matSuffix *ngIf=\"checkHasValue\" class=\"errorValue\" matTooltip=\"Value not selected\">error_outline</mat-icon>\r\n    <mat-icon matSuffix *ngIf=\"isLoading\" matTooltip=\"Values loading\">autorenew</mat-icon>\r\n    <mat-autocomplete #autocomplete=\"matAutocomplete\" [displayWith]=\"displayResultFn\" (optionsScroll)=\"onScroll()\" (optionSelected)=\"optionSelected($event)\" showPanel=\"true\">\r\n      <mat-option *ngFor=\"let result of results\" [value]=\"result\">\r\n        <span>{{displayResultFn(result)}}</span>\r\n      </mat-option>\r\n    </mat-autocomplete>\r\n    <mat-hint [hidden]=\"!hasErrors\">{{'Type to search' | translate: translateService.cultureCode}}</mat-hint>\r\n    <mat-error app-input-validation-message [propertyName]=\"propertyName\"></mat-error>\r\n  </mat-form-field>\r\n</form>\r\n",
                styles: [".errorValue{color:#c40308}"]
            }] }
];
/** @nocollapse */
TypeaheadInputComponent.ctorParameters = () => [
    { type: SearchService },
    { type: TranslationService },
    { type: NgForm },
    { type: ErrorMessagesService }
];
TypeaheadInputComponent.propDecorators = {
    typeaheadValue: [{ type: Input }],
    placeholder: [{ type: Input }],
    typename: [{ type: Input }],
    selectedValue: [{ type: Input }],
    filterFormatFn: [{ type: Input }],
    displayResultFn: [{ type: Input }],
    propertyName: [{ type: Input }],
    readonly: [{ type: Input }],
    ngFormObject: [{ type: Input }],
    typeaheadValueChange: [{ type: Output }],
    typeaheadSelectedValueChange: [{ type: Output }],
    autocomplete: [{ type: ViewChild, args: ['autocomplete', { static: false },] }],
    autocompleteTrigger: [{ type: ViewChild, args: [MatAutocompleteTrigger, { static: false },] }]
};
if (false) {
    /** @type {?} */
    TypeaheadInputComponent.prototype.typeaheadSkipValue;
    /** @type {?} */
    TypeaheadInputComponent.prototype.minNumOfCharToSearch;
    /** @type {?} */
    TypeaheadInputComponent.prototype.typeaheadValue;
    /** @type {?} */
    TypeaheadInputComponent.prototype.placeholder;
    /** @type {?} */
    TypeaheadInputComponent.prototype.typename;
    /** @type {?} */
    TypeaheadInputComponent.prototype.selectedValue;
    /** @type {?} */
    TypeaheadInputComponent.prototype.filterFormatFn;
    /** @type {?} */
    TypeaheadInputComponent.prototype.displayResultFn;
    /** @type {?} */
    TypeaheadInputComponent.prototype.propertyName;
    /** @type {?} */
    TypeaheadInputComponent.prototype.readonly;
    /** @type {?} */
    TypeaheadInputComponent.prototype.ngFormObject;
    /** @type {?} */
    TypeaheadInputComponent.prototype.results;
    /** @type {?} */
    TypeaheadInputComponent.prototype.skip;
    /** @type {?} */
    TypeaheadInputComponent.prototype.top;
    /** @type {?} */
    TypeaheadInputComponent.prototype.currentValue;
    /** @type {?} */
    TypeaheadInputComponent.prototype.hasErrors;
    /** @type {?} */
    TypeaheadInputComponent.prototype.inputChangeSubject;
    /** @type {?} */
    TypeaheadInputComponent.prototype.ngControl;
    /** @type {?} */
    TypeaheadInputComponent.prototype.isLoading;
    /** @type {?} */
    TypeaheadInputComponent.prototype.form;
    /**
     * @type {?}
     * @private
     */
    TypeaheadInputComponent.prototype.nextPage;
    /** @type {?} */
    TypeaheadInputComponent.prototype.valueChosen;
    /** @type {?} */
    TypeaheadInputComponent.prototype.typeaheadValueChange;
    /** @type {?} */
    TypeaheadInputComponent.prototype.typeaheadSelectedValueChange;
    /** @type {?} */
    TypeaheadInputComponent.prototype.autocomplete;
    /** @type {?} */
    TypeaheadInputComponent.prototype.autocompleteTrigger;
    /**
     * @type {?}
     * @private
     */
    TypeaheadInputComponent.prototype.searchService;
    /** @type {?} */
    TypeaheadInputComponent.prototype.translateService;
    /**
     * @type {?}
     * @private
     */
    TypeaheadInputComponent.prototype.formObject;
    /**
     * @type {?}
     * @private
     */
    TypeaheadInputComponent.prototype.errorMessageService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZWFoZWFkLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Nzb2UtY2xpZW50LXNoYXJlZC8iLCJzb3VyY2VzIjpbInNoYXJlZC9jb21wb25lbnRzL3R5cGVhaGVhZC1pbnB1dC90eXBlYWhlYWQtaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUYsT0FBTyxFQUFFLGVBQWUsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzVFLE9BQU8sRUFBYSxPQUFPLEVBQUUsS0FBSyxFQUFZLEVBQUUsRUFBUSxNQUFNLE1BQU0sQ0FBQztBQUNyRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxvQkFBb0IsRUFBNkIsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxRyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDOUQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQy9DLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFPN0UsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7OztJQW1DbEMsWUFDVSxhQUE0QixFQUM3QixnQkFBb0MsRUFDbkMsVUFBa0IsRUFDbEIsbUJBQXlDO1FBSHpDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzdCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBb0I7UUFDbkMsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUNsQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXNCO1FBckMxQyx1QkFB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Q3pCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQ3JDLENBQUM7OztZQWpMRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsbWtDQUErQzs7YUFFaEQ7Ozs7WUFWUSxhQUFhO1lBRWIsa0JBQWtCO1lBQ0wsTUFBTTtZQUNuQixvQkFBb0I7Ozs2QkFZMUIsS0FBSzswQkFDTCxLQUFLO3VCQUNMLEtBQUs7NEJBQ0wsS0FBSzs2QkFDTCxLQUFLOzhCQUNMLEtBQUs7MkJBQ0wsS0FBSzt1QkFDTCxLQUFLOzJCQUNMLEtBQUs7bUNBZ0JMLE1BQU07MkNBQ04sTUFBTTsyQkFFTixTQUFTLFNBQUMsY0FBYyxFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQztrQ0FDekMsU0FBUyxTQUFDLHNCQUFzQixFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQzs7OztJQS9CbEQscURBQWdDOztJQUNoQyx1REFBa0M7O0lBRWxDLGlEQUE2Qjs7SUFDN0IsOENBQTZCOztJQUM3QiwyQ0FBMEI7O0lBQzFCLGdEQUE0Qjs7SUFDNUIsaURBQTZDOztJQUM3QyxrREFBbUQ7O0lBQ25ELCtDQUE4Qjs7SUFDOUIsMkNBQTBCOztJQUMxQiwrQ0FBOEI7O0lBRTlCLDBDQUFlOztJQUNmLHVDQUFhOztJQUNiLHNDQUFZOztJQUNaLCtDQUFxQjs7SUFDckIsNENBQWtCOztJQUNsQixxREFBb0M7O0lBQ3BDLDRDQUF1Qjs7SUFDdkIsNENBQWtCOztJQUNsQix1Q0FBYTs7Ozs7SUFFYiwyQ0FBaUM7O0lBRWpDLDhDQUFvQjs7SUFFcEIsdURBQWtEOztJQUNsRCwrREFBMEQ7O0lBRTFELCtDQUEwRTs7SUFDMUUsc0RBQWdHOzs7OztJQUc5RixnREFBb0M7O0lBQ3BDLG1EQUEyQzs7Ozs7SUFDM0MsNkNBQTBCOzs7OztJQUMxQixzREFBaUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0QXV0b2NvbXBsZXRlLCBNYXRBdXRvY29tcGxldGVUcmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YmplY3QsIG1lcmdlLCBmb3JrSm9pbiwgb2YsIGZyb20gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBzd2l0Y2hNYXAsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBjb21iaW5lTGF0ZXN0LCBjb21iaW5lQWxsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBTZWFyY2hTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc2VhcmNoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBVdGlscyB9IGZyb20gJy4uLy4uL2V4dGVuc2lvbnMvdXRpbHMnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy90cmFuc2xhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIE5nRm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgRXJyb3JNZXNzYWdlc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9lcnJvci1tZXNzYWdlcy5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXR5cGVhaGVhZC1pbnB1dCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3R5cGVhaGVhZC1pbnB1dC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdHlwZWFoZWFkLWlucHV0LmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVHlwZWFoZWFkSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICByZWFkb25seSB0eXBlYWhlYWRTa2lwVmFsdWUgPSA2O1xyXG4gIHJlYWRvbmx5IG1pbk51bU9mQ2hhclRvU2VhcmNoID0gMztcclxuXHJcbiAgQElucHV0KCkgdHlwZWFoZWFkVmFsdWU6IGFueTtcclxuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHR5cGVuYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgc2VsZWN0ZWRWYWx1ZTogYW55O1xyXG4gIEBJbnB1dCgpIGZpbHRlckZvcm1hdEZuOiAodmFsdWU6IGFueSkgPT4gYW55O1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBkaXNwbGF5UmVzdWx0Rm46ICh2YWx1ZSkgPT4gc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHByb3BlcnR5TmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHJlYWRvbmx5ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbmdGb3JtT2JqZWN0OiBOZ0Zvcm07XHJcblxyXG4gIHJlc3VsdHM6IGFueVtdO1xyXG4gIHNraXA6IG51bWJlcjtcclxuICB0b3A6IG51bWJlcjtcclxuICBjdXJyZW50VmFsdWU6IHN0cmluZztcclxuICBoYXNFcnJvcnMgPSBmYWxzZTtcclxuICBpbnB1dENoYW5nZVN1YmplY3Q6IFN1YmplY3Q8c3RyaW5nPjtcclxuICBuZ0NvbnRyb2w6IEZvcm1Db250cm9sO1xyXG4gIGlzTG9hZGluZyA9IGZhbHNlO1xyXG4gIGZvcm06IE5nRm9ybTtcclxuXHJcbiAgcHJpdmF0ZSBuZXh0UGFnZSA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIHZhbHVlQ2hvc2VuID0gZmFsc2U7XHJcblxyXG4gIEBPdXRwdXQoKSB0eXBlYWhlYWRWYWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcbiAgQE91dHB1dCgpIHR5cGVhaGVhZFNlbGVjdGVkVmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICBAVmlld0NoaWxkKCdhdXRvY29tcGxldGUnLCB7c3RhdGljOiBmYWxzZX0pIGF1dG9jb21wbGV0ZTogTWF0QXV0b2NvbXBsZXRlO1xyXG4gIEBWaWV3Q2hpbGQoTWF0QXV0b2NvbXBsZXRlVHJpZ2dlciwge3N0YXRpYzogZmFsc2V9KSBhdXRvY29tcGxldGVUcmlnZ2VyOiBNYXRBdXRvY29tcGxldGVUcmlnZ2VyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgc2VhcmNoU2VydmljZTogU2VhcmNoU2VydmljZSxcclxuICAgIHB1YmxpYyB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGlvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGZvcm1PYmplY3Q6IE5nRm9ybSxcclxuICAgIHByaXZhdGUgZXJyb3JNZXNzYWdlU2VydmljZTogRXJyb3JNZXNzYWdlc1NlcnZpY2UpIHtcclxuICAgICAgdGhpcy50eXBlYWhlYWRWYWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgICAgdGhpcy50eXBlYWhlYWRTZWxlY3RlZFZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgICB0aGlzLmlucHV0Q2hhbmdlU3ViamVjdCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgICAgIHRoaXMubmV4dFBhZ2UgPSBuZXcgU3ViamVjdCgpO1xyXG4gICAgICB0aGlzLnNraXAgPSAwO1xyXG4gICAgICB0aGlzLnRvcCA9IHRoaXMudHlwZWFoZWFkU2tpcFZhbHVlO1xyXG4gICAgICB0aGlzLnJlc3VsdHMgPSBbXTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgbWVyZ2UodGhpcy5pbnB1dENoYW5nZVN1YmplY3QucGlwZShcclxuICAgICAgICAgICAgZGVib3VuY2VUaW1lKDQwMCksXHJcbiAgICAgICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKGIubGVuZ3RoIDwgdGhpcy5taW5OdW1PZkNoYXJUb1NlYXJjaCB8fCBhID09PSBiKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgdGhpcy5yZXNldEZpbHRlcigpO1xyXG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfSkpLFxyXG4gICAgICAgICAgdGhpcy5uZXh0UGFnZS5waXBlKFxyXG4gICAgICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChhID09PSBiKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9KSkpXHJcbiAgICAgICAgICAgIC5waXBlKHN3aXRjaE1hcCgoeCkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChVdGlscy5pc051bGxFbXB0eU9yVW5kZWZpbmVkKHRoaXMuY3VycmVudFZhbHVlKSB8fCB0aGlzLmN1cnJlbnRWYWx1ZS5sZW5ndGggPCB0aGlzLm1pbk51bU9mQ2hhclRvU2VhcmNoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0RmlsdGVyKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb2Yoe3ZhbHVlOiBbXX0pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBsZXQgc2VhcmNoVGVybUpzb24gPSBudWxsO1xyXG4gICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICBpZiAodGhpcy5maWx0ZXJGb3JtYXRGbiA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgc2VhcmNoVGVybUpzb24gPSB7IG5hbWU6IHRoaXMuY3VycmVudFZhbHVlIH07XHJcbiAgICAgICAgICAgICAgZWxzZSBzZWFyY2hUZXJtSnNvbiA9IHRoaXMuZmlsdGVyRm9ybWF0Rm4odGhpcy5jdXJyZW50VmFsdWUpO1xyXG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLnNlYXJjaFNlcnZpY2Uuc2VhcmNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGVuYW1lOiB0aGlzLnR5cGVuYW1lLCBzZWFyY2hUZXJtOiBKU09OLnN0cmluZ2lmeShzZWFyY2hUZXJtSnNvbiksXHJcbiAgICAgICAgICAgICAgICBza2lwOiB0aGlzLnNraXAsIHRvcDogdGhpcy50b3BcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIClcclxuICAgIC5zdWJzY3JpYmUoeCA9PiB7XHJcbiAgICAgIGlmICh4LnZhbHVlLmxlbmd0aCA9PT0gdGhpcy50eXBlYWhlYWRTa2lwVmFsdWUpXHJcbiAgICAgICAgdGhpcy5za2lwICs9IHRoaXMudHlwZWFoZWFkU2tpcFZhbHVlO1xyXG5cclxuICAgICAgdGhpcy5yZXN1bHRzID0gWy4uLnRoaXMucmVzdWx0cywgLi4ueC52YWx1ZV07XHJcbiAgICAgIHRoaXMuYXV0b2NvbXBsZXRlLm9wZW5lZC5uZXh0KCk7XHJcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAodGhpcy5wcm9wZXJ0eU5hbWUgPT09IHVuZGVmaW5lZClcclxuICAgICAgdGhpcy5wcm9wZXJ0eU5hbWUgPSBVdGlscy5uZXdUZWNobmljYWxOdW1iZXIoKTtcclxuXHJcbiAgICBpZiAoVXRpbHMuaXNOdWxsRW1wdHlPclVuZGVmaW5lZCh0aGlzLm5nRm9ybU9iamVjdCkpXHJcbiAgICAgIHRoaXMuZm9ybSA9IHRoaXMubmdGb3JtT2JqZWN0O1xyXG5cclxuICAgIGlmIChVdGlscy5pc051bGxFbXB0eU9yVW5kZWZpbmVkKHRoaXMuZm9ybSkpIHtcclxuICAgICAgdGhpcy5mb3JtID0gdGhpcy5mb3JtT2JqZWN0O1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubmdDb250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XHJcbiAgICBpZiAodGhpcy5mb3JtICE9PSB1bmRlZmluZWQpXHJcbiAgICAgIHRoaXMuZm9ybS5mb3JtLmFkZENvbnRyb2wodGhpcy5wcm9wZXJ0eU5hbWUsIHRoaXMubmdDb250cm9sKTtcclxuXHJcbiAgICB0aGlzLmVycm9yTWVzc2FnZVNlcnZpY2UuZXJyb3JQcm9wZXJ0eU1lc3NhZ2VTdWJqZWN0LnN1YnNjcmliZSh4ID0+IHtcclxuICAgICAgaWYgKCFVdGlscy5pc051bGxFbXB0eU9yVW5kZWZpbmVkKHRoaXMuZm9ybS5mb3JtLmdldCh4LnByb3BlcnR5TmFtZSkpICYmIHguaXNDbGVhbnVwID09PSBmYWxzZSkge1xyXG4gICAgICAgIHRoaXMuZm9ybS5mb3JtLmdldCh4LnByb3BlcnR5TmFtZSkuc2V0RXJyb3JzKHsgaW5jb3JyZWN0OiB0cnVlIH0pO1xyXG4gICAgICAgIHRoaXMuZm9ybS5mb3JtLmdldCh4LnByb3BlcnR5TmFtZSkubWFya0FzRGlydHkoKTtcclxuICAgICAgICB0aGlzLmZvcm0uZm9ybS5nZXQoeC5wcm9wZXJ0eU5hbWUpLm1hcmtBc1RvdWNoZWQoKTtcclxuICAgICAgICB0aGlzLmhhc0Vycm9ycyA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSBpZiAoIVV0aWxzLmlzTnVsbEVtcHR5T3JVbmRlZmluZWQodGhpcy5mb3JtLmZvcm0uZ2V0KHgucHJvcGVydHlOYW1lKSkgJiYgeC5pc0NsZWFudXAgPT09IHRydWUpIHtcclxuICAgICAgICB0aGlzLmhhc0Vycm9ycyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZm9ybS5mb3JtLmdldCh4LnByb3BlcnR5TmFtZSkuc2V0RXJyb3JzKG51bGwpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmVycm9yTWVzc2FnZVNlcnZpY2UucmVtb3ZlRm9ybUVycm9yc1N1YmplY3Quc3Vic2NyaWJlKHggPT4ge1xyXG4gICAgICB0aGlzLmhhc0Vycm9ycyA9IGZhbHNlO1xyXG4gICAgICBpZiAoIVV0aWxzLmlzTnVsbEVtcHR5T3JVbmRlZmluZWQodGhpcy5mb3JtLmZvcm0uZ2V0KHRoaXMucHJvcGVydHlOYW1lKSAmJiB0aGlzLnByb3BlcnR5TmFtZSAhPT0gdW5kZWZpbmVkKSlcclxuICAgICAgICB0aGlzLmZvcm0uZm9ybS5nZXQodGhpcy5wcm9wZXJ0eU5hbWUpLnNldEVycm9ycyhudWxsKTtcclxuICAgIH0pO1xyXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRWYWx1ZSAhPT0gdW5kZWZpbmVkICYmIHRoaXMuc2VsZWN0ZWRWYWx1ZS5oYXNPd25Qcm9wZXJ0eSgnaWQnKSlcclxuICAgICAgdGhpcy52YWx1ZUNob3NlbiA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBvblNjcm9sbCgpIHtcclxuICAgIHRoaXMubmV4dFBhZ2UubmV4dCh0aGlzLnNraXApO1xyXG4gIH1cclxuXHJcbiAgc2VhcmNoKGV2ZW50KSB7XHJcbiAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuXHJcbiAgICBpZiAoVXRpbHMuaXNOdWxsRW1wdHlPclVuZGVmaW5lZCh0aGlzLmN1cnJlbnRWYWx1ZSkpIHtcclxuICAgICAgdGhpcy5za2lwID0gMDtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChldmVudC5rZXlDb2RlID09PSA4IHx8IGV2ZW50LmtleUNvZGUgPT09IDQ2KVxyXG4gICAgICB0aGlzLmNsZWFyU2VsZWN0ZWRWYWx1ZSgpO1xyXG5cclxuICAgIHRoaXMuaW5wdXRDaGFuZ2VTdWJqZWN0Lm5leHQodGhpcy5jdXJyZW50VmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgb3B0aW9uU2VsZWN0ZWQoZXZlbnQpIHtcclxuICAgIHRoaXMudHlwZWFoZWFkVmFsdWUgPSBldmVudC5vcHRpb24udmFsdWUuaWQ7XHJcbiAgICB0aGlzLnNlbGVjdGVkVmFsdWUgPSBldmVudC5vcHRpb24udmFsdWU7XHJcbiAgICB0aGlzLnZhbHVlQ2hvc2VuID0gdHJ1ZTtcclxuICAgIHRoaXMuY3VycmVudFZhbHVlID0gdGhpcy5kaXNwbGF5UmVzdWx0Rm4oZXZlbnQub3B0aW9uLnZhbHVlKTtcclxuICAgIHRoaXMudHlwZWFoZWFkU2VsZWN0ZWRWYWx1ZUNoYW5nZS5lbWl0KHRoaXMuc2VsZWN0ZWRWYWx1ZSk7XHJcbiAgICB0aGlzLnR5cGVhaGVhZFZhbHVlQ2hhbmdlLmVtaXQodGhpcy50eXBlYWhlYWRWYWx1ZSk7XHJcbiAgICBjb25zdCBwbmFtZSA9IHRoaXMucHJvcGVydHlOYW1lO1xyXG4gICAgdGhpcy5mb3JtLmZvcm0ubWFya0FzRGlydHkoKTtcclxuICAgIHRoaXMuZm9ybS5mb3JtLnBhdGNoVmFsdWUoe3BuYW1lOiB0aGlzLnR5cGVhaGVhZFZhbHVlfSk7XHJcbiAgfVxyXG5cclxuICBjbGVhclNlbGVjdGVkVmFsdWUoKSB7XHJcbiAgICB0aGlzLnR5cGVhaGVhZFZhbHVlID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5zZWxlY3RlZFZhbHVlID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5jdXJyZW50VmFsdWUgPSAnJztcclxuICAgIHRoaXMudmFsdWVDaG9zZW4gPSBmYWxzZTtcclxuICAgIHRoaXMudHlwZWFoZWFkU2VsZWN0ZWRWYWx1ZUNoYW5nZS5lbWl0KHRoaXMuc2VsZWN0ZWRWYWx1ZSk7XHJcbiAgICB0aGlzLnR5cGVhaGVhZFZhbHVlQ2hhbmdlLmVtaXQodGhpcy50eXBlYWhlYWRWYWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgY2hlY2tIYXNWYWx1ZSgpIHtcclxuICAgIHJldHVybiAhdGhpcy52YWx1ZUNob3NlblxyXG4gICAgJiYgKHRoaXMuc2VsZWN0ZWRWYWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHRoaXMuc2VsZWN0ZWRWYWx1ZSA9PT0gbnVsbCB8fCAhdGhpcy5zZWxlY3RlZFZhbHVlLmhhc093blByb3BlcnR5KCdpZCcpKTtcclxuICB9XHJcbiAgcHJpdmF0ZSByZXNldEZpbHRlcigpIHtcclxuICAgIHRoaXMucmVzdWx0cyA9IFtdO1xyXG4gICAgdGhpcy5za2lwID0gMDtcclxuICAgIHRoaXMudmFsdWVDaG9zZW4gPSBmYWxzZTtcclxuICAgIHRoaXMudG9wID0gdGhpcy50eXBlYWhlYWRTa2lwVmFsdWU7XHJcbiAgfVxyXG59XHJcbiJdfQ==