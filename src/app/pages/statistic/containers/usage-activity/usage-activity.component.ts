import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-usage-activity',
  templateUrl: './usage-activity.component.html',
  styleUrls: ['./usage-activity.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsageActivityComponent {}
