/**
 * @fileoverview added by tsickle
 * Generated from: shared/interfaces/IQueryContract.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Utils } from '../extensions/utils';
/**
 * @abstract
 */
export class IQueryContract {
    /**
     * @param {?} skip
     * @param {?} top
     */
    constructor(skip, top) {
        if (Utils.isNullEmptyOrUndefined(skip))
            this.skip = 0;
        if (Utils.isNullEmptyOrUndefined(top))
            this.top = 10;
    }
}
if (false) {
    /** @type {?} */
    IQueryContract.prototype.skip;
    /** @type {?} */
    IQueryContract.prototype.top;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSVF1ZXJ5Q29udHJhY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zc29lLWNsaWVudC1zaGFyZWQvIiwic291cmNlcyI6WyJzaGFyZWQvaW50ZXJmYWNlcy9JUXVlcnlDb250cmFjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7OztBQUU1QyxNQUFNLE9BQWdCLGNBQWM7Ozs7O0lBSWxDLFlBQVksSUFBWSxFQUFFLEdBQVc7UUFDbkMsSUFBSSxLQUFLLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLElBQUksS0FBSyxDQUFDLHNCQUFzQixDQUFDLEdBQUcsQ0FBQztZQUNuQyxJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztJQUNsQixDQUFDO0NBQ0Y7OztJQVRDLDhCQUFhOztJQUNiLDZCQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXRpbHMgfSBmcm9tICcuLi9leHRlbnNpb25zL3V0aWxzJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBJUXVlcnlDb250cmFjdCB7XHJcbiAgc2tpcDogbnVtYmVyO1xyXG4gIHRvcDogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihza2lwOiBudW1iZXIsIHRvcDogbnVtYmVyKSB7XHJcbiAgICBpZiAoVXRpbHMuaXNOdWxsRW1wdHlPclVuZGVmaW5lZChza2lwKSlcclxuICAgICAgdGhpcy5za2lwID0gMDtcclxuICAgIGlmIChVdGlscy5pc051bGxFbXB0eU9yVW5kZWZpbmVkKHRvcCkpXHJcbiAgICAgIHRoaXMudG9wID0gMTA7XHJcbiAgfVxyXG59XHJcbiJdfQ==