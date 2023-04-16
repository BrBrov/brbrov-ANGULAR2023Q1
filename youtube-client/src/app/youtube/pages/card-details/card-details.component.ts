import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { StoreDataService } from '../../services/store-data.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit, OnDestroy {

  public imgLink = '';

  public title = '';

  public date = '';

  public description = '';

  public color = '';

  public views = '';

  public likes = '';

  public dislikes = '';

  public comments = '';

  public searchString = '';

  private linkObserver: Subscription;

  private loaderObserver: Subscription;

  constructor(private router: Router, private linkParam: ActivatedRoute, private store: StoreDataService) { }

  ngOnInit(): void {
    this.linkObserver = this.linkParam.queryParams.subscribe((param: Params): void => {
      if (!Object.hasOwn(param, 'id')) {
        this.router.navigate(['main']);
      } else {

        if (Object.hasOwn(param, 'search')) {
          this.searchString = param['search'];
        }

        this.loaderObserver = this.store.getCard(param['id']).subscribe((card: Card): void => {
          this.imgLink = card.image;
          this.title = card.title;
          this.date = new Date(card.date).toString();
          this.description = card.description;
          this.views = card.view;
          this.likes = card.likes;
          this.dislikes = card.dislikes;
          this.comments = card.comments;

          if (Object.hasOwn(param, 'color')) {
            this.color = param['color'];
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
