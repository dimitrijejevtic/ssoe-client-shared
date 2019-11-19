/**
 * @fileoverview added by tsickle
 * Generated from: shared/extensions/utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as cloneDeep from 'lodash/cloneDeep';
// @dynamic
var 
// @dynamic
Utils = /** @class */ (function () {
    function Utils() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    Utils.isNullEmptyOrUndefined = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value === null || value === '' || typeof value === 'undefined' || value === 'null';
    };
    /**
     * @param {?} value
     * @return {?}
     */
    Utils.isNumber = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return typeof value === 'number' && isFinite(value);
    };
    /**
     * @param {?} source
     * @return {?}
     */
    Utils.deepClone = /**
     * @param {?} source
     * @return {?}
     */
    function (source) {
        return cloneDeep(source);
    };
    /**
     * @param {?} str
     * @return {?}
     */
    Utils.trimLastComma = /**
     * @param {?} str
     * @return {?}
     */
    function (str) {
        str = str.replace(/,\s*$/, '');
        return str;
    };
    /**
     * @param {?} str
     * @return {?}
     */
    Utils.trimLastSlash = /**
     * @param {?} str
     * @return {?}
     */
    function (str) {
        return str.replace(/\/$/, '');
    };
    /**
     * @param {?} key
     * @param {?} array
     * @return {?}
     */
    Utils.sum = /**
     * @param {?} key
     * @param {?} array
     * @return {?}
     */
    function (key, array) {
        return array.reduce((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) { return a + (b[key] || 0); }), 0);
    };
    /**
     * @return {?}
     */
    Utils.newTechnicalNumber = /**
     * @return {?}
     */
    function () {
        // tslint:disable-next-line: only-arrow-functions
        return 'xxxxxxxx'.replace(/[xy]/g, (/**
         * @param {?} c
         * @return {?}
         */
        function (c) {
            // tslint:disable:one-variable-per-declaration
            // tslint:disable: no-bitwise
            /** @type {?} */
            var r = Math.random() * 16 | 0;
            /** @type {?} */
            var v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        }));
    };
    /**
     * @param {?} regex
     * @param {?} testString
     * @return {?}
     */
    Utils.regexMatch = /**
     * @param {?} regex
     * @param {?} testString
     * @return {?}
     */
    function (regex, testString) {
        /** @type {?} */
        var exc = regex.exec(testString);
        if (exc !== null && exc.find((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x === testString; })) !== null)
            return true;
        else
            return false;
    };
    return Utils;
}());
// @dynamic
export { Utils };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zc29lLWNsaWVudC1zaGFyZWQvIiwic291cmNlcyI6WyJzaGFyZWQvZXh0ZW5zaW9ucy91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sS0FBSyxTQUFTLE1BQU0sa0JBQWtCLENBQUM7O0FBRTlDOzs7SUFBQTtJQTBDQSxDQUFDOzs7OztJQXpDaUIsNEJBQXNCOzs7O0lBQXBDLFVBQXFDLEtBQUs7UUFDdEMsT0FBTyxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxFQUFFLElBQUksT0FBTyxLQUFLLEtBQUssV0FBVyxJQUFJLEtBQUssS0FBSyxNQUFNLENBQUM7SUFDOUYsQ0FBQzs7Ozs7SUFFYSxjQUFROzs7O0lBQXRCLFVBQXVCLEtBQUs7UUFDeEIsT0FBTyxPQUFPLEtBQUssS0FBSyxRQUFRLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hELENBQUM7Ozs7O0lBRWEsZUFBUzs7OztJQUF2QixVQUF3QixNQUFNO1FBQzVCLE9BQU8sU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRWEsbUJBQWE7Ozs7SUFBM0IsVUFBNEIsR0FBVztRQUNyQyxHQUFHLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDL0IsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOzs7OztJQUVhLG1CQUFhOzs7O0lBQTNCLFVBQTRCLEdBQVc7UUFDckMsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7Ozs7SUFFYSxTQUFHOzs7OztJQUFqQixVQUFrQixHQUFHLEVBQUUsS0FBSztRQUN4QixPQUFPLEtBQUssQ0FBQyxNQUFNOzs7OztRQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBakIsQ0FBaUIsR0FBRSxDQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBRWEsd0JBQWtCOzs7SUFBaEM7UUFDRSxpREFBaUQ7UUFDakQsT0FBTyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU87Ozs7UUFBRSxVQUFTLENBQUM7Ozs7Z0JBR3JDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7O2dCQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7WUFDckUsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3hCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBRWEsZ0JBQVU7Ozs7O0lBQXhCLFVBQXlCLEtBQWEsRUFBRSxVQUFrQjs7WUFDbEQsR0FBRyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ2xDLElBQUksR0FBRyxLQUFLLElBQUksSUFBSSxHQUFHLENBQUMsSUFBSTs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxLQUFLLFVBQVUsRUFBaEIsQ0FBZ0IsRUFBQyxLQUFLLElBQUk7WUFDMUQsT0FBTyxJQUFJLENBQUM7O1lBQ1QsT0FBTyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUNMLFlBQUM7QUFBRCxDQUFDLEFBMUNELElBMENDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY2xvbmVEZWVwIGZyb20gJ2xvZGFzaC9jbG9uZURlZXAnO1xyXG4vLyBAZHluYW1pY1xyXG5leHBvcnQgY2xhc3MgVXRpbHMge1xyXG4gICAgcHVibGljIHN0YXRpYyBpc051bGxFbXB0eU9yVW5kZWZpbmVkKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSAnJyB8fCB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnIHx8IHZhbHVlID09PSAnbnVsbCc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpc051bWJlcih2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIGlzRmluaXRlKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGRlZXBDbG9uZShzb3VyY2UpOiBhbnkge1xyXG4gICAgICByZXR1cm4gY2xvbmVEZWVwKHNvdXJjZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyB0cmltTGFzdENvbW1hKHN0cjogc3RyaW5nKSB7XHJcbiAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKC8sXFxzKiQvLCAnJyk7XHJcbiAgICAgIHJldHVybiBzdHI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyB0cmltTGFzdFNsYXNoKHN0cjogc3RyaW5nKSB7XHJcbiAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFwvJC8sICcnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHN1bShrZXksIGFycmF5KSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5LnJlZHVjZSgoYSwgYikgPT4gYSArIChiW2tleV0gfHwgMCksIDApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbmV3VGVjaG5pY2FsTnVtYmVyKCk6IHN0cmluZyB7XHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogb25seS1hcnJvdy1mdW5jdGlvbnNcclxuICAgICAgcmV0dXJuICd4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbihjKSB7XHJcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvblxyXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlOiBuby1iaXR3aXNlXHJcbiAgICAgICAgY29uc3QgciA9IE1hdGgucmFuZG9tKCkgKiAxNiB8IDAsIHYgPSBjID09PSAneCcgPyByIDogKHIgJiAweDMgfCAweDgpO1xyXG4gICAgICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByZWdleE1hdGNoKHJlZ2V4OiBSZWdFeHAsIHRlc3RTdHJpbmc6IHN0cmluZykge1xyXG4gICAgICBjb25zdCBleGMgPSByZWdleC5leGVjKHRlc3RTdHJpbmcpO1xyXG4gICAgICBpZiAoZXhjICE9PSBudWxsICYmIGV4Yy5maW5kKHggPT4geCA9PT0gdGVzdFN0cmluZykgIT09IG51bGwpXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIGVsc2UgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIl19