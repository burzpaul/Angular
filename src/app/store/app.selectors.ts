import { AppState } from '@app/store/app.state';

export const selectAuth = (state: AppState) => state.auth;
export const selectShoppingList = (state: AppState) => state.shoppingList;

