import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AuthRoutingModule } from '@auth/auth-routing.module';
import { SigninPageComponent } from '@app/auth/pages/signin/signin.page';
import { SignupPageComponent } from '@app/auth/pages/signup/signup.page';

@NgModule({
  declarations: [SigninPageComponent, SignupPageComponent],
  imports: [FormsModule, AuthRoutingModule]
})
export class AuthModule {}
