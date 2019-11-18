import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  loadingSubject: Subject<boolean>;
  moduleLoadingSubject: Subject<boolean>;
  // timeout: any;
  constructor() {
    this.loadingSubject = new Subject();
    this.moduleLoadingSubject = new Subject();
  }

  loader(loading) {
    this.loadingSubject.next(loading);
    // if (loading === true) {
    //     this.timeout = setTimeout(() => this.loadingSubject.next(false), 120000);
    // } else {
    //   if (this.timeout !== undefined)
    //     clearTimeout(this.timeout);
    // }
  }

  moduleLoading(loading) {
    this.moduleLoadingSubject.next(loading);
  }
}
