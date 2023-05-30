import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-link-chooser',
  templateUrl: './card-link-chooser.component.html',
  styleUrls: ['./card-link-chooser.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardLinkChooserComponent {
  @Input()
  titleText!: string;

  @Input()
  icon!: IconDefinition;

  @Input()
  navigationLink!: string;
}
