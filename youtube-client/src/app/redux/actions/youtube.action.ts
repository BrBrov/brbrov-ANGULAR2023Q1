import { createAction, props } from '@ngrx/store';


export const add = 'AddYoutubeVideo';

export const addVideo = createAction(add, props<{ search: string }>());

export const replace = 'ReplaceYoutubeVideo';

export const replaceVideo = createAction(replace, props<{ cards: Card[] }>());
