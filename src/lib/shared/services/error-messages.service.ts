import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MatSnackBar, MatDialog } from '@angular/material';
import { TranslationService } from './translation.service';
import { ErrorDialogComponent } from '../components/error-display/error-dialog/error-dialog.component';
import { ValidationFailure } from '../poco/validationFailure';
import { ErrorMessage } from '../poco/errorMessage';

@Injectable({
  providedIn: 'root'
})
export class ErrorMessagesService {

  public errorMessagesSubject: Subject<ErrorMessage>;
  public errorPropertyMessageSubject: Subject<ValidationFailure>;
  public removeFormErrorsSubject: Subject<boolean>;

  private propertyValidationErrors: {[source: string]: ValidationFailure[]} = {};

  constructor(
    private translationService: TranslationService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
    this.errorMessagesSubject = new Subject();
    this.errorPropertyMessageSubject = new Subject();
    this.removeFormErrorsSubject = new Subject();
  }

  showErrorDialog(errs) {
    this.dialog.open(ErrorDialogComponent, {
      data: {errors: errs}, panelClass: 'dialog-error'
    });
  }

  publishMessages(errors: ValidationFailure[], source?: string) {

    // TODO: errors with property name 'popup' should not go to propertyvalidators

    const errorM = new ErrorMessage();
    errorM.source = source;
    errorM.errors = [];

    const ex = this.propertyValidationErrors[source];
    if (ex !== undefined) {
      const becameValid = [];
      const stillInvalid = [];
      for (let index = 0; index < ex.length; index++) {
        const element = ex[index];
        const stillInvalidProperty = errors.find(x => x.propertyName === element.propertyName);
        if (stillInvalidProperty !== undefined) {
          stillInvalidProperty.isCleanup = false;
          stillInvalid.push(stillInvalidProperty);
        } else {
          element.isCleanup = true;
          becameValid.push(element);
        }
      }

      for (let index = 0; index < errors.length; index++) {
        const element = errors[index];
        const newError = ex.find(x => x.propertyName === element.propertyName);
        if (newError === undefined) {
          element.isCleanup = false;
          stillInvalid.push(element);
        }
      }

      this.propertyValidationErrors[source] = stillInvalid;
      for (let index = 0; index < becameValid.length; index++) {
        const element = becameValid[index];
        this.publishPropertyMessage(element);
      }

    } else {
      for (let index = 0; index < errors.length; index++) {
        const element = errors[index];
        element.isCleanup = false;
      }
      this.propertyValidationErrors[source] = errors;
    }

    for (let index = 0; index < this.propertyValidationErrors[source].length; index++) {
      const element = this.propertyValidationErrors[source][index];
      this.publishPropertyMessage(element);
    }

    const generalErrors = errors.filter(x => x.propertyName === 'popup');
    for (let index = 0; index < generalErrors.length; index++) {
      const element = generalErrors[index];
      errorM.errors.push(...element.errorMessage.split('###'));
      // errorM.errors.push(element.errorMessage);
    }

    if (this.propertyValidationErrors[source].length > 0 && generalErrors.length === 0 && source !== 'login') {
      this.snackBar.open(this.translationService.getForKey('There were errors!'), null, {
        duration: 2000,
        verticalPosition: 'top',
        panelClass: 'danger'
      });
    }
    this.errorMessagesSubject.next(errorM);
  }

  clearMessages(source: string) {
    const errorM = new ErrorMessage();
    errorM.source = source;
    errorM.isCleanup = true;
    this.errorMessagesSubject.next(errorM);
  }

  publishPropertyMessage(validationMessage: ValidationFailure) {
    this.errorPropertyMessageSubject.next(validationMessage);
  }
}
