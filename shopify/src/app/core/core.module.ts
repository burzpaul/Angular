import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AuthService } from '@auth/services/auth.service';
import { HeaderComponent } from '@core/header/header.component';
import { HomeComponent } from '@core/home/home.component';
import { RecipeService } from '@core/services/recipe.service';
import { AuthInterceptor } from '@shared/interceptors/auth.interceptor';
import { LoggingInterceptor } from '@shared/interceptors/logging.interceptor';
import { DataStorageService } from '@shared/services/data.storage.service';
import { SharedModule } from '@shared/shared.module';
import { AppRoutingModule } from 'app/app-routing.module';

@NgModule({
  declarations: [HeaderComponent, HomeComponent],
  imports: [SharedModule, AppRoutingModule],
  exports: [AppRoutingModule, HeaderComponent],
  providers: [
    RecipeService,
    DataStorageService,
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
  ],
})
export class CoreModule {}
