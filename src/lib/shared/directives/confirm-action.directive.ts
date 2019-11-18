import { Directive, Input, OnInit, TemplateRef, ViewContainerRef, HostListener, Optional } from '@angular/core';
import { IConfirmDialogData, ConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[confirmAction]'
})
export class ConfirmActionDirective implements OnInit {

  @Input('confirmAction') action: any;
  @Input() parameters: any;

  constructor(
    private dialog: MatDialog) { }

    @HostListener('click') onClick(event) {
      const confirmDialogData: IConfirmDialogData = {
        title: 'Confirm publish tender',
        text: 'This action is irrevertible, are you sure?',
        translatedText: undefined,
        confirmLabel: 'Confirm',
        cancelLabel: 'Cancel',
        action: this.action,
        parameters: this.parameters
      };
      this.dialog.open(ConfirmDialogComponent, { panelClass: 'modal-small', data: confirmDialogData });
  }

  ngOnInit(): void {
    // this.viewContainer.createEmbeddedView(this.templateRef);
  }

}
