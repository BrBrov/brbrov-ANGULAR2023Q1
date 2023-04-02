import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LoadDataService} from '../../services/load-data.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit{

  public imgLink: string = '';
  public title: string = '';
  public date: string = '';
  public description: string = '';
  public color: string = '';
  public views: string = '';
  public likes: string = '';
  public dislikes: string = '';
  public comments: string = '';

  constructor(private router: Router, private linkParam: ActivatedRoute, private loader: LoadDataService) { }

  ngOnInit(): void {
    this.linkParam.queryParams.subscribe((param) => {
      this.loader.getData().subscribe((response) => {
        const data: ResponseData = <ResponseData>response;

        if(!Object.hasOwn(param, 'id')) {
          this.router.navigate(['main']);
        } else {
          const card: DataItem[] = data.items.filter((item: DataItem) => item.id === param['id']);

          this.imgLink = card[0].snippet.thumbnails.high.url;
          this.title = `${card[0].snippet.title} #${card[0].snippet.categoryId}`;
          this.date = new Date(card[0].snippet.publishedAt).toString();
          this.description = card[0].snippet.description;
          this.views = card[0].statistics.viewCount;
          this.likes = card[0].statistics.likeCount;
          this.dislikes = card[0].statistics.dislikeCount;
          this.comments = card[0].statistics.commentCount;

          if (Object.hasOwn(param, 'color')) {
            console.log(param);
            this.color = param['color'];
          }
        }
      })
    })
  }

  public backToMain(): void {
    this.router.navigate(['main']);
  }
}
