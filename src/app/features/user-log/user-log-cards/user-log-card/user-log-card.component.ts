import { IUserLog } from './../../../interfaces';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-log-card',
  templateUrl: './user-log-card.component.html',
  styleUrls: ['./user-log-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserLogCardComponent {
  @Input()
  userLog!: IUserLog;
}
