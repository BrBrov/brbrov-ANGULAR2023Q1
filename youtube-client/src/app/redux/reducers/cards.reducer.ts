import { UserCards } from '../state.models';
import { ActionReducer, createReducer, on } from '@ngrx/store';
import { addCard } from '../actions/cards.action';


export const initialCards: UserCards = {
  state: []
};

export const reducerUserCards: ActionReducer<UserCards> = createReducer(
  initialCards,
  on(addCard, (store: UserCards, { card }) => ({
    ...store,
    state: [...store.state, card]
  }))
);
