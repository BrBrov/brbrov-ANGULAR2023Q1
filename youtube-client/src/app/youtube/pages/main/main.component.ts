import {
  Component, ComponentRef,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { LoadDataService } from '../../services/load-data.service';
import { DateComparsionService } from '../../services/date-comparsion.service';
import { DateSortingService } from '../../services/date-sorting.service';
import { CountSortingService } from '../../services/count-sorting.service';
import { WordSortingService } from '../../services/word-sorting.service';
import { ClickSortingService } from '../../../core/services/click-sorting.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CardComponent } from '../../../shared/components/card/card.component';
import { StoreDataService } from '../../services/store-data.service';
import { Store } from '@ngrx/store';
import { addVideo } from '../../../redux/actions/youtube.action';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit, OnDestroy {
  private data: Card[] = [];

  private searchString = '';

  private sortString  = '';

  private isShowCards = false;

  private activeObserver: Subscription;

  private emitObserver: Subscription;

  @ViewChild('wrapper', { read: ViewContainerRef, static: true }) container: ViewContainerRef;

  constructor(private service: LoadDataService,
    private comparsion: DateComparsionService,
    private dateSorting: DateSortingService,
    private countSorting: CountSortingService,
    private wordSorting: WordSortingService,
    private clickSortMenu: ClickSortingService,
    private route: Router,
    private active: ActivatedRoute,
    private storeService: StoreDataService,
    private store: Store) {}

  ngOnInit(): void {
    this.activeObserver = this.active.queryParams.subscribe((query: Params): void => {

      if (Object.hasOwn(query, 'search')) {
        this.searchString = query['search'].toLowerCase();

      } else {
        this.searchString = '';
      }
      this.store.dispatch(addVideo({ search: this.searchString }));

      this.storeService.getData().subscribe((cardsArray: Card[]): void => {
        this.data = cardsArray;

        if (!this.data.length) {
          this.showNotFound();
        } else {
          this.showCards(this.data);
        }
        this.emitObserver = this.clickSortMenu.emit.subscribe((ev: EventData) => this.enterSearch(ev));
      }).unsubscribe();


    });
  }

  ngOnDestroy(): void {
    this.activeObserver.unsubscribe();
    this.emitObserver.unsubscribe();
  }

  public enterSearch(value: EventData): void {
    if (value.type === 'date' || value.type === 'view' || value.type === 'word') {
      if (!this.isShowCards) {
        this.showNotFound();
      } else if (value.type === 'date') {
        this.sortByDate(value.mode);
      } else if (value.type === 'view') {
        this.sortByCount(value.mode);
      } else if (value.type === 'word') {
        this.sortString = value.mode as string;
        this.sortByWord(this.sortString);
      }
      return;
    }
  }

  private sortByWord(mode: string): void {
    this.showCards(this.wordSorting.sortData(this.data, mode));
  }

  private sortByDate(mode: boolean | string): void {
    this.storeService.getData().subscribe((data: Card[]): void => {
      this.data = data;

      if (mode === 'null') {
        this.showCards(this.data);
      } else {
        this.showCards(this.dateSorting.sortData(this.data, mode));
      }
    }).unsubscribe();
  }

  private sortByCount(mode: boolean | string): void {
    this.storeService.getData().subscribe((data: Card[]): void => {
      this.data = data;

      if (mode === 'null') {
        this.showCards(this.data);
      } else {
        this.showCards(this.countSorting.sortData(this.data, mode));
      }
    }).unsubscribe();
  }

  private showCards(data: Card[]): void {
    if (!this.isShowCards) this.isShowCards = true;
    this.container.clear();
    this.addCards(data);
  }

  private addCards(data: Card[]): void {
    const timeNow: string = new Date().toString();
    data.forEach((item: Card): void => {
      const card: ComponentRef<CardComponent> = this.container.createComponent(CardComponent);
      card.instance.setID(item.id);
      card.instance.colorBottom = this.comparsion.comparsionDate(timeNow, item.date);
      card.instance.title = item.title;
      card.instance.imgRef = item.image;
      card.instance.statistic = <Statistics>{
        viewCount: item.view,
        likeCount: item.likes,
        dislikeCount: item.dislikes,
        commentCount: item.comments
      };
      card.instance.searchString = this.searchString;
      card.instance.setData();
    });
  }

  private showNotFound(): void {
    this.route.navigate(['fail']);
  }
}
