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
var CurrencyAmountComponent = /** @class */ (function () {
    function CurrencyAmountComponent(classificationService, errorMessageService, formObject) {
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
    CurrencyAmountComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @return {?}
     */
    CurrencyAmountComponent.prototype.getCurrency = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.classificationService.getClassificationValues('ShortCurrency').subscribe((/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            if (Utils.isNullEmptyOrUndefined(x) || Utils.isNullEmptyOrUndefined(x.value))
                return;
            _this.currencies = x.value;
            /** @type {?} */
            var defaultCurrency = _this.currencies.find((/**
             * @param {?} y
             * @return {?}
             */
            function (y) { return y.isDefaultValue === true; }));
            _this.currencyAmount.currencyCode = defaultCurrency.value;
            _this.currencyAmountChange.emit(_this.currencyAmount);
        }));
    };
    CurrencyAmountComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-currency-amount',
                    template: "<form class=\"amountComponent\" formValidator>\r\n  <div class=\"container\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"1%\" fxLayoutAlign=\"center\">\r\n      <div fxFlex=\"80%\">\r\n        <mat-form-field>\r\n          <input matInput [name]=\"propertyName+'Amount'\" type=\"text\" placeholder=\"{{placeholder}}\"\r\n          [readonly]=\"isReadOnly\"  [(ngModel)]=\"currencyAmount.amount\"\r\n          #amountInput=\"ngModel\" decimalFormatter\r\n          (ngModelChange)=\"currencyAmountChange.emit(currencyAmount)\" >\r\n          <mat-error app-input-validation-message [propertyName]=\"propertyName+'Amount'\"></mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n      <div fxFlex=\"20%\" *ngIf=\"showCurrency\">\r\n        <mat-form-field>\r\n          <mat-select [name]=\"propertyName+'CurrencyCode'\" [(ngModel)]=\"currencyAmount.currencyCode\" [disabled]=\"isReadOnly\">\r\n              <mat-option *ngFor=\"let currency of currencies\" [value]=\"currency.value\">\r\n                  {{currency.caption}}\r\n              </mat-option>\r\n          </mat-select>\r\n          <mat-error app-input-validation-message [propertyName]=\"propertyName+'CurrencyCode'\"></mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n</form>\r\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    CurrencyAmountComponent.ctorParameters = function () { return [
        { type: ClassificationService },
        { type: ErrorMessagesService },
        { type: NgForm }
    ]; };
    CurrencyAmountComponent.propDecorators = {
        currencyAmount: [{ type: Input }],
        isReadOnly: [{ type: Input }],
        placeholder: [{ type: Input }],
        propertyName: [{ type: Input }],
        showCurrency: [{ type: Input }],
        ngFormObject: [{ type: Input }],
        currencyAmountChange: [{ type: Output }]
    };
    return CurrencyAmountComponent;
}());
export { CurrencyAmountComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY3ktYW1vdW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Nzb2UtY2xpZW50LXNoYXJlZC8iLCJzb3VyY2VzIjpbInNoYXJlZC9jb21wb25lbnRzL2N1cnJlbmN5LWFtb3VudC9jdXJyZW5jeS1hbW91bnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN0RixPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFM0Q7SUFxQkUsaUNBQ1UscUJBQTRDLEVBQzVDLG1CQUF5QyxFQUN6QyxVQUFrQjtRQUZsQiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzVDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBc0I7UUFDekMsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQWJuQixpQkFBWSxHQUFHLElBQUksQ0FBQztRQUVuQix5QkFBb0IsR0FBRyxJQUFJLFlBQVksRUFBa0IsQ0FBQztRQUVwRSxlQUFVLEdBQUcsRUFBRSxDQUFDO0lBVWYsQ0FBQzs7OztJQUVGLDBDQUFROzs7SUFBUjtRQUVFLElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxTQUFTO1lBQ2pDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFFakQsSUFBSSxLQUFLLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNqRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFFaEMsSUFBSSxLQUFLLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzNDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztTQUM3QjtRQUVELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUN6QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUMzQyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDOUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsY0FBYyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1NBQ3ZGO1FBQ0QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRiw2Q0FBVzs7O0lBQVg7UUFBQSxpQkFTQztRQVJDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyx1QkFBdUIsQ0FBQyxlQUFlLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxDQUFDO1lBQzdFLElBQUksS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO2dCQUMxRSxPQUFPO1lBQ1QsS0FBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDOztnQkFDcEIsZUFBZSxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSTs7OztZQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLGNBQWMsS0FBSyxJQUFJLEVBQXpCLENBQXlCLEVBQUM7WUFDNUUsS0FBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEdBQUcsZUFBZSxDQUFDLEtBQUssQ0FBQztZQUN6RCxLQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN0RCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7O2dCQXpERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsZ3lDQUErQzs7aUJBRWhEOzs7O2dCQVZRLHFCQUFxQjtnQkFHckIsb0JBQW9CO2dCQURQLE1BQU07OztpQ0FXekIsS0FBSzs2QkFDTCxLQUFLOzhCQUNMLEtBQUs7K0JBQ0wsS0FBSzsrQkFDTCxLQUFLOytCQUNMLEtBQUs7dUNBQ0wsTUFBTTs7SUE2Q1QsOEJBQUM7Q0FBQSxBQTFERCxJQTBEQztTQXJEWSx1QkFBdUI7OztJQUVsQyxpREFBd0M7O0lBQ3hDLDZDQUE2Qjs7SUFDN0IsOENBQTZCOztJQUM3QiwrQ0FBOEI7O0lBQzlCLCtDQUE2Qjs7SUFDN0IsK0NBQThCOztJQUM5Qix1REFBb0U7O0lBRXBFLDZDQUFnQjs7SUFDaEIsdUNBQWE7O0lBRWIsa0RBQTZCOztJQUM3QixvREFBK0I7Ozs7O0lBRzdCLHdEQUFvRDs7Ozs7SUFDcEQsc0RBQWlEOzs7OztJQUNqRCw2Q0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENsYXNzaWZpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NsYXNzaWZpY2F0aW9uLXNlcnZpY2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi4vLi4vZXh0ZW5zaW9ucy91dGlscyc7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sLCBOZ0Zvcm0gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEVycm9yTWVzc2FnZXNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZXJyb3ItbWVzc2FnZXMuc2VydmljZSc7XHJcbmltcG9ydCB7IEN1cnJlbmN5QW1vdW50IH0gZnJvbSAnLi4vLi4vUE9DTy9jdXJyZW5jeUFtb3VudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1jdXJyZW5jeS1hbW91bnQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jdXJyZW5jeS1hbW91bnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2N1cnJlbmN5LWFtb3VudC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEN1cnJlbmN5QW1vdW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgY3VycmVuY3lBbW91bnQ6IEN1cnJlbmN5QW1vdW50O1xyXG4gIEBJbnB1dCgpIGlzUmVhZE9ubHk6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcclxuICBASW5wdXQoKSBwcm9wZXJ0eU5hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBzaG93Q3VycmVuY3kgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIG5nRm9ybU9iamVjdDogTmdGb3JtO1xyXG4gIEBPdXRwdXQoKSBjdXJyZW5jeUFtb3VudENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q3VycmVuY3lBbW91bnQ+KCk7XHJcblxyXG4gIGN1cnJlbmNpZXMgPSBbXTtcclxuICBmb3JtOiBOZ0Zvcm07XHJcblxyXG4gIG5nQ29udHJvbEFtb3VudDogRm9ybUNvbnRyb2w7XHJcbiAgbmdDb250cm9sQ3VycmVuY3k6IEZvcm1Db250cm9sO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY2xhc3NpZmljYXRpb25TZXJ2aWNlOiBDbGFzc2lmaWNhdGlvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGVycm9yTWVzc2FnZVNlcnZpY2U6IEVycm9yTWVzc2FnZXNTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBmb3JtT2JqZWN0OiBOZ0Zvcm0pIHtcclxuICAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgICBpZiAodGhpcy5wcm9wZXJ0eU5hbWUgPT09IHVuZGVmaW5lZClcclxuICAgICAgdGhpcy5wcm9wZXJ0eU5hbWUgPSBVdGlscy5uZXdUZWNobmljYWxOdW1iZXIoKTtcclxuXHJcbiAgICBpZiAoVXRpbHMuaXNOdWxsRW1wdHlPclVuZGVmaW5lZCh0aGlzLm5nRm9ybU9iamVjdCkpXHJcbiAgICAgIHRoaXMuZm9ybSA9IHRoaXMubmdGb3JtT2JqZWN0O1xyXG5cclxuICAgIGlmIChVdGlscy5pc051bGxFbXB0eU9yVW5kZWZpbmVkKHRoaXMuZm9ybSkpIHtcclxuICAgICAgdGhpcy5mb3JtID0gdGhpcy5mb3JtT2JqZWN0O1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubmdDb250cm9sQW1vdW50ID0gbmV3IEZvcm1Db250cm9sKCk7XHJcbiAgICB0aGlzLm5nQ29udHJvbEN1cnJlbmN5ID0gbmV3IEZvcm1Db250cm9sKCk7XHJcbiAgICBpZiAodGhpcy5mb3JtICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5mb3JtLmZvcm0uYWRkQ29udHJvbCh0aGlzLnByb3BlcnR5TmFtZSArICdBbW91bnQnLCB0aGlzLm5nQ29udHJvbEFtb3VudCk7XHJcbiAgICAgIHRoaXMuZm9ybS5mb3JtLmFkZENvbnRyb2wodGhpcy5wcm9wZXJ0eU5hbWUgKyAnQ3VycmVuY3lDb2RlJywgdGhpcy5uZ0NvbnRyb2xDdXJyZW5jeSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmdldEN1cnJlbmN5KCk7XHJcbiAgIH1cclxuXHJcbiAgZ2V0Q3VycmVuY3koKSB7XHJcbiAgICB0aGlzLmNsYXNzaWZpY2F0aW9uU2VydmljZS5nZXRDbGFzc2lmaWNhdGlvblZhbHVlcygnU2hvcnRDdXJyZW5jeScpLnN1YnNjcmliZSh4ID0+IHtcclxuICAgICAgaWYgKFV0aWxzLmlzTnVsbEVtcHR5T3JVbmRlZmluZWQoeCkgfHwgVXRpbHMuaXNOdWxsRW1wdHlPclVuZGVmaW5lZCh4LnZhbHVlKSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIHRoaXMuY3VycmVuY2llcyA9IHgudmFsdWU7XHJcbiAgICAgIGNvbnN0IGRlZmF1bHRDdXJyZW5jeSA9IHRoaXMuY3VycmVuY2llcy5maW5kKHkgPT4geS5pc0RlZmF1bHRWYWx1ZSA9PT0gdHJ1ZSk7XHJcbiAgICAgIHRoaXMuY3VycmVuY3lBbW91bnQuY3VycmVuY3lDb2RlID0gZGVmYXVsdEN1cnJlbmN5LnZhbHVlO1xyXG4gICAgICB0aGlzLmN1cnJlbmN5QW1vdW50Q2hhbmdlLmVtaXQodGhpcy5jdXJyZW5jeUFtb3VudCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19