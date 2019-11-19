import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { TranslationService } from '../../services/translation.service';
export declare class NotificationDialogUnsavedComponent implements OnInit {
    data: any;
    dialogRef: MatDialogRef<NotificationDialogUnsavedComponent>;
    translateService: TranslationService;
    saveDataText: string;
    bodyText: string;
    constructor(data: any, dialogRef: MatDialogRef<NotificationDialogUnsavedComponent>, translateService: TranslationService);
    ngOnInit(): void;
}
