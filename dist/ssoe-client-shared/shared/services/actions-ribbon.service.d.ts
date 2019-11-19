import { TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';
export declare class ActionsRibbonService {
    infoTemplate: TemplateRef<any>;
    actionsTemplate: TemplateRef<any>;
    spacerTemplate: TemplateRef<any>;
    actionsContextTemplate: TemplateRef<any>;
    changeSubject: Subject<any>;
    constructor();
    change(): void;
    clear(): void;
}
