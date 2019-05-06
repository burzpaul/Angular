import { MemoizedSelector, createFeatureSelector, createSelector } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';

import { Recipe } from '@recipes/models/recipe.model';
import { AppState } from '@app/store/app.state';
import { Recipes } from '@recipes/store/recipe.state';
import * as fromRecipes from '@recipes/store/recipe.reducers';

export const selectRecipeState: MemoizedSelector<AppState, Recipes> = createFeatureSelector<Recipes>('recipes');

export const selectRecipesIds: MemoizedSelector<AppState, string[] | number[]> = createSelector(
  selectRecipeState,
  fromRecipes.selectRecipeIds
);

export const selectRecipesEntities: MemoizedSelector<AppState, Dictionary<Recipe>> = createSelector(
  selectRecipeState,
  fromRecipes.selectRecipeEntities
);

export const selectAllRecipes: MemoizedSelector<AppState, Recipe[]> = createSelector(
  selectRecipeState,
  fromRecipes.selectAllRecipes
);

export const selectRecipeById = (id: number) =>
  createSelector(
    selectAllRecipes,
    (recipes: Recipe[]) => recipes.find((recipe: Recipe) => recipe.id === id)
  );
