import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ILoadingSpinerOptions } from '../../interfaces';

@Component({
  selector: 'app-loading-spiner',
  templateUrl: './loading-spiner.component.html',
  styleUrls: ['./loading-spiner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingSpinerComponent {
  @Input() spinerOptions!: ILoadingSpinerOptions;
}
