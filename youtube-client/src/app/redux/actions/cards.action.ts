import { createAction, props } from '@ngrx/store';

export const add = 'AddNewCard';

export const addCard = createAction(add, props<{ card: Card }>());
