import { ActionReducer, createReducer, on } from '@ngrx/store';
import { replaceVideo } from '../actions/youtube.action';
import { YouTubeState } from '../state.models';


const initialState: YouTubeState = {
  state: []
};
export const reducerYouTube: ActionReducer<YouTubeState> = createReducer(
  initialState,
  on( replaceVideo, (store: YouTubeState, { cards }) => ({
    ...store,
    state: [...cards]
  })
  )
);

