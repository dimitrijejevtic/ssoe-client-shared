/**
 * @fileoverview added by tsickle
 * Generated from: shared/extensions/utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as cloneDeep from 'lodash/cloneDeep';
// @dynamic
export class Utils {
    /**
     * @param {?} value
     * @return {?}
     */
    static isNullEmptyOrUndefined(value) {
        return value === null || value === '' || typeof value === 'undefined' || value === 'null';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    static isNumber(value) {
        return typeof value === 'number' && isFinite(value);
    }
    /**
     * @param {?} source
     * @return {?}
     */
    static deepClone(source) {
        return cloneDeep(source);
    }
    /**
     * @param {?} str
     * @return {?}
     */
    static trimLastComma(str) {
        str = str.replace(/,\s*$/, '');
        return str;
    }
    /**
     * @param {?} str
     * @return {?}
     */
    static trimLastSlash(str) {
        return str.replace(/\/$/, '');
    }
    /**
     * @param {?} key
     * @param {?} array
     * @return {?}
     */
    static sum(key, array) {
        return array.reduce((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => a + (b[key] || 0)), 0);
    }
    /**
     * @return {?}
     */
    static newTechnicalNumber() {
        // tslint:disable-next-line: only-arrow-functions
        return 'xxxxxxxx'.replace(/[xy]/g, (/**
         * @param {?} c
         * @return {?}
         */
        function (c) {
            // tslint:disable:one-variable-per-declaration
            // tslint:disable: no-bitwise
            /** @type {?} */
            const r = Math.random() * 16 | 0;
            /** @type {?} */
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        }));
    }
    /**
     * @param {?} regex
     * @param {?} testString
     * @return {?}
     */
    static regexMatch(regex, testString) {
        /** @type {?} */
        const exc = regex.exec(testString);
        if (exc !== null && exc.find((/**
         * @param {?} x
         * @return {?}
         */
        x => x === testString)) !== null)
            return true;
        else
            return false;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zc29lLWNsaWVudC1zaGFyZWQvIiwic291cmNlcyI6WyJzaGFyZWQvZXh0ZW5zaW9ucy91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sS0FBSyxTQUFTLE1BQU0sa0JBQWtCLENBQUM7O0FBRTlDLE1BQU0sT0FBTyxLQUFLOzs7OztJQUNQLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLO1FBQ3RDLE9BQU8sS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssRUFBRSxJQUFJLE9BQU8sS0FBSyxLQUFLLFdBQVcsSUFBSSxLQUFLLEtBQUssTUFBTSxDQUFDO0lBQzlGLENBQUM7Ozs7O0lBRU0sTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLO1FBQ3hCLE9BQU8sT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7OztJQUVNLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTTtRQUM1QixPQUFPLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7OztJQUVNLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBVztRQUNyQyxHQUFHLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDL0IsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOzs7OztJQUVNLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBVztRQUNyQyxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7OztJQUVNLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUs7UUFDeEIsT0FBTyxLQUFLLENBQUMsTUFBTTs7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRSxDQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBRU0sTUFBTSxDQUFDLGtCQUFrQjtRQUM5QixpREFBaUQ7UUFDakQsT0FBTyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU87Ozs7UUFBRSxVQUFTLENBQUM7Ozs7a0JBR3JDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7O2tCQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7WUFDckUsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3hCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBRU0sTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFhLEVBQUUsVUFBa0I7O2NBQ2xELEdBQUcsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUNsQyxJQUFJLEdBQUcsS0FBSyxJQUFJLElBQUksR0FBRyxDQUFDLElBQUk7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxVQUFVLEVBQUMsS0FBSyxJQUFJO1lBQzFELE9BQU8sSUFBSSxDQUFDOztZQUNULE9BQU8sS0FBSyxDQUFDO0lBQ3BCLENBQUM7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNsb25lRGVlcCBmcm9tICdsb2Rhc2gvY2xvbmVEZWVwJztcclxuLy8gQGR5bmFtaWNcclxuZXhwb3J0IGNsYXNzIFV0aWxzIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgaXNOdWxsRW1wdHlPclVuZGVmaW5lZCh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gJycgfHwgdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJyB8fCB2YWx1ZSA9PT0gJ251bGwnO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNOdW1iZXIodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiBpc0Zpbml0ZSh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBkZWVwQ2xvbmUoc291cmNlKTogYW55IHtcclxuICAgICAgcmV0dXJuIGNsb25lRGVlcChzb3VyY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgdHJpbUxhc3RDb21tYShzdHI6IHN0cmluZykge1xyXG4gICAgICBzdHIgPSBzdHIucmVwbGFjZSgvLFxccyokLywgJycpO1xyXG4gICAgICByZXR1cm4gc3RyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgdHJpbUxhc3RTbGFzaChzdHI6IHN0cmluZykge1xyXG4gICAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcLyQvLCAnJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzdW0oa2V5LCBhcnJheSkge1xyXG4gICAgICAgIHJldHVybiBhcnJheS5yZWR1Y2UoKGEsIGIpID0+IGEgKyAoYltrZXldIHx8IDApLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG5ld1RlY2huaWNhbE51bWJlcigpOiBzdHJpbmcge1xyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG9ubHktYXJyb3ctZnVuY3Rpb25zXHJcbiAgICAgIHJldHVybiAneHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24oYykge1xyXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb25cclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZTogbm8tYml0d2lzZVxyXG4gICAgICAgIGNvbnN0IHIgPSBNYXRoLnJhbmRvbSgpICogMTYgfCAwLCB2ID0gYyA9PT0gJ3gnID8gciA6IChyICYgMHgzIHwgMHg4KTtcclxuICAgICAgICByZXR1cm4gdi50b1N0cmluZygxNik7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVnZXhNYXRjaChyZWdleDogUmVnRXhwLCB0ZXN0U3RyaW5nOiBzdHJpbmcpIHtcclxuICAgICAgY29uc3QgZXhjID0gcmVnZXguZXhlYyh0ZXN0U3RyaW5nKTtcclxuICAgICAgaWYgKGV4YyAhPT0gbnVsbCAmJiBleGMuZmluZCh4ID0+IHggPT09IHRlc3RTdHJpbmcpICE9PSBudWxsKVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICBlbHNlIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiJdfQ==