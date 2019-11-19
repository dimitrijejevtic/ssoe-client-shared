/**
 * @fileoverview added by tsickle
 * Generated from: shared/services/command.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { TranslationService } from './translation.service';
import * as i0 from "@angular/core";
import * as i1 from "./api.service";
import * as i2 from "./translation.service";
var CommandService = /** @class */ (function () {
    function CommandService(apiService, translateService) {
        this.apiService = apiService;
        this.translateService = translateService;
        this.locationCache = {};
    }
    // TODO: write calling query method using ICommandContract
    // TODO: write calling query method using ICommandContract
    /**
     * @param {?} zone
     * @param {?} route
     * @param {?} contract
     * @return {?}
     */
    CommandService.prototype.post = 
    // TODO: write calling query method using ICommandContract
    /**
     * @param {?} zone
     * @param {?} route
     * @param {?} contract
     * @return {?}
     */
    function (zone, route, contract) {
        return this.apiService.post(zone, route, undefined, contract);
    };
    CommandService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    CommandService.ctorParameters = function () { return [
        { type: ApiService },
        { type: TranslationService }
    ]; };
    /** @nocollapse */ CommandService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CommandService_Factory() { return new CommandService(i0.ɵɵinject(i1.ApiService), i0.ɵɵinject(i2.TranslationService)); }, token: CommandService, providedIn: "root" });
    return CommandService;
}());
export { CommandService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CommandService.prototype.locationCache;
    /**
     * @type {?}
     * @private
     */
    CommandService.prototype.apiService;
    /**
     * @type {?}
     * @private
     */
    CommandService.prototype.translateService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3NvZS1jbGllbnQtc2hhcmVkLyIsInNvdXJjZXMiOlsic2hhcmVkL3NlcnZpY2VzL2NvbW1hbmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7OztBQUUzRDtJQUtFLHdCQUFvQixVQUFzQixFQUFVLGdCQUFvQztRQUFwRSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFvQjtRQUVoRixrQkFBYSxHQUEwQixFQUFFLENBQUM7SUFGMEMsQ0FBQztJQUc3RiwwREFBMEQ7Ozs7Ozs7O0lBRW5ELDZCQUFJOzs7Ozs7OztJQUFYLFVBQVksSUFBWSxFQUFFLEtBQWEsRUFBRSxRQUEwQjtRQUNqRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7O2dCQVpGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBTlEsVUFBVTtnQkFFVixrQkFBa0I7Ozt5QkFIM0I7Q0FtQkMsQUFkRCxJQWNDO1NBWFksY0FBYzs7Ozs7O0lBSXpCLHVDQUFrRDs7Ozs7SUFGdEMsb0NBQThCOzs7OztJQUFFLDBDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4vYXBpLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBJQ29tbWFuZENvbnRyYWN0IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9JQ29tbWFuZENvbnRyYWN0JztcclxuaW1wb3J0IHsgVHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi90cmFuc2xhdGlvbi5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbW1hbmRTZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGlTZXJ2aWNlOiBBcGlTZXJ2aWNlLCBwcml2YXRlIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0aW9uU2VydmljZSkgeyB9XHJcblxyXG4gIHByaXZhdGUgbG9jYXRpb25DYWNoZTogeyBbaWQ6IHN0cmluZ106IGFueSB9ID0ge307XHJcbiAgLy8gVE9ETzogd3JpdGUgY2FsbGluZyBxdWVyeSBtZXRob2QgdXNpbmcgSUNvbW1hbmRDb250cmFjdFxyXG5cclxuICBwdWJsaWMgcG9zdCh6b25lOiBzdHJpbmcsIHJvdXRlOiBzdHJpbmcsIGNvbnRyYWN0OiBJQ29tbWFuZENvbnRyYWN0KSB7XHJcbiAgICByZXR1cm4gdGhpcy5hcGlTZXJ2aWNlLnBvc3Qoem9uZSwgcm91dGUsIHVuZGVmaW5lZCwgY29udHJhY3QpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19