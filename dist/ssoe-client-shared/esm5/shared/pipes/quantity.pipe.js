/**
 * @fileoverview added by tsickle
 * Generated from: shared/pipes/quantity.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
var QuantityPipe = /** @class */ (function () {
    function QuantityPipe() {
    }
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    QuantityPipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    function (value, args) {
        /** @type {?} */
        var v = '' + value.amount;
        if (value.unitOfMeasure !== undefined)
            v += ' ' + value.unitOfMeasure;
        return v;
    };
    QuantityPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'quantity'
                },] }
    ];
    return QuantityPipe;
}());
export { QuantityPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVhbnRpdHkucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Nzb2UtY2xpZW50LXNoYXJlZC8iLCJzb3VyY2VzIjpbInNoYXJlZC9waXBlcy9xdWFudGl0eS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFJcEQ7SUFBQTtJQVlBLENBQUM7Ozs7OztJQVBDLGdDQUFTOzs7OztJQUFULFVBQVUsS0FBZSxFQUFFLElBQVU7O1lBQy9CLENBQUMsR0FBRyxFQUFFLEdBQUcsS0FBSyxDQUFDLE1BQU07UUFDekIsSUFBSSxLQUFLLENBQUMsYUFBYSxLQUFLLFNBQVM7WUFDbkMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDO1FBQ2pDLE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQzs7Z0JBVkYsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxVQUFVO2lCQUNqQjs7SUFVRCxtQkFBQztDQUFBLEFBWkQsSUFZQztTQVRZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gJy4uL2V4dGVuc2lvbnMvY29uc3RhbnRzJztcclxuaW1wb3J0IHsgUXVhbnRpdHkgfSBmcm9tICcuLi9QT0NPL1F1YW50aXR5JztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAncXVhbnRpdHknXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBRdWFudGl0eVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgdHJhbnNmb3JtKHZhbHVlOiBRdWFudGl0eSwgYXJncz86IGFueSk6IGFueSB7XHJcbiAgICBsZXQgdiA9ICcnICsgdmFsdWUuYW1vdW50O1xyXG4gICAgaWYgKHZhbHVlLnVuaXRPZk1lYXN1cmUgIT09IHVuZGVmaW5lZClcclxuICAgICAgdiArPSAnICcgKyB2YWx1ZS51bml0T2ZNZWFzdXJlO1xyXG4gICAgcmV0dXJuIHY7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=