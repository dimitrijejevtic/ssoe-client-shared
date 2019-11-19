/**
 * @fileoverview added by tsickle
 * Generated from: shared/services/paginator-i18n.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material';
import { TranslationService } from './translation.service';
import * as i0 from "@angular/core";
import * as i1 from "./translation.service";
var PaginatorI18nService = /** @class */ (function (_super) {
    tslib_1.__extends(PaginatorI18nService, _super);
    function PaginatorI18nService(translationService) {
        var _this = _super.call(this) || this;
        _this.translationService = translationService;
        _this.getRangeLabel = (/**
         * @param {?} page
         * @param {?} pageSize
         * @param {?} length
         * @return {?}
         */
        function (page, pageSize, length) {
            if (length === 0 || pageSize === 0) {
                return _this.zeroOfLabel + ' ' + length;
            }
            length = Math.max(length, 0);
            /** @type {?} */
            var startIndex = page * pageSize;
            /** @type {?} */
            var endIndex = startIndex < length ?
                Math.min(startIndex + pageSize, length) :
                startIndex + pageSize;
            return startIndex + 1 + ' - ' + endIndex + ' ' + _this.ofLabel + ' ' + length;
        });
        _this.itemsPerPageLabel = _this.translationService.getForKey('Items per page');
        _this.nextPageLabel = _this.translationService.getForKey('Next page');
        _this.ofLabel = _this.translationService.getForKey('of');
        _this.previousPageLabel = _this.translationService.getForKey('Previous page');
        _this.firstPageLabel = _this.translationService.getForKey('First page');
        _this.lastPageLabel = _this.translationService.getForKey('Last page');
        _this.zeroOfLabel = _this.translationService.getForKey('0 of');
        _this.changes.next();
        _this.translationService.cultureChange.subscribe((/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            _this.itemsPerPageLabel = _this.translationService.getForKey('Items per page');
            _this.nextPageLabel = _this.translationService.getForKey('Next page');
            _this.ofLabel = _this.translationService.getForKey('of');
            _this.previousPageLabel = _this.translationService.getForKey('Previous page');
            _this.firstPageLabel = _this.translationService.getForKey('First page');
            _this.lastPageLabel = _this.translationService.getForKey('Last page');
            _this.zeroOfLabel = _this.translationService.getForKey('0 of');
            _this.changes.next();
        }));
        return _this;
    }
    PaginatorI18nService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    PaginatorI18nService.ctorParameters = function () { return [
        { type: TranslationService }
    ]; };
    /** @nocollapse */ PaginatorI18nService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function PaginatorI18nService_Factory() { return new PaginatorI18nService(i0.ɵɵinject(i1.TranslationService)); }, token: PaginatorI18nService, providedIn: "root" });
    return PaginatorI18nService;
}(MatPaginatorIntl));
export { PaginatorI18nService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdG9yLWkxOG4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Nzb2UtY2xpZW50LXNoYXJlZC8iLCJzb3VyY2VzIjpbInNoYXJlZC9zZXJ2aWNlcy9wYWdpbmF0b3ItaTE4bi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7OztBQUUzRDtJQUcwQyxnREFBZ0I7SUFVeEQsOEJBQW9CLGtCQUFzQztRQUExRCxZQUNFLGlCQUFPLFNBbUJSO1FBcEJtQix3QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBc0IxRCxtQkFBYTs7Ozs7O1FBQUcsVUFBQyxJQUFZLEVBQUUsUUFBZ0IsRUFBRSxNQUFjO1lBRTdELElBQUksTUFBTSxLQUFLLENBQUMsSUFBSSxRQUFRLEtBQUssQ0FBQyxFQUFFO2dCQUNsQyxPQUFPLEtBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQzthQUN4QztZQUNELE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQzs7Z0JBQ3ZCLFVBQVUsR0FBRyxJQUFJLEdBQUcsUUFBUTs7Z0JBQzVCLFFBQVEsR0FBRyxVQUFVLEdBQUcsTUFBTSxDQUFDLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUN6QyxVQUFVLEdBQUcsUUFBUTtZQUN2QixPQUFPLFVBQVUsR0FBRyxDQUFDLEdBQUcsS0FBSyxHQUFHLFFBQVEsR0FBRyxHQUFHLEdBQUcsS0FBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDO1FBQy9FLENBQUMsRUFBQTtRQS9CQyxLQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzdFLEtBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNwRSxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkQsS0FBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDNUUsS0FBSSxDQUFDLGNBQWMsR0FBRyxLQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3RFLEtBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNwRSxLQUFJLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0QsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNwQixLQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLENBQUM7WUFDL0MsS0FBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUM3RSxLQUFJLENBQUMsYUFBYSxHQUFHLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDcEUsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZELEtBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQzVFLEtBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUN0RSxLQUFJLENBQUMsYUFBYSxHQUFHLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDcEUsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzdELEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEIsQ0FBQyxFQUFDLENBQUM7O0lBQ0wsQ0FBQzs7Z0JBakNGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBSlEsa0JBQWtCOzs7K0JBRjNCO0NBbURDLEFBL0NELENBRzBDLGdCQUFnQixHQTRDekQ7U0E1Q1ksb0JBQW9COzs7SUFFL0IsaURBQTBCOztJQUMxQiw2Q0FBc0I7O0lBQ3RCLGlEQUEwQjs7SUFDMUIsOENBQXVCOztJQUN2Qiw2Q0FBc0I7O0lBQ3RCLHVDQUFnQjs7SUFDaEIsMkNBQW9COztJQXdCcEIsNkNBV0M7Ozs7O0lBakNXLGtEQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0UGFnaW5hdG9ySW50bCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHsgVHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi90cmFuc2xhdGlvbi5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBhZ2luYXRvckkxOG5TZXJ2aWNlIGV4dGVuZHMgTWF0UGFnaW5hdG9ySW50bCB7XHJcblxyXG4gIGl0ZW1zUGVyUGFnZUxhYmVsOiBzdHJpbmc7XHJcbiAgbmV4dFBhZ2VMYWJlbDogc3RyaW5nO1xyXG4gIHByZXZpb3VzUGFnZUxhYmVsOiBzdHJpbmc7XHJcbiAgZmlyc3RQYWdlTGFiZWw6IHN0cmluZztcclxuICBsYXN0UGFnZUxhYmVsOiBzdHJpbmc7XHJcbiAgb2ZMYWJlbDogc3RyaW5nO1xyXG4gIHplcm9PZkxhYmVsOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJhbnNsYXRpb25TZXJ2aWNlOiBUcmFuc2xhdGlvblNlcnZpY2UpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLml0ZW1zUGVyUGFnZUxhYmVsID0gdGhpcy50cmFuc2xhdGlvblNlcnZpY2UuZ2V0Rm9yS2V5KCdJdGVtcyBwZXIgcGFnZScpO1xyXG4gICAgdGhpcy5uZXh0UGFnZUxhYmVsID0gdGhpcy50cmFuc2xhdGlvblNlcnZpY2UuZ2V0Rm9yS2V5KCdOZXh0IHBhZ2UnKTtcclxuICAgIHRoaXMub2ZMYWJlbCA9IHRoaXMudHJhbnNsYXRpb25TZXJ2aWNlLmdldEZvcktleSgnb2YnKTtcclxuICAgIHRoaXMucHJldmlvdXNQYWdlTGFiZWwgPSB0aGlzLnRyYW5zbGF0aW9uU2VydmljZS5nZXRGb3JLZXkoJ1ByZXZpb3VzIHBhZ2UnKTtcclxuICAgIHRoaXMuZmlyc3RQYWdlTGFiZWwgPSB0aGlzLnRyYW5zbGF0aW9uU2VydmljZS5nZXRGb3JLZXkoJ0ZpcnN0IHBhZ2UnKTtcclxuICAgIHRoaXMubGFzdFBhZ2VMYWJlbCA9IHRoaXMudHJhbnNsYXRpb25TZXJ2aWNlLmdldEZvcktleSgnTGFzdCBwYWdlJyk7XHJcbiAgICB0aGlzLnplcm9PZkxhYmVsID0gdGhpcy50cmFuc2xhdGlvblNlcnZpY2UuZ2V0Rm9yS2V5KCcwIG9mJyk7XHJcbiAgICB0aGlzLmNoYW5nZXMubmV4dCgpO1xyXG4gICAgdGhpcy50cmFuc2xhdGlvblNlcnZpY2UuY3VsdHVyZUNoYW5nZS5zdWJzY3JpYmUoeCA9PiB7XHJcbiAgICAgIHRoaXMuaXRlbXNQZXJQYWdlTGFiZWwgPSB0aGlzLnRyYW5zbGF0aW9uU2VydmljZS5nZXRGb3JLZXkoJ0l0ZW1zIHBlciBwYWdlJyk7XHJcbiAgICAgIHRoaXMubmV4dFBhZ2VMYWJlbCA9IHRoaXMudHJhbnNsYXRpb25TZXJ2aWNlLmdldEZvcktleSgnTmV4dCBwYWdlJyk7XHJcbiAgICAgIHRoaXMub2ZMYWJlbCA9IHRoaXMudHJhbnNsYXRpb25TZXJ2aWNlLmdldEZvcktleSgnb2YnKTtcclxuICAgICAgdGhpcy5wcmV2aW91c1BhZ2VMYWJlbCA9IHRoaXMudHJhbnNsYXRpb25TZXJ2aWNlLmdldEZvcktleSgnUHJldmlvdXMgcGFnZScpO1xyXG4gICAgICB0aGlzLmZpcnN0UGFnZUxhYmVsID0gdGhpcy50cmFuc2xhdGlvblNlcnZpY2UuZ2V0Rm9yS2V5KCdGaXJzdCBwYWdlJyk7XHJcbiAgICAgIHRoaXMubGFzdFBhZ2VMYWJlbCA9IHRoaXMudHJhbnNsYXRpb25TZXJ2aWNlLmdldEZvcktleSgnTGFzdCBwYWdlJyk7XHJcbiAgICAgIHRoaXMuemVyb09mTGFiZWwgPSB0aGlzLnRyYW5zbGF0aW9uU2VydmljZS5nZXRGb3JLZXkoJzAgb2YnKTtcclxuICAgICAgdGhpcy5jaGFuZ2VzLm5leHQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0UmFuZ2VMYWJlbCA9IChwYWdlOiBudW1iZXIsIHBhZ2VTaXplOiBudW1iZXIsIGxlbmd0aDogbnVtYmVyKSA9PiB7XHJcblxyXG4gICAgaWYgKGxlbmd0aCA9PT0gMCB8fCBwYWdlU2l6ZSA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gdGhpcy56ZXJvT2ZMYWJlbCArICcgJyArIGxlbmd0aDtcclxuICAgIH1cclxuICAgIGxlbmd0aCA9IE1hdGgubWF4KGxlbmd0aCwgMCk7XHJcbiAgICBjb25zdCBzdGFydEluZGV4ID0gcGFnZSAqIHBhZ2VTaXplO1xyXG4gICAgY29uc3QgZW5kSW5kZXggPSBzdGFydEluZGV4IDwgbGVuZ3RoID9cclxuICAgICAgTWF0aC5taW4oc3RhcnRJbmRleCArIHBhZ2VTaXplLCBsZW5ndGgpIDpcclxuICAgICAgc3RhcnRJbmRleCArIHBhZ2VTaXplO1xyXG4gICAgcmV0dXJuIHN0YXJ0SW5kZXggKyAxICsgJyAtICcgKyBlbmRJbmRleCArICcgJyArIHRoaXMub2ZMYWJlbCArICcgJyArIGxlbmd0aDtcclxuICB9XHJcbn1cclxuIl19