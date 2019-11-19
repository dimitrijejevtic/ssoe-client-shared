/**
 * @fileoverview added by tsickle
 * Generated from: shared/services/loading.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class LoadingService {
    // timeout: any;
    constructor() {
        this.loadingSubject = new Subject();
        this.moduleLoadingSubject = new Subject();
    }
    /**
     * @param {?} loading
     * @return {?}
     */
    loader(loading) {
        this.loadingSubject.next(loading);
        // if (loading === true) {
        //     this.timeout = setTimeout(() => this.loadingSubject.next(false), 120000);
        // } else {
        //   if (this.timeout !== undefined)
        //     clearTimeout(this.timeout);
        // }
    }
    /**
     * @param {?} loading
     * @return {?}
     */
    moduleLoading(loading) {
        this.moduleLoadingSubject.next(loading);
    }
}
LoadingService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
LoadingService.ctorParameters = () => [];
/** @nocollapse */ LoadingService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function LoadingService_Factory() { return new LoadingService(); }, token: LoadingService, providedIn: "root" });
if (false) {
    /** @type {?} */
    LoadingService.prototype.loadingSubject;
    /** @type {?} */
    LoadingService.prototype.moduleLoadingSubject;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3NvZS1jbGllbnQtc2hhcmVkLyIsInNvdXJjZXMiOlsic2hhcmVkL3NlcnZpY2VzL2xvYWRpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFLL0IsTUFBTSxPQUFPLGNBQWM7O0lBS3pCO1FBQ0UsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO0lBQzVDLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLE9BQU87UUFDWixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsQywwQkFBMEI7UUFDMUIsZ0ZBQWdGO1FBQ2hGLFdBQVc7UUFDWCxvQ0FBb0M7UUFDcEMsa0NBQWtDO1FBQ2xDLElBQUk7SUFDTixDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxPQUFPO1FBQ25CLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7O1lBekJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7OztJQUdDLHdDQUFpQzs7SUFDakMsOENBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMb2FkaW5nU2VydmljZSB7XG5cbiAgbG9hZGluZ1N1YmplY3Q6IFN1YmplY3Q8Ym9vbGVhbj47XG4gIG1vZHVsZUxvYWRpbmdTdWJqZWN0OiBTdWJqZWN0PGJvb2xlYW4+O1xuICAvLyB0aW1lb3V0OiBhbnk7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubG9hZGluZ1N1YmplY3QgPSBuZXcgU3ViamVjdCgpO1xuICAgIHRoaXMubW9kdWxlTG9hZGluZ1N1YmplY3QgPSBuZXcgU3ViamVjdCgpO1xuICB9XG5cbiAgbG9hZGVyKGxvYWRpbmcpIHtcbiAgICB0aGlzLmxvYWRpbmdTdWJqZWN0Lm5leHQobG9hZGluZyk7XG4gICAgLy8gaWYgKGxvYWRpbmcgPT09IHRydWUpIHtcbiAgICAvLyAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLmxvYWRpbmdTdWJqZWN0Lm5leHQoZmFsc2UpLCAxMjAwMDApO1xuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICBpZiAodGhpcy50aW1lb3V0ICE9PSB1bmRlZmluZWQpXG4gICAgLy8gICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICAgIC8vIH1cbiAgfVxuXG4gIG1vZHVsZUxvYWRpbmcobG9hZGluZykge1xuICAgIHRoaXMubW9kdWxlTG9hZGluZ1N1YmplY3QubmV4dChsb2FkaW5nKTtcbiAgfVxufVxuIl19