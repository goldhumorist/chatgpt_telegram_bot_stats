import { Location } from '@angular/common';
import { AppRouteEnum } from './../../../core/enums/app-routes';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import {
  faLongArrowAltLeft,
  faLongArrowAltRight,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation-link',
  templateUrl: './navigation-link.component.html',
  styleUrls: ['./navigation-link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationLinkComponent {
  public readonly faLongArrowAltLeft = faLongArrowAltLeft;
  public readonly faLongArrowAltRight = faLongArrowAltRight;

  constructor(private router: Router, private location: Location) {}

  @Input()
  isLeftArrow!: boolean;

  @Input()
  title!: string;

  @Input()
  link!: string;

  onClick() {
    if (this.link === AppRouteEnum.ToBack) this.location.back();
    else this.router.navigate([this.link]);
  }
}
