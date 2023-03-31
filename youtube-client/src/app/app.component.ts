import { Component, ViewChild } from '@angular/core';
import { MainComponent } from './youtube/pages/main/main.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(MainComponent) mainBlock: MainComponent;


  public onInputSearchParam(ev: EventData): void {
    this.mainBlock.enterSearch(ev);
  }
}
