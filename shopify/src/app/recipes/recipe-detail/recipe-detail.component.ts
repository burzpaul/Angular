import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

//#region Store
import * as RecipeActions from '@recipes/store/recipe.actions';
import * as fromRecipe from '@recipes/store/recipe.reducers';
import * as ShoppingListAction from '@shoppList/store/shopping-list.actions';
//#endregion

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeState: Observable<fromRecipe.State>;
  recipeId: number;

  constructor(private router: Router, private route: ActivatedRoute, private store: Store<fromRecipe.FeatureState>) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.recipeId = +params.id;
      this.recipeState = this.store.select('recipes');
    });
  }

  onAddToShoppingList(): void {
    this.store
      .select('recipes')
      .pipe(take(1))
      .subscribe((recipeState: fromRecipe.State) => {
        const ingredients = recipeState.recipes[this.recipeId].ingredients;
        this.store.dispatch(new ShoppingListAction.AddIngredients(ingredients));
      });
  }

  onEditRecipe(): void {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  onDeleteRecipe(): void {
    this.store.dispatch(new RecipeActions.DeleteRecipe(this.recipeId));
    this.router.navigate(['/recipes']);
  }
}
