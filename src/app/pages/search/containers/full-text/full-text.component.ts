import { AppRouteEnum } from './../../../../core/enums/app-routes';
import { IFullTextSearchResponse } from './../../../../features/interfaces';
import { SearchRoutingEnum } from '../../enums';
import { FullTextSearchService } from '../../../../features/search/api/full-text-seach.service';
import { TFullTextSearchData } from './../../interfaces';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject, Observable, finalize, shareReplay } from 'rxjs';

@Component({
  selector: 'app-full-text',
  templateUrl: './full-text.component.html',
  styleUrls: ['./full-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FullTextComponent {
  readonly searchIndexPageRoute = SearchRoutingEnum.SearchIndexPage;
  readonly backRoute = AppRouteEnum.ToBack;

  searchResponse$!: Observable<IFullTextSearchResponse>;
  tempSearchData!: TFullTextSearchData;
  page = 1;
  limit = 10;
  isLoading$ = new BehaviorSubject<boolean>(false);

  constructor(private fullTextSearchService: FullTextSearchService) {}

  onSearchSubmit(data: TFullTextSearchData) {
    this.tempSearchData = data;
    this.isLoading$.next(true);

    this.searchResponse$ = this.fullTextSearchService
      .search({ ...this.tempSearchData, page: this.page, limit: this.limit })
      .pipe(
        finalize(() => this.isLoading$.next(false)),
        shareReplay(1)
      );
  }

  changePage(page: number) {
    this.isLoading$.next(true);
    this.searchResponse$ = this.fullTextSearchService
      .search({ ...this.tempSearchData, page, limit: this.limit })
      .pipe(
        finalize(() => this.isLoading$.next(false)),
        shareReplay(1)
      );

    this.page = page;
  }
}
