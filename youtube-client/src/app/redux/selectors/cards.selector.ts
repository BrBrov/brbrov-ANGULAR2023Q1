import {createFeatureSelector, createSelector} from '@ngrx/store';
import {UserCards} from '../state.models';

export const featureUserCards = createFeatureSelector<UserCards>('cards');

export const selectorUserCards = createSelector(featureUserCards, (store: UserCards) => store);
