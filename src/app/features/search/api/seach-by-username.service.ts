import { TFullTextSearchData } from '../../../pages/search/interfaces';
import { BaseApiService } from '../../../core/services/base-api.service';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import {
  ISearchByUsernameHTTPResponse,
  ISearchByUsernameResponse,
} from '../../interfaces';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SearchByUsernameService {
  constructor(private baseApiService: BaseApiService) {}

  search(data: TFullTextSearchData): Observable<ISearchByUsernameResponse> {
    const { searchWord, page, limit, dateFrom, dateTo } = data;

    console.log('SearchByUsernameService', data);

    let params = new HttpParams()
      .set('username', searchWord)
      .set('page', page || 1)
      .set('limit', limit || 20);

    if (dateFrom)
      params = params.set('searchFrom', dateFrom as unknown as string);

    if (dateTo) params = params.set('searchTo', dateTo as unknown as string);

    return this.baseApiService
      .get<ISearchByUsernameHTTPResponse>('/api/v1/search/by-username', {
        params,
      })
      .pipe(map(response => response.data));
  }
}
