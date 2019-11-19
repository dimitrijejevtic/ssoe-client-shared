/**
 * @fileoverview added by tsickle
 * Generated from: shared/directives/confirm-action.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, HostListener } from '@angular/core';
import { ConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material';
var ConfirmActionDirective = /** @class */ (function () {
    function ConfirmActionDirective(dialog) {
        this.dialog = dialog;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    ConfirmActionDirective.prototype.onClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var confirmDialogData = {
            title: 'Confirm publish tender',
            text: 'This action is irrevertible, are you sure?',
            translatedText: undefined,
            confirmLabel: 'Confirm',
            cancelLabel: 'Cancel',
            action: this.action,
            parameters: this.parameters
        };
        this.dialog.open(ConfirmDialogComponent, { panelClass: 'modal-small', data: confirmDialogData });
    };
    /**
     * @return {?}
     */
    ConfirmActionDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // this.viewContainer.createEmbeddedView(this.templateRef);
    };
    ConfirmActionDirective.decorators = [
        { type: Directive, args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: '[confirmAction]'
                },] }
    ];
    /** @nocollapse */
    ConfirmActionDirective.ctorParameters = function () { return [
        { type: MatDialog }
    ]; };
    ConfirmActionDirective.propDecorators = {
        action: [{ type: Input, args: ['confirmAction',] }],
        parameters: [{ type: Input }],
        onClick: [{ type: HostListener, args: ['click',] }]
    };
    return ConfirmActionDirective;
}());
export { ConfirmActionDirective };
if (false) {
    /** @type {?} */
    ConfirmActionDirective.prototype.action;
    /** @type {?} */
    ConfirmActionDirective.prototype.parameters;
    /**
     * @type {?}
     * @private
     */
    ConfirmActionDirective.prototype.dialog;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybS1hY3Rpb24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3NvZS1jbGllbnQtc2hhcmVkLyIsInNvdXJjZXMiOlsic2hhcmVkL2RpcmVjdGl2ZXMvY29uZmlybS1hY3Rpb24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXlDLFlBQVksRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUNoSCxPQUFPLEVBQXNCLHNCQUFzQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDbkgsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRTlDO0lBU0UsZ0NBQ1UsTUFBaUI7UUFBakIsV0FBTSxHQUFOLE1BQU0sQ0FBVztJQUFJLENBQUM7Ozs7O0lBRVAsd0NBQU87Ozs7SUFBOUIsVUFBK0IsS0FBSzs7WUFDNUIsaUJBQWlCLEdBQXVCO1lBQzVDLEtBQUssRUFBRSx3QkFBd0I7WUFDL0IsSUFBSSxFQUFFLDRDQUE0QztZQUNsRCxjQUFjLEVBQUUsU0FBUztZQUN6QixZQUFZLEVBQUUsU0FBUztZQUN2QixXQUFXLEVBQUUsUUFBUTtZQUNyQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1NBQzVCO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRSxDQUFDLENBQUM7SUFDckcsQ0FBQzs7OztJQUVELHlDQUFROzs7SUFBUjtRQUNFLDJEQUEyRDtJQUM3RCxDQUFDOztnQkEzQkYsU0FBUyxTQUFDOztvQkFFVCxRQUFRLEVBQUUsaUJBQWlCO2lCQUM1Qjs7OztnQkFMUSxTQUFTOzs7eUJBUWYsS0FBSyxTQUFDLGVBQWU7NkJBQ3JCLEtBQUs7MEJBS0gsWUFBWSxTQUFDLE9BQU87O0lBaUJ6Qiw2QkFBQztDQUFBLEFBN0JELElBNkJDO1NBekJZLHNCQUFzQjs7O0lBRWpDLHdDQUFvQzs7SUFDcEMsNENBQXlCOzs7OztJQUd2Qix3Q0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkluaXQsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmLCBIb3N0TGlzdGVuZXIsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElDb25maXJtRGlhbG9nRGF0YSwgQ29uZmlybURpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvY29uZmlybS1kaWFsb2cvY29uZmlybS1kaWFsb2cuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWF0RGlhbG9nIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnW2NvbmZpcm1BY3Rpb25dJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29uZmlybUFjdGlvbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgnY29uZmlybUFjdGlvbicpIGFjdGlvbjogYW55O1xyXG4gIEBJbnB1dCgpIHBhcmFtZXRlcnM6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGRpYWxvZzogTWF0RGlhbG9nKSB7IH1cclxuXHJcbiAgICBASG9zdExpc3RlbmVyKCdjbGljaycpIG9uQ2xpY2soZXZlbnQpIHtcclxuICAgICAgY29uc3QgY29uZmlybURpYWxvZ0RhdGE6IElDb25maXJtRGlhbG9nRGF0YSA9IHtcclxuICAgICAgICB0aXRsZTogJ0NvbmZpcm0gcHVibGlzaCB0ZW5kZXInLFxyXG4gICAgICAgIHRleHQ6ICdUaGlzIGFjdGlvbiBpcyBpcnJldmVydGlibGUsIGFyZSB5b3Ugc3VyZT8nLFxyXG4gICAgICAgIHRyYW5zbGF0ZWRUZXh0OiB1bmRlZmluZWQsXHJcbiAgICAgICAgY29uZmlybUxhYmVsOiAnQ29uZmlybScsXHJcbiAgICAgICAgY2FuY2VsTGFiZWw6ICdDYW5jZWwnLFxyXG4gICAgICAgIGFjdGlvbjogdGhpcy5hY3Rpb24sXHJcbiAgICAgICAgcGFyYW1ldGVyczogdGhpcy5wYXJhbWV0ZXJzXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuZGlhbG9nLm9wZW4oQ29uZmlybURpYWxvZ0NvbXBvbmVudCwgeyBwYW5lbENsYXNzOiAnbW9kYWwtc21hbGwnLCBkYXRhOiBjb25maXJtRGlhbG9nRGF0YSB9KTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgLy8gdGhpcy52aWV3Q29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLnRlbXBsYXRlUmVmKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==