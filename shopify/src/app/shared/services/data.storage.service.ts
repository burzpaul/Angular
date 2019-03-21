import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { RecipeService } from './../../recipes/services/recipe.service';
import { Recipe } from 'src/app/recipes/models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  constructor(private http: Http, private recipeSvc: RecipeService) {}

  public storeRecipe(): Observable<Response> {
    return this.http.put(
      'https://shopify-test-api-d2acf.firebaseio.com/recipes.json',
      this.recipeSvc.getRecipes()
    );
  }

  public getRecipes(): void {
    this.http
      .get('https://shopify-test-api-d2acf.firebaseio.com/recipes.json')
      .pipe(
        map((response: Response) => {
          const recipes: Recipe[] = response.json();
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        })
      )
      .subscribe((recipes: Recipe[]) => {
        this.recipeSvc.setRecipes(recipes);
      });
  }
}
