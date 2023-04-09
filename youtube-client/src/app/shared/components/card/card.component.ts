import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth-service.service';

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

  public searchString: string;

  private cardID: string;

  btnDisable = true;

  constructor(private route: Router, private authHandler: AuthService) {
  }

  public setID(id: string): void {
    this.cardID = id;
  }

  public setData() {
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
