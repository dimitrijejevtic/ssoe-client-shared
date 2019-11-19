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
var ErrorDisplayComponent = /** @class */ (function () {
    function ErrorDisplayComponent(errorService, dialog) {
        this.errorService = errorService;
        this.dialog = dialog;
        this.showDialog = false;
    }
    /**
     * @return {?}
     */
    ErrorDisplayComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
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
        function (x) {
            if (_this.sources !== undefined) {
                /** @type {?} */
                var myErrors = _this.sources.find((/**
                 * @param {?} y
                 * @return {?}
                 */
                function (y) { return y === x.source; }));
                if (myErrors !== undefined)
                    if (x.isCleanup === true)
                        _this.errors = [];
                    else 
                    // this.errors = x.errors;
                    if (_this.showDialog && x.errors !== undefined && x.errors.length > 0)
                        _this.dialog.open(ErrorDialogComponent, {
                            data: { errors: x.errors }, panelClass: 'dialog-error'
                        });
                    else
                        _this.errors = x.errors;
            }
            else
                _this.errors = x.errors;
        }));
    };
    /**
     * @return {?}
     */
    ErrorDisplayComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (!this.subscriptionSubscriber.closed)
            this.subscriptionSubscriber.unsubscribe();
    };
    ErrorDisplayComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-error-display',
                    template: "<div>\r\n  <div fxLayout=\"column\">\r\n    <span fxFlex class=\"mat-h4 m-t-15 mat-error\" *ngFor=\"let error of errors\">\r\n      {{error}}\r\n    </span>\r\n  </div>\r\n</div>\r\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ErrorDisplayComponent.ctorParameters = function () { return [
        { type: ErrorMessagesService },
        { type: MatDialog }
    ]; };
    ErrorDisplayComponent.propDecorators = {
        errors: [{ type: Input }],
        source: [{ type: Input }],
        showDialog: [{ type: Input }]
    };
    return ErrorDisplayComponent;
}());
export { ErrorDisplayComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItZGlzcGxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zc29lLWNsaWVudC1zaGFyZWQvIiwic291cmNlcyI6WyJzaGFyZWQvY29tcG9uZW50cy9lcnJvci1kaXNwbGF5L2Vycm9yLWRpc3BsYXkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFFcEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDN0UsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUc3RTtJQWVFLCtCQUFvQixZQUFrQyxFQUFTLE1BQWlCO1FBQTVELGlCQUFZLEdBQVosWUFBWSxDQUFzQjtRQUFTLFdBQU0sR0FBTixNQUFNLENBQVc7UUFMdkUsZUFBVSxHQUFHLEtBQUssQ0FBQztJQUt3RCxDQUFDOzs7O0lBRXJGLHdDQUFROzs7SUFBUjtRQUFBLGlCQXlCQztRQXhCQyxJQUFJLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUM5QyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDeEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN2QztRQUVELDRDQUE0QztRQUM1QyxxSkFBcUo7UUFDckosSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsb0JBQW9CLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsQ0FBQztZQUM1RSxJQUFJLEtBQUksQ0FBQyxPQUFPLEtBQUssU0FBUyxFQUFFOztvQkFDeEIsUUFBUSxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSTs7OztnQkFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFkLENBQWMsRUFBQztnQkFDdkQsSUFBSSxRQUFRLEtBQUssU0FBUztvQkFDeEIsSUFBSSxDQUFDLENBQUMsU0FBUyxLQUFLLElBQUk7d0JBQ3RCLEtBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDOztvQkFFakIsMEJBQTBCO29CQUMxQixJQUFJLEtBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxTQUFTLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQzt3QkFDbEUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUU7NEJBQ3JDLElBQUksRUFBRSxFQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFDLEVBQUUsVUFBVSxFQUFFLGNBQWM7eUJBQ3JELENBQUMsQ0FBQzs7d0JBQ0EsS0FBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO2FBQ2pDOztnQkFDQyxLQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDM0IsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOzs7O0lBQ0QsMkNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNO1lBQ3JDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM5QyxDQUFDOztnQkE5Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLGtNQUE2Qzs7aUJBRTlDOzs7O2dCQVZRLG9CQUFvQjtnQkFFcEIsU0FBUzs7O3lCQVlmLEtBQUs7eUJBQ0wsS0FBSzs2QkFDTCxLQUFLOztJQXFDUiw0QkFBQztDQUFBLEFBL0NELElBK0NDO1NBMUNZLHFCQUFxQjs7O0lBR2hDLHVDQUEwQjs7SUFDMUIsdUNBQXdCOztJQUN4QiwyQ0FBNEI7O0lBRTVCLHdDQUFrQjs7SUFDbEIsNkNBQW9DOztJQUNwQyx1REFBcUM7Ozs7O0lBQ3pCLDZDQUEwQzs7SUFBRSx1Q0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgRXJyb3JNZXNzYWdlc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9lcnJvci1tZXNzYWdlcy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVXRpbHMgfSBmcm9tICcuLi8uLi9leHRlbnNpb25zL3V0aWxzJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBFcnJvckRpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vZXJyb3ItZGlhbG9nL2Vycm9yLWRpYWxvZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBFcnJvck1lc3NhZ2UgfSBmcm9tICcuLi8uLi9wb2NvL2Vycm9yTWVzc2FnZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1lcnJvci1kaXNwbGF5JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZXJyb3ItZGlzcGxheS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZXJyb3ItZGlzcGxheS5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEVycm9yRGlzcGxheUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHJcblxyXG4gIEBJbnB1dCgpIGVycm9yczogc3RyaW5nW107XHJcbiAgQElucHV0KCkgc291cmNlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgc2hvd0RpYWxvZyA9IGZhbHNlO1xyXG5cclxuICBzb3VyY2VzOiBzdHJpbmdbXTtcclxuICBzdWJzY3JpcHRpb246IFN1YmplY3Q8RXJyb3JNZXNzYWdlPjtcclxuICBzdWJzY3JpcHRpb25TdWJzY3JpYmVyOiBTdWJzY3JpcHRpb247XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlcnJvclNlcnZpY2U6IEVycm9yTWVzc2FnZXNTZXJ2aWNlLCBwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2cpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmICghVXRpbHMuaXNOdWxsRW1wdHlPclVuZGVmaW5lZCh0aGlzLnNvdXJjZSkpIHtcclxuICAgICAgdGhpcy5zb3VyY2VzID0gW107XHJcbiAgICAgIHRoaXMuc291cmNlID0gdGhpcy5zb3VyY2UudG9Mb3dlckNhc2UoKTtcclxuICAgICAgdGhpcy5zb3VyY2VzID0gdGhpcy5zb3VyY2Uuc3BsaXQoJywnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1heC1saW5lLWxlbmd0aFxyXG4gICAgLy8gaWYgKFV0aWxzLmlzTnVsbEVtcHR5T3JVbmRlZmluZWQodGhpcy5lcnJvclNlcnZpY2UuZXJyb3JNZXNzYWdlc1N1YmplY3Qub2JzZXJ2ZXJzKSB8fCB0aGlzLmVycm9yU2VydmljZS5lcnJvck1lc3NhZ2VzU3ViamVjdC5vYnNlcnZlcnMubGVuZ3RoIDwgMSlcclxuICAgIHRoaXMuc3Vic2NyaXB0aW9uU3Vic2NyaWJlciA9IHRoaXMuZXJyb3JTZXJ2aWNlLmVycm9yTWVzc2FnZXNTdWJqZWN0LnN1YnNjcmliZSh4ID0+IHtcclxuICAgICAgICBpZiAodGhpcy5zb3VyY2VzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIGNvbnN0IG15RXJyb3JzID0gdGhpcy5zb3VyY2VzLmZpbmQoeSA9PiB5ID09PSB4LnNvdXJjZSk7XHJcbiAgICAgICAgICBpZiAobXlFcnJvcnMgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgaWYgKHguaXNDbGVhbnVwID09PSB0cnVlKVxyXG4gICAgICAgICAgICAgIHRoaXMuZXJyb3JzID0gW107XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAvLyB0aGlzLmVycm9ycyA9IHguZXJyb3JzO1xyXG4gICAgICAgICAgICAgIGlmICh0aGlzLnNob3dEaWFsb2cgJiYgeC5lcnJvcnMgIT09IHVuZGVmaW5lZCAmJiB4LmVycm9ycy5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5kaWFsb2cub3BlbihFcnJvckRpYWxvZ0NvbXBvbmVudCwge1xyXG4gICAgICAgICAgICAgICAgICBkYXRhOiB7ZXJyb3JzOiB4LmVycm9yc30sIHBhbmVsQ2xhc3M6ICdkaWFsb2ctZXJyb3InXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICBlbHNlIHRoaXMuZXJyb3JzID0geC5lcnJvcnM7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICB0aGlzLmVycm9ycyA9IHguZXJyb3JzO1xyXG4gICAgICB9KTtcclxuICB9XHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuc3Vic2NyaXB0aW9uU3Vic2NyaWJlci5jbG9zZWQpXHJcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uU3Vic2NyaWJlci51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=