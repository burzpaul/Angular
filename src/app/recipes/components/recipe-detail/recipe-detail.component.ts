import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

//#region State
import { AppState } from '@app/store/app.state';
import { RecipesState } from '@recipes/store/recipe.state';
//#endregion

//#region Actions
import * as RecipeActions from '@recipes/store/recipe.actions';
import * as ShoppingListAction from '@shoppList/store/shopping-list.actions';
//#endregion

//#region Selectors
import { selectAllRecipes } from '@app/recipes/store/recipe.selectors';
import { Recipe } from '@app/recipes/models/recipe.model';
//#endregion

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  recipes$: Observable<Recipe[]>;
  recipeId: number;

  constructor(private router: Router, private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.recipeId = +params.id;
      this.recipes$ = this.store.select(selectAllRecipes);
    });
  }

  onAddToShoppingList(): void {
    this.store
      .select('recipes')
      .pipe(take(1))
      .subscribe((recipeState: RecipesState) => {
        const ingredients = recipeState.recipes[this.recipeId].ingredients;
        this.store.dispatch(new ShoppingListAction.AddIngredients(ingredients));
      });
  }

  onEditRecipe(): void {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  onDeleteRecipe(): void {
    this.store.dispatch(new RecipeActions.DeleteRecipe({ id: this.recipeId }));
    this.router.navigate(['/recipes']);
  }
}
