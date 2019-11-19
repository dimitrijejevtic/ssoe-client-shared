import { OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
export declare class ConfirmActionDirective implements OnInit {
    private dialog;
    action: any;
    parameters: any;
    constructor(dialog: MatDialog);
    onClick(event: any): void;
    ngOnInit(): void;
}
