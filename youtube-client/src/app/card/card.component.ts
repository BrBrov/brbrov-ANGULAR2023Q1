import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {SocialComponent} from '../social/social.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements AfterViewInit{
  public title = 'Video';
  public colorBottom = '#FFFFF';
  public imgRef: string = '';
  public statistic: Statistics;
  @ViewChild(SocialComponent) social: SocialComponent;
  ngAfterViewInit(): void {
    this.social.viewCount = Number(this.statistic.viewCount);
    this.social.likes = Number(this.statistic.likeCount);
    this.social.dislikes = Number(this.statistic.dislikeCount);
    this.social.comments = Number(this.statistic.commentCount);
  }
}
