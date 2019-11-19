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
export class ApiService {
    /**
     * @param {?} http
     * @param {?} configService
     */
    constructor(http, configService) {
        this.http = http;
        this.configService = configService;
    }
    /**
     * @private
     * @param {?} error
     * @return {?}
     */
    formatErrors(error) {
        console.error(error);
        return throwError(error.error);
    }
    /**
     * @param {?} zone
     * @param {?} path
     * @param {?=} params
     * @return {?}
     */
    get(zone, path, params = new HttpParams()) {
        return this.http.get(`${this.getApiUrl()}/${zone}/${path}`, { params })
            .pipe(catchError(this.formatErrors));
    }
    /**
     * @param {?} zone
     * @param {?} path
     * @param {?=} body
     * @return {?}
     */
    put(zone, path, body = {}) {
        return this.http.put(`${this.getApiUrl()}${zone}/${path}`, JSON.stringify(body)).pipe(catchError(this.formatErrors));
    }
    /**
     * @param {?} zone
     * @param {?} path
     * @param {?=} id
     * @param {?=} body
     * @param {?=} withCredentials
     * @return {?}
     */
    post(zone, path, id, body = {}, withCredentials = false) {
        if (id !== undefined)
            id = '/' + id;
        else
            id = '';
        /** @type {?} */
        let withCr;
        if (withCredentials === true)
            withCr = { withCredentials: true };
        return this.http.post(`${this.getApiUrl()}/${zone}/${path}${id}`, JSON.stringify(body), withCr).pipe(catchError(this.formatErrors));
    }
    /**
     * @param {?} zone
     * @param {?} path
     * @param {?=} id
     * @param {?=} body
     * @param {?=} withCredentials
     * @param {?=} reportProgress
     * @return {?}
     */
    postFile(zone, path, id, body = {}, withCredentials = false, reportProgress) {
        if (id !== undefined)
            id = '/' + id;
        else
            id = '';
        /** @type {?} */
        let withCr;
        if (withCredentials === true)
            withCr = { withCredentials: true };
        if (reportProgress === undefined)
            reportProgress == false;
        return this.http.post(`${this.getApiUrl()}/${zone}/${path}${id}`, body, { withCredentials: withCr, reportProgress: reportProgress, observe: 'events' }).pipe(catchError(this.formatErrors));
    }
    /**
     * @param {?} zone
     * @param {?} path
     * @return {?}
     */
    delete(zone, path) {
        return this.http.delete(`${this.getApiUrl()}/${zone}/${path}`).pipe(catchError(this.formatErrors));
    }
    /**
     * @param {?} zone
     * @param {?} path
     * @param {?} file
     * @param {?=} typeName
     * @param {?=} parentObjectId
     * @return {?}
     */
    uploadFile(zone, path, file, typeName, parentObjectId) {
        /** @type {?} */
        const formData = new FormData();
        formData.append('file', file, file.name);
        return this.http.post(`${this.configService.getConfig().apiUrl}/${zone}/${path}/${typeName}/${parentObjectId}`, formData);
    }
    /**
     * @return {?}
     */
    getApiUrl() {
        return this.configService.getConfig().apiUrl;
    }
}
ApiService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ApiService.ctorParameters = () => [
    { type: HttpClient },
    { type: ConfigService }
];
/** @nocollapse */ ApiService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ApiService_Factory() { return new ApiService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigService)); }, token: ApiService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zc29lLWNsaWVudC1zaGFyZWQvIiwic291cmNlcyI6WyJzaGFyZWQvc2VydmljZXMvYXBpLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFVBQVUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7O0FBS2pELE1BQU0sT0FBTyxVQUFVOzs7OztJQUVyQixZQUFvQixJQUFnQixFQUFVLGFBQTRCO1FBQXRELFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtJQUFJLENBQUM7Ozs7OztJQUV2RSxZQUFZLENBQUMsS0FBVTtRQUM3QixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7Ozs7O0lBQ0QsR0FBRyxDQUFDLElBQVksRUFBRSxJQUFZLEVBQUUsU0FBcUIsSUFBSSxVQUFVLEVBQUU7UUFDbkUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFLEVBQ3RELEVBQUUsTUFBTSxFQUFFLENBQUM7YUFDWixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7Ozs7SUFFRCxHQUFHLENBQUMsSUFBWSxFQUFFLElBQVksRUFBRSxP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O1FBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDLE1BQU0sQ0FBQztJQUMvQyxDQUFDOzs7WUF4RUYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBUFEsVUFBVTtZQUdWLGFBQWE7Ozs7Ozs7O0lBT1IsMEJBQXdCOzs7OztJQUFFLG1DQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgdGhyb3dFcnJvciwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcGlTZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UpIHsgfVxyXG5cclxuICBwcml2YXRlIGZvcm1hdEVycm9ycyhlcnJvcjogYW55KSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIHJldHVybiB0aHJvd0Vycm9yKGVycm9yLmVycm9yKTtcclxuICB9XHJcbiAgZ2V0KHpvbmU6IHN0cmluZywgcGF0aDogc3RyaW5nLCBwYXJhbXM6IEh0dHBQYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMuZ2V0QXBpVXJsKCl9LyR7em9uZX0vJHtwYXRofWBcclxuICAgICAgLCB7IHBhcmFtcyB9KVxyXG4gICAgICAucGlwZShjYXRjaEVycm9yKHRoaXMuZm9ybWF0RXJyb3JzKSk7XHJcbiAgfVxyXG5cclxuICBwdXQoem9uZTogc3RyaW5nLCBwYXRoOiBzdHJpbmcsIGJvZHk6IE9iamVjdCA9IHt9KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KFxyXG4gICAgICBgJHt0aGlzLmdldEFwaVVybCgpfSR7em9uZX0vJHtwYXRofWAsXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KGJvZHkpXHJcbiAgICApLnBpcGUoY2F0Y2hFcnJvcih0aGlzLmZvcm1hdEVycm9ycykpO1xyXG4gIH1cclxuXHJcbiAgcG9zdCh6b25lOiBzdHJpbmcsIHBhdGg6IHN0cmluZywgaWQ/OiBzdHJpbmcsIGJvZHk6IE9iamVjdCA9IHt9LCB3aXRoQ3JlZGVudGlhbHMgPSBmYWxzZSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICBpZiAoaWQgIT09IHVuZGVmaW5lZClcclxuICAgICAgaWQgPSAnLycgKyBpZDtcclxuICAgIGVsc2UgaWQgPSAnJztcclxuXHJcbiAgICBsZXQgd2l0aENyO1xyXG4gICAgaWYgKHdpdGhDcmVkZW50aWFscyA9PT0gdHJ1ZSlcclxuICAgICAgd2l0aENyID0geyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXHJcbiAgICAgIGAke3RoaXMuZ2V0QXBpVXJsKCl9LyR7em9uZX0vJHtwYXRofSR7aWR9YCxcclxuICAgICAgSlNPTi5zdHJpbmdpZnkoYm9keSksIHdpdGhDclxyXG4gICAgKS5waXBlKGNhdGNoRXJyb3IodGhpcy5mb3JtYXRFcnJvcnMpKTtcclxuICB9XHJcblxyXG4gIHBvc3RGaWxlKHpvbmU6IHN0cmluZywgcGF0aDogc3RyaW5nLCBpZD86IHN0cmluZywgYm9keTogT2JqZWN0ID0ge30sIHdpdGhDcmVkZW50aWFscyA9IGZhbHNlLCByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW4pOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgaWYgKGlkICE9PSB1bmRlZmluZWQpXHJcbiAgICAgIGlkID0gJy8nICsgaWQ7XHJcbiAgICBlbHNlIGlkID0gJyc7XHJcblxyXG4gICAgbGV0IHdpdGhDcjtcclxuICAgIGlmICh3aXRoQ3JlZGVudGlhbHMgPT09IHRydWUpXHJcbiAgICAgIHdpdGhDciA9IHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH07XHJcblxyXG4gICAgaWYgKHJlcG9ydFByb2dyZXNzID09PSB1bmRlZmluZWQpXHJcbiAgICAgIHJlcG9ydFByb2dyZXNzID09IGZhbHNlO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChcclxuICAgICAgYCR7dGhpcy5nZXRBcGlVcmwoKX0vJHt6b25lfS8ke3BhdGh9JHtpZH1gLFxyXG4gICAgICBib2R5LCB7IHdpdGhDcmVkZW50aWFscyA6IHdpdGhDciwgcmVwb3J0UHJvZ3Jlc3M6IHJlcG9ydFByb2dyZXNzLCBvYnNlcnZlOiAnZXZlbnRzJyB9XHJcbiAgICApLnBpcGUoY2F0Y2hFcnJvcih0aGlzLmZvcm1hdEVycm9ycykpO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlKHpvbmU6IHN0cmluZywgcGF0aDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKFxyXG4gICAgICBgJHt0aGlzLmdldEFwaVVybCgpfS8ke3pvbmV9LyR7cGF0aH1gXHJcbiAgICApLnBpcGUoY2F0Y2hFcnJvcih0aGlzLmZvcm1hdEVycm9ycykpO1xyXG4gIH1cclxuXHJcbiAgdXBsb2FkRmlsZSh6b25lOiBzdHJpbmcsIHBhdGg6IHN0cmluZywgZmlsZTogRmlsZSwgdHlwZU5hbWU/OiBzdHJpbmcsIHBhcmVudE9iamVjdElkPzogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBmb3JtRGF0YTogRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGZpbGUsIGZpbGUubmFtZSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke3RoaXMuY29uZmlnU2VydmljZS5nZXRDb25maWcoKS5hcGlVcmx9LyR7em9uZX0vJHtwYXRofS8ke3R5cGVOYW1lfS8ke3BhcmVudE9iamVjdElkfWAsIGZvcm1EYXRhKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRBcGlVcmwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWdTZXJ2aWNlLmdldENvbmZpZygpLmFwaVVybDtcclxuICB9XHJcbn1cclxuIl19