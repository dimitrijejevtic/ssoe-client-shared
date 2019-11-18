import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { TranslationService } from 'src/lib/shared/services/translation.service';

export interface ErrorData {
  errors: [];
}

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.css']
})
export class ErrorDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: ErrorData,
              public translationService: TranslationService) { }

  ngOnInit() {
  }

}
