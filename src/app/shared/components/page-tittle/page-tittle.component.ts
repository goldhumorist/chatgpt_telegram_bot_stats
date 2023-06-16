import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-page-tittle',
  templateUrl: './page-tittle.component.html',
  styleUrls: ['./page-tittle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageTittleComponent {
  @Input() title!: string;

  @Input() subTitle!: string;
}
