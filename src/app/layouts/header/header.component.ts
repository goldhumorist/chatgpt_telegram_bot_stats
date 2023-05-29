import { AppRouteEnum } from './../../core/enums/app-routes';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  faHome,
  faSearch,
  faChartBar,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public readonly faHome = faHome;
  public readonly faSearch = faSearch;
  public readonly faChartBar = faChartBar;
  public readonly appRouteEnum = AppRouteEnum;
}
