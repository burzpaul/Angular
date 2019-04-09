import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '@env/environment.prod';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

//#region Modules
import { AuthModule } from '@auth/auth.module';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { ShoppingListModule } from '@shoppList/shopping-list.module';
import { AppRoutingModule } from './app-routing.module';
//#endregion

//#region Component
import { AppComponent } from './app.component';
//#endregion

//#region Reducers
import { EffectsModule } from '@ngrx/effects';
import { reducers } from '@store/app.reducers';
//#endregion

//#region Effects
import { AuthEffects } from './auth/store/auth.effect';
//#endregion

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    AuthModule,
    ShoppingListModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AuthEffects]),
    StoreRouterConnectingModule,
    !environment ? StoreDevtoolsModule.instrument() : [],
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
