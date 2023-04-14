import {createFeatureSelector, createSelector} from '@ngrx/store';
import {YouTubeState} from '../state.models';


export const featureYouTube = createFeatureSelector<YouTubeState>('videos');

export const selectorYouTube = createSelector(featureYouTube, (store: YouTubeState) => store);
