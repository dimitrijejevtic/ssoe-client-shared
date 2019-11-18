import { Directive, OnInit, Input, ElementRef, HostListener } from '@angular/core';
import { NgModel } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { tap, map } from 'rxjs/operators';
import { Utils } from '../../extensions/utils';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[decimalFormatter][ngModel]',
  providers: [NgModel]
})
export class DecimalFormatterDirective implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('decimals') decimals: string;
  locale = 'sr-Latn-ME';
  decimalFormatPipe: DecimalPipe;
  lastValue: any;
  rgx = /^\d*((\,|\.)\d*)?(?!\w)$/g;

  private el: HTMLInputElement;
  constructor(
            private elementRef: ElementRef,
            private ngModel: NgModel
  ) {
    this.el = this.elementRef.nativeElement;
    this.decimalFormatPipe = new DecimalPipe('sr-Latn-ME');
   }

  ngOnInit(): void {
    if (this.decimals == null)
      this.decimals = '1.2-2';

    this.el.value = this.decimalFormatPipe.transform(this.el.value, this.decimals, this.locale);
    if (this.el.value === '0')
      this.el.value = '';
  }

  @HostListener('focus', ['$event.target.value'])
  onFocus(value) {
      this.el.value = this.ngModel.viewModel;
      this.lastValue = this.ngModel.viewModel;
  }

  @HostListener('blur', ['$event.target.value'])
  onBlur(value) {
    try {
      this.ngModel.viewModel = this.el.value;
      const nocomma = this.el.value.replace(',', '.');
      this.el.value = this.decimalFormatPipe.transform(nocomma, this.decimals, this.locale);
    } catch (ex) {
      if (!Utils.isNullEmptyOrUndefined(this.lastValue) && Utils.regexMatch(this.rgx, this.lastValue)) {
        this.el.value = this.decimalFormatPipe.transform(this.lastValue, this.decimals, this.locale);
        this.ngModel.viewModel = this.lastValue;
      }
    }
  }
  @HostListener('keydown', ['$event'])
  onKeyPress(event) {
      this.lastValue = Utils.deepClone(event.target.value);
      if ((event.code === 'Comma' && this.lastValue.indexOf(',') === -1)
        || event.code === 'Delete' || event.code === 'Backspace' || !RegExp(/\D/).test(event.key)) {
        return true;
      } else {
        return false;
      }
    }
}
