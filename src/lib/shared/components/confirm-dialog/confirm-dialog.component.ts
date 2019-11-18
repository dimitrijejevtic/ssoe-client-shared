import { Component, OnInit, Inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Utils } from '../../extensions/utils';

export interface IConfirmDialogData {
  title: string;
  text: string;
  translatedText: string;
  confirmLabel: string;
  cancelLabel: string;
  action: any;
  parameters: any;
}

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})

export class ConfirmDialogComponent implements OnInit {

  get showText() {
    return !Utils.isNullEmptyOrUndefined(this.data.text);
  }

  get showTranslatedText() {
    return !Utils.isNullEmptyOrUndefined(this.data.translatedText);
  }

  get showOkButton() {
    return !Utils.isNullEmptyOrUndefined(this.data.confirmLabel);
  }

  get showCloseButton() {
    return !Utils.isNullEmptyOrUndefined(this.data.cancelLabel);
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IConfirmDialogData,
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    public translateService: TranslationService) { }

  ngOnInit() {
  }

  ok() {
    if (this.data.action !== undefined)
      this.data.action(this.data.parameters);
    this.dialogRef.close(true);
  }

  close() {
    this.dialogRef.close();
  }
}
