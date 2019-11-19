/**
 * @fileoverview added by tsickle
 * Generated from: shared/components/error-display/error-display.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { ErrorMessagesService } from '../../services/error-messages.service';
import { Utils } from '../../extensions/utils';
import { MatDialog } from '@angular/material';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
export class ErrorDisplayComponent {
    /**
     * @param {?} errorService
     * @param {?} dialog
     */
    constructor(errorService, dialog) {
        this.errorService = errorService;
        this.dialog = dialog;
        this.showDialog = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!Utils.isNullEmptyOrUndefined(this.source)) {
            this.sources = [];
            this.source = this.source.toLowerCase();
            this.sources = this.source.split(',');
        }
        // tslint:disable-next-line: max-line-length
        // if (Utils.isNullEmptyOrUndefined(this.errorService.errorMessagesSubject.observers) || this.errorService.errorMessagesSubject.observers.length < 1)
        this.subscriptionSubscriber = this.errorService.errorMessagesSubject.subscribe((/**
         * @param {?} x
         * @return {?}
         */
        x => {
            if (this.sources !== undefined) {
                /** @type {?} */
                const myErrors = this.sources.find((/**
                 * @param {?} y
                 * @return {?}
                 */
                y => y === x.source));
                if (myErrors !== undefined)
                    if (x.isCleanup === true)
                        this.errors = [];
                    else 
                    // this.errors = x.errors;
                    if (this.showDialog && x.errors !== undefined && x.errors.length > 0)
                        this.dialog.open(ErrorDialogComponent, {
                            data: { errors: x.errors }, panelClass: 'dialog-error'
                        });
                    else
                        this.errors = x.errors;
            }
            else
                this.errors = x.errors;
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (!this.subscriptionSubscriber.closed)
            this.subscriptionSubscriber.unsubscribe();
    }
}
ErrorDisplayComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-error-display',
                template: "<div>\r\n  <div fxLayout=\"column\">\r\n    <span fxFlex class=\"mat-h4 m-t-15 mat-error\" *ngFor=\"let error of errors\">\r\n      {{error}}\r\n    </span>\r\n  </div>\r\n</div>\r\n",
                styles: [""]
            }] }
];
/** @nocollapse */
ErrorDisplayComponent.ctorParameters = () => [
    { type: ErrorMessagesService },
    { type: MatDialog }
];
ErrorDisplayComponent.propDecorators = {
    errors: [{ type: Input }],
    source: [{ type: Input }],
    showDialog: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ErrorDisplayComponent.prototype.errors;
    /** @type {?} */
    ErrorDisplayComponent.prototype.source;
    /** @type {?} */
    ErrorDisplayComponent.prototype.showDialog;
    /** @type {?} */
    ErrorDisplayComponent.prototype.sources;
    /** @type {?} */
    ErrorDisplayComponent.prototype.subscription;
    /** @type {?} */
    ErrorDisplayComponent.prototype.subscriptionSubscriber;
    /**
     * @type {?}
     * @private
     */
    ErrorDisplayComponent.prototype.errorService;
    /** @type {?} */
    ErrorDisplayComponent.prototype.dialog;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItZGlzcGxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zc29lLWNsaWVudC1zaGFyZWQvIiwic291cmNlcyI6WyJzaGFyZWQvY29tcG9uZW50cy9lcnJvci1kaXNwbGF5L2Vycm9yLWRpc3BsYXkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFFcEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDN0UsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQVE3RSxNQUFNLE9BQU8scUJBQXFCOzs7OztJQVVoQyxZQUFvQixZQUFrQyxFQUFTLE1BQWlCO1FBQTVELGlCQUFZLEdBQVosWUFBWSxDQUFzQjtRQUFTLFdBQU0sR0FBTixNQUFNLENBQVc7UUFMdkUsZUFBVSxHQUFHLEtBQUssQ0FBQztJQUt3RCxDQUFDOzs7O0lBRXJGLFFBQVE7UUFDTixJQUFJLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUM5QyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDeEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN2QztRQUVELDRDQUE0QztRQUM1QyxxSkFBcUo7UUFDckosSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsb0JBQW9CLENBQUMsU0FBUzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFO1lBQy9FLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQUU7O3NCQUN4QixRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJOzs7O2dCQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUM7Z0JBQ3ZELElBQUksUUFBUSxLQUFLLFNBQVM7b0JBQ3hCLElBQUksQ0FBQyxDQUFDLFNBQVMsS0FBSyxJQUFJO3dCQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQzs7b0JBRWpCLDBCQUEwQjtvQkFDMUIsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssU0FBUyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUM7d0JBQ2xFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFOzRCQUNyQyxJQUFJLEVBQUUsRUFBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBQyxFQUFFLFVBQVUsRUFBRSxjQUFjO3lCQUNyRCxDQUFDLENBQUM7O3dCQUNBLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQzthQUNqQzs7Z0JBQ0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQzNCLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7OztJQUNELFdBQVc7UUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE1BQU07WUFDckMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzlDLENBQUM7OztZQTlDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0Isa01BQTZDOzthQUU5Qzs7OztZQVZRLG9CQUFvQjtZQUVwQixTQUFTOzs7cUJBWWYsS0FBSztxQkFDTCxLQUFLO3lCQUNMLEtBQUs7Ozs7SUFGTix1Q0FBMEI7O0lBQzFCLHVDQUF3Qjs7SUFDeEIsMkNBQTRCOztJQUU1Qix3Q0FBa0I7O0lBQ2xCLDZDQUFvQzs7SUFDcEMsdURBQXFDOzs7OztJQUN6Qiw2Q0FBMEM7O0lBQUUsdUNBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEVycm9yTWVzc2FnZXNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZXJyb3ItbWVzc2FnZXMuc2VydmljZSc7XHJcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi4vLi4vZXh0ZW5zaW9ucy91dGlscyc7XHJcbmltcG9ydCB7IE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHsgRXJyb3JEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2Vycm9yLWRpYWxvZy9lcnJvci1kaWFsb2cuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRXJyb3JNZXNzYWdlIH0gZnJvbSAnLi4vLi4vcG9jby9lcnJvck1lc3NhZ2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtZXJyb3ItZGlzcGxheScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Vycm9yLWRpc3BsYXkuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2Vycm9yLWRpc3BsYXkuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFcnJvckRpc3BsYXlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblxyXG5cclxuICBASW5wdXQoKSBlcnJvcnM6IHN0cmluZ1tdO1xyXG4gIEBJbnB1dCgpIHNvdXJjZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHNob3dEaWFsb2cgPSBmYWxzZTtcclxuXHJcbiAgc291cmNlczogc3RyaW5nW107XHJcbiAgc3Vic2NyaXB0aW9uOiBTdWJqZWN0PEVycm9yTWVzc2FnZT47XHJcbiAgc3Vic2NyaXB0aW9uU3Vic2NyaWJlcjogU3Vic2NyaXB0aW9uO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZXJyb3JTZXJ2aWNlOiBFcnJvck1lc3NhZ2VzU2VydmljZSwgcHVibGljIGRpYWxvZzogTWF0RGlhbG9nKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAoIVV0aWxzLmlzTnVsbEVtcHR5T3JVbmRlZmluZWQodGhpcy5zb3VyY2UpKSB7XHJcbiAgICAgIHRoaXMuc291cmNlcyA9IFtdO1xyXG4gICAgICB0aGlzLnNvdXJjZSA9IHRoaXMuc291cmNlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIHRoaXMuc291cmNlcyA9IHRoaXMuc291cmNlLnNwbGl0KCcsJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtYXgtbGluZS1sZW5ndGhcclxuICAgIC8vIGlmIChVdGlscy5pc051bGxFbXB0eU9yVW5kZWZpbmVkKHRoaXMuZXJyb3JTZXJ2aWNlLmVycm9yTWVzc2FnZXNTdWJqZWN0Lm9ic2VydmVycykgfHwgdGhpcy5lcnJvclNlcnZpY2UuZXJyb3JNZXNzYWdlc1N1YmplY3Qub2JzZXJ2ZXJzLmxlbmd0aCA8IDEpXHJcbiAgICB0aGlzLnN1YnNjcmlwdGlvblN1YnNjcmliZXIgPSB0aGlzLmVycm9yU2VydmljZS5lcnJvck1lc3NhZ2VzU3ViamVjdC5zdWJzY3JpYmUoeCA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuc291cmNlcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICBjb25zdCBteUVycm9ycyA9IHRoaXMuc291cmNlcy5maW5kKHkgPT4geSA9PT0geC5zb3VyY2UpO1xyXG4gICAgICAgICAgaWYgKG15RXJyb3JzICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIGlmICh4LmlzQ2xlYW51cCA9PT0gdHJ1ZSlcclxuICAgICAgICAgICAgICB0aGlzLmVycm9ycyA9IFtdO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgLy8gdGhpcy5lcnJvcnMgPSB4LmVycm9ycztcclxuICAgICAgICAgICAgICBpZiAodGhpcy5zaG93RGlhbG9nICYmIHguZXJyb3JzICE9PSB1bmRlZmluZWQgJiYgeC5lcnJvcnMubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nLm9wZW4oRXJyb3JEaWFsb2dDb21wb25lbnQsIHtcclxuICAgICAgICAgICAgICAgICAgZGF0YToge2Vycm9yczogeC5lcnJvcnN9LCBwYW5lbENsYXNzOiAnZGlhbG9nLWVycm9yJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgZWxzZSB0aGlzLmVycm9ycyA9IHguZXJyb3JzO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgdGhpcy5lcnJvcnMgPSB4LmVycm9ycztcclxuICAgICAgfSk7XHJcbiAgfVxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLnN1YnNjcmlwdGlvblN1YnNjcmliZXIuY2xvc2VkKVxyXG4gICAgICB0aGlzLnN1YnNjcmlwdGlvblN1YnNjcmliZXIudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcbn1cclxuIl19