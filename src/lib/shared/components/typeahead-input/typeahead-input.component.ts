import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatAutocomplete, MatAutocompleteTrigger } from '@angular/material';
import { fromEvent, Subject, merge, forkJoin, of, from } from 'rxjs';
import { debounceTime, switchMap, distinctUntilChanged, combineLatest, combineAll } from 'rxjs/operators';
import { SearchService } from '../../services/search.service';
import { Utils } from '../../extensions/utils';
import { TranslationService } from '../../services/translation.service';
import { FormControl, NgForm } from '@angular/forms';
import { ErrorMessagesService } from '../../services/error-messages.service';

@Component({
  selector: 'app-typeahead-input',
  templateUrl: './typeahead-input.component.html',
  styleUrls: ['./typeahead-input.component.css']
})
export class TypeaheadInputComponent implements OnInit {

  readonly typeaheadSkipValue = 6;
  readonly minNumOfCharToSearch = 3;

  @Input() typeaheadValue: any;
  @Input() placeholder: string;
  @Input() typename: string;
  @Input() selectedValue: any;
  @Input() filterFormatFn: (value: any) => any;
  @Input() public displayResultFn: (value) => string;
  @Input() propertyName: string;
  @Input() readonly = false;
  @Input() ngFormObject: NgForm;

  results: any[];
  skip: number;
  top: number;
  currentValue: string;
  hasErrors = false;
  inputChangeSubject: Subject<string>;
  ngControl: FormControl;
  isLoading = false;
  form: NgForm;

  private nextPage = new Subject();

  valueChosen = false;

  @Output() typeaheadValueChange: EventEmitter<any>;
  @Output() typeaheadSelectedValueChange: EventEmitter<any>;

  @ViewChild('autocomplete') autocomplete: MatAutocomplete;
  @ViewChild(MatAutocompleteTrigger) autocompleteTrigger: MatAutocompleteTrigger;

  constructor(
    private searchService: SearchService,
    public translateService: TranslationService,
    private formObject: NgForm,
    private errorMessageService: ErrorMessagesService) {
      this.typeaheadValueChange = new EventEmitter();
      this.typeaheadSelectedValueChange = new EventEmitter();
      this.inputChangeSubject = new Subject();
      this.nextPage = new Subject();
      this.skip = 0;
      this.top = this.typeaheadSkipValue;
      this.results = [];
  }

  ngOnInit() {
    merge(this.inputChangeSubject.pipe(
            debounceTime(400),
            distinctUntilChanged((a, b) => {
              if (b.length < this.minNumOfCharToSearch || a === b)
                return true;
              this.resetFilter();
              return false;
            })),
          this.nextPage.pipe(
            distinctUntilChanged((a, b) => {
              if (a === b)
                return true;
              return false;
            })))
            .pipe(switchMap((x) => {
              if (Utils.isNullEmptyOrUndefined(this.currentValue) || this.currentValue.length < this.minNumOfCharToSearch) {
                this.resetFilter();
                return of({value: []});
              }
              let searchTermJson = null;
              this.isLoading = true;
              if (this.filterFormatFn === undefined)
                searchTermJson = { name: this.currentValue };
              else searchTermJson = this.filterFormatFn(this.currentValue);
              return this.searchService.search({
                typename: this.typename, searchTerm: JSON.stringify(searchTermJson),
                skip: this.skip, top: this.top
              });
            })
          )
    .subscribe(x => {
      if (x.value.length === this.typeaheadSkipValue)
        this.skip += this.typeaheadSkipValue;

      this.results = [...this.results, ...x.value];
      this.autocomplete.opened.next();
      this.isLoading = false;
    });

    if (this.propertyName === undefined)
      this.propertyName = Utils.newTechnicalNumber();

    if (Utils.isNullEmptyOrUndefined(this.ngFormObject))
      this.form = this.ngFormObject;

    if (Utils.isNullEmptyOrUndefined(this.form)) {
      this.form = this.formObject;
    }

    this.ngControl = new FormControl();
    if (this.form !== undefined)
      this.form.form.addControl(this.propertyName, this.ngControl);

    this.errorMessageService.errorPropertyMessageSubject.subscribe(x => {
      if (!Utils.isNullEmptyOrUndefined(this.form.form.get(x.propertyName)) && x.isCleanup === false) {
        this.form.form.get(x.propertyName).setErrors({ incorrect: true });
        this.form.form.get(x.propertyName).markAsDirty();
        this.form.form.get(x.propertyName).markAsTouched();
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
    if (this.selectedValue !== undefined && this.selectedValue.hasOwnProperty('id'))
      this.valueChosen = true;
  }

  onScroll() {
    this.nextPage.next(this.skip);
  }

  search(event) {
    this.currentValue = event.target.value;

    if (Utils.isNullEmptyOrUndefined(this.currentValue)) {
      this.skip = 0;
      return;
    }

    if (event.keyCode === 8 || event.keyCode === 46)
      this.clearSelectedValue();

    this.inputChangeSubject.next(this.currentValue);
  }

  optionSelected(event) {
    this.typeaheadValue = event.option.value.id;
    this.selectedValue = event.option.value;
    this.valueChosen = true;
    this.currentValue = this.displayResultFn(event.option.value);
    this.typeaheadSelectedValueChange.emit(this.selectedValue);
    this.typeaheadValueChange.emit(this.typeaheadValue);
    const pname = this.propertyName;
    this.form.form.markAsDirty();
    this.form.form.patchValue({pname: this.typeaheadValue});
  }

  clearSelectedValue() {
    this.typeaheadValue = undefined;
    this.selectedValue = undefined;
    this.currentValue = '';
    this.valueChosen = false;
    this.typeaheadSelectedValueChange.emit(this.selectedValue);
    this.typeaheadValueChange.emit(this.typeaheadValue);
  }

  get checkHasValue() {
    return !this.valueChosen
    && (this.selectedValue === undefined || this.selectedValue === null || !this.selectedValue.hasOwnProperty('id'));
  }
  private resetFilter() {
    this.results = [];
    this.skip = 0;
    this.valueChosen = false;
    this.top = this.typeaheadSkipValue;
  }
}
