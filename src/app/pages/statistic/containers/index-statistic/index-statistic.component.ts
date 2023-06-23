import { faChartBar, faChartPie } from '@fortawesome/free-solid-svg-icons';
import { TStatisticSubPages } from './../../../search/interfaces';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StatisticRoutingEnum } from '../../enums';

@Component({
  selector: 'app-index-statistic',
  templateUrl: './index-statistic.component.html',
  styleUrls: ['./index-statistic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndexStatisticComponent {
  readonly statisticSubPages: TStatisticSubPages = [
    {
      title: 'See the statistic of users activity',
      icon: faChartBar,
      link: StatisticRoutingEnum.UsersActivity,
    },
    {
      title: 'See the usage statistic of chat-bot app',
      icon: faChartPie,
      link: StatisticRoutingEnum.UsageActivity,
    },
  ];
}
