import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[numberFormatter]'
})
export class NumberFormatterDirective {

  regexStr = '^[0-9]*$';
  @Input() isAlphaNumeric: boolean;

  constructor(private el: ElementRef) { }


  @HostListener('keypress', ['$event']) onKeyPress(event) {
    return new RegExp(this.regexStr).test(event.key);
  }
}
