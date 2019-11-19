/**
 * @fileoverview added by tsickle
 * Generated from: shared/services/actions-ribbon.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class ActionsRibbonService {
    constructor() {
        this.changeSubject = new Subject();
    }
    /**
     * @return {?}
     */
    change() {
        this.changeSubject.next();
    }
    /**
     * @return {?}
     */
    clear() {
        this.infoTemplate = undefined;
        this.actionsTemplate = undefined;
        this.spacerTemplate = undefined;
        this.actionsContextTemplate = undefined;
        this.change();
    }
}
ActionsRibbonService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ActionsRibbonService.ctorParameters = () => [];
/** @nocollapse */ ActionsRibbonService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ActionsRibbonService_Factory() { return new ActionsRibbonService(); }, token: ActionsRibbonService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy1yaWJib24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Nzb2UtY2xpZW50LXNoYXJlZC8iLCJzb3VyY2VzIjpbInNoYXJlZC9zZXJ2aWNlcy9hY3Rpb25zLXJpYmJvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBZSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUsvQixNQUFNLE9BQU8sb0JBQW9CO0lBUS9CO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO0lBQ3JDLENBQUM7Ozs7SUFFRCxNQUFNO1FBQ0osSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO1FBQzlCLElBQUksQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxTQUFTLENBQUM7UUFDeEMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7OztZQXpCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7Ozs7SUFHQyw0Q0FBK0I7O0lBQy9CLCtDQUFrQzs7SUFDbEMsOENBQWlDOztJQUNqQyxzREFBeUM7O0lBRXpDLDZDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEFjdGlvbnNSaWJib25TZXJ2aWNlIHtcclxuXHJcbiAgaW5mb1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIGFjdGlvbnNUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuICBzcGFjZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuICBhY3Rpb25zQ29udGV4dFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBjaGFuZ2VTdWJqZWN0OiBTdWJqZWN0PGFueT47XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmNoYW5nZVN1YmplY3QgPSBuZXcgU3ViamVjdCgpO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlKCkge1xyXG4gICAgdGhpcy5jaGFuZ2VTdWJqZWN0Lm5leHQoKTtcclxuICB9XHJcblxyXG4gIGNsZWFyKCkge1xyXG4gICAgdGhpcy5pbmZvVGVtcGxhdGUgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLmFjdGlvbnNUZW1wbGF0ZSA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMuc3BhY2VyVGVtcGxhdGUgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLmFjdGlvbnNDb250ZXh0VGVtcGxhdGUgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLmNoYW5nZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=