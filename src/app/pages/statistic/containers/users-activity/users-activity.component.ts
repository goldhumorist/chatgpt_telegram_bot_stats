import { UsersActivityService } from '../../../../features/statistic/';
import { Observable, map, BehaviorSubject, finalize } from 'rxjs';
import { AppRouteEnum } from './../../../../core/enums/app-routes';
import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import {
  IUserActivityDataForBarChart,
  IUsersActivityReqData,
} from '../../interfaces';

@Component({
  selector: 'app-users-activity',
  templateUrl: './users-activity.component.html',
  styleUrls: ['./users-activity.component.scss'],
})
export class UsersActivityComponent implements OnInit {
  readonly backRoute = AppRouteEnum.ToBack;

  constructor(private usersActivityService: UsersActivityService) {}

  userActivityStats$!: Observable<IUserActivityDataForBarChart>;

  chartOptions: ChartOptions = {
    responsive: true,
  };
  chartType: ChartType = 'bar';
  chartLegend = true;
  chartPlugins = [];

  isLoading$ = new BehaviorSubject<boolean>(false);

  ngOnInit(): void {
    this.userActivityStats$ = this.getUsersActivityStats({});
  }

  onFormSubmit(data: IUsersActivityReqData) {
    this.userActivityStats$ = this.getUsersActivityStats(data);
  }

  private getUsersActivityStats(data: IUsersActivityReqData) {
    this.isLoading$.next(true);
    return this.usersActivityService.getUsersActivityStats(data).pipe(
      map(data => {
        const chartLabels = data.usersActivity.map(item => item.key);

        const chartDatasets = [
          {
            data: data.usersActivity.map(item => item.doc_count),
            label: 'Users Activity',
          },
        ];
        return { chartLabels, chartDatasets };
      }),
      finalize(() => this.isLoading$.next(false))
    );
  }
}
