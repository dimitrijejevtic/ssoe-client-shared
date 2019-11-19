import { Subject } from 'rxjs';
import { MatSnackBar, MatDialog } from '@angular/material';
import { TranslationService } from './translation.service';
import { ValidationFailure } from '../poco/validationFailure';
import { ErrorMessage } from '../poco/errorMessage';
export declare class ErrorMessagesService {
    private translationService;
    private dialog;
    private snackBar;
    errorMessagesSubject: Subject<ErrorMessage>;
    errorPropertyMessageSubject: Subject<ValidationFailure>;
    removeFormErrorsSubject: Subject<boolean>;
    private propertyValidationErrors;
    constructor(translationService: TranslationService, dialog: MatDialog, snackBar: MatSnackBar);
    showErrorDialog(errs: any): void;
    publishMessages(errors: ValidationFailure[], source?: string): void;
    clearMessages(source: string): void;
    publishPropertyMessage(validationMessage: ValidationFailure): void;
}
