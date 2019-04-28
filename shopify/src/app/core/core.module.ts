import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

//#region Pages
import { HomeComponent } from '@core/pages/home/home.component';
//#endregion

//#region Components
import { HeaderComponent } from '@core/components/header/header.component';
//#endregion

//#region Interceptors
import { AuthInterceptor } from '@core/interceptors/auth.interceptor';
import { LoggingInterceptor } from '@core/interceptors/logging.interceptor';
//#endregion

//#region Modules
import { SharedModule } from '@shared/shared.module';
import { AppRoutingModule } from '@app/app-routing.module';
//#endregion

@NgModule({
  declarations: [HeaderComponent, HomeComponent],
  imports: [SharedModule, AppRoutingModule],
  exports: [AppRoutingModule, HeaderComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true }
  ]
})
export class CoreModule {}
