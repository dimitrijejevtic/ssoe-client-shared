import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { TranslationService } from '../../services/translation.service';
import { Utils } from '../../extensions/utils';

@Component({
  selector: 'app-notification-dialog-unsaved',
  templateUrl: './notification-dialog-unsaved.component.html',
  styleUrls: ['./notification-dialog-unsaved.component.css']
})
export class NotificationDialogUnsavedComponent implements OnInit {

  saveDataText = 'Save data?';
  bodyText = 'You have unsaved changes! Do you want to continue?';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<NotificationDialogUnsavedComponent>,
    public translateService: TranslationService) { }

  ngOnInit() {
    if (!Utils.isNullEmptyOrUndefined(this.data)) {
      if (!Utils.isNullEmptyOrUndefined(this.data.saveDataText))
        this.saveDataText = this.data.saveDataText;

      if (!Utils.isNullEmptyOrUndefined(this.data.bodyText))
        this.bodyText = this.data.bodyText;
    }
  }
}
