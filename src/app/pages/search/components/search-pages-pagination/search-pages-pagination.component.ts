import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-search-pages-pagination',
  templateUrl: './search-pages-pagination.component.html',
  styleUrls: ['./search-pages-pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchPagesPaginationComponent implements OnInit {
  @Input() currentPage = 1;
  @Input() total = 0;
  @Input() limit = 20;
  @Output() changePage = new EventEmitter<number>();

  pages: number[] = [];

  ngOnInit(): void {
    const pagesCount = Math.ceil(this.total / this.limit);
    this.pages = this.range(1, pagesCount);
  }

  range(start: number, end: number): number[] {
    return [...Array(end).keys()].map(el => el + start);
  }
}
