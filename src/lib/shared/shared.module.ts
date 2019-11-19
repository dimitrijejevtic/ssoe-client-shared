import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../lib/material/material.module';
import { ActionsRibbonComponent } from './components/actions-ribbon/actions-ribbon.component';
import { BaseSelectedTabComponent } from './components/base-selected-tab/base-selected-tab.component';
import { ClassificationGroupInputComponent } from './components/classification-group-input/classification-group-input.component';
import { ClassificationInputComponent } from './components/classification-input/classification-input.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { CurrencyAmountComponent } from './components/currency-amount/currency-amount.component';
import { ErrorDisplayComponent } from './components/error-display/error-display.component';
import { GeneralErrorPageComponent } from './components/general-error-page/general-error-page.component';
import { InputValidationMessageComponent } from './components/input-validation-message/input-validation-message.component';
import { LoaderComponent } from './components/loader/loader.component';
import { NotificationDialogUnsavedComponent } from './components/notification-dialog-unsaved/notification-dialog-unsaved.component';
import { QuantityComponent } from './components/quantity/quantity.component';
import { TypeaheadInputComponent } from './components/typeahead-input/typeahead-input.component';
import { ConfirmActionDirective } from './directives/confirm-action.directive';
import { FormValidatorDirective } from './directives/form-validator.directive';
import { NumberFormatterDirective } from './directives/number-formatter.directive';
import { BooleanEvaluateStatusToStringPipe } from './pipes/boolean-evaluate-status-to-string.pipe';
import { BooleanToYesNoPipe } from './pipes/booleanToYesNo.pipe';
import { ClassificationValueGet } from './pipes/classification-value-get.pipe';
import { ClassificationValuePipe } from './pipes/classification-value.pipe';
import { CurrencyPipe } from './pipes/currency.pipe';
import { DateTimeFormatPipe } from './pipes/date-time-format.pipe';
import { EmptyStringToDefaultPipe } from './pipes/empty-string-to-default.pipe';
import { LifecycleStatusPipe } from './pipes/lifecycle-status.pipe';
import { QuantityPipe } from './pipes/quantity.pipe';
import { TranslatePipe } from './pipes/translate.pipe';
import { ErrorDialogComponent } from './components/error-display/error-dialog/error-dialog.component';
import { DecimalFormatterDirective } from './components/currency-amount/decimal-formatter.directive';
import { OptionsScrollDirective } from './components/typeahead-input/options-scroll.directive';

@NgModule({
  declarations: [
    ActionsRibbonComponent,
    BaseSelectedTabComponent,
    ClassificationGroupInputComponent,
    ClassificationInputComponent,
    ConfirmDialogComponent,
    CurrencyAmountComponent,
    ErrorDisplayComponent,
    ErrorDialogComponent,
    GeneralErrorPageComponent,
    InputValidationMessageComponent,
    LoaderComponent,
    NotificationDialogUnsavedComponent,
    QuantityComponent,
    TypeaheadInputComponent,
    ConfirmActionDirective,
    FormValidatorDirective,
    NumberFormatterDirective,
    BooleanEvaluateStatusToStringPipe,
    BooleanToYesNoPipe,
    ClassificationValueGet,
    ClassificationValuePipe,
    CurrencyPipe,
    DateTimeFormatPipe,
    EmptyStringToDefaultPipe,
    LifecycleStatusPipe,
    QuantityPipe,
    TranslatePipe,
    DecimalFormatterDirective,
    OptionsScrollDirective
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ConfirmActionDirective,
    FormValidatorDirective,
    NumberFormatterDirective,
    BooleanEvaluateStatusToStringPipe,
    BooleanToYesNoPipe,
    ClassificationValueGet,
    ClassificationValuePipe,
    CurrencyPipe,
    DateTimeFormatPipe,
    EmptyStringToDefaultPipe,
    LifecycleStatusPipe,
    QuantityPipe,
    TranslatePipe,
    ActionsRibbonComponent,
    BaseSelectedTabComponent,
    ClassificationGroupInputComponent,
    ClassificationInputComponent,
    ConfirmDialogComponent,
    CurrencyAmountComponent,
    ErrorDisplayComponent,
    ErrorDialogComponent,
    GeneralErrorPageComponent,
    InputValidationMessageComponent,
    LoaderComponent,
    NotificationDialogUnsavedComponent,
    QuantityComponent,
    TypeaheadInputComponent,
  ],
  entryComponents: [
    ErrorDialogComponent,
    ConfirmDialogComponent,
    NotificationDialogUnsavedComponent
  ]
})
export class SharedModule { }
