import {createAction, props} from '@ngrx/store';


export const add: string = 'AddYoutubeVideo';

export const addVideo = createAction(add, props<{search: string}>());

export const replace: string = 'ReplaceYoutubeVideo';

export const replaceVideo = createAction(replace, props<{cards: Card[]}>());
