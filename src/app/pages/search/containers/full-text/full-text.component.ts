import { AppRouteEnum } from './../../../../core/enums/app-routes';
import { IFullTextSearchResponse } from './../../../../features/interfaces';
import { SearchRoutingEnum } from '../../enums';
import { FullTextSearchService } from '../../../../features/search/api/full-text-seach.service';
import { TFullTextSearchData } from './../../interfaces';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject, Observable, finalize, shareReplay, tap } from 'rxjs';

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
  paginationData = {
    page: 1,
    limit: 10,
    totalAvaibleAmount: 0,
    currentAmount: 0,
  };
  tempSearchData!: TFullTextSearchData;
  isPreviousPageAvaible = false;
  isNextPageAvaible = true;
  isLoading$ = new BehaviorSubject<boolean>(false);

  constructor(private fullTextSearchService: FullTextSearchService) {}

  onSearchSubmit(data: TFullTextSearchData) {
    this.tempSearchData = data;
    this.isLoading$.next(true);

    this.searchResponse$ = this.fullTextSearchService
      .search({ ...this.tempSearchData, ...this.paginationData })
      .pipe(
        tap(data => {
          this.paginationData.totalAvaibleAmount = data.total.value;
          this.paginationData.currentAmount += data.hits.length;
        }),
        finalize(() => this.isLoading$.next(false)),
        shareReplay(1)
      );
  }

  loadNextPage() {
    if (
      this.paginationData.totalAvaibleAmount > this.paginationData.currentAmount
    ) {
      this.isPreviousPageAvaible = true;
      this.paginationData.page += 1;
      this.isLoading$.next(true);

      this.searchResponse$ = this.fullTextSearchService
        .search({ ...this.tempSearchData, ...this.paginationData })
        .pipe(
          tap(data => {
            this.paginationData.currentAmount += data.hits.length;
          }),
          finalize(() => this.isLoading$.next(false)),

          shareReplay(1)
        );

      if (
        this.paginationData.totalAvaibleAmount <=
        this.paginationData.currentAmount + this.paginationData.limit
      )
        this.isNextPageAvaible = false;

      return;
    }
    this.isNextPageAvaible = false;
  }

  loadPreviousPage() {
    if (this.paginationData.page > 1) {
      this.paginationData.page -= 1;
      this.isLoading$.next(true);

      this.searchResponse$ = this.fullTextSearchService
        .search({ ...this.tempSearchData, ...this.paginationData })
        .pipe(
          tap(data => {
            this.paginationData.currentAmount -= data.hits.length;
          }),
          finalize(() => this.isLoading$.next(false)),

          shareReplay(1)
        );

      this.isNextPageAvaible = true;

      if (this.paginationData.page === 1) this.isPreviousPageAvaible = false;

      return;
    }

    this.isPreviousPageAvaible = false;
  }
}
