/**
 * @fileoverview added by tsickle
 * Generated from: shared/services/actions-ribbon.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
var ActionsRibbonService = /** @class */ (function () {
    function ActionsRibbonService() {
        this.changeSubject = new Subject();
    }
    /**
     * @return {?}
     */
    ActionsRibbonService.prototype.change = /**
     * @return {?}
     */
    function () {
        this.changeSubject.next();
    };
    /**
     * @return {?}
     */
    ActionsRibbonService.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.infoTemplate = undefined;
        this.actionsTemplate = undefined;
        this.spacerTemplate = undefined;
        this.actionsContextTemplate = undefined;
        this.change();
    };
    ActionsRibbonService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ActionsRibbonService.ctorParameters = function () { return []; };
    /** @nocollapse */ ActionsRibbonService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ActionsRibbonService_Factory() { return new ActionsRibbonService(); }, token: ActionsRibbonService, providedIn: "root" });
    return ActionsRibbonService;
}());
export { ActionsRibbonService };
if (false) {
    /** @type {?} */
    ActionsRibbonService.prototype.infoTemplate;
    /** @type {?} */
    ActionsRibbonService.prototype.actionsTemplate;
    /** @type {?} */
    ActionsRibbonService.prototype.spacerTemplate;
    /** @type {?} */
    ActionsRibbonService.prototype.actionsContextTemplate;
    /** @type {?} */
    ActionsRibbonService.prototype.changeSubject;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy1yaWJib24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Nzb2UtY2xpZW50LXNoYXJlZC8iLCJzb3VyY2VzIjpbInNoYXJlZC9zZXJ2aWNlcy9hY3Rpb25zLXJpYmJvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBZSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUUvQjtJQVdFO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO0lBQ3JDLENBQUM7Ozs7SUFFRCxxQ0FBTTs7O0lBQU47UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCxvQ0FBSzs7O0lBQUw7UUFDRSxJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztRQUM5QixJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztRQUNqQyxJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztRQUNoQyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsU0FBUyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDOztnQkF6QkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7K0JBTEQ7Q0E2QkMsQUExQkQsSUEwQkM7U0F2Qlksb0JBQW9COzs7SUFFL0IsNENBQStCOztJQUMvQiwrQ0FBa0M7O0lBQ2xDLDhDQUFpQzs7SUFDakMsc0RBQXlDOztJQUV6Qyw2Q0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBY3Rpb25zUmliYm9uU2VydmljZSB7XHJcblxyXG4gIGluZm9UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuICBhY3Rpb25zVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgc3BhY2VyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgYWN0aW9uc0NvbnRleHRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgY2hhbmdlU3ViamVjdDogU3ViamVjdDxhbnk+O1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5jaGFuZ2VTdWJqZWN0ID0gbmV3IFN1YmplY3QoKTtcclxuICB9XHJcblxyXG4gIGNoYW5nZSgpIHtcclxuICAgIHRoaXMuY2hhbmdlU3ViamVjdC5uZXh0KCk7XHJcbiAgfVxyXG5cclxuICBjbGVhcigpIHtcclxuICAgIHRoaXMuaW5mb1RlbXBsYXRlID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5hY3Rpb25zVGVtcGxhdGUgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLnNwYWNlclRlbXBsYXRlID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5hY3Rpb25zQ29udGV4dFRlbXBsYXRlID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5jaGFuZ2UoKTtcclxuICB9XHJcbn1cclxuIl19