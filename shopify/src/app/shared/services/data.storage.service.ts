import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { RecipeService } from '../../core/services/recipe.service';
import { Recipe } from './../../recipes/models/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  private firebaseUrl =
    'https://shopify-test-api-d2acf.firebaseio.com/recipes.json';

  constructor(
    private httpClient: HttpClient,
    private recipeSvc: RecipeService
  ) {}

  storeRecipe() {
    return this.httpClient.put(this.firebaseUrl, this.recipeSvc.getRecipes());
  }

  getRecipes(): void {
    this.httpClient
      .get<Recipe[]>(this.firebaseUrl)
      .pipe(
        map(recipes => {
          for (const recipe of recipes) {
            if (!recipe.ingredients) {
              recipe.ingredients = [];
            }
          }
          return recipes;
        })
      )
      .subscribe(recipes => {
        this.recipeSvc.setRecipes(recipes);
      });
  }
}
