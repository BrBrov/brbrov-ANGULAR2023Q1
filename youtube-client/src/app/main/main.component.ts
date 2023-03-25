import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {LoadDataService} from './load-data.service';
import {CardComponent} from '../card/card.component';
import {DateComparsionService} from './date-comparsion.service';
import {DateSortingService} from './date-sorting.service';
import {NotFoundComponent} from '../not-found/not-found.component';
import {CountSortingService} from './count-sorting.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [LoadDataService, DateComparsionService, DateSortingService, CountSortingService]
})
export class MainComponent implements OnInit {
  private data: ResponseData;

  private searchString: string | boolean = '';

  private isShowCards: boolean = false;

  @ViewChild('wrapper', {read: ViewContainerRef}) container: ViewContainerRef;

  constructor(private service: LoadDataService,
              private comparsion: DateComparsionService,
              private dateSorting: DateSortingService,
              private countSorting: CountSortingService) {}

  public enterSearch(value: EventData): void {
    console.log(value);
    if (value.type === 'search') {
      if (!this.isShowCards) {
        this.isShowCards = true;
        this.searchString = value.mode;
        this.showCards(this.data);
      }
      return;
    }
    if (value.type === 'date' || value.type === 'view') {
      if (!this.isShowCards) {
        this.showNotFound();
      } else if (value.type === 'date') {
        this.sortByDate(value.mode);
      } else if (value.type === 'view') {
        this.sortByCount(value.mode);
      }
      return;
    }
  }

  private sortByDate(mode: boolean | string ): void {
    if (mode === 'null') {
      this.service.getData().subscribe((response: Object) => {
        this.data = <ResponseData>response;
        this.showCards(this.data);
      });
    } else {
      this.showCards(this.dateSorting.sortData(this.data, mode));
    }
  }

  private sortByCount(mode: boolean | string): void {
    if (mode === 'null') {
      this.service.getData().subscribe((response: Object) => {
        this.data = <ResponseData>response;
        this.showCards(this.data);
      });
    } else {
      this.showCards(this.countSorting.sortData(this.data, mode));
    }
  }

  private showCards(data: ResponseData): void {
    this.container.clear();
    this.addCards(data);
  }

  private addCards(data: ResponseData): void {
    const timeNow = new Date().toString();
    data.items.forEach((item: DataItem) => {
      const card = this.container.createComponent(CardComponent);
      card.instance.colorBottom = this.comparsion.comparsionDate(timeNow, item.snippet.publishedAt);
      card.instance.title = `${item.snippet.channelTitle} #${item.snippet.categoryId}`;
      card.instance.imgRef = item.snippet.thumbnails.standard.url;
      card.instance.statistic = item.statistics;
      card.instance.setData();
    });
  }

  private showNotFound(): void {
    this.container.clear();
    this.container.createComponent(NotFoundComponent);
  }

  ngOnInit(): void {
    this.service.getData().subscribe((response: Object): void => {
      this.data = <ResponseData>response;
    })
  }
}
