import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Recipe } from '../models/recipe.model';

import { RecipeService } from './../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  styleUrls: ['./recipe-list.component.css'],
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  public recipes: Recipe[];

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  public ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  public onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
