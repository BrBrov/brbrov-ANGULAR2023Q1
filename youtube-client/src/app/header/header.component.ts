import {Component} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('showSettings', [
      transition(':enter', [
        style({opacity: 0, height: 0}),
        animate('1s', style({opacity: 1, height: 50}))
      ]),
      transition(':leave', [
        style({opacity: 1, height: 50}),
        animate('1s', style({opacity: 0, height: 0}))
      ])
    ])
  ]
})
export class HeaderComponent{
  public settings: boolean = false;

  showSettings(ev: boolean): void {
    this.settings = ev;
  }
}
