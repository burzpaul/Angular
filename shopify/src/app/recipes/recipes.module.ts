import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

//#region Modules
import { SharedModule } from '@shared/shared.module';
import { RecipesRotingModule } from './recipes-routing.module';
//#endregion

//#region Pages
import { RecipesPageComponent } from './pages/recipes/recipes.page';
//#endregion

//#region Components
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './components/recipe-edit/recipe-edit.component';
import { RecipeInfoComponent } from './components/recipe-info/recipe-info.component';
import { RecipeItemComponent } from './components/recipe-item/recipe-item.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
//#endregion

//#region Store
import { RecipeEffects } from './store/recipe.effects';
import { recipeReducer } from './store/recipe.reducers';
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
    RecipesRotingModule,
    SharedModule,
    StoreModule.forFeature('recipes', recipeReducer),
    EffectsModule.forFeature([RecipeEffects])
  ]
})
export class RecipesModule {}
