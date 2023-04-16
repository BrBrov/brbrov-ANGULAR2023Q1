import { Injectable } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';
import { selectorYouTube } from '../../redux/selectors/youtube.selector';
import { UserCards, YouTubeState } from '../../redux/state.models';
import { selectorUserCards } from '../../redux/selectors/cards.selector';
import { Store } from '@ngrx/store';



@Injectable({
  providedIn: 'root'
})
export class StoreDataService {

  constructor(private store: Store) { }

  public getCard(id: string): Observable<Card> {
    return this.getUserCardsData().pipe(
      map((items: Card[]) => this.getYoutubeData().pipe(
        map((videos:Card[]) => [...items, ...videos])
      )),
      switchMap((data: Observable<Card[]>) => data),
      map((items: Card[]) => {
        return items.filter((item: Card): boolean => item.id === id);
      }),
      map( (i: Card[]) => i[0])
    );
  }

  public getData(): Observable<Card[]> {

    return this.getUserCardsData().pipe(
      map((items: Card[]) => this.getYoutubeData().pipe(
        map((videos:Card[]) => [...items, ...videos])
      )),
      switchMap((data: Observable<Card[]>) => data)
    );
  }

  private getYoutubeData(): Observable<Card[]> {
    return this.store.select(selectorYouTube).pipe(
      map((items: YouTubeState) => items.state)
    );
  }

  private getUserCardsData(): Observable<Card[]> {
    return this.store.select(selectorUserCards).pipe(
      map((items: UserCards) => items.state)
    );
  }
}
