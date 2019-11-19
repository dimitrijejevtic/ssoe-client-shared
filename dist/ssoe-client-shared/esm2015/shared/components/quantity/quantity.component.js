/**
 * @fileoverview added by tsickle
 * Generated from: shared/components/quantity/quantity.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Utils } from '../../extensions/utils';
import { TranslationService } from '../../services/translation.service';
import { NgForm, FormControl } from '@angular/forms';
import { Quantity } from '../../POCO/Quantity';
export class QuantityComponent {
    /**
     * @param {?} translationService
     * @param {?} form
     */
    constructor(translationService, form) {
        this.translationService = translationService;
        this.form = form;
        this.quantityChange = new EventEmitter();
        this.units = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.getUnits();
        if (this.propertyName === undefined)
            this.propertyName = Utils.newTechnicalNumber();
        this.ngControlAmount = new FormControl();
        this.ngControlUnitOfMeasure = new FormControl();
        if (this.form !== undefined) {
            this.form.form.addControl(this.propertyName + 'Amount', this.ngControlAmount);
            this.form.form.addControl(this.propertyName + 'UnitOfMeasure', this.ngControlUnitOfMeasure);
        }
    }
    /**
     * @return {?}
     */
    getUnits() {
        // this.classificationService.getClassificationValues('Quantity').subscribe(x => {
        //   if (Utils.isNullEmptyOrUndefined(x) || Utils.isNullEmptyOrUndefined(x.value))
        //     return;
        //   this.units = x.value;
        //   const defaultCurrency = this.units.find(y => y.isDefaultValue === true);
        //   if (defaultCurrency !== undefined)
        //     this.quantity.unitOfMeasureId = defaultCurrency.value;
        // });
    }
}
QuantityComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-quantity',
                template: "<form class=\"quantity-component\" formValidator>\r\n    <div class=\"\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"1%\" fxLayoutAlign=\"center\">\r\n        <div fxFlex=\"80%\">\r\n          <mat-form-field>\r\n              <input matInput type=\"number\" [name]=\"propertyName+'Amount'\" placeholder=\"{{placeholder}}\" [readonly]=\"isReadOnly\" [(ngModel)]=\"quantity.amount\" (ngModelChange)=\"quantityChange.emit(quantity)\" step=\".01\">\r\n              <mat-error app-input-validation-message [propertyName]=\"propertyName+'Amount'\"></mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n        <div fxFlex=\"20%\">\r\n          <mat-form-field>\r\n            <input matInput type=\"text\" [name]=\"propertyName+'UnitOfMeasure'\" placeholder=\"{{'Unit of measure'| translate : translationService.cultureCode}}\" [(ngModel)]=\"quantity.unitOfMeasure\" (ngModelChange)=\"quantityChange.emit(quantity)\">\r\n            <mat-error app-input-validation-message [propertyName]=\"propertyName+'UnitOfMeasure'\"></mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n  </form>\r\n",
                styles: [""]
            }] }
];
/** @nocollapse */
QuantityComponent.ctorParameters = () => [
    { type: TranslationService },
    { type: NgForm }
];
QuantityComponent.propDecorators = {
    quantity: [{ type: Input }],
    isReadOnly: [{ type: Input }],
    placeholder: [{ type: Input }],
    propertyName: [{ type: Input }],
    quantityChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    QuantityComponent.prototype.quantity;
    /** @type {?} */
    QuantityComponent.prototype.isReadOnly;
    /** @type {?} */
    QuantityComponent.prototype.placeholder;
    /** @type {?} */
    QuantityComponent.prototype.propertyName;
    /** @type {?} */
    QuantityComponent.prototype.ngControlAmount;
    /** @type {?} */
    QuantityComponent.prototype.ngControlUnitOfMeasure;
    /** @type {?} */
    QuantityComponent.prototype.quantityChange;
    /** @type {?} */
    QuantityComponent.prototype.units;
    /** @type {?} */
    QuantityComponent.prototype.translationService;
    /**
     * @type {?}
     * @private
     */
    QuantityComponent.prototype.form;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVhbnRpdHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3NvZS1jbGllbnQtc2hhcmVkLyIsInNvdXJjZXMiOlsic2hhcmVkL2NvbXBvbmVudHMvcXVhbnRpdHkvcXVhbnRpdHkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDeEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFPL0MsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7SUFZNUIsWUFDUyxrQkFBc0MsRUFDckMsSUFBWTtRQURiLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDckMsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUpaLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQVksQ0FBQztRQUN4RCxVQUFLLEdBQUcsRUFBRSxDQUFDO0lBR2UsQ0FBQzs7OztJQUUzQixRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRWhCLElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxTQUFTO1lBQ2pDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFFakQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1FBQ2hELElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUM5RSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxlQUFlLEVBQUUsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7U0FDN0Y7SUFFSCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLGtGQUFrRjtRQUNsRixrRkFBa0Y7UUFDbEYsY0FBYztRQUNkLDBCQUEwQjtRQUMxQiw2RUFBNkU7UUFDN0UsdUNBQXVDO1FBQ3ZDLDZEQUE2RDtRQUM3RCxNQUFNO0lBQ1IsQ0FBQzs7O1lBN0NGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIscW9DQUF3Qzs7YUFFekM7Ozs7WUFSUSxrQkFBa0I7WUFDbEIsTUFBTTs7O3VCQVVaLEtBQUs7eUJBQ0wsS0FBSzswQkFDTCxLQUFLOzJCQUNMLEtBQUs7NkJBS0wsTUFBTTs7OztJQVJQLHFDQUE0Qjs7SUFDNUIsdUNBQTZCOztJQUM3Qix3Q0FBNkI7O0lBQzdCLHlDQUE4Qjs7SUFFOUIsNENBQTZCOztJQUM3QixtREFBb0M7O0lBRXBDLDJDQUF3RDs7SUFDeEQsa0NBQVc7O0lBRVQsK0NBQTZDOzs7OztJQUM3QyxpQ0FBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi4vLi4vZXh0ZW5zaW9ucy91dGlscyc7XHJcbmltcG9ydCB7IFRyYW5zbGF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOZ0Zvcm0sIEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBRdWFudGl0eSB9IGZyb20gJy4uLy4uL1BPQ08vUXVhbnRpdHknO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtcXVhbnRpdHknLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9xdWFudGl0eS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcXVhbnRpdHkuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBRdWFudGl0eUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIHF1YW50aXR5OiBRdWFudGl0eTtcclxuICBASW5wdXQoKSBpc1JlYWRPbmx5OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcHJvcGVydHlOYW1lOiBzdHJpbmc7XHJcblxyXG4gIG5nQ29udHJvbEFtb3VudDogRm9ybUNvbnRyb2w7XHJcbiAgbmdDb250cm9sVW5pdE9mTWVhc3VyZTogRm9ybUNvbnRyb2w7XHJcblxyXG4gIEBPdXRwdXQoKSBxdWFudGl0eUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8UXVhbnRpdHk+KCk7XHJcbiAgdW5pdHMgPSBbXTtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyB0cmFuc2xhdGlvblNlcnZpY2U6IFRyYW5zbGF0aW9uU2VydmljZSxcclxuICAgIHByaXZhdGUgZm9ybTogTmdGb3JtKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmdldFVuaXRzKCk7XHJcblxyXG4gICAgaWYgKHRoaXMucHJvcGVydHlOYW1lID09PSB1bmRlZmluZWQpXHJcbiAgICAgIHRoaXMucHJvcGVydHlOYW1lID0gVXRpbHMubmV3VGVjaG5pY2FsTnVtYmVyKCk7XHJcblxyXG4gICAgdGhpcy5uZ0NvbnRyb2xBbW91bnQgPSBuZXcgRm9ybUNvbnRyb2woKTtcclxuICAgIHRoaXMubmdDb250cm9sVW5pdE9mTWVhc3VyZSA9IG5ldyBGb3JtQ29udHJvbCgpO1xyXG4gICAgaWYgKHRoaXMuZm9ybSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuZm9ybS5mb3JtLmFkZENvbnRyb2wodGhpcy5wcm9wZXJ0eU5hbWUgKyAnQW1vdW50JywgdGhpcy5uZ0NvbnRyb2xBbW91bnQpO1xyXG4gICAgICB0aGlzLmZvcm0uZm9ybS5hZGRDb250cm9sKHRoaXMucHJvcGVydHlOYW1lICsgJ1VuaXRPZk1lYXN1cmUnLCB0aGlzLm5nQ29udHJvbFVuaXRPZk1lYXN1cmUpO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGdldFVuaXRzKCkge1xyXG4gICAgLy8gdGhpcy5jbGFzc2lmaWNhdGlvblNlcnZpY2UuZ2V0Q2xhc3NpZmljYXRpb25WYWx1ZXMoJ1F1YW50aXR5Jykuc3Vic2NyaWJlKHggPT4ge1xyXG4gICAgLy8gICBpZiAoVXRpbHMuaXNOdWxsRW1wdHlPclVuZGVmaW5lZCh4KSB8fCBVdGlscy5pc051bGxFbXB0eU9yVW5kZWZpbmVkKHgudmFsdWUpKVxyXG4gICAgLy8gICAgIHJldHVybjtcclxuICAgIC8vICAgdGhpcy51bml0cyA9IHgudmFsdWU7XHJcbiAgICAvLyAgIGNvbnN0IGRlZmF1bHRDdXJyZW5jeSA9IHRoaXMudW5pdHMuZmluZCh5ID0+IHkuaXNEZWZhdWx0VmFsdWUgPT09IHRydWUpO1xyXG4gICAgLy8gICBpZiAoZGVmYXVsdEN1cnJlbmN5ICE9PSB1bmRlZmluZWQpXHJcbiAgICAvLyAgICAgdGhpcy5xdWFudGl0eS51bml0T2ZNZWFzdXJlSWQgPSBkZWZhdWx0Q3VycmVuY3kudmFsdWU7XHJcbiAgICAvLyB9KTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==