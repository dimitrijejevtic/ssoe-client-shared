import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Utils } from '../../extensions/utils';
import { TranslationService } from '../../services/translation.service';
import { NgForm, FormControl } from '@angular/forms';
import { Quantity } from '../../POCO/Quantity';

@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.css']
})
export class QuantityComponent implements OnInit {

  @Input() quantity: Quantity;
  @Input() isReadOnly: boolean;
  @Input() placeholder: string;
  @Input() propertyName: string;

  ngControlAmount: FormControl;
  ngControlUnitOfMeasure: FormControl;

  @Output() quantityChange = new EventEmitter<Quantity>();
  units = [];
  constructor(
    public translationService: TranslationService,
    private form: NgForm) { }

  ngOnInit() {
    this.getUnits();

    if (this.propertyName === undefined)
      this.propertyName = Utils.newTechnicalNumber();

    this.ngControlAmount = new FormControl();
    this.ngControlUnitOfMeasure = new FormControl();
    if (this.form !== undefined) {
      this.form.form.addControl(this.propertyName + 'Amount', this.ngControlAmount);
      this.form.form.addControl(this.propertyName + 'UnitOfMeasure', this.ngControlUnitOfMeasure);
    }

  }

  getUnits() {
    // this.classificationService.getClassificationValues('Quantity').subscribe(x => {
    //   if (Utils.isNullEmptyOrUndefined(x) || Utils.isNullEmptyOrUndefined(x.value))
    //     return;
    //   this.units = x.value;
    //   const defaultCurrency = this.units.find(y => y.isDefaultValue === true);
    //   if (defaultCurrency !== undefined)
    //     this.quantity.unitOfMeasureId = defaultCurrency.value;
    // });
  }

}
