import { TFullTextSearchData } from '../../../pages/search/interfaces';
import { BaseApiService } from '../../../core/services/base-api.service';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, catchError, map } from 'rxjs';
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
  private LOG_ALIAS = 'Search-By-Username-Service';

  search(data: TFullTextSearchData): Observable<ISearchByUsernameResponse> {
    const { searchWord, page, limit, dateFrom, dateTo } = data;

    let params = new HttpParams()
      .set('username', searchWord)
      .set('page', page || 1)
      .set('limit', limit || 20);

    if (dateFrom) params = params.set('searchFrom', dateFrom);

    if (dateTo) params = params.set('searchTo', dateTo);

    return this.baseApiService
      .get<ISearchByUsernameHTTPResponse>('/api/v1/search/by-username', {
        params,
      })
      .pipe(
        map(response => response.data),
        catchError(error => {
          console.log(`${this.LOG_ALIAS} - error during search`, error);
          return EMPTY;
        })
      );
  }
}
