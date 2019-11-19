/**
 * @fileoverview added by tsickle
 * Generated from: shared/services/translation.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Utils } from '../extensions/utils';
import { ApiService } from './api.service';
import { tap } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "./api.service";
var TranslationKeyContract = /** @class */ (function () {
    function TranslationKeyContract() {
    }
    return TranslationKeyContract;
}());
export { TranslationKeyContract };
if (false) {
    /** @type {?} */
    TranslationKeyContract.prototype.key;
    /** @type {?} */
    TranslationKeyContract.prototype.value;
}
var TranslationService = /** @class */ (function () {
    function TranslationService(apiService) {
        this.apiService = apiService;
        this.translations = {};
        this.cultureChange = new Subject();
    }
    /**
     * @param {?} code
     * @return {?}
     */
    TranslationService.prototype.setCultureCode = /**
     * @param {?} code
     * @return {?}
     */
    function (code) {
        this._cultureCode = code;
        this.cultureCode = Date.now();
    };
    /**
     * @return {?}
     */
    TranslationService.prototype.getCultureCode = /**
     * @return {?}
     */
    function () {
        return this._cultureCode;
    };
    /**
     * @param {?=} cultureCode
     * @return {?}
     */
    TranslationService.prototype.getTranslations = /**
     * @param {?=} cultureCode
     * @return {?}
     */
    function (cultureCode) {
        var _this = this;
        /** @type {?} */
        var params = new HttpParams();
        if (cultureCode !== undefined)
            params = params.append('cultureCode', cultureCode);
        return this.apiService.get('common', 'getTranslations', params).pipe(tap((/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            /** @type {?} */
            var keyarray = [];
            for (var index = 0; index < x.value.length; index++) {
                /** @type {?} */
                var element = x.value[index];
                keyarray.push({ key: element.key, value: element.value });
            }
            _this.setTranslations(keyarray);
            _this.cultureChange.next();
            _this.cultureCode = Date.now();
        })));
    };
    /**
     * @param {?} trans
     * @return {?}
     */
    TranslationService.prototype.setTranslations = /**
     * @param {?} trans
     * @return {?}
     */
    function (trans) {
        this.translations = {};
        for (var index = 0; index < trans.length; index++) {
            /** @type {?} */
            var element = trans[index];
            this.translations[element.key] = element.value;
        }
        localStorage.setItem('translations', JSON.stringify(this.translations));
    };
    /**
     * @param {?} key
     * @return {?}
     */
    TranslationService.prototype.getForKey = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var res = key;
        if (Utils.isNullEmptyOrUndefined(key) || key === '-')
            return key;
        /** @type {?} */
        var r = this.translations[key];
        if (!Utils.isNullEmptyOrUndefined(r))
            res = r;
        else {
            console.log(key);
            this.translations[key] = '[' + key + ']';
            res = '[' + key + ']';
        }
        return res;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    TranslationService.prototype.getForKeyByObject = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var res = key;
        if (Utils.isNullEmptyOrUndefined(key) || key === '-')
            return key;
        /** @type {?} */
        var r = this.translations[key];
        if (!Utils.isNullEmptyOrUndefined(r))
            res = r;
        else {
            /** @type {?} */
            var newKey = key.split('_')[1];
            /** @type {?} */
            var keyValue = this.translations[newKey];
            res = keyValue;
        }
        return res;
    };
    /**
     * @return {?}
     */
    TranslationService.prototype.loadStorage = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var local = localStorage.getItem('translations');
        if (local !== undefined && local !== null) {
            /** @type {?} */
            var obj = JSON.parse(local);
            this.translations = obj;
        }
    };
    TranslationService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    TranslationService.ctorParameters = function () { return [
        { type: ApiService }
    ]; };
    /** @nocollapse */ TranslationService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function TranslationService_Factory() { return new TranslationService(i0.ɵɵinject(i1.ApiService)); }, token: TranslationService, providedIn: "root" });
    return TranslationService;
}());
export { TranslationService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    TranslationService.prototype.translations;
    /** @type {?} */
    TranslationService.prototype.cultureCode;
    /**
     * @type {?}
     * @private
     */
    TranslationService.prototype._cultureCode;
    /** @type {?} */
    TranslationService.prototype.cultureChange;
    /**
     * @type {?}
     * @private
     */
    TranslationService.prototype.apiService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Nzb2UtY2xpZW50LXNoYXJlZC8iLCJzb3VyY2VzIjpbInNoYXJlZC9zZXJ2aWNlcy90cmFuc2xhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDNUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7OztBQUVsRDtJQUFBO0lBR0EsQ0FBQztJQUFELDZCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQyxxQ0FBWTs7SUFDWix1Q0FBYzs7QUFHaEI7SUFZRSw0QkFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN4QyxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7SUFDckMsQ0FBQzs7Ozs7SUFFRCwyQ0FBYzs7OztJQUFkLFVBQWUsSUFBWTtRQUN6QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNoQyxDQUFDOzs7O0lBQ0QsMkNBQWM7OztJQUFkO1FBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRUQsNENBQWU7Ozs7SUFBZixVQUFnQixXQUFZO1FBQTVCLGlCQWNDOztZQWJLLE1BQU0sR0FBRyxJQUFJ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LFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQztZQUMxQyxHQUFHLEdBQUcsUUFBUSxDQUFDO1NBQ2xCO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOzs7O0lBRUQsd0NBQVc7OztJQUFYOztZQUNRLEtBQUssR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQztRQUNsRCxJQUFJLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLElBQUksRUFBRTs7Z0JBQ25DLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUM3QixJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQztTQUN6QjtJQUNILENBQUM7O2dCQXRGRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVpRLFVBQVU7Ozs2QkFGbkI7Q0FtR0MsQUF2RkQsSUF1RkM7U0FwRlksa0JBQWtCOzs7Ozs7SUFFN0IsMENBQWdEOztJQUVoRCx5Q0FBMkI7Ozs7O0lBQzNCLDBDQUE2Qjs7SUFFN0IsMkNBQTRCOzs7OztJQUVoQix3Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi4vZXh0ZW5zaW9ucy91dGlscyc7XHJcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuL2FwaS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRpb25LZXlDb250cmFjdCB7XHJcbiAga2V5OiBzdHJpbmc7XHJcbiAgdmFsdWU6IHN0cmluZztcclxufVxyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRpb25TZXJ2aWNlIHtcclxuXHJcbiAgcHJpdmF0ZSB0cmFuc2xhdGlvbnM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XHJcblxyXG4gIHB1YmxpYyBjdWx0dXJlQ29kZTogbnVtYmVyO1xyXG4gIHByaXZhdGUgX2N1bHR1cmVDb2RlOiBudW1iZXI7XHJcblxyXG4gIGN1bHR1cmVDaGFuZ2U6IFN1YmplY3Q8YW55PjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGlTZXJ2aWNlOiBBcGlTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLnRyYW5zbGF0aW9ucyA9IHt9O1xyXG4gICAgdGhpcy5jdWx0dXJlQ2hhbmdlID0gbmV3IFN1YmplY3QoKTtcclxuICB9XHJcblxyXG4gIHNldEN1bHR1cmVDb2RlKGNvZGU6IG51bWJlcikge1xyXG4gICAgdGhpcy5fY3VsdHVyZUNvZGUgPSBjb2RlO1xyXG4gICAgdGhpcy5jdWx0dXJlQ29kZSA9IERhdGUubm93KCk7XHJcbiAgfVxyXG4gIGdldEN1bHR1cmVDb2RlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2N1bHR1cmVDb2RlO1xyXG4gIH1cclxuXHJcbiAgZ2V0VHJhbnNsYXRpb25zKGN1bHR1cmVDb2RlPykge1xyXG4gICAgbGV0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCk7XHJcbiAgICBpZiAoY3VsdHVyZUNvZGUgIT09IHVuZGVmaW5lZClcclxuICAgICAgcGFyYW1zID0gcGFyYW1zLmFwcGVuZCgnY3VsdHVyZUNvZGUnLCBjdWx0dXJlQ29kZSk7XHJcbiAgICByZXR1cm4gdGhpcy5hcGlTZXJ2aWNlLmdldCgnY29tbW9uJywgJ2dldFRyYW5zbGF0aW9ucycsIHBhcmFtcykucGlwZSh0YXAoeCA9PiB7XHJcbiAgICAgIGNvbnN0IGtleWFycmF5ID0gW107XHJcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB4LnZhbHVlLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB4LnZhbHVlW2luZGV4XTtcclxuICAgICAgICBrZXlhcnJheS5wdXNoKHsga2V5OiBlbGVtZW50LmtleSwgdmFsdWU6IGVsZW1lbnQudmFsdWUgfSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZXRUcmFuc2xhdGlvbnMoa2V5YXJyYXkpO1xyXG4gICAgICB0aGlzLmN1bHR1cmVDaGFuZ2UubmV4dCgpO1xyXG4gICAgICB0aGlzLmN1bHR1cmVDb2RlID0gRGF0ZS5ub3coKTtcclxuICAgIH0pKTtcclxuICB9XHJcblxyXG4gICBzZXRUcmFuc2xhdGlvbnModHJhbnM6IFRyYW5zbGF0aW9uS2V5Q29udHJhY3RbXSkge1xyXG4gICAgdGhpcy50cmFuc2xhdGlvbnMgPSB7fTtcclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0cmFucy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgY29uc3QgZWxlbWVudCA9IHRyYW5zW2luZGV4XTtcclxuICAgICAgdGhpcy50cmFuc2xhdGlvbnNbZWxlbWVudC5rZXldID0gZWxlbWVudC52YWx1ZTtcclxuICAgIH1cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0cmFuc2xhdGlvbnMnLCBKU09OLnN0cmluZ2lmeSh0aGlzLnRyYW5zbGF0aW9ucykpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Rm9yS2V5KGtleTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGxldCByZXMgPSBrZXk7XHJcbiAgICBpZiAoVXRpbHMuaXNOdWxsRW1wdHlPclVuZGVmaW5lZChrZXkpIHx8IGtleSA9PT0gJy0nKVxyXG4gICAgICByZXR1cm4ga2V5O1xyXG4gICAgY29uc3QgciA9IHRoaXMudHJhbnNsYXRpb25zW2tleV07XHJcbiAgICBpZiAoIVV0aWxzLmlzTnVsbEVtcHR5T3JVbmRlZmluZWQocikpXHJcbiAgICAgIHJlcyA9IHI7XHJcbiAgICBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coa2V5KTtcclxuICAgICAgdGhpcy50cmFuc2xhdGlvbnNba2V5XSA9ICdbJyArIGtleSArICddJztcclxuICAgICAgcmVzID0gJ1snICsga2V5ICsgJ10nO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcztcclxuICB9XHJcblxyXG4gIGdldEZvcktleUJ5T2JqZWN0KGtleTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGxldCByZXMgPSBrZXk7XHJcbiAgICBpZiAoVXRpbHMuaXNOdWxsRW1wdHlPclVuZGVmaW5lZChrZXkpIHx8IGtleSA9PT0gJy0nKVxyXG4gICAgICByZXR1cm4ga2V5O1xyXG4gICAgY29uc3QgciA9IHRoaXMudHJhbnNsYXRpb25zW2tleV07XHJcbiAgICBpZiAoIVV0aWxzLmlzTnVsbEVtcHR5T3JVbmRlZmluZWQocikpXHJcbiAgICAgIHJlcyA9IHI7XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBjb25zdCBuZXdLZXkgPSBrZXkuc3BsaXQoJ18nKVsxXTtcclxuICAgICAgICBjb25zdCBrZXlWYWx1ZSA9IHRoaXMudHJhbnNsYXRpb25zW25ld0tleV07XHJcbiAgICAgICAgcmVzID0ga2V5VmFsdWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzO1xyXG4gIH1cclxuXHJcbiAgbG9hZFN0b3JhZ2UoKSB7XHJcbiAgICBjb25zdCBsb2NhbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0cmFuc2xhdGlvbnMnKTtcclxuICAgIGlmIChsb2NhbCAhPT0gdW5kZWZpbmVkICYmIGxvY2FsICE9PSBudWxsKSB7XHJcbiAgICAgIGNvbnN0IG9iaiA9IEpTT04ucGFyc2UobG9jYWwpO1xyXG4gICAgICB0aGlzLnRyYW5zbGF0aW9ucyA9IG9iajtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19