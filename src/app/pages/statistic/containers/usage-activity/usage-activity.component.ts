import {
  UsersActivityChartsService,
  UsageActivityService,
} from './../../../../features/statistic';
import { BehaviorSubject, Observable, finalize, map } from 'rxjs';
import {
  IChartCheckBoxOption,
  IChartData,
  IUsageActivityChartData,
  IUsageActivityReqData,
  TimeInterval,
} from './../../interfaces';
import { AppRouteEnum } from './../../../../core/enums/app-routes';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usage-activity',
  templateUrl: './usage-activity.component.html',
  styleUrls: ['./usage-activity.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsageActivityComponent implements OnInit {
  constructor(
    private usageActivityService: UsageActivityService,
    private usersActivityChartsService: UsersActivityChartsService
  ) {}

  readonly backRoute = AppRouteEnum.ToBack;

  usageActivityStats$!: Observable<IUsageActivityChartData>;
  isLoading$ = new BehaviorSubject<boolean>(false);

  availableCharts: Array<IChartData> =
    this.usersActivityChartsService.getAvailableCharts();

  chartCheckBoxOptions: Array<IChartCheckBoxOption> =
    this.usersActivityChartsService.getChartCheckBoxOptions();

  initialDataToRequest: IUsageActivityReqData = {
    interval: TimeInterval.week,
    dateFrom: new Date(
      new Date().getFullYear(),
      new Date().getMonth() - 3,
      new Date().getDate() + 6
    )
      .toISOString()
      .split('T')[0],
    dateTo: new Date().toISOString().split('T')[0],
  };

  ngOnInit(): void {
    this.usageActivityStats$ = this.getUsageActivityStats(
      this.initialDataToRequest
    );
  }

  onFormSubmit(data: IUsageActivityReqData) {
    this.usageActivityStats$ = this.getUsageActivityStats(data);
  }

  updateChartVisibility(chartType: string, event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;

    this.usersActivityChartsService.updateChartVisibility(chartType, isChecked);
    this.availableCharts = this.usersActivityChartsService.getAvailableCharts();
  }

  private getUsageActivityStats(data: IUsageActivityReqData) {
    this.isLoading$.next(true);
    return this.usageActivityService.getUsageActivityStats(data).pipe(
      map(data => {
        const labels = data.usageActivity.map(
          item => item.key_as_string.split('T')[0]
        );

        const datasets = [
          {
            data: data.usageActivity.map(item => item.doc_count),
            label: 'Service Usage Activity',
          },
        ];
        return { labels, datasets };
      }),
      finalize(() => this.isLoading$.next(false))
    );
  }
}
