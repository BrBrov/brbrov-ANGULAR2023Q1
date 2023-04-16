import { Injectable } from '@angular/core';
import { Actions, createEffect, CreateEffectMetadata, ofType } from '@ngrx/effects';
import { LoadDataService } from '../../youtube/services/load-data.service';
import { replaceVideo } from '../actions/youtube.action';
import { map, mergeMap, Observable } from 'rxjs';
import { ConvertDataService } from '../../youtube/services/convert-data.service';
import { TypedAction } from '@ngrx/store/src/models';


@Injectable()

export class YoutubeEffect {

  public loadData: Observable<{ cards: Card[] } & TypedAction<string>> & CreateEffectMetadata = createEffect(() => {
    return this.action.pipe(
      ofType('AddYoutubeVideo'),
      mergeMap((str) => this.load.getData(str['search']).pipe(
        map((data: ResponseData) => data.items),
        map((items: DataItem[]) => this.convert.toConvert(items)),
        map((cardsArr: Card[]) => replaceVideo({ cards: cardsArr }))

      ))
    );
  });

  constructor(private action: Actions,
    private load: LoadDataService,
    private convert: ConvertDataService) {}

}
