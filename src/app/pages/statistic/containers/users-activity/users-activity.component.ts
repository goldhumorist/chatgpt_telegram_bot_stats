import { UsersActivityChartsService } from './../../../../features/statistic/api';
import { UsersActivityService } from '../../../../features/statistic/';
import { Observable, map, BehaviorSubject, finalize } from 'rxjs';
import { AppRouteEnum } from './../../../../core/enums/app-routes';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  IChartCheckBoxOption,
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

  constructor(
    private usersActivityService: UsersActivityService,
    private usersActivityChartsService: UsersActivityChartsService
  ) {}

  userActivityStats$!: Observable<IUserActivityDataForBarChart>;

  availableCharts: Array<IChartData> =
    this.usersActivityChartsService.getAvailableCharts();

  chartCheckBoxOptions: Array<IChartCheckBoxOption> =
    this.usersActivityChartsService.getChartCheckBoxOptions();

  isLoading$ = new BehaviorSubject<boolean>(false);

  ngOnInit(): void {
    this.userActivityStats$ = this.getUsersActivityStats({});
  }

  onFormSubmit(data: IUsersActivityReqData) {
    this.userActivityStats$ = this.getUsersActivityStats(data);
  }

  updateChartVisibility(chartType: string, event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;

    this.usersActivityChartsService.updateChartVisibility(chartType, isChecked);
    this.availableCharts = this.usersActivityChartsService.getAvailableCharts();
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
