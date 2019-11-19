/**
 * @fileoverview added by tsickle
 * Generated from: shared/components/input-validation-message/input-validation-message.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { ErrorMessagesService } from '../../services/error-messages.service';
export class InputValidationMessageComponent {
    /**
     * @param {?} errorMessageService
     */
    constructor(errorMessageService) {
        this.errorMessageService = errorMessageService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // TODO: fix logic
        this.errorMessageService.errorPropertyMessageSubject.subscribe((/**
         * @param {?} x
         * @return {?}
         */
        x => {
            if (this.propertyName === x.propertyName && x.isCleanup === false)
                this.errors = x.errorMessage.split('###');
            else if (this.propertyName === x.propertyName && x.isCleanup === true)
                this.errors = [];
        }));
        this.errorMessageService.removeFormErrorsSubject.subscribe((/**
         * @param {?} x
         * @return {?}
         */
        x => {
            this.errors = [];
        }));
    }
}
InputValidationMessageComponent.decorators = [
    { type: Component, args: [{
                selector: '[app-input-validation-message]',
                template: "<span *ngFor=\"let error of errors\">{{error}}</span>\r\n",
                styles: [""]
            }] }
];
/** @nocollapse */
InputValidationMessageComponent.ctorParameters = () => [
    { type: ErrorMessagesService }
];
InputValidationMessageComponent.propDecorators = {
    propertyName: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtdmFsaWRhdGlvbi1tZXNzYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Nzb2UtY2xpZW50LXNoYXJlZC8iLCJzb3VyY2VzIjpbInNoYXJlZC9jb21wb25lbnRzL2lucHV0LXZhbGlkYXRpb24tbWVzc2FnZS9pbnB1dC12YWxpZGF0aW9uLW1lc3NhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFPN0UsTUFBTSxPQUFPLCtCQUErQjs7OztJQUsxQyxZQUFvQixtQkFBeUM7UUFBekMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFzQjtJQUFJLENBQUM7Ozs7SUFFbEUsUUFBUTtRQUNOLGtCQUFrQjtRQUNsQixJQUFJLENBQUMsbUJBQW1CLENBQUMsMkJBQTJCLENBQUMsU0FBUzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2pFLElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxDQUFDLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQyxTQUFTLEtBQUssS0FBSztnQkFDL0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDdkMsSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLENBQUMsQ0FBQyxZQUFZLElBQUksQ0FBQyxDQUFDLFNBQVMsS0FBSyxJQUFJO2dCQUNuRSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNyQixDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxtQkFBbUIsQ0FBQyx1QkFBdUIsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDN0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7WUF2QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQ0FBZ0M7Z0JBQzFDLHFFQUF3RDs7YUFFekQ7Ozs7WUFOUSxvQkFBb0I7OzsyQkFTMUIsS0FBSzs7OztJQUFOLHVEQUE4Qjs7SUFFOUIsaURBQWlCOzs7OztJQUNMLDhEQUFpRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBFcnJvck1lc3NhZ2VzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Vycm9yLW1lc3NhZ2VzLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdbYXBwLWlucHV0LXZhbGlkYXRpb24tbWVzc2FnZV0nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9pbnB1dC12YWxpZGF0aW9uLW1lc3NhZ2UuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2lucHV0LXZhbGlkYXRpb24tbWVzc2FnZS5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIElucHV0VmFsaWRhdGlvbk1lc3NhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBwcm9wZXJ0eU5hbWU6IHN0cmluZztcclxuXHJcbiAgZXJyb3JzOiBzdHJpbmdbXTtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVycm9yTWVzc2FnZVNlcnZpY2U6IEVycm9yTWVzc2FnZXNTZXJ2aWNlKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAvLyBUT0RPOiBmaXggbG9naWNcclxuICAgIHRoaXMuZXJyb3JNZXNzYWdlU2VydmljZS5lcnJvclByb3BlcnR5TWVzc2FnZVN1YmplY3Quc3Vic2NyaWJlKHggPT4ge1xyXG4gICAgICBpZiAodGhpcy5wcm9wZXJ0eU5hbWUgPT09IHgucHJvcGVydHlOYW1lICYmIHguaXNDbGVhbnVwID09PSBmYWxzZSlcclxuICAgICAgICB0aGlzLmVycm9ycyA9IHguZXJyb3JNZXNzYWdlLnNwbGl0KCcjIyMnKTtcclxuICAgICAgZWxzZSBpZiAodGhpcy5wcm9wZXJ0eU5hbWUgPT09IHgucHJvcGVydHlOYW1lICYmIHguaXNDbGVhbnVwID09PSB0cnVlKVxyXG4gICAgICAgIHRoaXMuZXJyb3JzID0gW107XHJcbiAgICB9KTtcclxuICAgIHRoaXMuZXJyb3JNZXNzYWdlU2VydmljZS5yZW1vdmVGb3JtRXJyb3JzU3ViamVjdC5zdWJzY3JpYmUoeCA9PiB7XHJcbiAgICAgIHRoaXMuZXJyb3JzID0gW107XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==