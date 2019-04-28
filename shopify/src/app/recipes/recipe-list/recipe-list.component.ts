import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

//#region Store
import * as fromRecipe from '@recipes/store/recipe.reducers';
//#endregion

@Component({
  selector: 'app-recipe-list',
  styleUrls: ['./recipe-list.component.css'],
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipeState: Observable<fromRecipe.State>;

  constructor(private router: Router, private route: ActivatedRoute, private store: Store<fromRecipe.FeatureState>) {}

  ngOnInit(): void {
    this.recipeState = this.store.select('recipes');
  }

  onNewRecipe(): void {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
