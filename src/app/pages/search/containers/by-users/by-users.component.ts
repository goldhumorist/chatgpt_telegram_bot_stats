import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-by-users',
  templateUrl: './by-users.component.html',
  styleUrls: ['./by-users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByUsersComponent {}
