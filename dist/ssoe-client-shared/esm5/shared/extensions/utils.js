/**
 * @fileoverview added by tsickle
 * Generated from: shared/extensions/utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import cloneDeep from 'lodash/cloneDeep';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zc29lLWNsaWVudC1zaGFyZWQvIiwic291cmNlcyI6WyJzaGFyZWQvZXh0ZW5zaW9ucy91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sU0FBUyxNQUFNLGtCQUFrQixDQUFDOztBQUV6Qzs7O0lBQUE7SUEwQ0EsQ0FBQzs7Ozs7SUF6Q2lCLDRCQUFzQjs7OztJQUFwQyxVQUFxQyxLQUFLO1FBQ3RDLE9BQU8sS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssRUFBRSxJQUFJLE9BQU8sS0FBSyxLQUFLLFdBQVcsSUFBSSxLQUFLLEtBQUssTUFBTSxDQUFDO0lBQzlGLENBQUM7Ozs7O0lBRWEsY0FBUTs7OztJQUF0QixVQUF1QixLQUFLO1FBQ3hCLE9BQU8sT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7OztJQUVhLGVBQVM7Ozs7SUFBdkIsVUFBd0IsTUFBTTtRQUM1QixPQUFPLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7OztJQUVhLG1CQUFhOzs7O0lBQTNCLFVBQTRCLEdBQVc7UUFDckMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQy9CLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7Ozs7SUFFYSxtQkFBYTs7OztJQUEzQixVQUE0QixHQUFXO1FBQ3JDLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Ozs7O0lBRWEsU0FBRzs7Ozs7SUFBakIsVUFBa0IsR0FBRyxFQUFFLEtBQUs7UUFDeEIsT0FBTyxLQUFLLENBQUMsTUFBTTs7Ozs7UUFBQyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssT0FBQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQWpCLENBQWlCLEdBQUUsQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7OztJQUVhLHdCQUFrQjs7O0lBQWhDO1FBQ0UsaURBQWlEO1FBQ2pELE9BQU8sVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPOzs7O1FBQUUsVUFBUyxDQUFDOzs7O2dCQUdyQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDOztnQkFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1lBQ3JFLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN4QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVhLGdCQUFVOzs7OztJQUF4QixVQUF5QixLQUFhLEVBQUUsVUFBa0I7O1lBQ2xELEdBQUcsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUNsQyxJQUFJLEdBQUcsS0FBSyxJQUFJLElBQUksR0FBRyxDQUFDLElBQUk7Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsS0FBSyxVQUFVLEVBQWhCLENBQWdCLEVBQUMsS0FBSyxJQUFJO1lBQzFELE9BQU8sSUFBSSxDQUFDOztZQUNULE9BQU8sS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFDTCxZQUFDO0FBQUQsQ0FBQyxBQTFDRCxJQTBDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbG9uZURlZXAgZnJvbSAnbG9kYXNoL2Nsb25lRGVlcCc7XHJcbi8vIEBkeW5hbWljXHJcbmV4cG9ydCBjbGFzcyBVdGlscyB7XHJcbiAgICBwdWJsaWMgc3RhdGljIGlzTnVsbEVtcHR5T3JVbmRlZmluZWQodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09ICcnIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdmFsdWUgPT09ICdudWxsJztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzTnVtYmVyKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgaXNGaW5pdGUodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZGVlcENsb25lKHNvdXJjZSk6IGFueSB7XHJcbiAgICAgIHJldHVybiBjbG9uZURlZXAoc291cmNlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHRyaW1MYXN0Q29tbWEoc3RyOiBzdHJpbmcpIHtcclxuICAgICAgc3RyID0gc3RyLnJlcGxhY2UoLyxcXHMqJC8sICcnKTtcclxuICAgICAgcmV0dXJuIHN0cjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHRyaW1MYXN0U2xhc2goc3RyOiBzdHJpbmcpIHtcclxuICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXC8kLywgJycpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc3VtKGtleSwgYXJyYXkpIHtcclxuICAgICAgICByZXR1cm4gYXJyYXkucmVkdWNlKChhLCBiKSA9PiBhICsgKGJba2V5XSB8fCAwKSwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBuZXdUZWNobmljYWxOdW1iZXIoKTogc3RyaW5nIHtcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBvbmx5LWFycm93LWZ1bmN0aW9uc1xyXG4gICAgICByZXR1cm4gJ3h4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uKGMpIHtcclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uXHJcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGU6IG5vLWJpdHdpc2VcclxuICAgICAgICBjb25zdCByID0gTWF0aC5yYW5kb20oKSAqIDE2IHwgMCwgdiA9IGMgPT09ICd4JyA/IHIgOiAociAmIDB4MyB8IDB4OCk7XHJcbiAgICAgICAgcmV0dXJuIHYudG9TdHJpbmcoMTYpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlZ2V4TWF0Y2gocmVnZXg6IFJlZ0V4cCwgdGVzdFN0cmluZzogc3RyaW5nKSB7XHJcbiAgICAgIGNvbnN0IGV4YyA9IHJlZ2V4LmV4ZWModGVzdFN0cmluZyk7XHJcbiAgICAgIGlmIChleGMgIT09IG51bGwgJiYgZXhjLmZpbmQoeCA9PiB4ID09PSB0ZXN0U3RyaW5nKSAhPT0gbnVsbClcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgZWxzZSByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iXX0=