import { OnInit, ChangeDetectorRef } from '@angular/core';
import { LoadingService } from '../../services/loading.service';
export declare class LoaderComponent implements OnInit {
    private loaderService;
    private cd;
    loadingStatus: number;
    constructor(loaderService: LoadingService, cd: ChangeDetectorRef);
    ngOnInit(): void;
}
