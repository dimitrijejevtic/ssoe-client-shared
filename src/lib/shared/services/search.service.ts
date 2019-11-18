import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISearchParams } from '../interfaces/ISearchParams';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private apiService: ApiService) { }

  search(searchParams: ISearchParams) {
    let params = new HttpParams();
    params = params.append('typeName', searchParams.typename).append('searchTerm', searchParams.searchTerm)
    .append('skip', '' + searchParams.skip).append('top', '' + searchParams.top);
    return this.apiService.get('common', 'search', params);
  }
}
