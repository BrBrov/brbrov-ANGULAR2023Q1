import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent {
  public title: string = 'Video';

  public colorBottom: string = '#FFFFF';

  public imgRef: string = '';

  public viewCount: string = '0';

  public likes: string = '0';

  public dislikes: string = '0';

  public comments: string = '0';

  public statistic: Statistics;

  public searchString: string;

  private cardID: string;

  constructor(private route: Router) {
  }

  public setID(id: string): void {
    this.cardID = id;
  }

  public setData() {
    this.viewCount = this.statistic.viewCount;
    this.likes = this.statistic.likeCount;
    this.dislikes = this.statistic.dislikeCount;
    this.comments = this.statistic.commentCount;
  }

  public toMoreInfo(): void {
    this.route.navigate(['main/card'], { queryParams: { id: this.cardID, color: this.colorBottom, search: this.searchString } });
  }
}
