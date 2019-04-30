import { Action } from '@ngrx/store';
import { Ingredient } from '@shared/models/ingredient.model';

export enum ShoppingListActionTypes {
  ADD_INGREDIENT = '[ShoppingList] ADD_INGREDIENT',
  ADD_INGREDIENTS = '[ShoppingList] ADD_INGREDIENTS',
  UPDATE_INGREDIENT = '[ShoppingList] UPDATE_INGREDIENT',
  DELETE_INGREDIENT = '[ShoppingList] DELETE_INGREDIENT',
  START_EDIT = '[ShoppingList] START_EDIT',
  STOP_EDIT = '[ShoppingList] STOP_EDIT'
}

export class AddIngredient implements Action {
  readonly type = ShoppingListActionTypes.ADD_INGREDIENT;

  constructor(public payload: Ingredient) {}
}

export class AddIngredients implements Action {
  readonly type = ShoppingListActionTypes.ADD_INGREDIENTS;

  constructor(public payload: Ingredient[]) {}
}

export class UpdateIngredient implements Action {
  readonly type = ShoppingListActionTypes.UPDATE_INGREDIENT;

  constructor(public payload: Ingredient) {}
}

export class DeleteIngredient implements Action {
  readonly type = ShoppingListActionTypes.DELETE_INGREDIENT;
}

export class StartEdit implements Action {
  readonly type = ShoppingListActionTypes.START_EDIT;

  constructor(public payload: number) {}
}

export class StopEdit implements Action {
  readonly type = ShoppingListActionTypes.STOP_EDIT;
}

export type ShoppingListActions =
  | AddIngredient
  | AddIngredients
  | UpdateIngredient
  | DeleteIngredient
  | StartEdit
  | StopEdit;
