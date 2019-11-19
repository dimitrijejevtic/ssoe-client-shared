/**
 * @fileoverview added by tsickle
 * Generated from: shared/pipes/boolean-evaluate-status-to-string.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { TranslationService } from '../services/translation.service';
import { Utils } from '../extensions/utils';
export class BooleanEvaluateStatusToStringPipe {
    /**
     * @param {?} translationService
     */
    constructor(translationService) {
        this.translationService = translationService;
    }
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    transform(value, args) {
        if (Utils.isNullEmptyOrUndefined(value))
            return '-';
        /** @type {?} */
        const key = value ? 'Evaluated (accepted)' : 'Evaluated (rejected)';
        return this.translationService.getForKey(key);
    }
}
BooleanEvaluateStatusToStringPipe.decorators = [
    { type: Pipe, args: [{
                name: 'booleanEvaluateStatusToString'
            },] }
];
/** @nocollapse */
BooleanEvaluateStatusToStringPipe.ctorParameters = () => [
    { type: TranslationService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    BooleanEvaluateStatusToStringPipe.prototype.translationService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhbi1ldmFsdWF0ZS1zdGF0dXMtdG8tc3RyaW5nLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zc29lLWNsaWVudC1zaGFyZWQvIiwic291cmNlcyI6WyJzaGFyZWQvcGlwZXMvYm9vbGVhbi1ldmFsdWF0ZS1zdGF0dXMtdG8tc3RyaW5nLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFLNUMsTUFBTSxPQUFPLGlDQUFpQzs7OztJQUU1QyxZQUFvQixrQkFBc0M7UUFBdEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtJQUMxRCxDQUFDOzs7Ozs7SUFFRCxTQUFTLENBQUMsS0FBYyxFQUFFLElBQVU7UUFDbEMsSUFBSSxLQUFLLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDO1lBQ3JDLE9BQU8sR0FBRyxDQUFDOztjQUVQLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxzQkFBc0I7UUFDbkUsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hELENBQUM7OztZQWRGLElBQUksU0FBQztnQkFDSixJQUFJLEVBQUUsK0JBQStCO2FBQ3RDOzs7O1lBTFEsa0JBQWtCOzs7Ozs7O0lBUWIsK0RBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy90cmFuc2xhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVXRpbHMgfSBmcm9tICcuLi9leHRlbnNpb25zL3V0aWxzJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnYm9vbGVhbkV2YWx1YXRlU3RhdHVzVG9TdHJpbmcnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCb29sZWFuRXZhbHVhdGVTdGF0dXNUb1N0cmluZ1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmFuc2xhdGlvblNlcnZpY2U6IFRyYW5zbGF0aW9uU2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgdHJhbnNmb3JtKHZhbHVlOiBib29sZWFuLCBhcmdzPzogYW55KTogYW55IHtcclxuICAgIGlmIChVdGlscy5pc051bGxFbXB0eU9yVW5kZWZpbmVkKHZhbHVlKSlcclxuICAgICAgcmV0dXJuICctJztcclxuXHJcbiAgICBjb25zdCBrZXkgPSB2YWx1ZSA/ICdFdmFsdWF0ZWQgKGFjY2VwdGVkKScgOiAnRXZhbHVhdGVkIChyZWplY3RlZCknO1xyXG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb25TZXJ2aWNlLmdldEZvcktleShrZXkpO1xyXG4gIH1cclxufVxyXG4iXX0=