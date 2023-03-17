import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
  public settings: boolean = false;

  showSettings(ev: boolean): void {
    this.settings = ev;
  }
}
