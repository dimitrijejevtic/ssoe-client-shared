import * as cloneDeep from 'lodash/cloneDeep';
// @dynamic
export class Utils {
    public static isNullEmptyOrUndefined(value) {
        return value === null || value === '' || typeof value === 'undefined' || value === 'null';
    }

    public static isNumber(value) {
        return typeof value === 'number' && isFinite(value);
    }

    public static deepClone(source): any {
      return cloneDeep(source);
    }

    public static trimLastComma(str: string) {
      str = str.replace(/,\s*$/, '');
      return str;
    }

    public static trimLastSlash(str: string) {
      return str.replace(/\/$/, '');
    }

    public static sum(key, array) {
        return array.reduce((a, b) => a + (b[key] || 0), 0);
    }

    public static newTechnicalNumber(): string {
      // tslint:disable-next-line: only-arrow-functions
      return 'xxxxxxxx'.replace(/[xy]/g, function(c) {
        // tslint:disable:one-variable-per-declaration
        // tslint:disable: no-bitwise
        const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }

    public static regexMatch(regex: RegExp, testString: string) {
      const exc = regex.exec(testString);
      if (exc !== null && exc.find(x => x === testString) !== null)
        return true;
      else return false;
    }
}


