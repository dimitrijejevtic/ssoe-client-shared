import { OnInit } from '@angular/core';
import { ErrorMessagesService } from '../../services/error-messages.service';
export declare class InputValidationMessageComponent implements OnInit {
    private errorMessageService;
    propertyName: string;
    errors: string[];
    constructor(errorMessageService: ErrorMessagesService);
    ngOnInit(): void;
}
