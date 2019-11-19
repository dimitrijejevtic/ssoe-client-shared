/**
 * @fileoverview added by tsickle
 * Generated from: shared/components/base-selected-tab/base-selected-tab.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
export class BaseSelectedTabComponent {
    /**
     * @param {?} activatedRoute
     * @param {?} route
     */
    constructor(activatedRoute, route) {
        this.activatedRoute = activatedRoute;
        this.route = route;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    setUpTab() {
        this.activatedRoute.queryParams.subscribe((/**
         * @param {?} params
         * @return {?}
         */
        (params) => {
            if (params.tab) {
                this.tabSelectedIndex = +params.tab;
                this.route.navigate([], {
                    queryParams: {
                        tab: null,
                    },
                    queryParamsHandling: 'merge',
                });
            }
        }));
    }
    /**
     * @param {?} selectedIndex
     * @param {?=} tabSubjects
     * @return {?}
     */
    navigateToTabWithSubject(selectedIndex, tabSubjects) {
        tabSubjects[selectedIndex].next();
        // tabSubjects[selectedIndex].complete();
    }
}
BaseSelectedTabComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-base-selected-tab',
                template: `
    <p>
      NO UI TO BE FOUND HERE!
    </p>
  `,
                styles: [""]
            }] }
];
/** @nocollapse */
BaseSelectedTabComponent.ctorParameters = () => [
    { type: ActivatedRoute },
    { type: Router }
];
if (false) {
    /** @type {?} */
    BaseSelectedTabComponent.prototype.tabSelectedIndex;
    /**
     * @type {?}
     * @private
     */
    BaseSelectedTabComponent.prototype.activatedRoute;
    /**
     * @type {?}
     * @private
     */
    BaseSelectedTabComponent.prototype.route;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1zZWxlY3RlZC10YWIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3NvZS1jbGllbnQtc2hhcmVkLyIsInNvdXJjZXMiOlsic2hhcmVkL2NvbXBvbmVudHMvYmFzZS1zZWxlY3RlZC10YWIvYmFzZS1zZWxlY3RlZC10YWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBY3pELE1BQU0sT0FBTyx3QkFBd0I7Ozs7O0lBSW5DLFlBQW9CLGNBQThCLEVBQzlCLEtBQWE7UUFEYixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsVUFBSyxHQUFMLEtBQUssQ0FBUTtJQUFJLENBQUM7Ozs7SUFFdEMsUUFBUTtJQUNSLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsU0FBUzs7OztRQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDbkQsSUFBSSxNQUFNLENBQUMsR0FBRyxFQUFFO2dCQUNkLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRTtvQkFDdEIsV0FBVyxFQUFFO3dCQUNYLEdBQUcsRUFBRSxJQUFJO3FCQUNWO29CQUNELG1CQUFtQixFQUFFLE9BQU87aUJBQzdCLENBQUMsQ0FBQzthQUNKO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFHRCx3QkFBd0IsQ0FBQyxhQUFhLEVBQUUsV0FBNEI7UUFDbEUsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2xDLHlDQUF5QztJQUMzQyxDQUFDOzs7WUFyQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFFBQVEsRUFBRTs7OztHQUlUOzthQUVGOzs7O1lBYlEsY0FBYztZQUFFLE1BQU07Ozs7SUFnQjdCLG9EQUFzQjs7Ozs7SUFFVixrREFBc0M7Ozs7O0lBQ3RDLHlDQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBVdGlscyB9IGZyb20gJy4uLy4uL2V4dGVuc2lvbnMvdXRpbHMnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtYmFzZS1zZWxlY3RlZC10YWInLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8cD5cclxuICAgICAgTk8gVUkgVE8gQkUgRk9VTkQgSEVSRSFcclxuICAgIDwvcD5cclxuICBgLFxyXG4gIHN0eWxlVXJsczogWycuL2Jhc2Utc2VsZWN0ZWQtdGFiLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQmFzZVNlbGVjdGVkVGFiQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgdGFiU2VsZWN0ZWRJbmRleDogYW55O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlOiBSb3V0ZXIpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG4gIHNldFVwVGFiKCkge1xyXG4gICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xyXG4gICAgICBpZiAocGFyYW1zLnRhYikge1xyXG4gICAgICAgIHRoaXMudGFiU2VsZWN0ZWRJbmRleCA9ICtwYXJhbXMudGFiO1xyXG4gICAgICAgIHRoaXMucm91dGUubmF2aWdhdGUoW10sIHtcclxuICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7XHJcbiAgICAgICAgICAgIHRhYjogbnVsbCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBxdWVyeVBhcmFtc0hhbmRsaW5nOiAnbWVyZ2UnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cclxuICBuYXZpZ2F0ZVRvVGFiV2l0aFN1YmplY3Qoc2VsZWN0ZWRJbmRleCwgdGFiU3ViamVjdHM/OiBTdWJqZWN0PGFueT5bXSkge1xyXG4gICAgdGFiU3ViamVjdHNbc2VsZWN0ZWRJbmRleF0ubmV4dCgpO1xyXG4gICAgLy8gdGFiU3ViamVjdHNbc2VsZWN0ZWRJbmRleF0uY29tcGxldGUoKTtcclxuICB9XHJcbn1cclxuIl19