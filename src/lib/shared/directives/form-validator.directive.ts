import { Directive, TemplateRef, ViewContainerRef, OnInit, ViewChild } from '@angular/core';
import { NgForm, ValidationErrors } from '@angular/forms';
import { ErrorMessagesService } from '../services/error-messages.service';
import { Utils } from '../extensions/utils';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'form[formValidator]'
})
export class FormValidatorDirective implements OnInit {

  constructor(
    public form: NgForm,
    private errorService: ErrorMessagesService) { }

  ngOnInit(): void {
    this.errorService.errorPropertyMessageSubject.subscribe(x => {
      if (!Utils.isNullEmptyOrUndefined(this.form.form.get(x.propertyName)) && x.isCleanup === false) {
        const control = this.form.form.get(x.propertyName);
        control.setErrors({incorrect: true});
        control.markAsDirty();
        control.markAsTouched();
      } else if (!Utils.isNullEmptyOrUndefined(this.form.form.get(x.propertyName)) && x.isCleanup === true)
        this.form.form.setErrors(null);
    });
    this.errorService.removeFormErrorsSubject.subscribe(x => {
      this.form.form.setErrors(null);
    });
  }
}
