import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent {
  public title = 'Video';

  public colorBottom = '#FFFFF';

  public imgRef = '';

  public viewCount = '0';

  public likes = '0';

  public dislikes = '0';

  public comments = '0';

  public statistic: Statistics;

  public setData() {
    this.viewCount = this.statistic.viewCount;
    this.likes = this.statistic.likeCount;
    this.dislikes = this.statistic.dislikeCount;
    this.comments = this.statistic.commentCount;
  }
}
