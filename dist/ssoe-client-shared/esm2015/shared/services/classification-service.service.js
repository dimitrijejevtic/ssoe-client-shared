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
export class ClassificationService {
    /**
     * @param {?} apiService
     */
    constructor(apiService) {
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
    getClassificationValues(classificationName, classificationModel, volatile = false) {
        if (Utils.isNullEmptyOrUndefined(classificationName))
            return;
        else {
            if (Utils.isNullEmptyOrUndefined(classificationModel))
                classificationModel = '';
            else
                classificationModel = '?model=' + classificationModel;
            /** @type {?} */
            const key = classificationName + classificationModel;
            if (volatile === true)
                return this.apiService.get('common', 'GetClassification/' + classificationName + classificationModel);
            if (this.classificationCache[key] === undefined)
                this.classificationCache[key]
                    = this.apiService.get('common', 'GetClassification/' + classificationName + classificationModel).pipe(shareReplay(1));
            return this.classificationCache[key];
        }
    }
    /**
     * @param {?} classificationName
     * @param {?=} classificationModel
     * @param {?=} volatile
     * @return {?}
     */
    getGroupedClassificationValues(classificationName, classificationModel, volatile = false) {
        if (Utils.isNullEmptyOrUndefined(classificationName))
            return;
        else {
            if (Utils.isNullEmptyOrUndefined(classificationModel))
                classificationModel = '';
            else
                classificationModel = '?model=' + classificationModel;
            /** @type {?} */
            const key = classificationName + classificationModel;
            if (volatile === true)
                return this.apiService.get('common', 'GetGroupedClassification/' + classificationName + classificationModel);
            if (this.classificationCache[key] === undefined)
                this.classificationCache[key]
                    = this.apiService.get('common', 'GetGroupedClassification/' + classificationName + classificationModel).pipe(shareReplay(1));
            return this.classificationCache[key];
        }
    }
    /**
     * @param {?} valueId
     * @return {?}
     */
    getClassificationValue(valueId) {
        if (Utils.isNullEmptyOrUndefined(valueId))
            return of('-');
        /** @type {?} */
        const key = valueId;
        if (this.classificationValueCache[key] === undefined) {
            /** @type {?} */
            const httpParams = new HttpParams().set('valueId', '' + valueId);
            this.classificationValueCache[key]
                = this.apiService.get('common', 'getClassificationValue', httpParams).pipe(shareReplay(1), switchMap((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => {
                    if (x === undefined || x === null || x.value === undefined)
                        return '';
                    return of(x);
                })));
        }
        // const httpParams = new HttpParams().set('valueId', '' + valueId);
        // return this.apiService.get('common', 'getClassificationValue', httpParams);
        return this.classificationValueCache[key];
    }
}
ClassificationService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ClassificationService.ctorParameters = () => [
    { type: ApiService }
];
/** @nocollapse */ ClassificationService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ClassificationService_Factory() { return new ClassificationService(i0.ɵɵinject(i1.ApiService)); }, token: ClassificationService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NpZmljYXRpb24tc2VydmljZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3NvZS1jbGllbnQtc2hhcmVkLyIsInNvdXJjZXMiOlsic2hhcmVkL3NlcnZpY2VzL2NsYXNzaWZpY2F0aW9uLXNlcnZpY2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDNUMsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBS3hELE1BQU0sT0FBTyxxQkFBcUI7Ozs7SUFLaEMsWUFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN4QyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxFQUFFLENBQUM7SUFDckMsQ0FBQzs7Ozs7OztJQUVELHVCQUF1QixDQUFDLGtCQUEwQixFQUFFLG1CQUE0QixFQUFFLFFBQVEsR0FBRyxLQUFLO1FBQ2hHLElBQUksS0FBSyxDQUFDLHNCQUFzQixDQUFDLGtCQUFrQixDQUFDO1lBQ2xELE9BQU87YUFDSjtZQUNILElBQUksS0FBSyxDQUFDLHNCQUFzQixDQUFDLG1CQUFtQixDQUFDO2dCQUNuRCxtQkFBbUIsR0FBRyxFQUFFLENBQUM7O2dCQUV6QixtQkFBbUIsR0FBRyxTQUFTLEdBQUcsbUJBQW1CLENBQUM7O2tCQUVsRCxHQUFHLEdBQUcsa0JBQWtCLEdBQUcsbUJBQW1CO1lBRXBELElBQUksUUFBUSxL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WUFSUSxVQUFVOzs7Ozs7OztJQVdqQixvREFBZ0U7Ozs7O0lBQ2hFLHlEQUFtRTs7Ozs7SUFFdkQsMkNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi9hcGkuc2VydmljZSc7XHJcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi4vZXh0ZW5zaW9ucy91dGlscyc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IHNoYXJlUmVwbGF5LCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbGFzc2lmaWNhdGlvblNlcnZpY2Uge1xyXG5cclxuICBwcml2YXRlIGNsYXNzaWZpY2F0aW9uQ2FjaGU6IHtba2V5OiBzdHJpbmddOiBPYnNlcnZhYmxlPGFueVtdPn07XHJcbiAgcHJpdmF0ZSBjbGFzc2lmaWNhdGlvblZhbHVlQ2FjaGU6IHtba2V5OiBzdHJpbmddOiBPYnNlcnZhYmxlPGFueT59O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaVNlcnZpY2U6IEFwaVNlcnZpY2UpIHtcclxuICAgIHRoaXMuY2xhc3NpZmljYXRpb25DYWNoZSA9IHt9O1xyXG4gICAgdGhpcy5jbGFzc2lmaWNhdGlvblZhbHVlQ2FjaGUgPSB7fTtcclxuICB9XHJcblxyXG4gIGdldENsYXNzaWZpY2F0aW9uVmFsdWVzKGNsYXNzaWZpY2F0aW9uTmFtZTogc3RyaW5nLCBjbGFzc2lmaWNhdGlvbk1vZGVsPzogc3RyaW5nLCB2b2xhdGlsZSA9IGZhbHNlKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIGlmIChVdGlscy5pc051bGxFbXB0eU9yVW5kZWZpbmVkKGNsYXNzaWZpY2F0aW9uTmFtZSkpXHJcbiAgICAgIHJldHVybjtcclxuICAgIGVsc2Uge1xyXG4gICAgICBpZiAoVXRpbHMuaXNOdWxsRW1wdHlPclVuZGVmaW5lZChjbGFzc2lmaWNhdGlvbk1vZGVsKSlcclxuICAgICAgICBjbGFzc2lmaWNhdGlvbk1vZGVsID0gJyc7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIGNsYXNzaWZpY2F0aW9uTW9kZWwgPSAnP21vZGVsPScgKyBjbGFzc2lmaWNhdGlvbk1vZGVsO1xyXG5cclxuICAgICAgY29uc3Qga2V5ID0gY2xhc3NpZmljYXRpb25OYW1lICsgY2xhc3NpZmljYXRpb25Nb2RlbDtcclxuXHJcbiAgICAgIGlmICh2b2xhdGlsZSA9PT0gdHJ1ZSlcclxuICAgICAgICByZXR1cm4gdGhpcy5hcGlTZXJ2aWNlLmdldCgnY29tbW9uJywgJ0dldENsYXNzaWZpY2F0aW9uLycgKyBjbGFzc2lmaWNhdGlvbk5hbWUgKyBjbGFzc2lmaWNhdGlvbk1vZGVsKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmNsYXNzaWZpY2F0aW9uQ2FjaGVba2V5XSA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgIHRoaXMuY2xhc3NpZmljYXRpb25DYWNoZVtrZXldXHJcbiAgICAgICAgPSB0aGlzLmFwaVNlcnZpY2UuZ2V0KCdjb21tb24nLCAnR2V0Q2xhc3NpZmljYXRpb24vJyArIGNsYXNzaWZpY2F0aW9uTmFtZSArIGNsYXNzaWZpY2F0aW9uTW9kZWwpLnBpcGUoc2hhcmVSZXBsYXkoMSkpO1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuY2xhc3NpZmljYXRpb25DYWNoZVtrZXldO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0R3JvdXBlZENsYXNzaWZpY2F0aW9uVmFsdWVzKGNsYXNzaWZpY2F0aW9uTmFtZTogc3RyaW5nLCBjbGFzc2lmaWNhdGlvbk1vZGVsPzogc3RyaW5nLCB2b2xhdGlsZSA9IGZhbHNlKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIGlmIChVdGlscy5pc051bGxFbXB0eU9yVW5kZWZpbmVkKGNsYXNzaWZpY2F0aW9uTmFtZSkpXHJcbiAgICAgIHJldHVybjtcclxuICAgIGVsc2Uge1xyXG4gICAgICBpZiAoVXRpbHMuaXNOdWxsRW1wdHlPclVuZGVmaW5lZChjbGFzc2lmaWNhdGlvbk1vZGVsKSlcclxuICAgICAgICBjbGFzc2lmaWNhdGlvbk1vZGVsID0gJyc7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIGNsYXNzaWZpY2F0aW9uTW9kZWwgPSAnP21vZGVsPScgKyBjbGFzc2lmaWNhdGlvbk1vZGVsO1xyXG5cclxuICAgICAgY29uc3Qga2V5ID0gY2xhc3NpZmljYXRpb25OYW1lICsgY2xhc3NpZmljYXRpb25Nb2RlbDtcclxuXHJcbiAgICAgIGlmICh2b2xhdGlsZSA9PT0gdHJ1ZSlcclxuICAgICAgICByZXR1cm4gdGhpcy5hcGlTZXJ2aWNlLmdldCgnY29tbW9uJywgJ0dldEdyb3VwZWRDbGFzc2lmaWNhdGlvbi8nICsgY2xhc3NpZmljYXRpb25OYW1lICsgY2xhc3NpZmljYXRpb25Nb2RlbCk7XHJcblxyXG4gICAgICBpZiAodGhpcy5jbGFzc2lmaWNhdGlvbkNhY2hlW2tleV0gPT09IHVuZGVmaW5lZClcclxuICAgICAgICB0aGlzLmNsYXNzaWZpY2F0aW9uQ2FjaGVba2V5XVxyXG4gICAgICAgID0gdGhpcy5hcGlTZXJ2aWNlLmdldCgnY29tbW9uJywgJ0dldEdyb3VwZWRDbGFzc2lmaWNhdGlvbi8nICsgY2xhc3NpZmljYXRpb25OYW1lICsgY2xhc3NpZmljYXRpb25Nb2RlbCkucGlwZShzaGFyZVJlcGxheSgxKSk7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5jbGFzc2lmaWNhdGlvbkNhY2hlW2tleV07XHJcbiAgICB9XHJcbiAgfVxyXG4gIGdldENsYXNzaWZpY2F0aW9uVmFsdWUodmFsdWVJZDogc3RyaW5nKSB7XHJcbiAgICBpZiAoVXRpbHMuaXNOdWxsRW1wdHlPclVuZGVmaW5lZCh2YWx1ZUlkKSlcclxuICAgICAgcmV0dXJuIG9mKCctJyk7XHJcbiAgICBjb25zdCBrZXkgPSB2YWx1ZUlkO1xyXG4gICAgaWYgKHRoaXMuY2xhc3NpZmljYXRpb25WYWx1ZUNhY2hlW2tleV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBjb25zdCBodHRwUGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKS5zZXQoJ3ZhbHVlSWQnLCAnJyArIHZhbHVlSWQpO1xyXG4gICAgICB0aGlzLmNsYXNzaWZpY2F0aW9uVmFsdWVDYWNoZVtrZXldXHJcbiAgICAgID0gdGhpcy5hcGlTZXJ2aWNlLmdldCgnY29tbW9uJywgJ2dldENsYXNzaWZpY2F0aW9uVmFsdWUnLCBodHRwUGFyYW1zKS5waXBlKHNoYXJlUmVwbGF5KDEpLCBzd2l0Y2hNYXAoeCA9PiB7XHJcbiAgICAgICAgaWYgKHggPT09IHVuZGVmaW5lZCB8fCB4ID09PSBudWxsIHx8IHgudmFsdWUgPT09IHVuZGVmaW5lZCkgcmV0dXJuICcnO1xyXG4gICAgICAgIHJldHVybiBvZih4KTtcclxuICAgICAgfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbnN0IGh0dHBQYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpLnNldCgndmFsdWVJZCcsICcnICsgdmFsdWVJZCk7XHJcbiAgICAvLyByZXR1cm4gdGhpcy5hcGlTZXJ2aWNlLmdldCgnY29tbW9uJywgJ2dldENsYXNzaWZpY2F0aW9uVmFsdWUnLCBodHRwUGFyYW1zKTtcclxuICAgIHJldHVybiB0aGlzLmNsYXNzaWZpY2F0aW9uVmFsdWVDYWNoZVtrZXldO1xyXG5cclxuICB9XHJcbn1cclxuIl19