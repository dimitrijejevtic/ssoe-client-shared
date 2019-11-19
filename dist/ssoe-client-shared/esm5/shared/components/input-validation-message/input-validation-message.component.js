/**
 * @fileoverview added by tsickle
 * Generated from: shared/components/input-validation-message/input-validation-message.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { ErrorMessagesService } from '../../services/error-messages.service';
var InputValidationMessageComponent = /** @class */ (function () {
    function InputValidationMessageComponent(errorMessageService) {
        this.errorMessageService = errorMessageService;
    }
    /**
     * @return {?}
     */
    InputValidationMessageComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // TODO: fix logic
        this.errorMessageService.errorPropertyMessageSubject.subscribe((/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            if (_this.propertyName === x.propertyName && x.isCleanup === false)
                _this.errors = x.errorMessage.split('###');
            else if (_this.propertyName === x.propertyName && x.isCleanup === true)
                _this.errors = [];
        }));
        this.errorMessageService.removeFormErrorsSubject.subscribe((/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            _this.errors = [];
        }));
    };
    InputValidationMessageComponent.decorators = [
        { type: Component, args: [{
                    selector: '[app-input-validation-message]',
                    template: "<span *ngFor=\"let error of errors\">{{error}}</span>\r\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    InputValidationMessageComponent.ctorParameters = function () { return [
        { type: ErrorMessagesService }
    ]; };
    InputValidationMessageComponent.propDecorators = {
        propertyName: [{ type: Input }]
    };
    return InputValidationMessageComponent;
}());
export { InputValidationMessageComponent };
if (false) {
    /** @type {?} */
    InputValidationMessageComponent.prototype.propertyName;
    /** @type {?} */
    InputValidationMessageComponent.prototype.errors;
    /**
     * @type {?}
     * @private
     */
    InputValidationMessageComponent.prototype.errorMessageService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtdmFsaWRhdGlvbi1tZXNzYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Nzb2UtY2xpZW50LXNoYXJlZC8iLCJzb3VyY2VzIjpbInNoYXJlZC9jb21wb25lbnRzL2lucHV0LXZhbGlkYXRpb24tbWVzc2FnZS9pbnB1dC12YWxpZGF0aW9uLW1lc3NhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFN0U7SUFVRSx5Q0FBb0IsbUJBQXlDO1FBQXpDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBc0I7SUFBSSxDQUFDOzs7O0lBRWxFLGtEQUFROzs7SUFBUjtRQUFBLGlCQVdDO1FBVkMsa0JBQWtCO1FBQ2xCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQywyQkFBMkIsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxDQUFDO1lBQzlELElBQUksS0FBSSxDQUFDLFlBQVksS0FBSyxDQUFDLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQyxTQUFTLEtBQUssS0FBSztnQkFDL0QsS0FBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDdkMsSUFBSSxLQUFJLENBQUMsWUFBWSxLQUFLLENBQUMsQ0FBQyxZQUFZLElBQUksQ0FBQyxDQUFDLFNBQVMsS0FBSyxJQUFJO2dCQUNuRSxLQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNyQixDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxtQkFBbUIsQ0FBQyx1QkFBdUIsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxDQUFDO1lBQzFELEtBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ25CLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBdkJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0NBQWdDO29CQUMxQyxxRUFBd0Q7O2lCQUV6RDs7OztnQkFOUSxvQkFBb0I7OzsrQkFTMUIsS0FBSzs7SUFrQlIsc0NBQUM7Q0FBQSxBQXpCRCxJQXlCQztTQXBCWSwrQkFBK0I7OztJQUUxQyx1REFBOEI7O0lBRTlCLGlEQUFpQjs7Ozs7SUFDTCw4REFBaUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRXJyb3JNZXNzYWdlc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9lcnJvci1tZXNzYWdlcy5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnW2FwcC1pbnB1dC12YWxpZGF0aW9uLW1lc3NhZ2VdJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaW5wdXQtdmFsaWRhdGlvbi1tZXNzYWdlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9pbnB1dC12YWxpZGF0aW9uLW1lc3NhZ2UuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbnB1dFZhbGlkYXRpb25NZXNzYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgcHJvcGVydHlOYW1lOiBzdHJpbmc7XHJcblxyXG4gIGVycm9yczogc3RyaW5nW107XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlcnJvck1lc3NhZ2VTZXJ2aWNlOiBFcnJvck1lc3NhZ2VzU2VydmljZSkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgLy8gVE9ETzogZml4IGxvZ2ljXHJcbiAgICB0aGlzLmVycm9yTWVzc2FnZVNlcnZpY2UuZXJyb3JQcm9wZXJ0eU1lc3NhZ2VTdWJqZWN0LnN1YnNjcmliZSh4ID0+IHtcclxuICAgICAgaWYgKHRoaXMucHJvcGVydHlOYW1lID09PSB4LnByb3BlcnR5TmFtZSAmJiB4LmlzQ2xlYW51cCA9PT0gZmFsc2UpXHJcbiAgICAgICAgdGhpcy5lcnJvcnMgPSB4LmVycm9yTWVzc2FnZS5zcGxpdCgnIyMjJyk7XHJcbiAgICAgIGVsc2UgaWYgKHRoaXMucHJvcGVydHlOYW1lID09PSB4LnByb3BlcnR5TmFtZSAmJiB4LmlzQ2xlYW51cCA9PT0gdHJ1ZSlcclxuICAgICAgICB0aGlzLmVycm9ycyA9IFtdO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmVycm9yTWVzc2FnZVNlcnZpY2UucmVtb3ZlRm9ybUVycm9yc1N1YmplY3Quc3Vic2NyaWJlKHggPT4ge1xyXG4gICAgICB0aGlzLmVycm9ycyA9IFtdO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=