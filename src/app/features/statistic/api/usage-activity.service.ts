import {
  IUsageActivityStatHTTPResponse,
  IUsageActivityStatResponse,
} from './../../interfaces';
import { IUsageActivityReqData } from './../../../pages/statistic/interfaces';
import { BaseApiService } from '../../../core/services/base-api.service';
import { Injectable } from '@angular/core';
import { Observable, map, catchError, EMPTY } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsageActivityService {
  constructor(private baseApiService: BaseApiService) {}
  private LOG_ALIAS = 'Usage-Activity-Service';

  getUsageActivityStats(
    data: IUsageActivityReqData
  ): Observable<IUsageActivityStatResponse> {
    const { dateFrom, dateTo, interval } = data;

    const params = new HttpParams()
      .set('calendarInterval', interval)
      .set('searchFrom', dateFrom)
      .set('searchTo', dateTo);

    return this.baseApiService
      .get<IUsageActivityStatHTTPResponse>('/api/v1/statistic/usage-activity', {
        params,
      })
      .pipe(
        map(response => response.data),
        catchError(error => {
          console.log(
            `${this.LOG_ALIAS} - error during getUsageActivityStats`,
            error
          );
          return EMPTY;
        })
      );
  }
}
