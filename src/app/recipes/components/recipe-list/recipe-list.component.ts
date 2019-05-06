import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Recipe } from '@recipes/models/recipe.model';

//#region State
import { AppState } from '@app/store/app.state';
//#endregion

//#region Selectors
import { selectAllRecipes } from '@recipes/store/recipe.selectors';
//#endregion

@Component({
  selector: 'app-recipe-list',
  styleUrls: ['./recipe-list.component.scss'],
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes$: Observable<Recipe[]>;

  constructor(private router: Router, private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.recipes$ = this.store.select(selectAllRecipes);
  }

  onNewRecipe(): void {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
