import { UsersActivityService } from '../../../../features/statistic/';
import { Observable, map, BehaviorSubject, finalize } from 'rxjs';
import { AppRouteEnum } from './../../../../core/enums/app-routes';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  IChartData,
  IUserActivityDataForBarChart,
  IUsersActivityReqData,
} from '../../interfaces';

@Component({
  selector: 'app-users-activity',
  templateUrl: './users-activity.component.html',
  styleUrls: ['./users-activity.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersActivityComponent implements OnInit {
  readonly backRoute = AppRouteEnum.ToBack;

  constructor(private usersActivityService: UsersActivityService) {}

  userActivityStats$!: Observable<IUserActivityDataForBarChart>;

  barChartData: IChartData = {
    chartOptions: {
      responsive: true,
    },
    chartType: 'bar',
    chartLegend: true,
  };

  doughnutChartData: IChartData = {
    chartOptions: {
      responsive: true,
    },
    chartType: 'doughnut',
    chartLegend: true,
  };

  radarChartData: IChartData = {
    chartOptions: {
      responsive: true,
    },
    chartType: 'radar',
    chartLegend: true,
  };

  lineChartData: IChartData = {
    chartOptions: {
      responsive: true,
    },
    chartType: 'line',
    chartLegend: true,
  };

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
