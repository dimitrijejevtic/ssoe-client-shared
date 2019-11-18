import { Directive, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { MatAutocomplete } from '@angular/material';
import { Subject } from 'rxjs';
import { tap, takeUntil } from 'rxjs/operators';
import { Utils } from '../../extensions/utils';

export interface IAutoCompleteScrollEvent {
  autoComplete: MatAutocomplete;
  scrollEvent: Event;
}

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'mat-autocomplete[optionsScroll]'
})
export class OptionsScrollDirective implements OnDestroy {


  @Input() tressholdPercent = 0.8;
  // tslint:disable-next-line:no-output-rename
  @Output('optionsScroll') scroll = new EventEmitter<IAutoCompleteScrollEvent>();

  // tslint:disable-next-line:variable-name
  _onDestroy = new Subject();
  constructor(public autoComplete: MatAutocomplete) {
    this.autoComplete.opened.pipe(
      tap(() => {
        setTimeout(() => {
          this.removeScrollEventListener();
          this.autoComplete.panel.nativeElement.addEventListener('scroll', this.onScroll.bind(this));
        }, 1);
      }),
      takeUntil(this._onDestroy)
    ).subscribe();

    this.autoComplete.closed.pipe(
      tap(() => this.removeScrollEventListener()),
      takeUntil(this._onDestroy)).subscribe();
  }
  private removeScrollEventListener() {
    if (!Utils.isNullEmptyOrUndefined(this.autoComplete.panel))
      this.autoComplete.panel.nativeElement
        .removeEventListener('scroll', this.onScroll);
  }
  ngOnDestroy(): void {
    this._onDestroy.next();
    this._onDestroy.complete();
    this.removeScrollEventListener();
  }

  onScroll(event: Event) {
    if (this.tressholdPercent === undefined)
      this.scroll.next({ autoComplete: this.autoComplete, scrollEvent: event });
    else {
      const tress = this.tressholdPercent * 100 * this.autoComplete.panel.nativeElement.scrollHeight / 100;
      const current = this.autoComplete.panel.nativeElement.scrollTop + this.autoComplete.panel.nativeElement.clientHeight;

      if (current > tress)
        this.scroll.next({ autoComplete: this.autoComplete, scrollEvent: event });
    }
  }
}
