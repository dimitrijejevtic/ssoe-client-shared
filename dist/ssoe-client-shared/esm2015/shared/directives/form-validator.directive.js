/**
 * @fileoverview added by tsickle
 * Generated from: shared/directives/form-validator.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ErrorMessagesService } from '../services/error-messages.service';
import { Utils } from '../extensions/utils';
export class FormValidatorDirective {
    /**
     * @param {?} form
     * @param {?} errorService
     */
    constructor(form, errorService) {
        this.form = form;
        this.errorService = errorService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.errorService.errorPropertyMessageSubject.subscribe((/**
         * @param {?} x
         * @return {?}
         */
        x => {
            if (!Utils.isNullEmptyOrUndefined(this.form.form.get(x.propertyName)) && x.isCleanup === false) {
                /** @type {?} */
                const control = this.form.form.get(x.propertyName);
                control.setErrors({ incorrect: true });
                control.markAsDirty();
                control.markAsTouched();
            }
            else if (!Utils.isNullEmptyOrUndefined(this.form.form.get(x.propertyName)) && x.isCleanup === true)
                this.form.form.setErrors(null);
        }));
        this.errorService.removeFormErrorsSubject.subscribe((/**
         * @param {?} x
         * @return {?}
         */
        x => {
            this.form.form.setErrors(null);
        }));
    }
}
FormValidatorDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: 'form[formValidator]'
            },] }
];
/** @nocollapse */
FormValidatorDirective.ctorParameters = () => [
    { type: NgForm },
    { type: ErrorMessagesService }
];
if (false) {
    /** @type {?} */
    FormValidatorDirective.prototype.form;
    /**
     * @type {?}
     * @private
     */
    FormValidatorDirective.prototype.errorService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS12YWxpZGF0b3IuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3NvZS1jbGllbnQtc2hhcmVkLyIsInNvdXJjZXMiOlsic2hhcmVkL2RpcmVjdGl2ZXMvZm9ybS12YWxpZGF0b3IuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBb0QsTUFBTSxlQUFlLENBQUM7QUFDNUYsT0FBTyxFQUFFLE1BQU0sRUFBb0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFNNUMsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7SUFFakMsWUFDUyxJQUFZLEVBQ1gsWUFBa0M7UUFEbkMsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNYLGlCQUFZLEdBQVosWUFBWSxDQUFzQjtJQUFJLENBQUM7Ozs7SUFFakQsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLENBQUMsMkJBQTJCLENBQUMsU0FBUzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFO1lBQzFELElBQUksQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEtBQUssS0FBSyxFQUFFOztzQkFDeEYsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO2dCQUNsRCxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUMsU0FBUyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7Z0JBQ3JDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDdEIsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQ3pCO2lCQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEtBQUssSUFBSTtnQkFDbEcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25DLENBQUMsRUFBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFlBQVksQ0FBQyx1QkFBdUIsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBdkJGLFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFFLHFCQUFxQjthQUNoQzs7OztZQVBRLE1BQU07WUFDTixvQkFBb0I7Ozs7SUFVekIsc0NBQW1COzs7OztJQUNuQiw4Q0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ0Zvcm0sIFZhbGlkYXRpb25FcnJvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEVycm9yTWVzc2FnZXNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZXJyb3ItbWVzc2FnZXMuc2VydmljZSc7XHJcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi4vZXh0ZW5zaW9ucy91dGlscyc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdmb3JtW2Zvcm1WYWxpZGF0b3JdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybVZhbGlkYXRvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGZvcm06IE5nRm9ybSxcclxuICAgIHByaXZhdGUgZXJyb3JTZXJ2aWNlOiBFcnJvck1lc3NhZ2VzU2VydmljZSkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5lcnJvclNlcnZpY2UuZXJyb3JQcm9wZXJ0eU1lc3NhZ2VTdWJqZWN0LnN1YnNjcmliZSh4ID0+IHtcclxuICAgICAgaWYgKCFVdGlscy5pc051bGxFbXB0eU9yVW5kZWZpbmVkKHRoaXMuZm9ybS5mb3JtLmdldCh4LnByb3BlcnR5TmFtZSkpICYmIHguaXNDbGVhbnVwID09PSBmYWxzZSkge1xyXG4gICAgICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmZvcm0uZm9ybS5nZXQoeC5wcm9wZXJ0eU5hbWUpO1xyXG4gICAgICAgIGNvbnRyb2wuc2V0RXJyb3JzKHtpbmNvcnJlY3Q6IHRydWV9KTtcclxuICAgICAgICBjb250cm9sLm1hcmtBc0RpcnR5KCk7XHJcbiAgICAgICAgY29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoIVV0aWxzLmlzTnVsbEVtcHR5T3JVbmRlZmluZWQodGhpcy5mb3JtLmZvcm0uZ2V0KHgucHJvcGVydHlOYW1lKSkgJiYgeC5pc0NsZWFudXAgPT09IHRydWUpXHJcbiAgICAgICAgdGhpcy5mb3JtLmZvcm0uc2V0RXJyb3JzKG51bGwpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmVycm9yU2VydmljZS5yZW1vdmVGb3JtRXJyb3JzU3ViamVjdC5zdWJzY3JpYmUoeCA9PiB7XHJcbiAgICAgIHRoaXMuZm9ybS5mb3JtLnNldEVycm9ycyhudWxsKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=