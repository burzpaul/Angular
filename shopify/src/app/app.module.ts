import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

//#region Modules
import { AppRoutingModule } from './app-routing.module';
import { RecipesModule } from './recipes/recipes.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
//#endregion

//#region Component
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
//#endregion

//#region Services
import { RecipeService } from './recipes/services/recipe.service';
import { ShoppingListService } from './shopping-list/services/shopping-list.service';
//#endregion

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    HttpModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    RecipesModule,
    ShoppingListModule,
  ],
  providers: [ShoppingListService, RecipeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
