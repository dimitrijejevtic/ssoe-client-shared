/**
 * @fileoverview added by tsickle
 * Generated from: shared/services/query.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpParams, HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "./api.service";
import * as i2 from "@angular/common/http";
var QueryService = /** @class */ (function () {
    function QueryService(apiService, http) {
        this.apiService = apiService;
        this.http = http;
    }
    /**
     * @param {?} zone
     * @param {?} route
     * @param {?} contract
     * @return {?}
     */
    QueryService.prototype.get = /**
     * @param {?} zone
     * @param {?} route
     * @param {?} contract
     * @return {?}
     */
    function (zone, route, contract) {
        /** @type {?} */
        var params = new HttpParams();
        /** @type {?} */
        var vl = Object.entries(contract);
        for (var i = 0; i < vl.length; i++) {
            /** @type {?} */
            var val = vl[i];
            params = params.append(val[0], val[1]);
        }
        return this.apiService.get(zone, route, params);
    };
    /**
     * @param {?} zone
     * @param {?} path
     * @return {?}
     */
    QueryService.prototype.getBlobDocument = /**
     * @param {?} zone
     * @param {?} path
     * @return {?}
     */
    function (zone, path) {
        return this.http.get(this.apiService.getApiUrl() + "/" + zone + "/" + path, { responseType: 'blob', observe: 'response' });
    };
    QueryService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    QueryService.ctorParameters = function () { return [
        { type: ApiService },
        { type: HttpClient }
    ]; };
    /** @nocollapse */ QueryService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function QueryService_Factory() { return new QueryService(i0.ɵɵinject(i1.ApiService), i0.ɵɵinject(i2.HttpClient)); }, token: QueryService, providedIn: "root" });
    return QueryService;
}());
export { QueryService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    QueryService.prototype.apiService;
    /**
     * @type {?}
     * @private
     */
    QueryService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Nzb2UtY2xpZW50LXNoYXJlZC8iLCJzb3VyY2VzIjpbInNoYXJlZC9zZXJ2aWNlcy9xdWVyeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7QUFHOUQ7SUFLRSxzQkFBb0IsVUFBc0IsRUFBVSxJQUFnQjtRQUFoRCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFJLENBQUM7Ozs7Ozs7SUFFbEUsMEJBQUc7Ozs7OztJQUFWLFVBQVcsSUFBWSxFQUFFLEtBQWEsRUFBRSxRQUF3Qjs7WUFDMUQsTUFBTSxHQUFHLElBQUksVUFBVSxFQUFFOztZQUN2QixFQUFFLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBTSxRQUFRLENBQUM7UUFDeEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O2dCQUM1QixHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNqQixNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDeEM7UUFDRCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Ozs7O0lBRU0sc0NBQWU7Ozs7O0lBQXRCLFVBQXVCLElBQVksRUFBRSxJQUFZO1FBQy9DLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsU0FBSSxJQUFJLFNBQUksSUFBTSxFQUNqRSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7SUFDckQsQ0FBQzs7Z0JBcEJGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBTlEsVUFBVTtnQkFDRSxVQUFVOzs7dUJBRi9CO0NBMEJDLEFBckJELElBcUJDO1NBbEJZLFlBQVk7Ozs7OztJQUVYLGtDQUE4Qjs7Ozs7SUFBRSw0QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuL2FwaS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSHR0cFBhcmFtcywgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSVF1ZXJ5Q29udHJhY3QgfSBmcm9tICcuLi9pbnRlcmZhY2VzL0lRdWVyeUNvbnRyYWN0JztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFF1ZXJ5U2VydmljZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpU2VydmljZTogQXBpU2VydmljZSwgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cclxuXHJcbiAgcHVibGljIGdldCh6b25lOiBzdHJpbmcsIHJvdXRlOiBzdHJpbmcsIGNvbnRyYWN0OiBJUXVlcnlDb250cmFjdCkge1xyXG4gICAgbGV0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCk7XHJcbiAgICBjb25zdCB2bCA9IE9iamVjdC5lbnRyaWVzPGFueT4oY29udHJhY3QpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2bC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCB2YWwgPSB2bFtpXTtcclxuICAgICAgcGFyYW1zID0gcGFyYW1zLmFwcGVuZCh2YWxbMF0sIHZhbFsxXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5hcGlTZXJ2aWNlLmdldCh6b25lLCByb3V0ZSwgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRCbG9iRG9jdW1lbnQoem9uZTogc3RyaW5nLCBwYXRoOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMuYXBpU2VydmljZS5nZXRBcGlVcmwoKX0vJHt6b25lfS8ke3BhdGh9YFxyXG4gICAgICAsIHsgcmVzcG9uc2VUeXBlOiAnYmxvYicsIG9ic2VydmU6ICdyZXNwb25zZScgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==