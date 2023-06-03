import { TFullTextSearchData } from '../../../pages/search/interfaces';
import { BaseApiService } from '../../../core/services/base-api.service';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IFullTextHTTPResponse, IFullTextResponse } from '../../interfaces';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FullTextSearchService {
  constructor(private baseApiService: BaseApiService) {}

  search(data: TFullTextSearchData): Observable<IFullTextResponse> {
    const { searchWord, searchIn, page, limit, dateFrom, dateTo } = data;

    let params = new HttpParams()
      .set('phraseToSearch', searchWord)
      .set('searchIn', searchIn || '')
      .set('page', page || 1)
      .set('limit', limit || 20);

    if (dateFrom)
      params = params.set('searchFrom', dateFrom as unknown as string);

    if (dateTo) params = params.set('searchTo', dateTo as unknown as string);

    return this.baseApiService
      .get<IFullTextHTTPResponse>('/api/v1/search/full-text', {
        params,
      })
      .pipe(map(response => response.data));
  }
}
