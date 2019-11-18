import { Component, OnInit, Input, Output, EventEmitter, Optional } from '@angular/core';
import { ClassificationService } from '../../services/classification-service.service';
import { Utils } from '../../extensions/utils';
import { TranslationService } from '../../services/translation.service';
import { FormControl, NgForm } from '@angular/forms';
import { ErrorMessagesService } from '../../services/error-messages.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-classification-input',
  templateUrl: './classification-input.component.html',
  styleUrls: ['./classification-input.component.css']
})
export class ClassificationInputComponent implements OnInit {

  @Input() classificationValueId: number;
  @Input() classificationName: string;
  @Input() classificationModel: string;
  @Input() placeholder: string;
  @Input() isVolatile: boolean;
  @Input() propertyName: string;
  @Input() selectedValue: string;
  @Input() disabled: boolean;
  @Input() resetToDefault: Subject<any>;
  @Input() ngFormObject: NgForm;

  hasErrors: boolean;
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

    if (Utils.isNullEmptyOrUndefined(this.ngFormObject))
      this.form = this.ngFormObject;
    if (Utils.isNullEmptyOrUndefined(this.form)) {
      this.form = this.formObject;
    }
  }

  ngOnInit() {
    this.classificationService.getClassificationValues(this.classificationName, this.classificationModel, this.isVolatile).subscribe(x => {
      this.defaultValue = x.value.find(y => y.isDefaultValue === true);
      this.options = x.value;

      if (!Utils.isNullEmptyOrUndefined(this.classificationValueId)) {
        const exValue = this.options.find(y => '' + y.id === '' + this.classificationValueId);
        if (exValue !== undefined) {
          this.classificationValueId = exValue.id;
          this.classificationValueIdChange.emit(exValue.id);
          this.objectClassificationValueChange.emit(exValue);
        } else {
          this.classificationValueId = undefined;
          this.classificationValueIdChange.emit(undefined);
          this.classificationValueIdChange.emit(this.classificationValueId);
        }
      } else if (!Utils.isNullEmptyOrUndefined(this.selectedValue)) {
        const exValue = this.options.find(y => '' + y.value === '' + this.selectedValue);
        if (exValue !== undefined) {
          this.classificationValueId = exValue.id;
          this.classificationValueIdChange.emit(exValue.id);
          this.objectClassificationValueChange.emit(exValue);
        }
      } else if (!Utils.isNullEmptyOrUndefined(this.defaultValue)) {
        this.classificationValueId = this.defaultValue.id;
        this.objectClassificationValueChange.emit(this.defaultValue);
        const pName = this.propertyName;
        this.form.form.patchValue({pName: this.defaultValue.id});
      }


      if (this.disabled === undefined)
        this.disabled = false;
    });

    if (this.propertyName === undefined)
      this.propertyName = Utils.newTechnicalNumber();

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
    if (this.resetToDefault !== undefined) {
      this.resetToDefault.subscribe(x => {
        if (!Utils.isNullEmptyOrUndefined(this.defaultValue)) {
          this.classificationValueId = this.defaultValue.id;
          this.classificationValueIdChange.emit(this.defaultValue.id);
          this.objectClassificationValueChange.emit(this.defaultValue);
        }
      });
    }
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
