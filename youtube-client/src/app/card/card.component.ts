import { Component, ViewChild} from '@angular/core';
import {SocialComponent} from '../social/social.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  public title = 'Video';
  public colorBottom = '#FFFFF';
  public imgRef: string = '';
  public statistic: Statistics;
  @ViewChild(SocialComponent) social: SocialComponent;
  constructor() {
    this.social = new SocialComponent();
  }

  public setData(): void {
    this.social.setData(this.statistic);
  }
}
