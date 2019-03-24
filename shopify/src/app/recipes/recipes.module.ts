import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

//#region Modules
import { SharedModule } from '@shared/shared.module';
import { RecipesRotingModule } from './recipes-routing.module';
//#endregion

//#region Components
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeInfoComponent } from './recipe-info/recipe-info.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipesComponent } from './recipes.component';
//#endregion

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeInfoComponent,
    RecipeListComponent,
    RecipeEditComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RecipesRotingModule,
    SharedModule,
  ],
})
export class RecipesModule {}
