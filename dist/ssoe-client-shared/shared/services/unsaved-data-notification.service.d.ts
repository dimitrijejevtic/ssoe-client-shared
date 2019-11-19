import { MatDialog } from '@angular/material';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
export declare class UnsavedDataNotificationService {
    dialog: MatDialog;
    constructor(dialog: MatDialog);
    hasChangedData: boolean;
    formChangesSubscription: Subscription;
    currentForm: NgForm;
    startTracking(ngForm: NgForm): void;
    trackingCheckpoint(): void;
    stopTracking(): void;
    doActionWithCheckUnsaved(action: any, fallbackAction?: any, modalData?: any): void;
    checkChangesAction(hasChanges: any, noChanges: any, modalData?: any): void;
}
