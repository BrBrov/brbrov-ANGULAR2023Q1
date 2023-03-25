import {Component} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  public title = 'Video';
  public colorBottom = '#FFFFF';
  public imgRef: string = '';
  public viewCount: string = '0';
  public likes: string = '0';
  public dislikes: string = '0';
  public comments: string = '0';
  public statistic: Statistics;

  public setData() {
    this.viewCount = this.statistic.viewCount;
    this.likes = this.statistic.likeCount;
    this.dislikes = this.statistic.dislikeCount;
    this.comments = this.statistic.commentCount;
  }
}
