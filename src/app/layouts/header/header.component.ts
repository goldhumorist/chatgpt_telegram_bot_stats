import { AppRouteEnum } from './../../core/enums/app-routes';
import { Component, OnInit } from '@angular/core';
import {
  faHome,
  faSearch,
  faChartBar,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public readonly faHome = faHome;
  public readonly faSearch = faSearch;
  public readonly faChartBar = faChartBar;
  public readonly appRouteEnum = AppRouteEnum;

  constructor() {}

  ngOnInit(): void {}
}
