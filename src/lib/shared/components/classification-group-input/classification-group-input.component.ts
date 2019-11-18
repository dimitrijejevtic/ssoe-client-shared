import { Component, OnInit, Input, Output, EventEmitter, Optional } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { ClassificationService } from '../../services/classification-service.service';
import { TranslationService } from '../../services/translation.service';
import { ErrorMessagesService } from '../../services/error-messages.service';
import { Utils } from '../../extensions/utils';

@Component({
  selector: 'app-classification-group-input',
  templateUrl: './classification-group-input.component.html',
  styleUrls: ['./classification-group-input.component.css']
})
export class ClassificationGroupInputComponent implements OnInit {

  @Input() classificationValueId: number;
  @Input() classificationName: string;
  @Input() classificationModel: string;
  @Input() placeholder: string;
  @Input() isVolatile: boolean;
  @Input() propertyName: string;
  @Input() selectedValue: string;
  @Input() disabled: boolean;
  @Input() ngFormObject: NgForm;

  hasErrors: boolean;
  groups: {options: any[], description: string, id: number}[];
  options: any[];
  defaultValue: any;
  helperValue: any;
  ngControl: FormControl;
  form: NgForm;

  @Output() classificationValueIdChange: EventEmitter<any>;
  @Output() objectClassificationValueChange: EventEmitter<any>;

  constructor(
    private classificationService: ClassificationService,
    public translationService: TranslationService,
    private errorMessageService: ErrorMessagesService,
    @Optional() private formObject: NgForm) {
    this.classificationValueIdChange = new EventEmitter<any>();
    this.objectClassificationValueChange = new EventEmitter<any>();
  }

  ngOnInit() {
    // tslint:disable-next-line:max-line-length
    this.classificationService.getGroupedClassificationValues(this.classificationName, this.classificationModel, this.isVolatile).subscribe(x => {
      let vals = [];
      for (let index = 0; index < x.value.length; index++) {
        const element = x.value[index];
        vals = [...vals, ...element.options];
      }
      this.options = vals;

      this.defaultValue = this.options.find(y => y.isDefaultValue === true);
      this.groups = x.value;

      if (!Utils.isNullEmptyOrUndefined(this.classificationValueId)) {

        const exValue = this.options.find(y => '' + y.id === '' + this.classificationValueId);
        if (exValue !== undefined) {
          this.classificationValueId = exValue.id;
          this.objectClassificationValueChange.emit(exValue);
        } else {
          this.classificationValueId = undefined;
          this.classificationValueIdChange.emit(this.classificationValueId);
        }
      } else if (!Utils.isNullEmptyOrUndefined(this.selectedValue)) {
        const exValue = this.options.find(y => '' + y.value === '' + this.selectedValue);
        if (exValue !== undefined) {
          this.classificationValueId = exValue.id;
          this.objectClassificationValueChange.emit(exValue);
        }
      } else if (!Utils.isNullEmptyOrUndefined(this.defaultValue)) {
        this.classificationValueId = this.defaultValue.id;
        this.objectClassificationValueChange.emit(this.defaultValue);
      }

      if (this.disabled === undefined)
        this.disabled = false;
    });

    if (this.propertyName === undefined)
      this.propertyName = Utils.newTechnicalNumber();

    if (Utils.isNullEmptyOrUndefined(this.ngFormObject))
        this.form = this.ngFormObject;
    if (Utils.isNullEmptyOrUndefined(this.form)) {
        this.form = this.formObject;
      }

    this.ngControl = new FormControl();
    if (this.form !== undefined && this.form !== null && this.propertyName !== undefined)
      this.form.form.addControl(this.propertyName, this.ngControl);

    this.errorMessageService.errorPropertyMessageSubject.subscribe(x => {
      if (!Utils.isNullEmptyOrUndefined(this.form.form.get(x.propertyName)) && x.isCleanup === false) {
        this.form.form.get(x.propertyName).setErrors({ incorrect: true });
        this.hasErrors = true;
      } else if (!Utils.isNullEmptyOrUndefined(this.form.form.get(x.propertyName)) && x.isCleanup === true) {
        this.hasErrors = false;
        this.form.form.get(x.propertyName).setErrors(null);
      }
    });
    this.errorMessageService.removeFormErrorsSubject.subscribe(x => {
      this.hasErrors = false;
      if (!Utils.isNullEmptyOrUndefined(this.form.form.get(this.propertyName) && this.propertyName !== undefined))
        this.form.form.get(this.propertyName).setErrors(null);
    });
  }

  change(event) {
    this.classificationValueId = event.value;
    this.classificationValueIdChange.emit(this.classificationValueId);

    const exValue = this.options.find(y => '' + y.id === '' + this.classificationValueId);
    if (exValue !== undefined)
      this.objectClassificationValueChange.emit(exValue);
    const pname = this.propertyName;
    this.form.form.markAsDirty();
    this.form.form.patchValue({pname: this.classificationValueId});
  }
}
