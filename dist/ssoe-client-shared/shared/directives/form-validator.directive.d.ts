import { OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ErrorMessagesService } from '../services/error-messages.service';
export declare class FormValidatorDirective implements OnInit {
    form: NgForm;
    private errorService;
    constructor(form: NgForm, errorService: ErrorMessagesService);
    ngOnInit(): void;
}
