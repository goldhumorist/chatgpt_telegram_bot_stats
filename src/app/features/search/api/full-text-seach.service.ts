import { TFullTextSearchData } from '../../../pages/search/interfaces';
import { BaseApiService } from '../../../core/services/base-api.service';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, catchError, map } from 'rxjs';
import {
  IFullTextHTTPResponse,
  IFullTextSearchResponse,
} from '../../interfaces';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FullTextSearchService {
  constructor(private baseApiService: BaseApiService) {}
  private LOG_ALIAS = 'Full-Text-Search-Service';

  search(data: TFullTextSearchData): Observable<IFullTextSearchResponse> {
    const { searchWord, searchIn, page, limit, dateFrom, dateTo } = data;

    let params = new HttpParams()
      .set('phraseToSearch', searchWord)
      .set('searchIn', searchIn || '')
      .set('page', page || 1)
      .set('limit', limit || 20);

    if (dateFrom) params = params.set('searchFrom', dateFrom);

    if (dateTo) params = params.set('searchTo', dateTo);

    return this.baseApiService
      .get<IFullTextHTTPResponse>('/api/v1/search/full-text', {
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
