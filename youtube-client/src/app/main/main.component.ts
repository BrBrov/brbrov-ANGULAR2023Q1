import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {LoadDataService} from './load-data.service';
import {CardComponent} from '../card/card.component';
import {DateComparsionService} from './date-comparsion.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [LoadDataService, DateComparsionService]
})
export class MainComponent implements OnInit{
  public data: ResponseData;

  @ViewChild('wrapper', {read: ViewContainerRef}) container: ViewContainerRef;

  constructor(private service: LoadDataService, private comparsion: DateComparsionService) {}

  public enterSearch(value: string): void {
    console.log(value);
    //TODO: add filter logic for search
    this.container.clear();
    this.addCards();
  }
  private addCards(): void {
   const timeNow = new Date().toString();
    this.data.items.forEach((item: DataItem) => {
      const card = this.container.createComponent(CardComponent);

      card.instance.colorBottom = this.comparsion.comparsionDate(timeNow, item.snippet.publishedAt);
      card.instance.title = `${item.snippet.channelTitle} #${item.snippet.categoryId}`;
      card.instance.imgRef = item.snippet.thumbnails.standard.url;
      card.instance.statistic = item.statistics;
      card.instance.setData();
    });
  }

  ngOnInit(): void {
    this.service.getData().subscribe((response: Object): void => {
      this.data = <ResponseData>response;
    })
  }
}
