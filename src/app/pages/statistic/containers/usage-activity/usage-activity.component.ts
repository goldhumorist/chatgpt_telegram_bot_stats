import { BehaviorSubject, Observable, finalize, map } from 'rxjs';
import { UsageActivityService } from './../../../../features/statistic/api/usage-activity.service';
import {
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
  constructor(private usageActivityService: UsageActivityService) {}

  readonly backRoute = AppRouteEnum.ToBack;

  usageActivityStats$!: Observable<IUsageActivityChartData>;
  isLoading$ = new BehaviorSubject<boolean>(false);

  chart: IChartData = {
    options: {
      responsive: true,
    },
    type: 'bar',
    legend: true,
  };

  initialDataToRequest: IUsageActivityReqData = {
    interval: TimeInterval.week,
    dateFrom: new Date(
      new Date().getFullYear(),
      new Date().getMonth() - 3,
      new Date().getDate() + 6
    )
      .toISOString()
      .split('T')[0] as any as Date,
    dateTo: new Date().toISOString().split('T')[0] as any as Date,
  };

  ngOnInit(): void {
    this.usageActivityStats$ = this.getUsageActivityStats(
      this.initialDataToRequest
    );
  }

  onFormSubmit(data: IUsageActivityReqData) {
    this.usageActivityStats$ = this.getUsageActivityStats(data);
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
