import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

//#region Modules
import { SharedModule } from '@shared/shared.module';
import { RecipesRoutingModule } from '@recipes/recipes-routing.module';
//#endregion

//#region Pages
import { RecipesPageComponent } from '@recipes/pages/recipes/recipes.page';
//#endregion

//#region Components
import { RecipeDetailComponent } from '@recipes/components/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from '@recipes/components/recipe-edit/recipe-edit.component';
import { RecipeInfoComponent } from '@recipes/components/recipe-info/recipe-info.component';
import { RecipeItemComponent } from '@recipes/components/recipe-item/recipe-item.component';
import { RecipeListComponent } from '@recipes/components/recipe-list/recipe-list.component';
//#endregion

//#region Store
import { RecipeEffects } from '@recipes/store/recipe.effects';
import { recipeReducer } from '@recipes/store/recipe.reducers';
import { recipesInitialState } from './store/recipe.state';
//#endregion

@NgModule({
  declarations: [
    RecipesPageComponent,
    RecipeInfoComponent,
    RecipeListComponent,
    RecipeEditComponent,
    RecipeDetailComponent,
    RecipeItemComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RecipesRoutingModule,
    SharedModule,
    StoreModule.forFeature('recipes', recipeReducer, {
      initialState: recipesInitialState
    }),
    EffectsModule.forFeature([RecipeEffects])
  ]
})
export class RecipesModule {}
