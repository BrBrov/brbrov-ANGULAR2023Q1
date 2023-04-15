import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConvertDataService {
  public toConvert(items: DataItem[]): Array<Card> {
    return items.map((item: DataItem) => {

      const card: Card = {
        id: '',
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

      card.id = item.id;
      card.video = `https://www.youtube.com/watch?v=${item.id}`;
      card.date = item.snippet.publishedAt;
      card.image = item.snippet.thumbnails.default.url;
      card.description = item.snippet.description;
      card.title = item.snippet.channelTitle + ' #' + item.snippet.categoryId;
      card.likes = item.statistics.likeCount  || '0';
      card.dislikes = item.statistics.dislikeCount || '0';
      card.view = item.statistics.viewCount  || '0';
      card.comments = item.statistics.commentCount  || '0';

      return card;
    });
  }
}
