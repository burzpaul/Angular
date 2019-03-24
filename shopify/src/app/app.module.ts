import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

//#region Modules
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { ShoppingListModule } from '@shoppList/shopping-list.module';
import { AppRoutingModule } from './app-routing.module';
//#endregion

//#region Component
import { AppComponent } from './app.component';
//#endregion

//#region Reducers
import { reducers } from '@store/app.reducers';
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
    StoreModule.forRoot(reducers),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
