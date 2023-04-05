import {
  Component,
  ComponentRef,
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


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {
  private data: ResponseData;

  private searchString = '';

  private sortString = '';

  private isShowCards = false;

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
    this.active.queryParams.subscribe((query: Params) => {

      this.service.getData().subscribe((response): void => {
        this.data = <ResponseData>response;
        if (Object.hasOwn(query, 'search')) {
          this.searchString = query['search'].toLowerCase();

          this.data.items = this.data.items.filter( (item: DataItem): DataItem => {
            if (item.snippet.title.toLowerCase().includes(this.searchString)) {
              return item;
            }
            if (item.snippet.tags.includes(this.searchString)) {
              return item;
            }
            if (item.snippet.channelTitle.toLowerCase().includes(this.searchString)) {
              return item;
            }
          });

          this.showCards(this.data);
        }

        this.clickSortMenu.emit.subscribe((ev: EventData) => this.enterSearch(ev));
      });
    });
  }

  public enterSearch(value: EventData): void {
    console.log(value);
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
    if (!mode) {
      this.service.getData().subscribe((response) => {
        this.data = <ResponseData>response;
        this.showCards(this.data);
      });
    } else {
      this.showCards(this.wordSorting.sortData(this.data, mode));
    }
  }

  private sortByDate(mode: boolean | string): void {
    if (mode === 'null') {
      this.service.getData().subscribe((response) => {
        this.data = <ResponseData>response;
        this.showCards(this.data);
      });
    } else {
      this.showCards(this.dateSorting.sortData(this.data, mode));
    }
  }

  private sortByCount(mode: boolean | string): void {
    if (mode === 'null') {
      this.service.getData().subscribe((response) => {
        this.data = <ResponseData>response;
        this.showCards(this.data);
      });
    } else {
      this.showCards(this.countSorting.sortData(this.data, mode));
    }
  }

  private showCards(data: ResponseData): void {
    if (!this.isShowCards) this.isShowCards = true;
    this.container.clear();
    this.addCards(data);
  }

  private addCards(data: ResponseData): void {
    const timeNow = new Date().toString();
    data.items.forEach((item: DataItem): void => {
      const card: ComponentRef<CardComponent> = this.container.createComponent(CardComponent);
      card.instance.colorBottom = this.comparsion.comparsionDate(timeNow, item.snippet.publishedAt);
      card.instance.title = `${item.snippet.channelTitle} #${item.snippet.categoryId}`;
      card.instance.imgRef = item.snippet.thumbnails.high.url;
      card.instance.id = item.id;
      card.instance.statistic = item.statistics;
      card.instance.searchString = this.searchString;
      card.instance.setData();
    });
  }

  private showNotFound(): void {
    this.route.navigate(['fail']);
  }
}
