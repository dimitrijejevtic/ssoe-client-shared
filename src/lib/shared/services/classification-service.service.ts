import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Utils } from '../extensions/utils';
import { Observable, of } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { shareReplay, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClassificationService {

  private classificationCache: {[key: string]: Observable<any[]>};
  private classificationValueCache: {[key: string]: Observable<any>};

  constructor(private apiService: ApiService) {
    this.classificationCache = {};
    this.classificationValueCache = {};
  }

  getClassificationValues(classificationName: string, classificationModel?: string, volatile = false): Observable<any> {
    if (Utils.isNullEmptyOrUndefined(classificationName))
      return;
    else {
      if (Utils.isNullEmptyOrUndefined(classificationModel))
        classificationModel = '';
        else
        classificationModel = '?model=' + classificationModel;

      const key = classificationName + classificationModel;

      if (volatile === true)
        return this.apiService.get('common', 'GetClassification/' + classificationName + classificationModel);

      if (this.classificationCache[key] === undefined)
        this.classificationCache[key]
        = this.apiService.get('common', 'GetClassification/' + classificationName + classificationModel).pipe(shareReplay(1));

      return this.classificationCache[key];
    }
  }

  getGroupedClassificationValues(classificationName: string, classificationModel?: string, volatile = false): Observable<any> {
    if (Utils.isNullEmptyOrUndefined(classificationName))
      return;
    else {
      if (Utils.isNullEmptyOrUndefined(classificationModel))
        classificationModel = '';
        else
        classificationModel = '?model=' + classificationModel;

      const key = classificationName + classificationModel;

      if (volatile === true)
        return this.apiService.get('common', 'GetGroupedClassification/' + classificationName + classificationModel);

      if (this.classificationCache[key] === undefined)
        this.classificationCache[key]
        = this.apiService.get('common', 'GetGroupedClassification/' + classificationName + classificationModel).pipe(shareReplay(1));

      return this.classificationCache[key];
    }
  }
  getClassificationValue(valueId: string) {
    if (Utils.isNullEmptyOrUndefined(valueId))
      return of('-');
    const key = valueId;
    if (this.classificationValueCache[key] === undefined) {
      const httpParams = new HttpParams().set('valueId', '' + valueId);
      this.classificationValueCache[key]
      = this.apiService.get('common', 'getClassificationValue', httpParams).pipe(shareReplay(1), switchMap(x => {
        if (x === undefined || x === null || x.value === undefined) return '';
        return of(x);
      }));
    }

    // const httpParams = new HttpParams().set('valueId', '' + valueId);
    // return this.apiService.get('common', 'getClassificationValue', httpParams);
    return this.classificationValueCache[key];

  }
}
