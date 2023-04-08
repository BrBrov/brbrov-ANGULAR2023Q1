import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { Subscription } from 'rxjs';
import {LoadDataService} from '../../services/load-data.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit, OnDestroy {

  public imgLink: string = '';

  public title: string = '';

  public date: string = '';

  public description: string = '';

  public color: string = '';

  public views: string = '';

  public likes: string = '';

  public dislikes: string = '';

  public comments: string = '';

  public searchString: string = '';

  private linkObserver: Subscription;

  private loaderObserver: Subscription;

  constructor(private router: Router, private linkParam: ActivatedRoute, private loader: LoadDataService) { }

  ngOnInit(): void {
    this.linkObserver = this.linkParam.queryParams.subscribe((param: Params): void => {
      if (!Object.hasOwn(param, 'id')) {
        this.router.navigate(['main']);
      } else {
        this.loaderObserver = this.loader.getOneVideo(param['id']).subscribe((response: ResponseData): void => {
          const data: ResponseData = response;

          const card: DataItem[] = data.items.filter((item: DataItem): boolean => item.id === param['id']);

          this.imgLink = card[0].snippet.thumbnails.high.url;
          this.title = `${card[0].snippet.title} #${card[0].snippet.categoryId}`;
          this.date = new Date(card[0].snippet.publishedAt).toString();
          this.description = card[0].snippet.description;
          this.views = card[0].statistics.viewCount;
          this.likes = card[0].statistics.likeCount;
          this.dislikes = card[0].statistics.dislikeCount;
          this.comments = card[0].statistics.commentCount;

          if (Object.hasOwn(param, 'color')) {
            this.color = param['color'];
          }

          if (Object.hasOwn(param, 'search')) {
            this.searchString = param['search'];
          }
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.loaderObserver.unsubscribe();
    this.linkObserver.unsubscribe();
  }

  public backToMain(): void {
    this.router.navigate(['main'], { queryParams: { search: this.searchString } });
  }
}
