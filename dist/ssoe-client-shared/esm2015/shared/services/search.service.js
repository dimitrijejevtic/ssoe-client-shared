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
export class SearchService {
    /**
     * @param {?} apiService
     */
    constructor(apiService) {
        this.apiService = apiService;
    }
    /**
     * @param {?} searchParams
     * @return {?}
     */
    search(searchParams) {
        /** @type {?} */
        let params = new HttpParams();
        params = params.append('typeName', searchParams.typename).append('searchTerm', searchParams.searchTerm)
            .append('skip', '' + searchParams.skip).append('top', '' + searchParams.top);
        return this.apiService.get('common', 'search', params);
    }
}
SearchService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
SearchService.ctorParameters = () => [
    { type: ApiService }
];
/** @nocollapse */ SearchService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SearchService_Factory() { return new SearchService(i0.ɵɵinject(i1.ApiService)); }, token: SearchService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    SearchService.prototype.apiService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zc29lLWNsaWVudC1zaGFyZWQvIiwic291cmNlcyI6WyJzaGFyZWQvc2VydmljZXMvc2VhcmNoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFPbEQsTUFBTSxPQUFPLGFBQWE7Ozs7SUFFeEIsWUFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUFJLENBQUM7Ozs7O0lBRS9DLE1BQU0sQ0FBQyxZQUEyQjs7WUFDNUIsTUFBTSxHQUFHLElBQUksVUFBVSxFQUFFO1FBQzdCLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUMsVUFBVSxDQUFDO2FBQ3RHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRSxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEVBQUUsR0FBRyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3pELENBQUM7OztZQVpGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVBRLFVBQVU7Ozs7Ozs7O0lBVUwsbUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi9hcGkuc2VydmljZSc7XHJcbmltcG9ydCB7IEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgSVNlYXJjaFBhcmFtcyB9IGZyb20gJy4uL2ludGVyZmFjZXMvSVNlYXJjaFBhcmFtcyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hTZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGlTZXJ2aWNlOiBBcGlTZXJ2aWNlKSB7IH1cclxuXHJcbiAgc2VhcmNoKHNlYXJjaFBhcmFtczogSVNlYXJjaFBhcmFtcykge1xyXG4gICAgbGV0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCk7XHJcbiAgICBwYXJhbXMgPSBwYXJhbXMuYXBwZW5kKCd0eXBlTmFtZScsIHNlYXJjaFBhcmFtcy50eXBlbmFtZSkuYXBwZW5kKCdzZWFyY2hUZXJtJywgc2VhcmNoUGFyYW1zLnNlYXJjaFRlcm0pXHJcbiAgICAuYXBwZW5kKCdza2lwJywgJycgKyBzZWFyY2hQYXJhbXMuc2tpcCkuYXBwZW5kKCd0b3AnLCAnJyArIHNlYXJjaFBhcmFtcy50b3ApO1xyXG4gICAgcmV0dXJuIHRoaXMuYXBpU2VydmljZS5nZXQoJ2NvbW1vbicsICdzZWFyY2gnLCBwYXJhbXMpO1xyXG4gIH1cclxufVxyXG4iXX0=