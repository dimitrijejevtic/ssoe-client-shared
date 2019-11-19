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
export class TranslationKeyContract {
}
if (false) {
    /** @type {?} */
    TranslationKeyContract.prototype.key;
    /** @type {?} */
    TranslationKeyContract.prototype.value;
}
export class TranslationService {
    /**
     * @param {?} apiService
     */
    constructor(apiService) {
        this.apiService = apiService;
        this.translations = {};
        this.cultureChange = new Subject();
    }
    /**
     * @param {?} code
     * @return {?}
     */
    setCultureCode(code) {
        this._cultureCode = code;
        this.cultureCode = Date.now();
    }
    /**
     * @return {?}
     */
    getCultureCode() {
        return this._cultureCode;
    }
    /**
     * @param {?=} cultureCode
     * @return {?}
     */
    getTranslations(cultureCode) {
        /** @type {?} */
        let params = new HttpParams();
        if (cultureCode !== undefined)
            params = params.append('cultureCode', cultureCode);
        return this.apiService.get('common', 'getTranslations', params).pipe(tap((/**
         * @param {?} x
         * @return {?}
         */
        x => {
            /** @type {?} */
            const keyarray = [];
            for (let index = 0; index < x.value.length; index++) {
                /** @type {?} */
                const element = x.value[index];
                keyarray.push({ key: element.key, value: element.value });
            }
            this.setTranslations(keyarray);
            this.cultureChange.next();
            this.cultureCode = Date.now();
        })));
    }
    /**
     * @param {?} trans
     * @return {?}
     */
    setTranslations(trans) {
        this.translations = {};
        for (let index = 0; index < trans.length; index++) {
            /** @type {?} */
            const element = trans[index];
            this.translations[element.key] = element.value;
        }
        localStorage.setItem('translations', JSON.stringify(this.translations));
    }
    /**
     * @param {?} key
     * @return {?}
     */
    getForKey(key) {
        /** @type {?} */
        let res = key;
        if (Utils.isNullEmptyOrUndefined(key) || key === '-')
            return key;
        /** @type {?} */
        const r = this.translations[key];
        if (!Utils.isNullEmptyOrUndefined(r))
            res = r;
        else {
            console.log(key);
            this.translations[key] = '[' + key + ']';
            res = '[' + key + ']';
        }
        return res;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    getForKeyByObject(key) {
        /** @type {?} */
        let res = key;
        if (Utils.isNullEmptyOrUndefined(key) || key === '-')
            return key;
        /** @type {?} */
        const r = this.translations[key];
        if (!Utils.isNullEmptyOrUndefined(r))
            res = r;
        else {
            /** @type {?} */
            const newKey = key.split('_')[1];
            /** @type {?} */
            const keyValue = this.translations[newKey];
            res = keyValue;
        }
        return res;
    }
    /**
     * @return {?}
     */
    loadStorage() {
        /** @type {?} */
        const local = localStorage.getItem('translations');
        if (local !== undefined && local !== null) {
            /** @type {?} */
            const obj = JSON.parse(local);
            this.translations = obj;
        }
    }
}
TranslationService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
TranslationService.ctorParameters = () => [
    { type: ApiService }
];
/** @nocollapse */ TranslationService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function TranslationService_Factory() { return new TranslationService(i0.ɵɵinject(i1.ApiService)); }, token: TranslationService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Nzb2UtY2xpZW50LXNoYXJlZC8iLCJzb3VyY2VzIjpbInNoYXJlZC9zZXJ2aWNlcy90cmFuc2xhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDNUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7OztBQUVsRCxNQUFNLE9BQU8sc0JBQXNCO0NBR2xDOzs7SUFGQyxxQ0FBWTs7SUFDWix1Q0FBYzs7QUFNaEIsTUFBTSxPQUFPLGtCQUFrQjs7OztJQVM3QixZQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3hDLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQUNyQyxDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxJQUFZO1FBQ3pCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFDRCxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLFdBQVk7O1lBQ3RCLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRTtRQUM3QixJQUFJLFdBQVcsS0FBSyxTQUFTO1lBQzNC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O1NBQ2xCO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOzs7O0lBRUQsV0FBVzs7Y0FDSCxLQUFLLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUM7UUFDbEQsSUFBSSxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUU7O2tCQUNuQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDN0IsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7U0FDekI7SUFDSCxDQUFDOzs7WUF0RkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBWlEsVUFBVTs7Ozs7Ozs7SUFlakIsMENBQWdEOztJQUVoRCx5Q0FBMkI7Ozs7O0lBQzNCLDBDQUE2Qjs7SUFFN0IsMkNBQTRCOzs7OztJQUVoQix3Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi4vZXh0ZW5zaW9ucy91dGlscyc7XHJcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuL2FwaS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRpb25LZXlDb250cmFjdCB7XHJcbiAga2V5OiBzdHJpbmc7XHJcbiAgdmFsdWU6IHN0cmluZztcclxufVxyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRpb25TZXJ2aWNlIHtcclxuXHJcbiAgcHJpdmF0ZSB0cmFuc2xhdGlvbnM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XHJcblxyXG4gIHB1YmxpYyBjdWx0dXJlQ29kZTogbnVtYmVyO1xyXG4gIHByaXZhdGUgX2N1bHR1cmVDb2RlOiBudW1iZXI7XHJcblxyXG4gIGN1bHR1cmVDaGFuZ2U6IFN1YmplY3Q8YW55PjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGlTZXJ2aWNlOiBBcGlTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLnRyYW5zbGF0aW9ucyA9IHt9O1xyXG4gICAgdGhpcy5jdWx0dXJlQ2hhbmdlID0gbmV3IFN1YmplY3QoKTtcclxuICB9XHJcblxyXG4gIHNldEN1bHR1cmVDb2RlKGNvZGU6IG51bWJlcikge1xyXG4gICAgdGhpcy5fY3VsdHVyZUNvZGUgPSBjb2RlO1xyXG4gICAgdGhpcy5jdWx0dXJlQ29kZSA9IERhdGUubm93KCk7XHJcbiAgfVxyXG4gIGdldEN1bHR1cmVDb2RlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2N1bHR1cmVDb2RlO1xyXG4gIH1cclxuXHJcbiAgZ2V0VHJhbnNsYXRpb25zKGN1bHR1cmVDb2RlPykge1xyXG4gICAgbGV0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCk7XHJcbiAgICBpZiAoY3VsdHVyZUNvZGUgIT09IHVuZGVmaW5lZClcclxuICAgICAgcGFyYW1zID0gcGFyYW1zLmFwcGVuZCgnY3VsdHVyZUNvZGUnLCBjdWx0dXJlQ29kZSk7XHJcbiAgICByZXR1cm4gdGhpcy5hcGlTZXJ2aWNlLmdldCgnY29tbW9uJywgJ2dldFRyYW5zbGF0aW9ucycsIHBhcmFtcykucGlwZSh0YXAoeCA9PiB7XHJcbiAgICAgIGNvbnN0IGtleWFycmF5ID0gW107XHJcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB4LnZhbHVlLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB4LnZhbHVlW2luZGV4XTtcclxuICAgICAgICBrZXlhcnJheS5wdXNoKHsga2V5OiBlbGVtZW50LmtleSwgdmFsdWU6IGVsZW1lbnQudmFsdWUgfSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZXRUcmFuc2xhdGlvbnMoa2V5YXJyYXkpO1xyXG4gICAgICB0aGlzLmN1bHR1cmVDaGFuZ2UubmV4dCgpO1xyXG4gICAgICB0aGlzLmN1bHR1cmVDb2RlID0gRGF0ZS5ub3coKTtcclxuICAgIH0pKTtcclxuICB9XHJcblxyXG4gICBzZXRUcmFuc2xhdGlvbnModHJhbnM6IFRyYW5zbGF0aW9uS2V5Q29udHJhY3RbXSkge1xyXG4gICAgdGhpcy50cmFuc2xhdGlvbnMgPSB7fTtcclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0cmFucy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgY29uc3QgZWxlbWVudCA9IHRyYW5zW2luZGV4XTtcclxuICAgICAgdGhpcy50cmFuc2xhdGlvbnNbZWxlbWVudC5rZXldID0gZWxlbWVudC52YWx1ZTtcclxuICAgIH1cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0cmFuc2xhdGlvbnMnLCBKU09OLnN0cmluZ2lmeSh0aGlzLnRyYW5zbGF0aW9ucykpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Rm9yS2V5KGtleTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGxldCByZXMgPSBrZXk7XHJcbiAgICBpZiAoVXRpbHMuaXNOdWxsRW1wdHlPclVuZGVmaW5lZChrZXkpIHx8IGtleSA9PT0gJy0nKVxyXG4gICAgICByZXR1cm4ga2V5O1xyXG4gICAgY29uc3QgciA9IHRoaXMudHJhbnNsYXRpb25zW2tleV07XHJcbiAgICBpZiAoIVV0aWxzLmlzTnVsbEVtcHR5T3JVbmRlZmluZWQocikpXHJcbiAgICAgIHJlcyA9IHI7XHJcbiAgICBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coa2V5KTtcclxuICAgICAgdGhpcy50cmFuc2xhdGlvbnNba2V5XSA9ICdbJyArIGtleSArICddJztcclxuICAgICAgcmVzID0gJ1snICsga2V5ICsgJ10nO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcztcclxuICB9XHJcblxyXG4gIGdldEZvcktleUJ5T2JqZWN0KGtleTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGxldCByZXMgPSBrZXk7XHJcbiAgICBpZiAoVXRpbHMuaXNOdWxsRW1wdHlPclVuZGVmaW5lZChrZXkpIHx8IGtleSA9PT0gJy0nKVxyXG4gICAgICByZXR1cm4ga2V5O1xyXG4gICAgY29uc3QgciA9IHRoaXMudHJhbnNsYXRpb25zW2tleV07XHJcbiAgICBpZiAoIVV0aWxzLmlzTnVsbEVtcHR5T3JVbmRlZmluZWQocikpXHJcbiAgICAgIHJlcyA9IHI7XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBjb25zdCBuZXdLZXkgPSBrZXkuc3BsaXQoJ18nKVsxXTtcclxuICAgICAgICBjb25zdCBrZXlWYWx1ZSA9IHRoaXMudHJhbnNsYXRpb25zW25ld0tleV07XHJcbiAgICAgICAgcmVzID0ga2V5VmFsdWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzO1xyXG4gIH1cclxuXHJcbiAgbG9hZFN0b3JhZ2UoKSB7XHJcbiAgICBjb25zdCBsb2NhbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0cmFuc2xhdGlvbnMnKTtcclxuICAgIGlmIChsb2NhbCAhPT0gdW5kZWZpbmVkICYmIGxvY2FsICE9PSBudWxsKSB7XHJcbiAgICAgIGNvbnN0IG9iaiA9IEpTT04ucGFyc2UobG9jYWwpO1xyXG4gICAgICB0aGlzLnRyYW5zbGF0aW9ucyA9IG9iajtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19