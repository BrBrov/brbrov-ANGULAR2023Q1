import {
  Component,
  ComponentRef, OnDestroy,
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
import { CardComponent } from '../../../shared/components/card/card.component';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit, OnDestroy {
  private data: ResponseData;

  private searchString = '';

  private sortString = '';

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
    private active: ActivatedRoute) {}

  ngOnInit(): void {
    this.activeObserver = this.active.queryParams.subscribe((query: Params) => {

      if (Object.hasOwn(query, 'search')) {
        this.searchString = query['search'].toLowerCase();

      } else {
        this.searchString = '';

      }

      this.service.getData(this.searchString).subscribe((response: ResponseData): void => {

        this.data = response;

        if (!this.data.items) return this.showNotFound();

        this.showCards(this.data);

        this.emitObserver = this.clickSortMenu.emit.subscribe((ev: EventData) => this.enterSearch(ev));
      });
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
    this.service.getData(this.searchString).subscribe((response: ResponseData): void => {
      this.data = response;
      if (mode === 'null') {
        this.showCards(this.data);
      } else {
        this.showCards(this.dateSorting.sortData(this.data, mode));
      }
    }).unsubscribe();
  }

  private sortByCount(mode: boolean | string): void {
    this.service.getData(this.searchString).subscribe((response: ResponseData): void => {
      this.data = response;
      if (mode === 'null') {
        this.showCards(this.data);
      } else {
        this.showCards(this.countSorting.sortData(this.data, mode));
      }
    }).unsubscribe();
  }

  private showCards(data: ResponseData): void {
    if (!this.isShowCards) this.isShowCards = true;
    this.container.clear();
    this.addCards(data);
  }

  private addCards(data: ResponseData): void {
    const timeNow: string = new Date().toString();
    data.items.forEach((item: DataItem): void => {
      const card: ComponentRef<CardComponent> = this.container.createComponent(CardComponent);
      card.instance.setID(item.id);
      card.instance.colorBottom = this.comparsion.comparsionDate(timeNow, item.snippet.publishedAt);
      card.instance.title = `${item.snippet.channelTitle} #${item.snippet.categoryId}`;
      card.instance.imgRef = item.snippet.thumbnails.high.url;
      card.instance.statistic = item.statistics;
      card.instance.searchString = this.searchString;
      card.instance.setData();
    });
  }

  private showNotFound(): void {
    this.route.navigate(['fail']);
  }
}
