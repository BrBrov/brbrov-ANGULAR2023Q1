import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth-service.service';

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

  btnDisable: boolean = true;

  constructor(private route: Router, private authHandler: AuthService) {
  }

  public setID(id: string): void {
    this.cardID = id;
  }

  public setData(): void {
    this.viewCount = this.statistic.viewCount;
    this.likes = this.statistic.likeCount;
    this.dislikes = this.statistic.dislikeCount;
    this.comments = this.statistic.commentCount;
    this.btnDisable = this.authHandler.checkAuthorization();
  }

  public toMoreInfo(): void {
    this.route.navigate(['main/card'], { queryParams: { id: this.cardID, color: this.colorBottom, search: this.searchString } });
  }
}
