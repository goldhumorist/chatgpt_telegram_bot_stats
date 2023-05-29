import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-search',
  templateUrl: './index-search.component.html',
  styleUrls: ['./index-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndexSearchComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
