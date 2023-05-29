import { link_to_telegram_bot } from './../../core/constants';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public readonly linKToTelegramBot = link_to_telegram_bot;

  constructor() {}

  ngOnInit(): void {}
}
