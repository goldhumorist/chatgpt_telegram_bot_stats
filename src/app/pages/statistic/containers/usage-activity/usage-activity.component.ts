import { AppRouteEnum } from './../../../../core/enums/app-routes';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-usage-activity',
  templateUrl: './usage-activity.component.html',
  styleUrls: ['./usage-activity.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsageActivityComponent {
  readonly backRoute = AppRouteEnum.ToBack;

  onFormSubmit(data: any) {
    console.log('SUBMIT UsageActivityComponent', data);
  }
}
