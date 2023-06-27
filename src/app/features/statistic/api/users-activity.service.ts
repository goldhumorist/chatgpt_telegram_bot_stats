import { IUsersActivityReqData } from '../../../pages/statistic/interfaces';
import { BaseApiService } from '../../../core/services/base-api.service';
import { Injectable } from '@angular/core';
import { Observable, map, catchError, EMPTY } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import {
  IUsersActivityStatHTTPResponse,
  IUsersActivityStatResponse,
} from '../../interfaces';

@Injectable({
  providedIn: 'root',
})
export class UsersActivityService {
  constructor(private baseApiService: BaseApiService) {}
  private LOG_ALIAS = 'Users-Activity-Service';

  getUsersActivityStats(
    data: IUsersActivityReqData
  ): Observable<IUsersActivityStatResponse> {
    const { dateFrom, dateTo } = data;

    let params = new HttpParams();

    if (dateFrom) params = params.set('searchFrom', dateFrom);

    if (dateTo) params = params.set('searchTo', dateTo);

    return this.baseApiService
      .get<IUsersActivityStatHTTPResponse>('/api/v1/statistic/users-activity', {
        params,
      })
      .pipe(
        map(response => response.data),
        catchError(error => {
          console.log(
            `${this.LOG_ALIAS} - error during getUsersActivityStats`,
            error
          );
          return EMPTY;
        })
      );
  }
}
