import { EventEmitter, OnDestroy } from '@angular/core';
import { MatAutocomplete } from '@angular/material';
import { Subject } from 'rxjs';
export interface IAutoCompleteScrollEvent {
    autoComplete: MatAutocomplete;
    scrollEvent: Event;
}
export declare class OptionsScrollDirective implements OnDestroy {
    autoComplete: MatAutocomplete;
    tressholdPercent: number;
    scroll: EventEmitter<IAutoCompleteScrollEvent>;
    _onDestroy: Subject<unknown>;
    constructor(autoComplete: MatAutocomplete);
    private removeScrollEventListener;
    ngOnDestroy(): void;
    onScroll(event: Event): void;
}
