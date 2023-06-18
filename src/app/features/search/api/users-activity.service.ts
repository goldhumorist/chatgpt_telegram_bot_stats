import { IUsersActivityReqData } from './../../../pages/statistic/interfaces';
import { BaseApiService } from '../../../core/services/base-api.service';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
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

  getUsersActivityStats(
    data: IUsersActivityReqData
  ): Observable<IUsersActivityStatResponse> {
    const { dateFrom, dateTo } = data;

    let params = new HttpParams();

    if (dateFrom)
      params = params.set('searchFrom', dateFrom as unknown as string);

    if (dateTo) params = params.set('searchTo', dateTo as unknown as string);

    return this.baseApiService
      .get<IUsersActivityStatHTTPResponse>('/api/v1/statistic/users-activity', {
        params,
      })
      .pipe(map(response => response.data));
  }
}
