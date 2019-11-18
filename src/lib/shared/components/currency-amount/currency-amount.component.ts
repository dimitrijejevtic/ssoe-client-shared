import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ClassificationService } from '../../services/classification-service.service';
import { Utils } from '../../extensions/utils';
import { FormControl, NgForm } from '@angular/forms';
import { ErrorMessagesService } from '../../services/error-messages.service';
import { CurrencyAmount } from '../../POCO/currencyAmount';

@Component({
  selector: 'app-currency-amount',
  templateUrl: './currency-amount.component.html',
  styleUrls: ['./currency-amount.component.css']
})
export class CurrencyAmountComponent implements OnInit {

  @Input() currencyAmount: CurrencyAmount;
  @Input() isReadOnly: boolean;
  @Input() placeholder: string;
  @Input() propertyName: string;
  @Input() showCurrency = true;
  @Input() ngFormObject: NgForm;
  @Output() currencyAmountChange = new EventEmitter<CurrencyAmount>();

  currencies = [];
  form: NgForm;

  ngControlAmount: FormControl;
  ngControlCurrency: FormControl;

  constructor(
    private classificationService: ClassificationService,
    private errorMessageService: ErrorMessagesService,
    private formObject: NgForm) {
   }

  ngOnInit() {

    if (this.propertyName === undefined)
      this.propertyName = Utils.newTechnicalNumber();

    if (Utils.isNullEmptyOrUndefined(this.ngFormObject))
      this.form = this.ngFormObject;

    if (Utils.isNullEmptyOrUndefined(this.form)) {
      this.form = this.formObject;
    }

    this.ngControlAmount = new FormControl();
    this.ngControlCurrency = new FormControl();
    if (this.form !== undefined) {
      this.form.form.addControl(this.propertyName + 'Amount', this.ngControlAmount);
      this.form.form.addControl(this.propertyName + 'CurrencyCode', this.ngControlCurrency);
    }
    this.getCurrency();
   }

  getCurrency() {
    this.classificationService.getClassificationValues('ShortCurrency').subscribe(x => {
      if (Utils.isNullEmptyOrUndefined(x) || Utils.isNullEmptyOrUndefined(x.value))
        return;
      this.currencies = x.value;
      const defaultCurrency = this.currencies.find(y => y.isDefaultValue === true);
      this.currencyAmount.currencyCode = defaultCurrency.value;
      this.currencyAmountChange.emit(this.currencyAmount);
    });
  }
}
