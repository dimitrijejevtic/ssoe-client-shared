import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Utils } from '../../extensions/utils';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-base-selected-tab',
  template: `
    <p>
      NO UI TO BE FOUND HERE!
    </p>
  `,
  styleUrls: ['./base-selected-tab.component.css']
})
export class BaseSelectedTabComponent implements OnInit {

  tabSelectedIndex: any;

  constructor(private activatedRoute: ActivatedRoute,
              private route: Router) { }

  ngOnInit() {
  }

  setUpTab() {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params.tab) {
        this.tabSelectedIndex = +params.tab;
        this.route.navigate([], {
          queryParams: {
            tab: null,
          },
          queryParamsHandling: 'merge',
        });
      }
    });
  }


  navigateToTabWithSubject(selectedIndex, tabSubjects?: Subject<any>[]) {
    tabSubjects[selectedIndex].next();
    // tabSubjects[selectedIndex].complete();
  }
}
