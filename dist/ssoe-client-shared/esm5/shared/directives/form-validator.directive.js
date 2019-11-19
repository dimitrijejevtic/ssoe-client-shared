/**
 * @fileoverview added by tsickle
 * Generated from: shared/directives/form-validator.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ErrorMessagesService } from '../services/error-messages.service';
import { Utils } from '../extensions/utils';
var FormValidatorDirective = /** @class */ (function () {
    function FormValidatorDirective(form, errorService) {
        this.form = form;
        this.errorService = errorService;
    }
    /**
     * @return {?}
     */
    FormValidatorDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.errorService.errorPropertyMessageSubject.subscribe((/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            if (!Utils.isNullEmptyOrUndefined(_this.form.form.get(x.propertyName)) && x.isCleanup === false) {
                /** @type {?} */
                var control = _this.form.form.get(x.propertyName);
                control.setErrors({ incorrect: true });
                control.markAsDirty();
                control.markAsTouched();
            }
            else if (!Utils.isNullEmptyOrUndefined(_this.form.form.get(x.propertyName)) && x.isCleanup === true)
                _this.form.form.setErrors(null);
        }));
        this.errorService.removeFormErrorsSubject.subscribe((/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            _this.form.form.setErrors(null);
        }));
    };
    FormValidatorDirective.decorators = [
        { type: Directive, args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: 'form[formValidator]'
                },] }
    ];
    /** @nocollapse */
    FormValidatorDirective.ctorParameters = function () { return [
        { type: NgForm },
        { type: ErrorMessagesService }
    ]; };
    return FormValidatorDirective;
}());
export { FormValidatorDirective };
if (false) {
    /** @type {?} */
    FormValidatorDirective.prototype.form;
    /**
     * @type {?}
     * @private
     */
    FormValidatorDirective.prototype.errorService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS12YWxpZGF0b3IuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3NvZS1jbGllbnQtc2hhcmVkLyIsInNvdXJjZXMiOlsic2hhcmVkL2RpcmVjdGl2ZXMvZm9ybS12YWxpZGF0b3IuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBb0QsTUFBTSxlQUFlLENBQUM7QUFDNUYsT0FBTyxFQUFFLE1BQU0sRUFBb0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFNUM7SUFNRSxnQ0FDUyxJQUFZLEVBQ1gsWUFBa0M7UUFEbkMsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNYLGlCQUFZLEdBQVosWUFBWSxDQUFzQjtJQUFJLENBQUM7Ozs7SUFFakQseUNBQVE7OztJQUFSO1FBQUEsaUJBYUM7UUFaQyxJQUFJLENBQUMsWUFBWSxDQUFDLDJCQUEyQixDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLENBQUM7WUFDdkQsSUFBSSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsS0FBSyxLQUFLLEVBQUU7O29CQUN4RixPQUFPLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7Z0JBQ2xELE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBQyxTQUFTLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztnQkFDckMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUN0QixPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDekI7aUJBQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsS0FBSyxJQUFJO2dCQUNsRyxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkMsQ0FBQyxFQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsWUFBWSxDQUFDLHVCQUF1QixDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLENBQUM7WUFDbkQsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBdkJGLFNBQVMsU0FBQzs7b0JBRVQsUUFBUSxFQUFFLHFCQUFxQjtpQkFDaEM7Ozs7Z0JBUFEsTUFBTTtnQkFDTixvQkFBb0I7O0lBMkI3Qiw2QkFBQztDQUFBLEFBeEJELElBd0JDO1NBcEJZLHNCQUFzQjs7O0lBRy9CLHNDQUFtQjs7Ozs7SUFDbkIsOENBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdGb3JtLCBWYWxpZGF0aW9uRXJyb3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBFcnJvck1lc3NhZ2VzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2Vycm9yLW1lc3NhZ2VzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBVdGlscyB9IGZyb20gJy4uL2V4dGVuc2lvbnMvdXRpbHMnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnZm9ybVtmb3JtVmFsaWRhdG9yXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIEZvcm1WYWxpZGF0b3JEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBmb3JtOiBOZ0Zvcm0sXHJcbiAgICBwcml2YXRlIGVycm9yU2VydmljZTogRXJyb3JNZXNzYWdlc1NlcnZpY2UpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZXJyb3JTZXJ2aWNlLmVycm9yUHJvcGVydHlNZXNzYWdlU3ViamVjdC5zdWJzY3JpYmUoeCA9PiB7XHJcbiAgICAgIGlmICghVXRpbHMuaXNOdWxsRW1wdHlPclVuZGVmaW5lZCh0aGlzLmZvcm0uZm9ybS5nZXQoeC5wcm9wZXJ0eU5hbWUpKSAmJiB4LmlzQ2xlYW51cCA9PT0gZmFsc2UpIHtcclxuICAgICAgICBjb25zdCBjb250cm9sID0gdGhpcy5mb3JtLmZvcm0uZ2V0KHgucHJvcGVydHlOYW1lKTtcclxuICAgICAgICBjb250cm9sLnNldEVycm9ycyh7aW5jb3JyZWN0OiB0cnVlfSk7XHJcbiAgICAgICAgY29udHJvbC5tYXJrQXNEaXJ0eSgpO1xyXG4gICAgICAgIGNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xyXG4gICAgICB9IGVsc2UgaWYgKCFVdGlscy5pc051bGxFbXB0eU9yVW5kZWZpbmVkKHRoaXMuZm9ybS5mb3JtLmdldCh4LnByb3BlcnR5TmFtZSkpICYmIHguaXNDbGVhbnVwID09PSB0cnVlKVxyXG4gICAgICAgIHRoaXMuZm9ybS5mb3JtLnNldEVycm9ycyhudWxsKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5lcnJvclNlcnZpY2UucmVtb3ZlRm9ybUVycm9yc1N1YmplY3Quc3Vic2NyaWJlKHggPT4ge1xyXG4gICAgICB0aGlzLmZvcm0uZm9ybS5zZXRFcnJvcnMobnVsbCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19