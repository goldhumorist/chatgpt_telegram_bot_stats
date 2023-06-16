import { IUserLog } from '../../interfaces';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-log-cards',
  templateUrl: './user-log-cards.component.html',
  styleUrls: ['./user-log-cards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserLogCardsComponent {
  @Input() userLogs!: IUserLog[];
}
