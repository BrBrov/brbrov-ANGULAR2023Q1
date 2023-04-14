import {Injectable} from '@angular/core';
import {Actions, createEffect, CreateEffectMetadata, ofType} from '@ngrx/effects';
import {LoadDataService} from '../../youtube/services/load-data.service';
import {replaceVideo} from '../actions/youtube.action';
import {catchError, map, mergeMap, Observable, of} from 'rxjs';
import {ConvertDataService} from '../../youtube/services/convert-data.service';
import {TypedAction} from '@ngrx/store/src/models';


@Injectable()

export class YoutubeEffect {

  public loadData: Observable<{cards: Card[]} & TypedAction<string>> & CreateEffectMetadata = createEffect(() =>
  this.action.pipe(
    ofType('AddYoutubeVideo'),
    mergeMap((search: string) => this.load.getData(search).pipe(
      map((data: ResponseData) => data.items),
      map((items: DataItem[]) => this.convert.toConvert(items)),
      map((cardsArr: Card[]) => replaceVideo({cards: cardsArr})),
      catchError(() => of(replaceVideo({cards: this.getErrCard()}))
    ))
  )));

  constructor(private action: Actions,
              private load: LoadDataService,
              private convert: ConvertDataService) {}

  private getErrCard(): Card[] {
    const card: Card = {
      comments: '',
      date: '',
      description: '',
      dislikes: '',
      image: '',
      likes: '',
      title: '',
      video: 'error',
      view: ''
    };
    return [card];
  }
}
