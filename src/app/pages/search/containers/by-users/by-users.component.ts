import { AppRouteEnum } from './../../../../core/enums/app-routes';
import { BehaviorSubject, Observable, finalize, shareReplay } from 'rxjs';
import { ISearchByUsernameResponse } from './../../../../features/interfaces';
import { SearchByUsernameService } from './../../../../features/search';
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
  readonly backRoute = AppRouteEnum.ToBack;

  constructor(private searchByUsernameService: SearchByUsernameService) {}

  searchResponse$!: Observable<ISearchByUsernameResponse>;
  page = 1;
  limit = 10;
  tempSearchData!: TSearchByUsernameData;
  isLoading$ = new BehaviorSubject<boolean>(false);

  onSearchSubmit(data: TSearchByUsernameData) {
    this.tempSearchData = data;
    this.isLoading$.next(true);

    this.searchResponse$ = this.searchByUsernameService
      .search({ ...this.tempSearchData, page: this.page, limit: this.limit })
      .pipe(
        finalize(() => this.isLoading$.next(false)),
        shareReplay(1)
      );
  }

  changePage(page: number) {
    this.isLoading$.next(true);
    this.searchResponse$ = this.searchByUsernameService
      .search({ ...this.tempSearchData, page, limit: this.limit })
      .pipe(
        finalize(() => this.isLoading$.next(false)),
        shareReplay(1)
      );

    this.page = page;
  }
}
