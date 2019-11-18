import { Injectable } from '@angular/core';
import { Utils } from '../extensions/utils';
import { ApiService } from './api.service';
import { tap } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { HttpParams } from '@angular/common/http';

export class TranslationKeyContract {
  key: string;
  value: string;
}

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  private translations: { [key: string]: string };

  public cultureCode: number;
  private _cultureCode: number;

  cultureChange: Subject<any>;

  constructor(private apiService: ApiService) {
    this.translations = {};
    this.cultureChange = new Subject();
  }

  setCultureCode(code: number) {
    this._cultureCode = code;
    this.cultureCode = Date.now();
  }
  getCultureCode() {
    return this._cultureCode;
  }

  getTranslations(cultureCode?) {
    let params = new HttpParams();
    if (cultureCode !== undefined)
      params = params.append('cultureCode', cultureCode);
    return this.apiService.get('common', 'getTranslations', params).pipe(tap(x => {
      const keyarray = [];
      for (let index = 0; index < x.value.length; index++) {
        const element = x.value[index];
        keyarray.push({ key: element.key, value: element.value });
      }
      this.setTranslations(keyarray);
      this.cultureChange.next();
      this.cultureCode = Date.now();
    }));
  }

   setTranslations(trans: TranslationKeyContract[]) {
    this.translations = {};
    for (let index = 0; index < trans.length; index++) {
      const element = trans[index];
      this.translations[element.key] = element.value;
    }
    localStorage.setItem('translations', JSON.stringify(this.translations));
  }

  getForKey(key: string): string {
    let res = key;
    if (Utils.isNullEmptyOrUndefined(key) || key === '-')
      return key;
    const r = this.translations[key];
    if (!Utils.isNullEmptyOrUndefined(r))
      res = r;
    else {
      console.log(key);
      this.translations[key] = '[' + key + ']';
      res = '[' + key + ']';
    }
    return res;
  }

  getForKeyByObject(key: string): string {
    let res = key;
    if (Utils.isNullEmptyOrUndefined(key) || key === '-')
      return key;
    const r = this.translations[key];
    if (!Utils.isNullEmptyOrUndefined(r))
      res = r;
    else {
        const newKey = key.split('_')[1];
        const keyValue = this.translations[newKey];
        res = keyValue;
    }
    return res;
  }

  loadStorage() {
    const local = localStorage.getItem('translations');
    if (local !== undefined && local !== null) {
      const obj = JSON.parse(local);
      this.translations = obj;
    }
  }
}
