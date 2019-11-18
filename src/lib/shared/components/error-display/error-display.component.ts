import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { ErrorMessagesService } from '../../services/error-messages.service';
import { Utils } from '../../extensions/utils';
import { MatDialog } from '@angular/material';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { IErrorMessage } from '../../interfaces/ErrorMessage';

@Component({
  selector: 'app-error-display',
  templateUrl: './error-display.component.html',
  styleUrls: ['./error-display.component.css']
})
export class ErrorDisplayComponent implements OnInit, OnDestroy {


  @Input() errors: string[];
  @Input() source: string;
  @Input() showDialog = false;

  sources: string[];
  subscription: Subject<IErrorMessage>;
  subscriptionSubscriber: Subscription;
  constructor(private errorService: ErrorMessagesService, public dialog: MatDialog) { }

  ngOnInit() {
    if (!Utils.isNullEmptyOrUndefined(this.source)) {
      this.sources = [];
      this.source = this.source.toLowerCase();
      this.sources = this.source.split(',');
    }

    // tslint:disable-next-line: max-line-length
    // if (Utils.isNullEmptyOrUndefined(this.errorService.errorMessagesSubject.observers) || this.errorService.errorMessagesSubject.observers.length < 1)
    this.subscriptionSubscriber = this.errorService.errorMessagesSubject.subscribe(x => {
        if (this.sources !== undefined) {
          const myErrors = this.sources.find(y => y === x.source);
          if (myErrors !== undefined)
            if (x.isCleanup === true)
              this.errors = [];
            else
              // this.errors = x.errors;
              if (this.showDialog && x.errors !== undefined && x.errors.length > 0)
                this.dialog.open(ErrorDialogComponent, {
                  data: {errors: x.errors}, panelClass: 'dialog-error'
                });
              else this.errors = x.errors;
        } else
          this.errors = x.errors;
      });
  }
  ngOnDestroy(): void {
    if (!this.subscriptionSubscriber.closed)
      this.subscriptionSubscriber.unsubscribe();
  }
}
