/**
 * @fileoverview added by tsickle
 * Generated from: shared/extensions/utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import cloneDeep from 'lodash/cloneDeep';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zc29lLWNsaWVudC1zaGFyZWQvIiwic291cmNlcyI6WyJzaGFyZWQvZXh0ZW5zaW9ucy91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sU0FBUyxNQUFNLGtCQUFrQixDQUFDOztBQUV6QyxNQUFNLE9BQU8sS0FBSzs7Ozs7SUFDUCxNQUFNLENBQUMsc0JBQXNCLENBQUMsS0FBSztRQUN0QyxPQUFPLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLLEVBQUUsSUFBSSxPQUFPLEtBQUssS0FBSyxXQUFXLElBQUksS0FBSyxLQUFLLE1BQU0sQ0FBQztJQUM5RixDQUFDOzs7OztJQUVNLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSztRQUN4QixPQUFPLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7Ozs7SUFFTSxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU07UUFDNUIsT0FBTyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFFTSxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQVc7UUFDckMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQy9CLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7Ozs7SUFFTSxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQVc7UUFDckMsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7Ozs7SUFFTSxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLO1FBQ3hCLE9BQU8sS0FBSyxDQUFDLE1BQU07Ozs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUUsQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7OztJQUVNLE1BQU0sQ0FBQyxrQkFBa0I7UUFDOUIsaURBQWlEO1FBQ2pELE9BQU8sVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPOzs7O1FBQUUsVUFBUyxDQUFDOzs7O2tCQUdyQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDOztrQkFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1lBQ3JFLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN4QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVNLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBYSxFQUFFLFVBQWtCOztjQUNsRCxHQUFHLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDbEMsSUFBSSxHQUFHLEtBQUssSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssVUFBVSxFQUFDLEtBQUssSUFBSTtZQUMxRCxPQUFPLElBQUksQ0FBQzs7WUFDVCxPQUFPLEtBQUssQ0FBQztJQUNwQixDQUFDO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xvbmVEZWVwIGZyb20gJ2xvZGFzaC9jbG9uZURlZXAnO1xyXG4vLyBAZHluYW1pY1xyXG5leHBvcnQgY2xhc3MgVXRpbHMge1xyXG4gICAgcHVibGljIHN0YXRpYyBpc051bGxFbXB0eU9yVW5kZWZpbmVkKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSAnJyB8fCB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnIHx8IHZhbHVlID09PSAnbnVsbCc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpc051bWJlcih2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIGlzRmluaXRlKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGRlZXBDbG9uZShzb3VyY2UpOiBhbnkge1xyXG4gICAgICByZXR1cm4gY2xvbmVEZWVwKHNvdXJjZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyB0cmltTGFzdENvbW1hKHN0cjogc3RyaW5nKSB7XHJcbiAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKC8sXFxzKiQvLCAnJyk7XHJcbiAgICAgIHJldHVybiBzdHI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyB0cmltTGFzdFNsYXNoKHN0cjogc3RyaW5nKSB7XHJcbiAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFwvJC8sICcnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHN1bShrZXksIGFycmF5KSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5LnJlZHVjZSgoYSwgYikgPT4gYSArIChiW2tleV0gfHwgMCksIDApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbmV3VGVjaG5pY2FsTnVtYmVyKCk6IHN0cmluZyB7XHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogb25seS1hcnJvdy1mdW5jdGlvbnNcclxuICAgICAgcmV0dXJuICd4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbihjKSB7XHJcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvblxyXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlOiBuby1iaXR3aXNlXHJcbiAgICAgICAgY29uc3QgciA9IE1hdGgucmFuZG9tKCkgKiAxNiB8IDAsIHYgPSBjID09PSAneCcgPyByIDogKHIgJiAweDMgfCAweDgpO1xyXG4gICAgICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByZWdleE1hdGNoKHJlZ2V4OiBSZWdFeHAsIHRlc3RTdHJpbmc6IHN0cmluZykge1xyXG4gICAgICBjb25zdCBleGMgPSByZWdleC5leGVjKHRlc3RTdHJpbmcpO1xyXG4gICAgICBpZiAoZXhjICE9PSBudWxsICYmIGV4Yy5maW5kKHggPT4geCA9PT0gdGVzdFN0cmluZykgIT09IG51bGwpXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIGVsc2UgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIl19