import { OnInit, ChangeDetectorRef } from '@angular/core';
import { ActionsRibbonService } from '../../services/actions-ribbon.service';
export declare class ActionsRibbonComponent implements OnInit {
    actionsRibbonService: ActionsRibbonService;
    private cd;
    constructor(actionsRibbonService: ActionsRibbonService, cd: ChangeDetectorRef);
    ngOnInit(): void;
}
