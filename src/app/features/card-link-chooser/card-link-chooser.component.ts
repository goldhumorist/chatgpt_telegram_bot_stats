import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-link-chooser',
  templateUrl: './card-link-chooser.component.html',
  styleUrls: ['./card-link-chooser.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardLinkChooserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}