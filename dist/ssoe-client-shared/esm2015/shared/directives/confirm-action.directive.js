/**
 * @fileoverview added by tsickle
 * Generated from: shared/directives/confirm-action.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, HostListener } from '@angular/core';
import { ConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material';
export class ConfirmActionDirective {
    /**
     * @param {?} dialog
     */
    constructor(dialog) {
        this.dialog = dialog;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        /** @type {?} */
        const confirmDialogData = {
            title: 'Confirm publish tender',
            text: 'This action is irrevertible, are you sure?',
            translatedText: undefined,
            confirmLabel: 'Confirm',
            cancelLabel: 'Cancel',
            action: this.action,
            parameters: this.parameters
        };
        this.dialog.open(ConfirmDialogComponent, { panelClass: 'modal-small', data: confirmDialogData });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // this.viewContainer.createEmbeddedView(this.templateRef);
    }
}
ConfirmActionDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[confirmAction]'
            },] }
];
/** @nocollapse */
ConfirmActionDirective.ctorParameters = () => [
    { type: MatDialog }
];
ConfirmActionDirective.propDecorators = {
    action: [{ type: Input, args: ['confirmAction',] }],
    parameters: [{ type: Input }],
    onClick: [{ type: HostListener, args: ['click',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybS1hY3Rpb24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3NvZS1jbGllbnQtc2hhcmVkLyIsInNvdXJjZXMiOlsic2hhcmVkL2RpcmVjdGl2ZXMvY29uZmlybS1hY3Rpb24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXlDLFlBQVksRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUNoSCxPQUFPLEVBQXNCLHNCQUFzQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDbkgsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBTTlDLE1BQU0sT0FBTyxzQkFBc0I7Ozs7SUFLakMsWUFDVSxNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO0lBQUksQ0FBQzs7Ozs7SUFFUCxPQUFPLENBQUMsS0FBSzs7Y0FDNUIsaUJBQWlCLEdBQXVCO1lBQzVDLEtBQUssRUFBRSx3QkFBd0I7WUFDL0IsSUFBSSxFQUFFLDRDQUE0QztZQUNsRCxjQUFjLEVBQUUsU0FBUztZQUN6QixZQUFZLEVBQUUsU0FBUztZQUN2QixXQUFXLEVBQUUsUUFBUTtZQUNyQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1NBQzVCO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRSxDQUFDLENBQUM7SUFDckcsQ0FBQzs7OztJQUVELFFBQVE7UUFDTiwyREFBMkQ7SUFDN0QsQ0FBQzs7O1lBM0JGLFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFFLGlCQUFpQjthQUM1Qjs7OztZQUxRLFNBQVM7OztxQkFRZixLQUFLLFNBQUMsZUFBZTt5QkFDckIsS0FBSztzQkFLSCxZQUFZLFNBQUMsT0FBTzs7OztJQU52Qix3Q0FBb0M7O0lBQ3BDLDRDQUF5Qjs7Ozs7SUFHdkIsd0NBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25Jbml0LCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiwgSG9zdExpc3RlbmVyLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJQ29uZmlybURpYWxvZ0RhdGEsIENvbmZpcm1EaWFsb2dDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2NvbmZpcm0tZGlhbG9nL2NvbmZpcm0tZGlhbG9nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ1tjb25maXJtQWN0aW9uXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbmZpcm1BY3Rpb25EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoJ2NvbmZpcm1BY3Rpb24nKSBhY3Rpb246IGFueTtcclxuICBASW5wdXQoKSBwYXJhbWV0ZXJzOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBkaWFsb2c6IE1hdERpYWxvZykgeyB9XHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcignY2xpY2snKSBvbkNsaWNrKGV2ZW50KSB7XHJcbiAgICAgIGNvbnN0IGNvbmZpcm1EaWFsb2dEYXRhOiBJQ29uZmlybURpYWxvZ0RhdGEgPSB7XHJcbiAgICAgICAgdGl0bGU6ICdDb25maXJtIHB1Ymxpc2ggdGVuZGVyJyxcclxuICAgICAgICB0ZXh0OiAnVGhpcyBhY3Rpb24gaXMgaXJyZXZlcnRpYmxlLCBhcmUgeW91IHN1cmU/JyxcclxuICAgICAgICB0cmFuc2xhdGVkVGV4dDogdW5kZWZpbmVkLFxyXG4gICAgICAgIGNvbmZpcm1MYWJlbDogJ0NvbmZpcm0nLFxyXG4gICAgICAgIGNhbmNlbExhYmVsOiAnQ2FuY2VsJyxcclxuICAgICAgICBhY3Rpb246IHRoaXMuYWN0aW9uLFxyXG4gICAgICAgIHBhcmFtZXRlcnM6IHRoaXMucGFyYW1ldGVyc1xyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLmRpYWxvZy5vcGVuKENvbmZpcm1EaWFsb2dDb21wb25lbnQsIHsgcGFuZWxDbGFzczogJ21vZGFsLXNtYWxsJywgZGF0YTogY29uZmlybURpYWxvZ0RhdGEgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIC8vIHRoaXMudmlld0NvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy50ZW1wbGF0ZVJlZik7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=