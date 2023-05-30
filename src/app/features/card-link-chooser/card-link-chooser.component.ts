import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ISubPageOptions } from '../interfaces';

@Component({
  selector: 'app-card-link-chooser',
  templateUrl: './card-link-chooser.component.html',
  styleUrls: ['./card-link-chooser.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardLinkChooserComponent {
  @Input()
  subPageOptions!: ISubPageOptions;
}
