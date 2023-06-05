import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-search-pages-pagination',
  templateUrl: './search-pages-pagination.component.html',
  styleUrls: ['./search-pages-pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchPagesPaginationComponent {
  @Input()
  isNextPageAvaible = true;

  @Input()
  isPreviousPageAvaible = true;

  @Output()
  loadPreviousPageEmitter: EventEmitter<void> = new EventEmitter();

  @Output()
  loadNextPageEmitter: EventEmitter<void> = new EventEmitter();

  loadNextPage() {
    this.loadNextPageEmitter.emit();
  }

  loadPreviousPage() {
    this.loadPreviousPageEmitter.emit();
  }
}
