/**
 * @fileoverview added by tsickle
 * Generated from: shared/services/search.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpParams } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "./api.service";
var SearchService = /** @class */ (function () {
    function SearchService(apiService) {
        this.apiService = apiService;
    }
    /**
     * @param {?} searchParams
     * @return {?}
     */
    SearchService.prototype.search = /**
     * @param {?} searchParams
     * @return {?}
     */
    function (searchParams) {
        /** @type {?} */
        var params = new HttpParams();
        params = params.append('typeName', searchParams.typename).append('searchTerm', searchParams.searchTerm)
            .append('skip', '' + searchParams.skip).append('top', '' + searchParams.top);
        return this.apiService.get('common', 'search', params);
    };
    SearchService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    SearchService.ctorParameters = function () { return [
        { type: ApiService }
    ]; };
    /** @nocollapse */ SearchService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SearchService_Factory() { return new SearchService(i0.ɵɵinject(i1.ApiService)); }, token: SearchService, providedIn: "root" });
    return SearchService;
}());
export { SearchService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SearchService.prototype.apiService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zc29lLWNsaWVudC1zaGFyZWQvIiwic291cmNlcyI6WyJzaGFyZWQvc2VydmljZXMvc2VhcmNoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFJbEQ7SUFLRSx1QkFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUFJLENBQUM7Ozs7O0lBRS9DLDhCQUFNOzs7O0lBQU4sVUFBTyxZQUEyQjs7WUFDNUIsTUFBTSxHQUFHLElBQUksVUFBVSxFQUFFO1FBQzdCLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUMsVUFBVSxDQUFDO2FBQ3RHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRSxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEVBQUUsR0FBRyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3pELENBQUM7O2dCQVpGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBUFEsVUFBVTs7O3dCQURuQjtDQW1CQyxBQWJELElBYUM7U0FWWSxhQUFhOzs7Ozs7SUFFWixtQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuL2FwaS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBJU2VhcmNoUGFyYW1zIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9JU2VhcmNoUGFyYW1zJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFNlYXJjaFNlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaVNlcnZpY2U6IEFwaVNlcnZpY2UpIHsgfVxyXG5cclxuICBzZWFyY2goc2VhcmNoUGFyYW1zOiBJU2VhcmNoUGFyYW1zKSB7XHJcbiAgICBsZXQgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKTtcclxuICAgIHBhcmFtcyA9IHBhcmFtcy5hcHBlbmQoJ3R5cGVOYW1lJywgc2VhcmNoUGFyYW1zLnR5cGVuYW1lKS5hcHBlbmQoJ3NlYXJjaFRlcm0nLCBzZWFyY2hQYXJhbXMuc2VhcmNoVGVybSlcclxuICAgIC5hcHBlbmQoJ3NraXAnLCAnJyArIHNlYXJjaFBhcmFtcy5za2lwKS5hcHBlbmQoJ3RvcCcsICcnICsgc2VhcmNoUGFyYW1zLnRvcCk7XHJcbiAgICByZXR1cm4gdGhpcy5hcGlTZXJ2aWNlLmdldCgnY29tbW9uJywgJ3NlYXJjaCcsIHBhcmFtcyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==