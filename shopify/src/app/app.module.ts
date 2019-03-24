import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

//#region Modules
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
//#endregion

//#region Component
import { AppComponent } from './app.component';
//#endregion

//#region Reducers
import { shoppingListReducer } from './shopping-list/store/shopping-list.reducers';
//#endregion

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    ShoppingListModule,
    StoreModule.forRoot({
      shoppingList: shoppingListReducer,
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
