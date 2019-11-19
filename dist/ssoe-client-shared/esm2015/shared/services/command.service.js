/**
 * @fileoverview added by tsickle
 * Generated from: shared/services/command.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { TranslationService } from './translation.service';
import * as i0 from "@angular/core";
import * as i1 from "./api.service";
import * as i2 from "./translation.service";
export class CommandService {
    /**
     * @param {?} apiService
     * @param {?} translateService
     */
    constructor(apiService, translateService) {
        this.apiService = apiService;
        this.translateService = translateService;
        this.locationCache = {};
    }
    // TODO: write calling query method using ICommandContract
    /**
     * @param {?} zone
     * @param {?} route
     * @param {?} contract
     * @return {?}
     */
    post(zone, route, contract) {
        return this.apiService.post(zone, route, undefined, contract);
    }
}
CommandService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
CommandService.ctorParameters = () => [
    { type: ApiService },
    { type: TranslationService }
];
/** @nocollapse */ CommandService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CommandService_Factory() { return new CommandService(i0.ɵɵinject(i1.ApiService), i0.ɵɵinject(i2.TranslationService)); }, token: CommandService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    CommandService.prototype.locationCache;
    /**
     * @type {?}
     * @private
     */
    CommandService.prototype.apiService;
    /**
     * @type {?}
     * @private
     */
    CommandService.prototype.translateService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3NvZS1jbGllbnQtc2hhcmVkLyIsInNvdXJjZXMiOlsic2hhcmVkL3NlcnZpY2VzL2NvbW1hbmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7OztBQUszRCxNQUFNLE9BQU8sY0FBYzs7Ozs7SUFFekIsWUFBb0IsVUFBc0IsRUFBVSxnQkFBb0M7UUFBcEUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBb0I7UUFFaEYsa0JBQWEsR0FBMEIsRUFBRSxDQUFDO0lBRjBDLENBQUM7Ozs7Ozs7O0lBS3RGLElBQUksQ0FBQyxJQUFZLEVBQUUsS0FBYSxFQUFFLFFBQTBCO1FBQ2pFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDaEUsQ0FBQzs7O1lBWkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBTlEsVUFBVTtZQUVWLGtCQUFrQjs7Ozs7Ozs7SUFTekIsdUNBQWtEOzs7OztJQUZ0QyxvQ0FBOEI7Ozs7O0lBQUUsMENBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi9hcGkuc2VydmljZSc7XHJcbmltcG9ydCB7IElDb21tYW5kQ29udHJhY3QgfSBmcm9tICcuLi9pbnRlcmZhY2VzL0lDb21tYW5kQ29udHJhY3QnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICcuL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29tbWFuZFNlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaVNlcnZpY2U6IEFwaVNlcnZpY2UsIHByaXZhdGUgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRpb25TZXJ2aWNlKSB7IH1cclxuXHJcbiAgcHJpdmF0ZSBsb2NhdGlvbkNhY2hlOiB7IFtpZDogc3RyaW5nXTogYW55IH0gPSB7fTtcclxuICAvLyBUT0RPOiB3cml0ZSBjYWxsaW5nIHF1ZXJ5IG1ldGhvZCB1c2luZyBJQ29tbWFuZENvbnRyYWN0XHJcblxyXG4gIHB1YmxpYyBwb3N0KHpvbmU6IHN0cmluZywgcm91dGU6IHN0cmluZywgY29udHJhY3Q6IElDb21tYW5kQ29udHJhY3QpIHtcclxuICAgIHJldHVybiB0aGlzLmFwaVNlcnZpY2UucG9zdCh6b25lLCByb3V0ZSwgdW5kZWZpbmVkLCBjb250cmFjdCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=