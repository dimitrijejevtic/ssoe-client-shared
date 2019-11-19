/**
 * @fileoverview added by tsickle
 * Generated from: shared/services/loading.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
var LoadingService = /** @class */ (function () {
    // timeout: any;
    function LoadingService() {
        this.loadingSubject = new Subject();
        this.moduleLoadingSubject = new Subject();
    }
    /**
     * @param {?} loading
     * @return {?}
     */
    LoadingService.prototype.loader = /**
     * @param {?} loading
     * @return {?}
     */
    function (loading) {
        this.loadingSubject.next(loading);
        // if (loading === true) {
        //     this.timeout = setTimeout(() => this.loadingSubject.next(false), 120000);
        // } else {
        //   if (this.timeout !== undefined)
        //     clearTimeout(this.timeout);
        // }
    };
    /**
     * @param {?} loading
     * @return {?}
     */
    LoadingService.prototype.moduleLoading = /**
     * @param {?} loading
     * @return {?}
     */
    function (loading) {
        this.moduleLoadingSubject.next(loading);
    };
    LoadingService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    LoadingService.ctorParameters = function () { return []; };
    /** @nocollapse */ LoadingService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function LoadingService_Factory() { return new LoadingService(); }, token: LoadingService, providedIn: "root" });
    return LoadingService;
}());
export { LoadingService };
if (false) {
    /** @type {?} */
    LoadingService.prototype.loadingSubject;
    /** @type {?} */
    LoadingService.prototype.moduleLoadingSubject;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3NvZS1jbGllbnQtc2hhcmVkLyIsInNvdXJjZXMiOlsic2hhcmVkL3NlcnZpY2VzL2xvYWRpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFFL0I7SUFPRSxnQkFBZ0I7SUFDaEI7UUFDRSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7SUFDNUMsQ0FBQzs7Ozs7SUFFRCwrQkFBTTs7OztJQUFOLFVBQU8sT0FBTztRQUNaLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xDLDBCQUEwQjtRQUMxQixnRkFBZ0Y7UUFDaEYsV0FBVztRQUNYLG9DQUFvQztRQUNwQyxrQ0FBa0M7UUFDbEMsSUFBSTtJQUNOLENBQUM7Ozs7O0lBRUQsc0NBQWE7Ozs7SUFBYixVQUFjLE9BQU87UUFDbkIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxQyxDQUFDOztnQkF6QkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7eUJBTEQ7Q0E2QkMsQUExQkQsSUEwQkM7U0F2QlksY0FBYzs7O0lBRXpCLHdDQUFpQzs7SUFDakMsOENBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMb2FkaW5nU2VydmljZSB7XG5cbiAgbG9hZGluZ1N1YmplY3Q6IFN1YmplY3Q8Ym9vbGVhbj47XG4gIG1vZHVsZUxvYWRpbmdTdWJqZWN0OiBTdWJqZWN0PGJvb2xlYW4+O1xuICAvLyB0aW1lb3V0OiBhbnk7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubG9hZGluZ1N1YmplY3QgPSBuZXcgU3ViamVjdCgpO1xuICAgIHRoaXMubW9kdWxlTG9hZGluZ1N1YmplY3QgPSBuZXcgU3ViamVjdCgpO1xuICB9XG5cbiAgbG9hZGVyKGxvYWRpbmcpIHtcbiAgICB0aGlzLmxvYWRpbmdTdWJqZWN0Lm5leHQobG9hZGluZyk7XG4gICAgLy8gaWYgKGxvYWRpbmcgPT09IHRydWUpIHtcbiAgICAvLyAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLmxvYWRpbmdTdWJqZWN0Lm5leHQoZmFsc2UpLCAxMjAwMDApO1xuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICBpZiAodGhpcy50aW1lb3V0ICE9PSB1bmRlZmluZWQpXG4gICAgLy8gICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICAgIC8vIH1cbiAgfVxuXG4gIG1vZHVsZUxvYWRpbmcobG9hZGluZykge1xuICAgIHRoaXMubW9kdWxlTG9hZGluZ1N1YmplY3QubmV4dChsb2FkaW5nKTtcbiAgfVxufVxuIl19