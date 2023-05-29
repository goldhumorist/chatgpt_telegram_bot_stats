import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-full-text',
  templateUrl: './full-text.component.html',
  styleUrls: ['./full-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FullTextComponent {}
