import { OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { ErrorMessagesService } from '../../services/error-messages.service';
import { MatDialog } from '@angular/material';
import { ErrorMessage } from '../../poco/errorMessage';
export declare class ErrorDisplayComponent implements OnInit, OnDestroy {
    private errorService;
    dialog: MatDialog;
    errors: string[];
    source: string;
    showDialog: boolean;
    sources: string[];
    subscription: Subject<ErrorMessage>;
    subscriptionSubscriber: Subscription;
    constructor(errorService: ErrorMessagesService, dialog: MatDialog);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
