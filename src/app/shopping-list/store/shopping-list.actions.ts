import { Action } from '@ngrx/store';
import { Ingredient } from '@shared/models/ingredient.model';

export enum ShoppingListActionTypes {
  AddIngredient = '[ShoppingList] AddIngredient',
  AddIngredients = '[ShoppingList] AddIngredients',
  UpdateIngredient = '[ShoppingList] UpdateIngredient',
  DeleteIngredient = '[ShoppingList] DeleteIngredient',
  StartEdit = '[ShoppingList] StartEdit',
  StopEdit = '[ShoppingList] StopEdit'
}

export class AddIngredient implements Action {
  readonly type = ShoppingListActionTypes.AddIngredient;

  constructor(public payload: Ingredient) {}
}

export class AddIngredients implements Action {
  readonly type = ShoppingListActionTypes.AddIngredients;

  constructor(public payload: Ingredient[]) {}
}

export class UpdateIngredient implements Action {
  readonly type = ShoppingListActionTypes.UpdateIngredient;

  constructor(public payload: Ingredient) {}
}

export class DeleteIngredient implements Action {
  readonly type = ShoppingListActionTypes.DeleteIngredient;
}

export class StartEdit implements Action {
  readonly type = ShoppingListActionTypes.StartEdit;

  constructor(public payload: number) {}
}

export class StopEdit implements Action {
  readonly type = ShoppingListActionTypes.StopEdit;
}

export type ShoppingListActions =
  | AddIngredient
  | AddIngredients
  | UpdateIngredient
  | DeleteIngredient
  | StartEdit
  | StopEdit;
