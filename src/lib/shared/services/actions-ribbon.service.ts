import { Injectable, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActionsRibbonService {

  infoTemplate: TemplateRef<any>;
  actionsTemplate: TemplateRef<any>;
  spacerTemplate: TemplateRef<any>;
  actionsContextTemplate: TemplateRef<any>;

  changeSubject: Subject<any>;
  constructor() {
    this.changeSubject = new Subject();
  }

  change() {
    this.changeSubject.next();
  }

  clear() {
    this.infoTemplate = undefined;
    this.actionsTemplate = undefined;
    this.spacerTemplate = undefined;
    this.actionsContextTemplate = undefined;
    this.change();
  }
}
