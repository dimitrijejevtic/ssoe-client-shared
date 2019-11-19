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
export class QueryService {
    /**
     * @param {?} apiService
     * @param {?} http
     */
    constructor(apiService, http) {
        this.apiService = apiService;
        this.http = http;
    }
    /**
     * @param {?} zone
     * @param {?} route
     * @param {?} contract
     * @return {?}
     */
    get(zone, route, contract) {
        /** @type {?} */
        let params = new HttpParams();
        /** @type {?} */
        const vl = Object.entries(contract);
        for (let i = 0; i < vl.length; i++) {
            /** @type {?} */
            const val = vl[i];
            params = params.append(val[0], val[1]);
        }
        return this.apiService.get(zone, route, params);
    }
    /**
     * @param {?} zone
     * @param {?} path
     * @return {?}
     */
    getBlobDocument(zone, path) {
        return this.http.get(`${this.apiService.getApiUrl()}/${zone}/${path}`, { responseType: 'blob', observe: 'response' });
    }
}
QueryService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
QueryService.ctorParameters = () => [
    { type: ApiService },
    { type: HttpClient }
];
/** @nocollapse */ QueryService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function QueryService_Factory() { return new QueryService(i0.ɵɵinject(i1.ApiService), i0.ɵɵinject(i2.HttpClient)); }, token: QueryService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Nzb2UtY2xpZW50LXNoYXJlZC8iLCJzb3VyY2VzIjpbInNoYXJlZC9zZXJ2aWNlcy9xdWVyeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7QUFNOUQsTUFBTSxPQUFPLFlBQVk7Ozs7O0lBRXZCLFlBQW9CLFVBQXNCLEVBQVUsSUFBZ0I7UUFBaEQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVk7SUFBSSxDQUFDOzs7Ozs7O0lBRWxFLEdBQUcsQ0FBQyxJQUFZLEVBQUUsS0FBYSxFQUFFLFFBQXdCOztZQUMxRCxNQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUU7O2NBQ3ZCLEVBQUUsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFNLFFBQVEsQ0FBQztRQUN4QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs7a0JBQzVCLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN4QztRQUNELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7Ozs7SUFFTSxlQUFlLENBQUMsSUFBWSxFQUFFLElBQVk7UUFDL0MsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLElBQUksSUFBSSxJQUFJLElBQUksRUFBRSxFQUNqRSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7SUFDckQsQ0FBQzs7O1lBcEJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQU5RLFVBQVU7WUFDRSxVQUFVOzs7Ozs7OztJQVFqQixrQ0FBOEI7Ozs7O0lBQUUsNEJBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi9hcGkuc2VydmljZSc7XHJcbmltcG9ydCB7IEh0dHBQYXJhbXMsIEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IElRdWVyeUNvbnRyYWN0IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9JUXVlcnlDb250cmFjdCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBRdWVyeVNlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaVNlcnZpY2U6IEFwaVNlcnZpY2UsIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XHJcblxyXG4gIHB1YmxpYyBnZXQoem9uZTogc3RyaW5nLCByb3V0ZTogc3RyaW5nLCBjb250cmFjdDogSVF1ZXJ5Q29udHJhY3QpIHtcclxuICAgIGxldCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpO1xyXG4gICAgY29uc3QgdmwgPSBPYmplY3QuZW50cmllczxhbnk+KGNvbnRyYWN0KTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmwubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgdmFsID0gdmxbaV07XHJcbiAgICAgIHBhcmFtcyA9IHBhcmFtcy5hcHBlbmQodmFsWzBdLCB2YWxbMV0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuYXBpU2VydmljZS5nZXQoem9uZSwgcm91dGUsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0QmxvYkRvY3VtZW50KHpvbmU6IHN0cmluZywgcGF0aDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLmFwaVNlcnZpY2UuZ2V0QXBpVXJsKCl9LyR7em9uZX0vJHtwYXRofWBcclxuICAgICAgLCB7IHJlc3BvbnNlVHlwZTogJ2Jsb2InLCBvYnNlcnZlOiAncmVzcG9uc2UnIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=