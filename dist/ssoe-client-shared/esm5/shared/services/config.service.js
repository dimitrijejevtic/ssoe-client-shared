/**
 * @fileoverview added by tsickle
 * Generated from: shared/services/config.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var ConfigService = /** @class */ (function () {
    function ConfigService(http) {
        this.http = http;
    }
    /**
     * @return {?}
     */
    ConfigService.prototype.delayInit = /**
     * @return {?}
     */
    function () {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                resolve();
            }), 10);
        }));
    };
    /**
     * @param {?} config
     * @return {?}
     */
    ConfigService.prototype.getConfiguration = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        var _this = this;
        return this.http.get(config.apiUrl + "/" + config.getConfigEndpoint).toPromise()
            .then((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            _this.configurations = response;
            // environment.configuration = this.configurations;
            return _this.configurations;
        })).catch((/**
         * @param {?} err
         * @return {?}
         */
        function (err) {
            // if (environment.production)
            //   return Promise.reject(err);
            // else {
            //   this.configurations = environment.configuration;
            //   return Promise.resolve(environment.configuration);
            // }
        }));
    };
    /**
     * @return {?}
     */
    ConfigService.prototype.getConfig = /**
     * @return {?}
     */
    function () {
        return this.configurations;
    };
    ConfigService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ConfigService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ ConfigService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ConfigService_Factory() { return new ConfigService(i0.ɵɵinject(i1.HttpClient)); }, token: ConfigService, providedIn: "root" });
    return ConfigService;
}());
export { ConfigService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConfigService.prototype.configurations;
    /**
     * @type {?}
     * @private
     */
    ConfigService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zc29lLWNsaWVudC1zaGFyZWQvIiwic291cmNlcyI6WyJzaGFyZWQvc2VydmljZXMvY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7O0FBSWxEO0lBTUUsdUJBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7SUFBSSxDQUFDOzs7O0lBRXpDLGlDQUFTOzs7SUFBVDtRQUNFLE9BQU8sSUFBSSxPQUFPOzs7OztRQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDakMsVUFBVTs7O1lBQUM7Z0JBQ1QsT0FBTyxFQUFFLENBQUM7WUFDWixDQUFDLEdBQUUsRUFBRSxDQUFDLENBQUM7UUFDVCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBQ0Qsd0NBQWdCOzs7O0lBQWhCLFVBQWlCLE1BQTRCO1FBQTdDLGlCQXlCQztRQXhCQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLE1BQU0sQ0FBQyxNQUFNLFNBQUksTUFBTSxDQUFDLGlCQUFtQixDQUFDLENBQUMsU0FBUyxFQUFFO2FBQzdFLElBQUk7Ozs7UUFBQyxVQUFDLFFBQWtCO1lBQ3ZCLEtBQUksQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDO1lBQy9CLG1EQUFtRDtZQUNuRCxPQUFPLEtBQUksQ0FBQyxjQUFjLENBQUM7UUFDNUIsQ0FBQyxFQVdELENBQUMsS0FBSzs7OztRQUFDLFVBQUEsR0FBRztZQUNULDhCQUE4QjtZQUM5QixnQ0FBZ0M7WUFDaEMsU0FBUztZQUNULHFEQUFxRDtZQUNyRCx1REFBdUQ7WUFDdkQsSUFBSTtRQUNOLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7OztJQUVNLGlDQUFTOzs7SUFBaEI7UUFDRSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDN0IsQ0FBQzs7Z0JBNUNGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBTlEsVUFBVTs7O3dCQURuQjtDQWtEQyxBQTdDRCxJQTZDQztTQTFDWSxhQUFhOzs7Ozs7SUFFeEIsdUNBQXVCOzs7OztJQUNYLDZCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJQ29uZmlnU2VydmljZUNvbmZpZyB9IGZyb20gJy4uL2ludGVyZmFjZXMvSUNvbmZpZ1NlcnZpY2VDb25maWcnO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gJy4uL3BvY28vY29uZmlndXJhdGlvbic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENvbmZpZ1NlcnZpY2Uge1xuXG4gIHByaXZhdGUgY29uZmlndXJhdGlvbnM7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XG5cbiAgZGVsYXlJbml0KCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9LCAxMCk7XG4gICAgfSk7XG4gIH1cbiAgZ2V0Q29uZmlndXJhdGlvbihjb25maWc6IElDb25maWdTZXJ2aWNlQ29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7Y29uZmlnLmFwaVVybH0vJHtjb25maWcuZ2V0Q29uZmlnRW5kcG9pbnR9YCkudG9Qcm9taXNlKClcbiAgICAgIC50aGVuKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHtcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9ucyA9IHJlc3BvbnNlO1xuICAgICAgICAvLyBlbnZpcm9ubWVudC5jb25maWd1cmF0aW9uID0gdGhpcy5jb25maWd1cmF0aW9ucztcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlndXJhdGlvbnM7XG4gICAgICAgfVxuICAgICAgLy8gKS50aGVuKChfKSA9PiB7XG4gICAgICAvLyAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke2Vudmlyb25tZW50LmNvbmZpZ3VyYXRpb24uYXBpVXJsfS9jb21tb24vZ2V0VHJhbnNsYXRpb25zYCkudG9Qcm9taXNlKCkudGhlbigocmVzcDogYW55KSA9PiB7XG4gICAgICAvLyAgICAgY29uc3Qga2V5YXJyYXkgPSBbXTtcbiAgICAgIC8vICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcmVzcC52YWx1ZS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIC8vICAgICAgIGNvbnN0IGVsID0gcmVzcC52YWx1ZVtpbmRleF07XG4gICAgICAvLyAgICAgICBpZiAobG9jYWxUcmFuc2xhdGlvbnMuZmluZEluZGV4KHggPT4geC5rZXkgPT09IGVsLmtleSkgPCAwKVxuICAgICAgLy8gICAgICAgICBsb2NhbFRyYW5zbGF0aW9ucy5wdXNoKHsga2V5OiBlbC5rZXksIHZhbHVlOiBlbC52YWx1ZSB9KTtcbiAgICAgIC8vICAgICB9XG4gICAgICAvLyAgIH0pO1xuICAgICAgLy8gICB9XG4gICAgICApLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIC8vIGlmIChlbnZpcm9ubWVudC5wcm9kdWN0aW9uKVxuICAgICAgICAvLyAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgICAgICAvLyBlbHNlIHtcbiAgICAgICAgLy8gICB0aGlzLmNvbmZpZ3VyYXRpb25zID0gZW52aXJvbm1lbnQuY29uZmlndXJhdGlvbjtcbiAgICAgICAgLy8gICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudmlyb25tZW50LmNvbmZpZ3VyYXRpb24pO1xuICAgICAgICAvLyB9XG4gICAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDb25maWcoKTogQ29uZmlndXJhdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlndXJhdGlvbnM7XG4gIH1cbn1cbiJdfQ==