import { OnInit } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { MatDialogRef } from '@angular/material';
export interface IConfirmDialogData {
    title: string;
    text: string;
    translatedText: string;
    confirmLabel: string;
    cancelLabel: string;
    action: any;
    parameters: any;
}
export declare class ConfirmDialogComponent implements OnInit {
    data: IConfirmDialogData;
    dialogRef: MatDialogRef<ConfirmDialogComponent>;
    translateService: TranslationService;
    readonly showText: boolean;
    readonly showTranslatedText: boolean;
    readonly showOkButton: boolean;
    readonly showCloseButton: boolean;
    constructor(data: IConfirmDialogData, dialogRef: MatDialogRef<ConfirmDialogComponent>, translateService: TranslationService);
    ngOnInit(): void;
    ok(): void;
    close(): void;
}
