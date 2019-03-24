import { NgModule } from '@angular/core';

//#region Modules
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from './../app-routing.module';
//#region

//#region Components
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
//#endregion

//#region Servcices
import { RecipeService } from './services/recipe.service';
//#endregion

@NgModule({
  declarations: [HeaderComponent, HomeComponent],
  imports: [SharedModule, AppRoutingModule],
  providers: [RecipeService],
  exports: [AppRoutingModule, HeaderComponent],
})
export class CoreModule {}
