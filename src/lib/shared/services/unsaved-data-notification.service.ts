import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NotificationDialogUnsavedComponent } from '../components/notification-dialog-unsaved/notification-dialog-unsaved.component';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

@Injectable()
export class UnsavedDataNotificationService {

  constructor(public dialog: MatDialog) { }

  hasChangedData = false;
  formChangesSubscription: Subscription;
  currentForm: NgForm;

  startTracking(ngForm: NgForm) {
    this.currentForm = ngForm;
    this.currentForm.form.markAsPristine();
    this.formChangesSubscription = ngForm.form.valueChanges.subscribe(x => {
      if (this.currentForm.form.dirty)
        this.hasChangedData = true;
    });
  }
  trackingCheckpoint() {
    this.currentForm.form.markAsPristine();
    this.hasChangedData = false;
  }

  stopTracking() {
    this.hasChangedData = false;
    this.formChangesSubscription.unsubscribe();
  }

  doActionWithCheckUnsaved(action, fallbackAction?, modalData?) {
    if (!this.hasChangedData) {
      action();
      return;
    }

    const dialogRef = this.dialog.open(NotificationDialogUnsavedComponent, {
      width: '356px',
      data: modalData
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.hasChangedData = false;
        action();
      } else {
        if (fallbackAction !== undefined)
          fallbackAction();
      }
    });
  }
  checkChangesAction(hasChanges, noChanges, modalData?) {
    if (!this.hasChangedData) {
      noChanges();
      return;
    }

    const dialogRef = this.dialog.open(NotificationDialogUnsavedComponent, {
      width: '356px',
      data: modalData
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.hasChangedData = false;
        hasChanges();
      } else
        noChanges();
    });
  }
}
