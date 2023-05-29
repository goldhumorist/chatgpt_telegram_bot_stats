import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-text',
  templateUrl: './full-text.component.html',
  styleUrls: ['./full-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FullTextComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
