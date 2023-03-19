import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {LoadDataService} from '../load-data.service';
import {CardComponent} from '../card/card.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{
  public data: ResponseData;
  private colors: Array<string> = ['#2F80ED', '#27AE60', '#EB5757', '#F2C94C'];

  @ViewChild('wrapper', {read: ViewContainerRef}) container: ViewContainerRef;

  constructor(private service: LoadDataService) {}

  ngOnInit(): void {
    this.service.request.get('../../assets/response.json').subscribe((response) => {
      this.data = response as ResponseData;
      let count = 1;
      console.log(this.data.items);
      this.data.items.forEach((item: DataItem) => {
        const card = this.container.createComponent(CardComponent);
        switch(count) {
          case 0:
          case 1:
          case 2:
            card.instance.colorBottom = this.colors[0];
            break;
          case 3:
            card.instance.colorBottom = this.colors[1];
            break;
          case 4:
            card.instance.colorBottom = this.colors[2];
            break;
          case 5:
            card.instance.colorBottom = this.colors[3];
            break;
          default:
            count = 0;
            card.instance.colorBottom = this.colors[0];
            break;
        }
        count += 1;
        card.instance.title = item.snippet.channelTitle;
        card.instance.imgRef = item.snippet.thumbnails.standard.url;
      });
    });
  }
}
