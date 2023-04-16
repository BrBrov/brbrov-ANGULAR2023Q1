import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, mergeMap, Observable, ObservedValueOf } from 'rxjs';


enum URLs {
  search = 'https://www.googleapis.com/youtube/v3/search?type=video&maxResults=21&q=',
  video = 'https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id='
}

@Injectable({
  providedIn: 'root'
})
export class LoadDataService {

  constructor(private httpClient: HttpClient) {}

  public getData(searchString = ''): Observable<ObservedValueOf<Observable<ResponseData>>> {
    return this.getSearch(searchString).pipe(
      mergeMap((data: string) => this.getVideo(data))
    );
  }

  private getSearch(search: string): Observable<string> {
    return this.httpClient.get<ResponseSearchData>(URLs.search + search).pipe(
      map((res: ResponseSearchData) => res.items.map((i: SearchItem) => i.id.videoId)),
      map((arr: string[]) => arr.join(','))
    );
  }

  private getVideo(idString: string): Observable<ResponseData> {
    return this.httpClient.get<ResponseData>(URLs.video + idString);
  }
}
