import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading-spiner',
  templateUrl: './loading-spiner.component.html',
  styleUrls: ['./loading-spiner.component.scss'],
})
export class LoadingSpinerComponent {
  @Input()
  spinerSize!: string;

  @Input()
  spinerMode: ProgressSpinnerMode = 'indeterminate';
}
