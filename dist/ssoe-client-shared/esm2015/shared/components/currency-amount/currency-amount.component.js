/**
 * @fileoverview added by tsickle
 * Generated from: shared/components/currency-amount/currency-amount.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ClassificationService } from '../../services/classification-service.service';
import { Utils } from '../../extensions/utils';
import { FormControl, NgForm } from '@angular/forms';
import { ErrorMessagesService } from '../../services/error-messages.service';
import { CurrencyAmount } from '../../POCO/currencyAmount';
export class CurrencyAmountComponent {
    /**
     * @param {?} classificationService
     * @param {?} errorMessageService
     * @param {?} formObject
     */
    constructor(classificationService, errorMessageService, formObject) {
        this.classificationService = classificationService;
        this.errorMessageService = errorMessageService;
        this.formObject = formObject;
        this.showCurrency = true;
        this.currencyAmountChange = new EventEmitter();
        this.currencies = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.propertyName === undefined)
            this.propertyName = Utils.newTechnicalNumber();
        if (Utils.isNullEmptyOrUndefined(this.ngFormObject))
            this.form = this.ngFormObject;
        if (Utils.isNullEmptyOrUndefined(this.form)) {
            this.form = this.formObject;
        }
        this.ngControlAmount = new FormControl();
        this.ngControlCurrency = new FormControl();
        if (this.form !== undefined) {
            this.form.form.addControl(this.propertyName + 'Amount', this.ngControlAmount);
            this.form.form.addControl(this.propertyName + 'CurrencyCode', this.ngControlCurrency);
        }
        this.getCurrency();
    }
    /**
     * @return {?}
     */
    getCurrency() {
        this.classificationService.getClassificationValues('ShortCurrency').subscribe((/**
         * @param {?} x
         * @return {?}
         */
        x => {
            if (Utils.isNullEmptyOrUndefined(x) || Utils.isNullEmptyOrUndefined(x.value))
                return;
            this.currencies = x.value;
            /** @type {?} */
            const defaultCurrency = this.currencies.find((/**
             * @param {?} y
             * @return {?}
             */
            y => y.isDefaultValue === true));
            this.currencyAmount.currencyCode = defaultCurrency.value;
            this.currencyAmountChange.emit(this.currencyAmount);
        }));
    }
}
CurrencyAmountComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-currency-amount',
                template: "<form class=\"amountComponent\" formValidator>\r\n  <div class=\"container\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"1%\" fxLayoutAlign=\"center\">\r\n      <div fxFlex=\"80%\">\r\n        <mat-form-field>\r\n          <input matInput [name]=\"propertyName+'Amount'\" type=\"text\" placeholder=\"{{placeholder}}\"\r\n          [readonly]=\"isReadOnly\"  [(ngModel)]=\"currencyAmount.amount\"\r\n          #amountInput=\"ngModel\" decimalFormatter\r\n          (ngModelChange)=\"currencyAmountChange.emit(currencyAmount)\" >\r\n          <mat-error app-input-validation-message [propertyName]=\"propertyName+'Amount'\"></mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n      <div fxFlex=\"20%\" *ngIf=\"showCurrency\">\r\n        <mat-form-field>\r\n          <mat-select [name]=\"propertyName+'CurrencyCode'\" [(ngModel)]=\"currencyAmount.currencyCode\" [disabled]=\"isReadOnly\">\r\n              <mat-option *ngFor=\"let currency of currencies\" [value]=\"currency.value\">\r\n                  {{currency.caption}}\r\n              </mat-option>\r\n          </mat-select>\r\n          <mat-error app-input-validation-message [propertyName]=\"propertyName+'CurrencyCode'\"></mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n</form>\r\n",
                styles: [""]
            }] }
];
/** @nocollapse */
CurrencyAmountComponent.ctorParameters = () => [
    { type: ClassificationService },
    { type: ErrorMessagesService },
    { type: NgForm }
];
CurrencyAmountComponent.propDecorators = {
    currencyAmount: [{ type: Input }],
    isReadOnly: [{ type: Input }],
    placeholder: [{ type: Input }],
    propertyName: [{ type: Input }],
    showCurrency: [{ type: Input }],
    ngFormObject: [{ type: Input }],
    currencyAmountChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    CurrencyAmountComponent.prototype.currencyAmount;
    /** @type {?} */
    CurrencyAmountComponent.prototype.isReadOnly;
    /** @type {?} */
    CurrencyAmountComponent.prototype.placeholder;
    /** @type {?} */
    CurrencyAmountComponent.prototype.propertyName;
    /** @type {?} */
    CurrencyAmountComponent.prototype.showCurrency;
    /** @type {?} */
    CurrencyAmountComponent.prototype.ngFormObject;
    /** @type {?} */
    CurrencyAmountComponent.prototype.currencyAmountChange;
    /** @type {?} */
    CurrencyAmountComponent.prototype.currencies;
    /** @type {?} */
    CurrencyAmountComponent.prototype.form;
    /** @type {?} */
    CurrencyAmountComponent.prototype.ngControlAmount;
    /** @type {?} */
    CurrencyAmountComponent.prototype.ngControlCurrency;
    /**
     * @type {?}
     * @private
     */
    CurrencyAmountComponent.prototype.classificationService;
    /**
     * @type {?}
     * @private
     */
    CurrencyAmountComponent.prototype.errorMessageService;
    /**
     * @type {?}
     * @private
     */
    CurrencyAmountComponent.prototype.formObject;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY3ktYW1vdW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Nzb2UtY2xpZW50LXNoYXJlZC8iLCJzb3VyY2VzIjpbInNoYXJlZC9jb21wb25lbnRzL2N1cnJlbmN5LWFtb3VudC9jdXJyZW5jeS1hbW91bnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN0RixPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFPM0QsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7O0lBZ0JsQyxZQUNVLHFCQUE0QyxFQUM1QyxtQkFBeUMsRUFDekMsVUFBa0I7UUFGbEIsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUM1Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXNCO1FBQ3pDLGVBQVUsR0FBVixVQUFVLENBQVE7UUFibkIsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFFbkIseUJBQW9CLEdBQUcsSUFBSSxZQUFZLEVBQWtCLENBQUM7UUFFcEUsZUFBVSxHQUFHLEVBQUUsQ0FBQztJQVVmLENBQUM7Ozs7SUFFRixRQUFRO1FBRU4sSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLFNBQVM7WUFDakMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUVqRCxJQUFJLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2pELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUVoQyxJQUFJLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDM0MsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQzdCO1FBRUQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1FBQzNDLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUM5RSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxjQUFjLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FDdkY7UUFDRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVGLFdBQVc7UUFDVCxJQUFJLENBQUMscUJBQXFCLENBQUMsdUJBQXVCLENBQUMsZUFBZSxDQUFDLENBQUMsU0FBUzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2hGLElBQUksS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO2dCQUMxRSxPQUFPO1lBQ1QsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDOztrQkFDcEIsZUFBZSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSTs7OztZQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGNBQWMsS0FBSyxJQUFJLEVBQUM7WUFDNUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEdBQUcsZUFBZSxDQUFDLEtBQUssQ0FBQztZQUN6RCxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN0RCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7OztZQXpERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsZ3lDQUErQzs7YUFFaEQ7Ozs7WUFWUSxxQkFBcUI7WUFHckIsb0JBQW9CO1lBRFAsTUFBTTs7OzZCQVd6QixLQUFLO3lCQUNMLEtBQUs7MEJBQ0wsS0FBSzsyQkFDTCxLQUFLOzJCQUNMLEtBQUs7MkJBQ0wsS0FBSzttQ0FDTCxNQUFNOzs7O0lBTlAsaURBQXdDOztJQUN4Qyw2Q0FBNkI7O0lBQzdCLDhDQUE2Qjs7SUFDN0IsK0NBQThCOztJQUM5QiwrQ0FBNkI7O0lBQzdCLCtDQUE4Qjs7SUFDOUIsdURBQW9FOztJQUVwRSw2Q0FBZ0I7O0lBQ2hCLHVDQUFhOztJQUViLGtEQUE2Qjs7SUFDN0Isb0RBQStCOzs7OztJQUc3Qix3REFBb0Q7Ozs7O0lBQ3BELHNEQUFpRDs7Ozs7SUFDakQsNkNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDbGFzc2lmaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jbGFzc2lmaWNhdGlvbi1zZXJ2aWNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBVdGlscyB9IGZyb20gJy4uLy4uL2V4dGVuc2lvbnMvdXRpbHMnO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgTmdGb3JtIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBFcnJvck1lc3NhZ2VzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Vycm9yLW1lc3NhZ2VzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDdXJyZW5jeUFtb3VudCB9IGZyb20gJy4uLy4uL1BPQ08vY3VycmVuY3lBbW91bnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtY3VycmVuY3ktYW1vdW50JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY3VycmVuY3ktYW1vdW50LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jdXJyZW5jeS1hbW91bnQuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDdXJyZW5jeUFtb3VudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIGN1cnJlbmN5QW1vdW50OiBDdXJyZW5jeUFtb3VudDtcclxuICBASW5wdXQoKSBpc1JlYWRPbmx5OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcHJvcGVydHlOYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgc2hvd0N1cnJlbmN5ID0gdHJ1ZTtcclxuICBASW5wdXQoKSBuZ0Zvcm1PYmplY3Q6IE5nRm9ybTtcclxuICBAT3V0cHV0KCkgY3VycmVuY3lBbW91bnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPEN1cnJlbmN5QW1vdW50PigpO1xyXG5cclxuICBjdXJyZW5jaWVzID0gW107XHJcbiAgZm9ybTogTmdGb3JtO1xyXG5cclxuICBuZ0NvbnRyb2xBbW91bnQ6IEZvcm1Db250cm9sO1xyXG4gIG5nQ29udHJvbEN1cnJlbmN5OiBGb3JtQ29udHJvbDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNsYXNzaWZpY2F0aW9uU2VydmljZTogQ2xhc3NpZmljYXRpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBlcnJvck1lc3NhZ2VTZXJ2aWNlOiBFcnJvck1lc3NhZ2VzU2VydmljZSxcclxuICAgIHByaXZhdGUgZm9ybU9iamVjdDogTmdGb3JtKSB7XHJcbiAgIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgaWYgKHRoaXMucHJvcGVydHlOYW1lID09PSB1bmRlZmluZWQpXHJcbiAgICAgIHRoaXMucHJvcGVydHlOYW1lID0gVXRpbHMubmV3VGVjaG5pY2FsTnVtYmVyKCk7XHJcblxyXG4gICAgaWYgKFV0aWxzLmlzTnVsbEVtcHR5T3JVbmRlZmluZWQodGhpcy5uZ0Zvcm1PYmplY3QpKVxyXG4gICAgICB0aGlzLmZvcm0gPSB0aGlzLm5nRm9ybU9iamVjdDtcclxuXHJcbiAgICBpZiAoVXRpbHMuaXNOdWxsRW1wdHlPclVuZGVmaW5lZCh0aGlzLmZvcm0pKSB7XHJcbiAgICAgIHRoaXMuZm9ybSA9IHRoaXMuZm9ybU9iamVjdDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm5nQ29udHJvbEFtb3VudCA9IG5ldyBGb3JtQ29udHJvbCgpO1xyXG4gICAgdGhpcy5uZ0NvbnRyb2xDdXJyZW5jeSA9IG5ldyBGb3JtQ29udHJvbCgpO1xyXG4gICAgaWYgKHRoaXMuZm9ybSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuZm9ybS5mb3JtLmFkZENvbnRyb2wodGhpcy5wcm9wZXJ0eU5hbWUgKyAnQW1vdW50JywgdGhpcy5uZ0NvbnRyb2xBbW91bnQpO1xyXG4gICAgICB0aGlzLmZvcm0uZm9ybS5hZGRDb250cm9sKHRoaXMucHJvcGVydHlOYW1lICsgJ0N1cnJlbmN5Q29kZScsIHRoaXMubmdDb250cm9sQ3VycmVuY3kpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5nZXRDdXJyZW5jeSgpO1xyXG4gICB9XHJcblxyXG4gIGdldEN1cnJlbmN5KCkge1xyXG4gICAgdGhpcy5jbGFzc2lmaWNhdGlvblNlcnZpY2UuZ2V0Q2xhc3NpZmljYXRpb25WYWx1ZXMoJ1Nob3J0Q3VycmVuY3knKS5zdWJzY3JpYmUoeCA9PiB7XHJcbiAgICAgIGlmIChVdGlscy5pc051bGxFbXB0eU9yVW5kZWZpbmVkKHgpIHx8IFV0aWxzLmlzTnVsbEVtcHR5T3JVbmRlZmluZWQoeC52YWx1ZSkpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB0aGlzLmN1cnJlbmNpZXMgPSB4LnZhbHVlO1xyXG4gICAgICBjb25zdCBkZWZhdWx0Q3VycmVuY3kgPSB0aGlzLmN1cnJlbmNpZXMuZmluZCh5ID0+IHkuaXNEZWZhdWx0VmFsdWUgPT09IHRydWUpO1xyXG4gICAgICB0aGlzLmN1cnJlbmN5QW1vdW50LmN1cnJlbmN5Q29kZSA9IGRlZmF1bHRDdXJyZW5jeS52YWx1ZTtcclxuICAgICAgdGhpcy5jdXJyZW5jeUFtb3VudENoYW5nZS5lbWl0KHRoaXMuY3VycmVuY3lBbW91bnQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==