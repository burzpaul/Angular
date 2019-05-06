import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { Recipe } from '@recipes/models/recipe.model';

export interface Recipes extends EntityState<Recipe> {}

export interface RecipesState {
  readonly recipes: Recipes;
}

export const recipeAdapter: EntityAdapter<Recipe> = createEntityAdapter<Recipe>({
  selectId: (model: Recipe) => model.id
});

export const recipesInitialState: Recipes = recipeAdapter.getInitialState();