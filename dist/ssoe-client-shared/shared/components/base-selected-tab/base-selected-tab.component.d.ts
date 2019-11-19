import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
export declare class BaseSelectedTabComponent implements OnInit {
    private activatedRoute;
    private route;
    tabSelectedIndex: any;
    constructor(activatedRoute: ActivatedRoute, route: Router);
    ngOnInit(): void;
    setUpTab(): void;
    navigateToTabWithSubject(selectedIndex: any, tabSubjects?: Subject<any>[]): void;
}
