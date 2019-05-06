import { Action } from '@ngrx/store';

import { Recipe } from '@recipes/models/recipe.model';

export enum RecipeActionTypes {
  SetRecipes = '[RECIPE] SetRecipes',
  AddRecipe = '[RECIPE] AddRecipe',
  UpdateRecipe = '[RECIPE] UpdateRecipe',
  DeleteRecipe = '[RECIPE] DeleteRecipe',
  StoreRecipes = '[RECIPE] StoreRecipes',
  FetchRecipes = '[RECIPE] FetchRecipes'
}

export class SetRecipes implements Action {
  readonly type = RecipeActionTypes.SetRecipes;

  constructor(public payload: { recipes: Recipe[] }) {}
}

export class AddRecipe implements Action {
  readonly type = RecipeActionTypes.AddRecipe;

  constructor(public payload: { recipe: Recipe }) {}
}

export class UpdateRecipe implements Action {
  readonly type = RecipeActionTypes.UpdateRecipe;

  constructor(public payload: { id: number; newValue: Recipe }) {}
}

export class DeleteRecipe implements Action {
  readonly type = RecipeActionTypes.DeleteRecipe;

  constructor(public payload: { id: number }) {}
}

export class StoreRecipes implements Action {
  readonly type = RecipeActionTypes.StoreRecipes;
}

export class FetchRecipes implements Action {
  readonly type = RecipeActionTypes.FetchRecipes;
}

export type RecipeActions = SetRecipes | AddRecipe | UpdateRecipe | DeleteRecipe | StoreRecipes | FetchRecipes;
