import {createAction, props} from '@ngrx/store';

export const add: string = 'AddNewCard';

export const addCard = createAction(add, props<{card: Card}>());
