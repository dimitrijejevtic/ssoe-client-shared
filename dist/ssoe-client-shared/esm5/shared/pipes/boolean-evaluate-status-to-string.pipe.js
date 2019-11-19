/**
 * @fileoverview added by tsickle
 * Generated from: shared/pipes/boolean-evaluate-status-to-string.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { TranslationService } from '../services/translation.service';
import { Utils } from '../extensions/utils';
var BooleanEvaluateStatusToStringPipe = /** @class */ (function () {
    function BooleanEvaluateStatusToStringPipe(translationService) {
        this.translationService = translationService;
    }
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    BooleanEvaluateStatusToStringPipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    function (value, args) {
        if (Utils.isNullEmptyOrUndefined(value))
            return '-';
        /** @type {?} */
        var key = value ? 'Evaluated (accepted)' : 'Evaluated (rejected)';
        return this.translationService.getForKey(key);
    };
    BooleanEvaluateStatusToStringPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'booleanEvaluateStatusToString'
                },] }
    ];
    /** @nocollapse */
    BooleanEvaluateStatusToStringPipe.ctorParameters = function () { return [
        { type: TranslationService }
    ]; };
    return BooleanEvaluateStatusToStringPipe;
}());
export { BooleanEvaluateStatusToStringPipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    BooleanEvaluateStatusToStringPipe.prototype.translationService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhbi1ldmFsdWF0ZS1zdGF0dXMtdG8tc3RyaW5nLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zc29lLWNsaWVudC1zaGFyZWQvIiwic291cmNlcyI6WyJzaGFyZWQvcGlwZXMvYm9vbGVhbi1ldmFsdWF0ZS1zdGF0dXMtdG8tc3RyaW5nLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFNUM7SUFLRSwyQ0FBb0Isa0JBQXNDO1FBQXRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7SUFDMUQsQ0FBQzs7Ozs7O0lBRUQscURBQVM7Ozs7O0lBQVQsVUFBVSxLQUFjLEVBQUUsSUFBVTtRQUNsQyxJQUFJLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUM7WUFDckMsT0FBTyxHQUFHLENBQUM7O1lBRVAsR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLHNCQUFzQjtRQUNuRSxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7Z0JBZEYsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSwrQkFBK0I7aUJBQ3RDOzs7O2dCQUxRLGtCQUFrQjs7SUFrQjNCLHdDQUFDO0NBQUEsQUFmRCxJQWVDO1NBWlksaUNBQWlDOzs7Ozs7SUFFaEMsK0RBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy90cmFuc2xhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVXRpbHMgfSBmcm9tICcuLi9leHRlbnNpb25zL3V0aWxzJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnYm9vbGVhbkV2YWx1YXRlU3RhdHVzVG9TdHJpbmcnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCb29sZWFuRXZhbHVhdGVTdGF0dXNUb1N0cmluZ1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmFuc2xhdGlvblNlcnZpY2U6IFRyYW5zbGF0aW9uU2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgdHJhbnNmb3JtKHZhbHVlOiBib29sZWFuLCBhcmdzPzogYW55KTogYW55IHtcclxuICAgIGlmIChVdGlscy5pc051bGxFbXB0eU9yVW5kZWZpbmVkKHZhbHVlKSlcclxuICAgICAgcmV0dXJuICctJztcclxuXHJcbiAgICBjb25zdCBrZXkgPSB2YWx1ZSA/ICdFdmFsdWF0ZWQgKGFjY2VwdGVkKScgOiAnRXZhbHVhdGVkIChyZWplY3RlZCknO1xyXG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb25TZXJ2aWNlLmdldEZvcktleShrZXkpO1xyXG4gIH1cclxufVxyXG4iXX0=