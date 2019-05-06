import { selectRecipeState } from './recipe.selectors';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';

import { Recipe } from '@recipes/models/recipe.model';

import { AppState } from '@app/store/app.state';

import * as RecipeActions from '@recipes/store/recipe.actions';

@Injectable()
export class RecipeEffects {
  @Effect()
  recipeFetch$ = this.actions$.pipe(
    ofType(RecipeActions.RecipeActionTypes.FetchRecipes),
    switchMap(() => {
      return this.httpClient.get<Recipe[]>(this.firebaseUrl);
    }),
    map((recipes) => {
      for (const recipe of recipes) {
        if (!recipe.ingredients) {
          recipe.ingredients = [];
        }
      }
      return {
        type: RecipeActions.RecipeActionTypes.SetRecipes,
        payload: { recipes }
      };
    })
  );

  @Effect({ dispatch: false })
  recipeStore$ = this.actions$.pipe(
    ofType(RecipeActions.RecipeActionTypes.StoreRecipes),
    withLatestFrom(this.store.select(selectRecipeState)),
    switchMap(([, state]) => {
      return this.httpClient.put(this.firebaseUrl, state.entities);
    })
  );

  private firebaseUrl = 'https://shopify-test-api-d2acf.firebaseio.com/recipes.json';

  constructor(private actions$: Actions, private httpClient: HttpClient, private store: Store<AppState>) {}
}
