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
  faHome = faHome;
  faSearch = faSearch;
  faChartBar = faChartBar;

  constructor() {}

  ngOnInit(): void {}
}
