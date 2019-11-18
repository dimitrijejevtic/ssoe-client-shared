import { Component, OnInit, Input } from '@angular/core';
import { ErrorMessagesService } from '../../services/error-messages.service';

@Component({
  selector: '[app-input-validation-message]',
  templateUrl: './input-validation-message.component.html',
  styleUrls: ['./input-validation-message.component.css']
})
export class InputValidationMessageComponent implements OnInit {

  @Input() propertyName: string;

  errors: string[];
  constructor(private errorMessageService: ErrorMessagesService) { }

  ngOnInit() {
    // TODO: fix logic
    this.errorMessageService.errorPropertyMessageSubject.subscribe(x => {
      if (this.propertyName === x.propertyName && x.isCleanup === false)
        this.errors = x.errorMessage.split('###');
      else if (this.propertyName === x.propertyName && x.isCleanup === true)
        this.errors = [];
    });
    this.errorMessageService.removeFormErrorsSubject.subscribe(x => {
      this.errors = [];
    });
  }

}
