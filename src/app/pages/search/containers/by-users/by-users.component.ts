import { BehaviorSubject, Observable, finalize, shareReplay, tap } from 'rxjs';
import { ISearchByUsernameResponse } from './../../../../features/interfaces';
import { SearchByUsernameService } from './../../../../features/search/api/seach-by-username.service';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SearchRoutingEnum } from '../../enums';
import { TSearchByUsernameData } from '../../interfaces';

@Component({
  selector: 'app-by-users',
  templateUrl: './by-users.component.html',
  styleUrls: ['./by-users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByUsersComponent {
  readonly searchIndexPageRoute = SearchRoutingEnum.SearchIndexPage;

  constructor(private searchByUsernameService: SearchByUsernameService) {}

  searchResponse$!: Observable<ISearchByUsernameResponse>;
  paginationData = {
    page: 1,
    limit: 5,
    totalAvaibleAmount: 0,
    currentAmount: 0,
  };
  tempSearchData!: TSearchByUsernameData;
  isPreviousPageAvaible = false;
  isNextPageAvaible = true;
  isLoading$ = new BehaviorSubject<boolean>(false);

  onSearchSubmit(data: TSearchByUsernameData) {
    this.tempSearchData = data;
    this.isLoading$.next(true);

    this.searchResponse$ = this.searchByUsernameService
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

      this.searchResponse$ = this.searchByUsernameService
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

      this.searchResponse$ = this.searchByUsernameService
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
