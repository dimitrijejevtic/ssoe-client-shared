/**
 * @fileoverview added by tsickle
 * Generated from: shared/services/classification-service.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Utils } from '../extensions/utils';
import { of } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { shareReplay, switchMap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "./api.service";
var ClassificationService = /** @class */ (function () {
    function ClassificationService(apiService) {
        this.apiService = apiService;
        this.classificationCache = {};
        this.classificationValueCache = {};
    }
    /**
     * @param {?} classificationName
     * @param {?=} classificationModel
     * @param {?=} volatile
     * @return {?}
     */
    ClassificationService.prototype.getClassificationValues = /**
     * @param {?} classificationName
     * @param {?=} classificationModel
     * @param {?=} volatile
     * @return {?}
     */
    function (classificationName, classificationModel, volatile) {
        if (volatile === void 0) { volatile = false; }
        if (Utils.isNullEmptyOrUndefined(classificationName))
            return;
        else {
            if (Utils.isNullEmptyOrUndefined(classificationModel))
                classificationModel = '';
            else
                classificationModel = '?model=' + classificationModel;
            /** @type {?} */
            var key = classificationName + classificationModel;
            if (volatile === true)
                return this.apiService.get('common', 'GetClassification/' + classificationName + classificationModel);
            if (this.classificationCache[key] === undefined)
                this.classificationCache[key]
                    = this.apiService.get('common', 'GetClassification/' + classificationName + classificationModel).pipe(shareReplay(1));
            return this.classificationCache[key];
        }
    };
    /**
     * @param {?} classificationName
     * @param {?=} classificationModel
     * @param {?=} volatile
     * @return {?}
     */
    ClassificationService.prototype.getGroupedClassificationValues = /**
     * @param {?} classificationName
     * @param {?=} classificationModel
     * @param {?=} volatile
     * @return {?}
     */
    function (classificationName, classificationModel, volatile) {
        if (volatile === void 0) { volatile = false; }
        if (Utils.isNullEmptyOrUndefined(classificationName))
            return;
        else {
            if (Utils.isNullEmptyOrUndefined(classificationModel))
                classificationModel = '';
            else
                classificationModel = '?model=' + classificationModel;
            /** @type {?} */
            var key = classificationName + classificationModel;
            if (volatile === true)
                return this.apiService.get('common', 'GetGroupedClassification/' + classificationName + classificationModel);
            if (this.classificationCache[key] === undefined)
                this.classificationCache[key]
                    = this.apiService.get('common', 'GetGroupedClassification/' + classificationName + classificationModel).pipe(shareReplay(1));
            return this.classificationCache[key];
        }
    };
    /**
     * @param {?} valueId
     * @return {?}
     */
    ClassificationService.prototype.getClassificationValue = /**
     * @param {?} valueId
     * @return {?}
     */
    function (valueId) {
        if (Utils.isNullEmptyOrUndefined(valueId))
            return of('-');
        /** @type {?} */
        var key = valueId;
        if (this.classificationValueCache[key] === undefined) {
            /** @type {?} */
            var httpParams = new HttpParams().set('valueId', '' + valueId);
            this.classificationValueCache[key]
                = this.apiService.get('common', 'getClassificationValue', httpParams).pipe(shareReplay(1), switchMap((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) {
                    if (x === undefined || x === null || x.value === undefined)
                        return '';
                    return of(x);
                })));
        }
        // const httpParams = new HttpParams().set('valueId', '' + valueId);
        // return this.apiService.get('common', 'getClassificationValue', httpParams);
        return this.classificationValueCache[key];
    };
    ClassificationService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ClassificationService.ctorParameters = function () { return [
        { type: ApiService }
    ]; };
    /** @nocollapse */ ClassificationService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ClassificationService_Factory() { return new ClassificationService(i0.ɵɵinject(i1.ApiService)); }, token: ClassificationService, providedIn: "root" });
    return ClassificationService;
}());
export { ClassificationService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ClassificationService.prototype.classificationCache;
    /**
     * @type {?}
     * @private
     */
    ClassificationService.prototype.classificationValueCache;
    /**
     * @type {?}
     * @private
     */
    ClassificationService.prototype.apiService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NpZmljYXRpb24tc2VydmljZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3NvZS1jbGllbnQtc2hhcmVkLyIsInNvdXJjZXMiOlsic2hhcmVkL3NlcnZpY2VzL2NsYXNzaWZpY2F0aW9uLXNlcnZpY2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDNUMsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBRXhEO0lBUUUsK0JBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDeEMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsd0JBQXdCLEdBQUcsRUFBRSxDQUFDO0lBQ3JDLENBQUM7Ozs7Ozs7SUFFRCx1REFBdUI7Ozs7OztJQUF2QixVQUF3QixrQkFBMEIsRUFBRSxtQkFBNEIsRUFBRSxRQUFnQjtRQUFoQix5QkFBQSxFQUFBLGdCQUFnQjtRQUNoRyxJQUFJLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxrQkFBa0IsQ0FBQztZQUNsRCxPQUFPO2FBQ0o7WUFDSCxJQUFJLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxtQkFBbUIsQ0FBQztnQkFDbkQsbUJBQW1CLEdBQUcsRUFBRSxDQUFDOztnQkFFekIsbUJBQW1CLEdBQUcsU0FBUyxHQUFHLG1CQUFtQixDQUFDOztnQkFFbEQsR0FBRyxHQUFHLGtCQUFrQixHQUFHLG1CQUFtQjtZQUVwRCxJQUFJ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QUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVJRLFVBQVU7OztnQ0FEbkI7Q0FpRkMsQUExRUQsSUEwRUM7U0F2RVkscUJBQXFCOzs7Ozs7SUFFaEMsb0RBQWdFOzs7OztJQUNoRSx5REFBbUU7Ozs7O0lBRXZELDJDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4vYXBpLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBVdGlscyB9IGZyb20gJy4uL2V4dGVuc2lvbnMvdXRpbHMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBzaGFyZVJlcGxheSwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2xhc3NpZmljYXRpb25TZXJ2aWNlIHtcclxuXHJcbiAgcHJpdmF0ZSBjbGFzc2lmaWNhdGlvbkNhY2hlOiB7W2tleTogc3RyaW5nXTogT2JzZXJ2YWJsZTxhbnlbXT59O1xyXG4gIHByaXZhdGUgY2xhc3NpZmljYXRpb25WYWx1ZUNhY2hlOiB7W2tleTogc3RyaW5nXTogT2JzZXJ2YWJsZTxhbnk+fTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGlTZXJ2aWNlOiBBcGlTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLmNsYXNzaWZpY2F0aW9uQ2FjaGUgPSB7fTtcclxuICAgIHRoaXMuY2xhc3NpZmljYXRpb25WYWx1ZUNhY2hlID0ge307XHJcbiAgfVxyXG5cclxuICBnZXRDbGFzc2lmaWNhdGlvblZhbHVlcyhjbGFzc2lmaWNhdGlvbk5hbWU6IHN0cmluZywgY2xhc3NpZmljYXRpb25Nb2RlbD86IHN0cmluZywgdm9sYXRpbGUgPSBmYWxzZSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICBpZiAoVXRpbHMuaXNOdWxsRW1wdHlPclVuZGVmaW5lZChjbGFzc2lmaWNhdGlvbk5hbWUpKVxyXG4gICAgICByZXR1cm47XHJcbiAgICBlbHNlIHtcclxuICAgICAgaWYgKFV0aWxzLmlzTnVsbEVtcHR5T3JVbmRlZmluZWQoY2xhc3NpZmljYXRpb25Nb2RlbCkpXHJcbiAgICAgICAgY2xhc3NpZmljYXRpb25Nb2RlbCA9ICcnO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICBjbGFzc2lmaWNhdGlvbk1vZGVsID0gJz9tb2RlbD0nICsgY2xhc3NpZmljYXRpb25Nb2RlbDtcclxuXHJcbiAgICAgIGNvbnN0IGtleSA9IGNsYXNzaWZpY2F0aW9uTmFtZSArIGNsYXNzaWZpY2F0aW9uTW9kZWw7XHJcblxyXG4gICAgICBpZiAodm9sYXRpbGUgPT09IHRydWUpXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBpU2VydmljZS5nZXQoJ2NvbW1vbicsICdHZXRDbGFzc2lmaWNhdGlvbi8nICsgY2xhc3NpZmljYXRpb25OYW1lICsgY2xhc3NpZmljYXRpb25Nb2RlbCk7XHJcblxyXG4gICAgICBpZiAodGhpcy5jbGFzc2lmaWNhdGlvbkNhY2hlW2tleV0gPT09IHVuZGVmaW5lZClcclxuICAgICAgICB0aGlzLmNsYXNzaWZpY2F0aW9uQ2FjaGVba2V5XVxyXG4gICAgICAgID0gdGhpcy5hcGlTZXJ2aWNlLmdldCgnY29tbW9uJywgJ0dldENsYXNzaWZpY2F0aW9uLycgKyBjbGFzc2lmaWNhdGlvbk5hbWUgKyBjbGFzc2lmaWNhdGlvbk1vZGVsKS5waXBlKHNoYXJlUmVwbGF5KDEpKTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzLmNsYXNzaWZpY2F0aW9uQ2FjaGVba2V5XTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldEdyb3VwZWRDbGFzc2lmaWNhdGlvblZhbHVlcyhjbGFzc2lmaWNhdGlvbk5hbWU6IHN0cmluZywgY2xhc3NpZmljYXRpb25Nb2RlbD86IHN0cmluZywgdm9sYXRpbGUgPSBmYWxzZSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICBpZiAoVXRpbHMuaXNOdWxsRW1wdHlPclVuZGVmaW5lZChjbGFzc2lmaWNhdGlvbk5hbWUpKVxyXG4gICAgICByZXR1cm47XHJcbiAgICBlbHNlIHtcclxuICAgICAgaWYgKFV0aWxzLmlzTnVsbEVtcHR5T3JVbmRlZmluZWQoY2xhc3NpZmljYXRpb25Nb2RlbCkpXHJcbiAgICAgICAgY2xhc3NpZmljYXRpb25Nb2RlbCA9ICcnO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICBjbGFzc2lmaWNhdGlvbk1vZGVsID0gJz9tb2RlbD0nICsgY2xhc3NpZmljYXRpb25Nb2RlbDtcclxuXHJcbiAgICAgIGNvbnN0IGtleSA9IGNsYXNzaWZpY2F0aW9uTmFtZSArIGNsYXNzaWZpY2F0aW9uTW9kZWw7XHJcblxyXG4gICAgICBpZiAodm9sYXRpbGUgPT09IHRydWUpXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBpU2VydmljZS5nZXQoJ2NvbW1vbicsICdHZXRHcm91cGVkQ2xhc3NpZmljYXRpb24vJyArIGNsYXNzaWZpY2F0aW9uTmFtZSArIGNsYXNzaWZpY2F0aW9uTW9kZWwpO1xyXG5cclxuICAgICAgaWYgKHRoaXMuY2xhc3NpZmljYXRpb25DYWNoZVtrZXldID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgdGhpcy5jbGFzc2lmaWNhdGlvbkNhY2hlW2tleV1cclxuICAgICAgICA9IHRoaXMuYXBpU2VydmljZS5nZXQoJ2NvbW1vbicsICdHZXRHcm91cGVkQ2xhc3NpZmljYXRpb24vJyArIGNsYXNzaWZpY2F0aW9uTmFtZSArIGNsYXNzaWZpY2F0aW9uTW9kZWwpLnBpcGUoc2hhcmVSZXBsYXkoMSkpO1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuY2xhc3NpZmljYXRpb25DYWNoZVtrZXldO1xyXG4gICAgfVxyXG4gIH1cclxuICBnZXRDbGFzc2lmaWNhdGlvblZhbHVlKHZhbHVlSWQ6IHN0cmluZykge1xyXG4gICAgaWYgKFV0aWxzLmlzTnVsbEVtcHR5T3JVbmRlZmluZWQodmFsdWVJZCkpXHJcbiAgICAgIHJldHVybiBvZignLScpO1xyXG4gICAgY29uc3Qga2V5ID0gdmFsdWVJZDtcclxuICAgIGlmICh0aGlzLmNsYXNzaWZpY2F0aW9uVmFsdWVDYWNoZVtrZXldID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgY29uc3QgaHR0cFBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCkuc2V0KCd2YWx1ZUlkJywgJycgKyB2YWx1ZUlkKTtcclxuICAgICAgdGhpcy5jbGFzc2lmaWNhdGlvblZhbHVlQ2FjaGVba2V5XVxyXG4gICAgICA9IHRoaXMuYXBpU2VydmljZS5nZXQoJ2NvbW1vbicsICdnZXRDbGFzc2lmaWNhdGlvblZhbHVlJywgaHR0cFBhcmFtcykucGlwZShzaGFyZVJlcGxheSgxKSwgc3dpdGNoTWFwKHggPT4ge1xyXG4gICAgICAgIGlmICh4ID09PSB1bmRlZmluZWQgfHwgeCA9PT0gbnVsbCB8fCB4LnZhbHVlID09PSB1bmRlZmluZWQpIHJldHVybiAnJztcclxuICAgICAgICByZXR1cm4gb2YoeCk7XHJcbiAgICAgIH0pKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjb25zdCBodHRwUGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKS5zZXQoJ3ZhbHVlSWQnLCAnJyArIHZhbHVlSWQpO1xyXG4gICAgLy8gcmV0dXJuIHRoaXMuYXBpU2VydmljZS5nZXQoJ2NvbW1vbicsICdnZXRDbGFzc2lmaWNhdGlvblZhbHVlJywgaHR0cFBhcmFtcyk7XHJcbiAgICByZXR1cm4gdGhpcy5jbGFzc2lmaWNhdGlvblZhbHVlQ2FjaGVba2V5XTtcclxuXHJcbiAgfVxyXG59XHJcbiJdfQ==