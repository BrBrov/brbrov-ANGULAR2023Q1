import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WordSortingService {

  public sortData(data: ResponseData, mode: string): ResponseData {
    const first: DataItem[] = [];
    const second: DataItem[] = [];
    const third: DataItem[] = [];
    const forth: DataItem[] = [];

    const searchWord: string = mode.toLowerCase();

    data.items.forEach((item: DataItem): void => {
      const channelTitle: string = item.snippet.channelTitle.toLowerCase();
      const title: string = item.snippet.title.toLowerCase();

      if (channelTitle.includes(searchWord)) {
        first.push(item);
      } else if (title.includes(searchWord)) {
        second.push(item);
      } else if (item.snippet.tags && item.snippet.tags.includes(searchWord)) {
        third.push(item);
      } else {
        forth.push(item);
      }
    });

    return {
      'kind': data.kind,
      'etag': data.etag,
      'pageInfo': data.pageInfo,
      'items': first.concat(second.concat(third.concat(forth)))
    };
  }
}
