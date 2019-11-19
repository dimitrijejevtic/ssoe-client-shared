export declare class Utils {
    static isNullEmptyOrUndefined(value: any): boolean;
    static isNumber(value: any): boolean;
    static deepClone(source: any): any;
    static trimLastComma(str: string): string;
    static trimLastSlash(str: string): string;
    static sum(key: any, array: any): any;
    static newTechnicalNumber(): string;
    static regexMatch(regex: RegExp, testString: string): boolean;
}
