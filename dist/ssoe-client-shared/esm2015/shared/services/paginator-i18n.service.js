/**
 * @fileoverview added by tsickle
 * Generated from: shared/services/paginator-i18n.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material';
import { TranslationService } from './translation.service';
import * as i0 from "@angular/core";
import * as i1 from "./translation.service";
export class PaginatorI18nService extends MatPaginatorIntl {
    /**
     * @param {?} translationService
     */
    constructor(translationService) {
        super();
        this.translationService = translationService;
        this.getRangeLabel = (/**
         * @param {?} page
         * @param {?} pageSize
         * @param {?} length
         * @return {?}
         */
        (page, pageSize, length) => {
            if (length === 0 || pageSize === 0) {
                return this.zeroOfLabel + ' ' + length;
            }
            length = Math.max(length, 0);
            /** @type {?} */
            const startIndex = page * pageSize;
            /** @type {?} */
            const endIndex = startIndex < length ?
                Math.min(startIndex + pageSize, length) :
                startIndex + pageSize;
            return startIndex + 1 + ' - ' + endIndex + ' ' + this.ofLabel + ' ' + length;
        });
        this.itemsPerPageLabel = this.translationService.getForKey('Items per page');
        this.nextPageLabel = this.translationService.getForKey('Next page');
        this.ofLabel = this.translationService.getForKey('of');
        this.previousPageLabel = this.translationService.getForKey('Previous page');
        this.firstPageLabel = this.translationService.getForKey('First page');
        this.lastPageLabel = this.translationService.getForKey('Last page');
        this.zeroOfLabel = this.translationService.getForKey('0 of');
        this.changes.next();
        this.translationService.cultureChange.subscribe((/**
         * @param {?} x
         * @return {?}
         */
        x => {
            this.itemsPerPageLabel = this.translationService.getForKey('Items per page');
            this.nextPageLabel = this.translationService.getForKey('Next page');
            this.ofLabel = this.translationService.getForKey('of');
            this.previousPageLabel = this.translationService.getForKey('Previous page');
            this.firstPageLabel = this.translationService.getForKey('First page');
            this.lastPageLabel = this.translationService.getForKey('Last page');
            this.zeroOfLabel = this.translationService.getForKey('0 of');
            this.changes.next();
        }));
    }
}
PaginatorI18nService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
PaginatorI18nService.ctorParameters = () => [
    { type: TranslationService }
];
/** @nocollapse */ PaginatorI18nService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function PaginatorI18nService_Factory() { return new PaginatorI18nService(i0.ɵɵinject(i1.TranslationService)); }, token: PaginatorI18nService, providedIn: "root" });
if (false) {
    /** @type {?} */
    PaginatorI18nService.prototype.itemsPerPageLabel;
    /** @type {?} */
    PaginatorI18nService.prototype.nextPageLabel;
    /** @type {?} */
    PaginatorI18nService.prototype.previousPageLabel;
    /** @type {?} */
    PaginatorI18nService.prototype.firstPageLabel;
    /** @type {?} */
    PaginatorI18nService.prototype.lastPageLabel;
    /** @type {?} */
    PaginatorI18nService.prototype.ofLabel;
    /** @type {?} */
    PaginatorI18nService.prototype.zeroOfLabel;
    /** @type {?} */
    PaginatorI18nService.prototype.getRangeLabel;
    /**
     * @type {?}
     * @private
     */
    PaginatorI18nService.prototype.translationService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdG9yLWkxOG4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Nzb2UtY2xpZW50LXNoYXJlZC8iLCJzb3VyY2VzIjpbInNoYXJlZC9zZXJ2aWNlcy9wYWdpbmF0b3ItaTE4bi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7O0FBSzNELE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxnQkFBZ0I7Ozs7SUFVeEQsWUFBb0Isa0JBQXNDO1FBQ3hELEtBQUssRUFBRSxDQUFDO1FBRFUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQXNCMUQsa0JBQWE7Ozs7OztRQUFHLENBQUMsSUFBWSxFQUFFLFFBQWdCLEVBQUUsTUFBYyxFQUFFLEVBQUU7WUFFakUsSUFBSSxNQUFNLEtBQUssQ0FBQyxJQUFJLFFBQVEsS0FBSyxDQUFDLEVBQUU7Z0JBQ2xDLE9BQU8sSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDO2FBQ3hDO1lBQ0QsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDOztrQkFDdkIsVUFBVSxHQUFHLElBQUksR0FBRyxRQUFROztrQkFDNUIsUUFBUSxHQUFHLFVBQVUsR0FBRyxNQUFNLENBQUMsQ0FBQztnQkFDcEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ3pDLFVBQVUsR0FBRyxRQUFRO1lBQ3ZCLE9BQU8sVUFBVSxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUcsUUFBUSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUM7UUFDL0UsQ0FBQyxFQUFBO1FBL0JDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDN0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsU0FBUzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2xELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDN0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3BFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2RCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUM1RSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDdEUsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3BFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM3RCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3RCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBakNGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQUpRLGtCQUFrQjs7Ozs7SUFPekIsaURBQTBCOztJQUMxQiw2Q0FBc0I7O0lBQ3RCLGlEQUEwQjs7SUFDMUIsOENBQXVCOztJQUN2Qiw2Q0FBc0I7O0lBQ3RCLHVDQUFnQjs7SUFDaEIsMkNBQW9COztJQXdCcEIsNkNBV0M7Ozs7O0lBakNXLGtEQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0UGFnaW5hdG9ySW50bCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHsgVHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi90cmFuc2xhdGlvbi5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBhZ2luYXRvckkxOG5TZXJ2aWNlIGV4dGVuZHMgTWF0UGFnaW5hdG9ySW50bCB7XHJcblxyXG4gIGl0ZW1zUGVyUGFnZUxhYmVsOiBzdHJpbmc7XHJcbiAgbmV4dFBhZ2VMYWJlbDogc3RyaW5nO1xyXG4gIHByZXZpb3VzUGFnZUxhYmVsOiBzdHJpbmc7XHJcbiAgZmlyc3RQYWdlTGFiZWw6IHN0cmluZztcclxuICBsYXN0UGFnZUxhYmVsOiBzdHJpbmc7XHJcbiAgb2ZMYWJlbDogc3RyaW5nO1xyXG4gIHplcm9PZkxhYmVsOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJhbnNsYXRpb25TZXJ2aWNlOiBUcmFuc2xhdGlvblNlcnZpY2UpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLml0ZW1zUGVyUGFnZUxhYmVsID0gdGhpcy50cmFuc2xhdGlvblNlcnZpY2UuZ2V0Rm9yS2V5KCdJdGVtcyBwZXIgcGFnZScpO1xyXG4gICAgdGhpcy5uZXh0UGFnZUxhYmVsID0gdGhpcy50cmFuc2xhdGlvblNlcnZpY2UuZ2V0Rm9yS2V5KCdOZXh0IHBhZ2UnKTtcclxuICAgIHRoaXMub2ZMYWJlbCA9IHRoaXMudHJhbnNsYXRpb25TZXJ2aWNlLmdldEZvcktleSgnb2YnKTtcclxuICAgIHRoaXMucHJldmlvdXNQYWdlTGFiZWwgPSB0aGlzLnRyYW5zbGF0aW9uU2VydmljZS5nZXRGb3JLZXkoJ1ByZXZpb3VzIHBhZ2UnKTtcclxuICAgIHRoaXMuZmlyc3RQYWdlTGFiZWwgPSB0aGlzLnRyYW5zbGF0aW9uU2VydmljZS5nZXRGb3JLZXkoJ0ZpcnN0IHBhZ2UnKTtcclxuICAgIHRoaXMubGFzdFBhZ2VMYWJlbCA9IHRoaXMudHJhbnNsYXRpb25TZXJ2aWNlLmdldEZvcktleSgnTGFzdCBwYWdlJyk7XHJcbiAgICB0aGlzLnplcm9PZkxhYmVsID0gdGhpcy50cmFuc2xhdGlvblNlcnZpY2UuZ2V0Rm9yS2V5KCcwIG9mJyk7XHJcbiAgICB0aGlzLmNoYW5nZXMubmV4dCgpO1xyXG4gICAgdGhpcy50cmFuc2xhdGlvblNlcnZpY2UuY3VsdHVyZUNoYW5nZS5zdWJzY3JpYmUoeCA9PiB7XHJcbiAgICAgIHRoaXMuaXRlbXNQZXJQYWdlTGFiZWwgPSB0aGlzLnRyYW5zbGF0aW9uU2VydmljZS5nZXRGb3JLZXkoJ0l0ZW1zIHBlciBwYWdlJyk7XHJcbiAgICAgIHRoaXMubmV4dFBhZ2VMYWJlbCA9IHRoaXMudHJhbnNsYXRpb25TZXJ2aWNlLmdldEZvcktleSgnTmV4dCBwYWdlJyk7XHJcbiAgICAgIHRoaXMub2ZMYWJlbCA9IHRoaXMudHJhbnNsYXRpb25TZXJ2aWNlLmdldEZvcktleSgnb2YnKTtcclxuICAgICAgdGhpcy5wcmV2aW91c1BhZ2VMYWJlbCA9IHRoaXMudHJhbnNsYXRpb25TZXJ2aWNlLmdldEZvcktleSgnUHJldmlvdXMgcGFnZScpO1xyXG4gICAgICB0aGlzLmZpcnN0UGFnZUxhYmVsID0gdGhpcy50cmFuc2xhdGlvblNlcnZpY2UuZ2V0Rm9yS2V5KCdGaXJzdCBwYWdlJyk7XHJcbiAgICAgIHRoaXMubGFzdFBhZ2VMYWJlbCA9IHRoaXMudHJhbnNsYXRpb25TZXJ2aWNlLmdldEZvcktleSgnTGFzdCBwYWdlJyk7XHJcbiAgICAgIHRoaXMuemVyb09mTGFiZWwgPSB0aGlzLnRyYW5zbGF0aW9uU2VydmljZS5nZXRGb3JLZXkoJzAgb2YnKTtcclxuICAgICAgdGhpcy5jaGFuZ2VzLm5leHQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0UmFuZ2VMYWJlbCA9IChwYWdlOiBudW1iZXIsIHBhZ2VTaXplOiBudW1iZXIsIGxlbmd0aDogbnVtYmVyKSA9PiB7XHJcblxyXG4gICAgaWYgKGxlbmd0aCA9PT0gMCB8fCBwYWdlU2l6ZSA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gdGhpcy56ZXJvT2ZMYWJlbCArICcgJyArIGxlbmd0aDtcclxuICAgIH1cclxuICAgIGxlbmd0aCA9IE1hdGgubWF4KGxlbmd0aCwgMCk7XHJcbiAgICBjb25zdCBzdGFydEluZGV4ID0gcGFnZSAqIHBhZ2VTaXplO1xyXG4gICAgY29uc3QgZW5kSW5kZXggPSBzdGFydEluZGV4IDwgbGVuZ3RoID9cclxuICAgICAgTWF0aC5taW4oc3RhcnRJbmRleCArIHBhZ2VTaXplLCBsZW5ndGgpIDpcclxuICAgICAgc3RhcnRJbmRleCArIHBhZ2VTaXplO1xyXG4gICAgcmV0dXJuIHN0YXJ0SW5kZXggKyAxICsgJyAtICcgKyBlbmRJbmRleCArICcgJyArIHRoaXMub2ZMYWJlbCArICcgJyArIGxlbmd0aDtcclxuICB9XHJcbn1cclxuIl19