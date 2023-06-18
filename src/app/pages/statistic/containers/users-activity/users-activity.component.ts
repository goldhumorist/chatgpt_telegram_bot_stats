import { Observable, map, BehaviorSubject, finalize } from 'rxjs';
import { UsersActivityService } from './../../../../features/search/api/users-activity.service';
import { AppRouteEnum } from './../../../../core/enums/app-routes';
import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { IUserActivityDataForBarChart } from '../../interfaces';

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
    this.isLoading$.next(true);

    this.userActivityStats$ = this.usersActivityService
      .getUsersActivityStats({})
      .pipe(
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
