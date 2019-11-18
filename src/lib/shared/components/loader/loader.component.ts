import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderComponent implements OnInit {

  loadingStatus = 0;
  constructor(private loaderService: LoadingService, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.loaderService.loadingSubject.subscribe(x => {
      if (x === true)
        this.loadingStatus++;
      else this.loadingStatus--;

      if (this.loadingStatus < 0)
        this.loadingStatus = 0;

      this.cd.markForCheck();
    });
  }

}
