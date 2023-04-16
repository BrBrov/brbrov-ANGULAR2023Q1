import { ActionReducerMap } from '@ngrx/store';
import { YouTubeClientStore } from '../state.models';
import { reducerUserCards } from './cards.reducer';
import { reducerYouTube } from './youtube.reducer';


export const reducers: ActionReducerMap<YouTubeClientStore> = {
  cards: reducerUserCards,
  videos: reducerYouTube
};
