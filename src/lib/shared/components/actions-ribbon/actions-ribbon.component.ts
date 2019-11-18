import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { ActionsRibbonService } from '../../services/actions-ribbon.service';

@Component({
  selector: 'app-actions-ribbon',
  templateUrl: './actions-ribbon.component.html',
  styleUrls: ['./actions-ribbon.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionsRibbonComponent implements OnInit {

  constructor(
    public actionsRibbonService: ActionsRibbonService,
    private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.actionsRibbonService.changeSubject.subscribe(x => {
      this.cd.markForCheck();
    });
  }

}
