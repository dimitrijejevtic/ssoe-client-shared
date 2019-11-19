/**
 * @fileoverview added by tsickle
 * Generated from: shared/services/api.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ConfigService } from './config.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./config.service";
var ApiService = /** @class */ (function () {
    function ApiService(http, configService) {
        this.http = http;
        this.configService = configService;
    }
    /**
     * @private
     * @param {?} error
     * @return {?}
     */
    ApiService.prototype.formatErrors = /**
     * @private
     * @param {?} error
     * @return {?}
     */
    function (error) {
        console.error(error);
        return throwError(error.error);
    };
    /**
     * @param {?} zone
     * @param {?} path
     * @param {?=} params
     * @return {?}
     */
    ApiService.prototype.get = /**
     * @param {?} zone
     * @param {?} path
     * @param {?=} params
     * @return {?}
     */
    function (zone, path, params) {
        if (params === void 0) { params = new HttpParams(); }
        return this.http.get(this.getApiUrl() + "/" + zone + "/" + path, { params: params })
            .pipe(catchError(this.formatErrors));
    };
    /**
     * @param {?} zone
     * @param {?} path
     * @param {?=} body
     * @return {?}
     */
    ApiService.prototype.put = /**
     * @param {?} zone
     * @param {?} path
     * @param {?=} body
     * @return {?}
     */
    function (zone, path, body) {
        if (body === void 0) { body = {}; }
        return this.http.put("" + this.getApiUrl() + zone + "/" + path, JSON.stringify(body)).pipe(catchError(this.formatErrors));
    };
    /**
     * @param {?} zone
     * @param {?} path
     * @param {?=} id
     * @param {?=} body
     * @param {?=} withCredentials
     * @return {?}
     */
    ApiService.prototype.post = /**
     * @param {?} zone
     * @param {?} path
     * @param {?=} id
     * @param {?=} body
     * @param {?=} withCredentials
     * @return {?}
     */
    function (zone, path, id, body, withCredentials) {
        if (body === void 0) { body = {}; }
        if (withCredentials === void 0) { withCredentials = false; }
        if (id !== undefined)
            id = '/' + id;
        else
            id = '';
        /** @type {?} */
        var withCr;
        if (withCredentials === true)
            withCr = { withCredentials: true };
        return this.http.post(this.getApiUrl() + "/" + zone + "/" + path + id, JSON.stringify(body), withCr).pipe(catchError(this.formatErrors));
    };
    /**
     * @param {?} zone
     * @param {?} path
     * @param {?=} id
     * @param {?=} body
     * @param {?=} withCredentials
     * @param {?=} reportProgress
     * @return {?}
     */
    ApiService.prototype.postFile = /**
     * @param {?} zone
     * @param {?} path
     * @param {?=} id
     * @param {?=} body
     * @param {?=} withCredentials
     * @param {?=} reportProgress
     * @return {?}
     */
    function (zone, path, id, body, withCredentials, reportProgress) {
        if (body === void 0) { body = {}; }
        if (withCredentials === void 0) { withCredentials = false; }
        if (id !== undefined)
            id = '/' + id;
        else
            id = '';
        /** @type {?} */
        var withCr;
        if (withCredentials === true)
            withCr = { withCredentials: true };
        if (reportProgress === undefined)
            reportProgress == false;
        return this.http.post(this.getApiUrl() + "/" + zone + "/" + path + id, body, { withCredentials: withCr, reportProgress: reportProgress, observe: 'events' }).pipe(catchError(this.formatErrors));
    };
    /**
     * @param {?} zone
     * @param {?} path
     * @return {?}
     */
    ApiService.prototype.delete = /**
     * @param {?} zone
     * @param {?} path
     * @return {?}
     */
    function (zone, path) {
        return this.http.delete(this.getApiUrl() + "/" + zone + "/" + path).pipe(catchError(this.formatErrors));
    };
    /**
     * @param {?} zone
     * @param {?} path
     * @param {?} file
     * @param {?=} typeName
     * @param {?=} parentObjectId
     * @return {?}
     */
    ApiService.prototype.uploadFile = /**
     * @param {?} zone
     * @param {?} path
     * @param {?} file
     * @param {?=} typeName
     * @param {?=} parentObjectId
     * @return {?}
     */
    function (zone, path, file, typeName, parentObjectId) {
        /** @type {?} */
        var formData = new FormData();
        formData.append('file', file, file.name);
        return this.http.post(this.configService.getConfig().apiUrl + "/" + zone + "/" + path + "/" + typeName + "/" + parentObjectId, formData);
    };
    /**
     * @return {?}
     */
    ApiService.prototype.getApiUrl = /**
     * @return {?}
     */
    function () {
        return this.configService.getConfig().apiUrl;
    };
    ApiService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ApiService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: ConfigService }
    ]; };
    /** @nocollapse */ ApiService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ApiService_Factory() { return new ApiService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigService)); }, token: ApiService, providedIn: "root" });
    return ApiService;
}());
export { ApiService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ApiService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    ApiService.prototype.configService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zc29lLWNsaWVudC1zaGFyZWQvIiwic291cmNlcyI6WyJzaGFyZWQvc2VydmljZXMvYXBpLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFVBQVUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7O0FBRWpEO0lBS0Usb0JBQW9CLElBQWdCLEVBQVUsYUFBNEI7UUFBdEQsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO0lBQUksQ0FBQzs7Ozs7O0lBRXZFLGlDQUFZOzs7OztJQUFwQixVQUFxQixLQUFVO1FBQzdCLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckIsT0FBTyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Ozs7Ozs7SUFDRCx3QkFBRzs7Ozs7O0lBQUgsVUFBSSxJQUFZLEVBQUUsSUFBWSxFQUFFLE1BQXFDO1FBQXJDLHVCQUFBLEVBQUEsYUFBeUIsVUFBVSxFQUFFO1FBQ25FLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxTQUFJLElBQUksU0FBSSxJQUFNLEVBQ3RELEVBQUUsTUFBTSxRQUFBLEVBQUUsQ0FBQzthQUNaLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDekMsQ0FBQzs7Ozs7OztJQUVELHdCQUFHOzs7Ozs7SUFB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Q0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUMsTUFBTSxTQUFJLElBQUksU0FBSSxJQUFJLFNBQUksUUFBUSxTQUFJLGNBQWdCLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDNUgsQ0FBQzs7OztJQUVNLDhCQUFTOzs7SUFBaEI7UUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUMsTUFBTSxDQUFDO0lBQy9DLENBQUM7O2dCQXhFRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVBRLFVBQVU7Z0JBR1YsYUFBYTs7O3FCQUp0QjtDQStFQyxBQXpFRCxJQXlFQztTQXRFWSxVQUFVOzs7Ozs7SUFFVCwwQkFBd0I7Ozs7O0lBQUUsbUNBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyB0aHJvd0Vycm9yLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwaVNlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgY29uZmlnU2VydmljZTogQ29uZmlnU2VydmljZSkgeyB9XHJcblxyXG4gIHByaXZhdGUgZm9ybWF0RXJyb3JzKGVycm9yOiBhbnkpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgcmV0dXJuIHRocm93RXJyb3IoZXJyb3IuZXJyb3IpO1xyXG4gIH1cclxuICBnZXQoem9uZTogc3RyaW5nLCBwYXRoOiBzdHJpbmcsIHBhcmFtczogSHR0cFBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCkpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy5nZXRBcGlVcmwoKX0vJHt6b25lfS8ke3BhdGh9YFxyXG4gICAgICAsIHsgcGFyYW1zIH0pXHJcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IodGhpcy5mb3JtYXRFcnJvcnMpKTtcclxuICB9XHJcblxyXG4gIHB1dCh6b25lOiBzdHJpbmcsIHBhdGg6IHN0cmluZywgYm9keTogT2JqZWN0ID0ge30pOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQoXHJcbiAgICAgIGAke3RoaXMuZ2V0QXBpVXJsKCl9JHt6b25lfS8ke3BhdGh9YCxcclxuICAgICAgSlNPTi5zdHJpbmdpZnkoYm9keSlcclxuICAgICkucGlwZShjYXRjaEVycm9yKHRoaXMuZm9ybWF0RXJyb3JzKSk7XHJcbiAgfVxyXG5cclxuICBwb3N0KHpvbmU6IHN0cmluZywgcGF0aDogc3RyaW5nLCBpZD86IHN0cmluZywgYm9keTogT2JqZWN0ID0ge30sIHdpdGhDcmVkZW50aWFscyA9IGZhbHNlKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIGlmIChpZCAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICBpZCA9ICcvJyArIGlkO1xyXG4gICAgZWxzZSBpZCA9ICcnO1xyXG5cclxuICAgIGxldCB3aXRoQ3I7XHJcbiAgICBpZiAod2l0aENyZWRlbnRpYWxzID09PSB0cnVlKVxyXG4gICAgICB3aXRoQ3IgPSB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSB9O1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChcclxuICAgICAgYCR7dGhpcy5nZXRBcGlVcmwoKX0vJHt6b25lfS8ke3BhdGh9JHtpZH1gLFxyXG4gICAgICBKU09OLnN0cmluZ2lmeShib2R5KSwgd2l0aENyXHJcbiAgICApLnBpcGUoY2F0Y2hFcnJvcih0aGlzLmZvcm1hdEVycm9ycykpO1xyXG4gIH1cclxuXHJcbiAgcG9zdEZpbGUoem9uZTogc3RyaW5nLCBwYXRoOiBzdHJpbmcsIGlkPzogc3RyaW5nLCBib2R5OiBPYmplY3QgPSB7fSwgd2l0aENyZWRlbnRpYWxzID0gZmFsc2UsIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbik6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICBpZiAoaWQgIT09IHVuZGVmaW5lZClcclxuICAgICAgaWQgPSAnLycgKyBpZDtcclxuICAgIGVsc2UgaWQgPSAnJztcclxuXHJcbiAgICBsZXQgd2l0aENyO1xyXG4gICAgaWYgKHdpdGhDcmVkZW50aWFscyA9PT0gdHJ1ZSlcclxuICAgICAgd2l0aENyID0geyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfTtcclxuXHJcbiAgICBpZiAocmVwb3J0UHJvZ3Jlc3MgPT09IHVuZGVmaW5lZClcclxuICAgICAgcmVwb3J0UHJvZ3Jlc3MgPT0gZmFsc2U7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFxyXG4gICAgICBgJHt0aGlzLmdldEFwaVVybCgpfS8ke3pvbmV9LyR7cGF0aH0ke2lkfWAsXHJcbiAgICAgIGJvZHksIHsgd2l0aENyZWRlbnRpYWxzIDogd2l0aENyLCByZXBvcnRQcm9ncmVzczogcmVwb3J0UHJvZ3Jlc3MsIG9ic2VydmU6ICdldmVudHMnIH1cclxuICAgICkucGlwZShjYXRjaEVycm9yKHRoaXMuZm9ybWF0RXJyb3JzKSk7XHJcbiAgfVxyXG5cclxuICBkZWxldGUoem9uZTogc3RyaW5nLCBwYXRoOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUoXHJcbiAgICAgIGAke3RoaXMuZ2V0QXBpVXJsKCl9LyR7em9uZX0vJHtwYXRofWBcclxuICAgICkucGlwZShjYXRjaEVycm9yKHRoaXMuZm9ybWF0RXJyb3JzKSk7XHJcbiAgfVxyXG5cclxuICB1cGxvYWRGaWxlKHpvbmU6IHN0cmluZywgcGF0aDogc3RyaW5nLCBmaWxlOiBGaWxlLCB0eXBlTmFtZT86IHN0cmluZywgcGFyZW50T2JqZWN0SWQ/OiBudW1iZXIpIHtcclxuICAgIGNvbnN0IGZvcm1EYXRhOiBGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgZmlsZSwgZmlsZS5uYW1lKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7dGhpcy5jb25maWdTZXJ2aWNlLmdldENvbmZpZygpLmFwaVVybH0vJHt6b25lfS8ke3BhdGh9LyR7dHlwZU5hbWV9LyR7cGFyZW50T2JqZWN0SWR9YCwgZm9ybURhdGEpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldEFwaVVybCgpIHtcclxuICAgIHJldHVybiB0aGlzLmNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnKCkuYXBpVXJsO1xyXG4gIH1cclxufVxyXG4iXX0=