import { ChangeDetectionStrategy, Component } from '@angular/core';
import { faSearchDollar, faUsers } from '@fortawesome/free-solid-svg-icons';
import { SearchRoutingEnum } from '../../enums';
import { TIndexSearchSubPages } from '../../interfaces';

@Component({
  selector: 'app-index-search',
  templateUrl: './index-search.component.html',
  styleUrls: ['./index-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndexSearchComponent {
  readonly searchSubPages: TIndexSearchSubPages = [
    {
      title: "Try full-text search by user's question or response sentese",
      icon: faSearchDollar,
      link: SearchRoutingEnum.FullText,
    },
    {
      title: "Try to get stats with 'fuzzy' search by username",
      icon: faUsers,
      link: SearchRoutingEnum.ByUsers,
    },
  ];
}
