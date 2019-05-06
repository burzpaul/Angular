import * as RecipeActions from '@recipes/store/recipe.actions';
import { Recipes, recipeAdapter } from '@recipes/store/recipe.state';

export function recipeReducer(state: Recipes, action: RecipeActions.RecipeActions): Recipes {
  switch (action.type) {
    case RecipeActions.RecipeActionTypes.SetRecipes:
      return recipeAdapter.addAll(action.payload.recipes, state);
    case RecipeActions.RecipeActionTypes.AddRecipe:
      return recipeAdapter.addOne(action.payload.recipe, state);
    case RecipeActions.RecipeActionTypes.UpdateRecipe:
      return recipeAdapter.updateOne(
        {
          id: action.payload.id,
          changes: action.payload.newValue
        },
        state
      );
    case RecipeActions.RecipeActionTypes.DeleteRecipe:
      return recipeAdapter.removeOne(action.payload.id, state);
    default:
      return state;
  }
}

const { selectIds, selectEntities, selectAll, selectTotal } = recipeAdapter.getSelectors();

export const selectRecipeIds = selectIds;

export const selectRecipeEntities = selectEntities;

export const selectAllRecipes = selectAll;

export const selectRecipeTotal = selectTotal;
