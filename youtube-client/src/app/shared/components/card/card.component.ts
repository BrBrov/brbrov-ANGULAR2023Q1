import { Component } from '@angular/core';
import {Router} from '@angular/router';

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

  public id: string = '0';

  public statistic: Statistics;

  constructor(private route: Router) {
  }

  public setData() {
    this.viewCount = this.statistic.viewCount;
    this.likes = this.statistic.likeCount;
    this.dislikes = this.statistic.dislikeCount;
    this.comments = this.statistic.commentCount;
  }

  public toMoreInfo(): void {
    this.route.navigate(['main/card'], {queryParams: {id: this.id, color: this.colorBottom}});
  }
}
