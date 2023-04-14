import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConvertDataService {
  public toConvert(items: DataItem[]): Array<Card> {
    return items.map((item: DataItem) => {
      const card: Card = {
        comments: '',
        date: '',
        description: '',
        dislikes: '',
        image: '',
        likes: '',
        title: '',
        video: '',
        view: ''
      };
      card.video = `https://www.youtube.com/watch?v=${item.id}`;
      card.date = item.snippet.publishedAt;
      card.image = item.snippet.thumbnails.default.url;
      card.description = item.snippet.description;
      card.title = item.snippet.title;
      card.likes = item.statistics.likeCount;
      card.dislikes = item.statistics.dislikeCount;
      card.view = item.statistics.viewCount;
      card.comments = item.statistics.commentCount;
      return card;
    });
  }
}
