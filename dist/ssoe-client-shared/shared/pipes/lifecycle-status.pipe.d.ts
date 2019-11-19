import { PipeTransform } from '@angular/core';
export declare class LifecycleStatusPipe implements PipeTransform {
    statuses: {
        1: string;
        2: string;
        4: string;
        8: string;
        16: string;
        32: string;
        64: string;
        128: string;
        256: string;
        512: string;
    };
    constructor();
    transform(value: any, args?: any): any;
}
