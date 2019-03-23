import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';

//#region Modules
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
//#endregion

//#region Component
import { AppComponent } from './app.component';
//#endregion

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    ShoppingListModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
