import {Component} from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent {
  public viewCount: number;
  public likes: number;
  public dislikes: number;
  public comments: number;

  setData(statistic: Statistics): void {
    this.viewCount = Number(statistic.viewCount);
    this.likes = Number(statistic.likeCount);
    this.dislikes = Number(statistic.dislikeCount);
    this.comments = Number(statistic.commentCount);
  }
}
