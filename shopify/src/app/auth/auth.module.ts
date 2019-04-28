import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AuthRoutingModule } from '@auth/auth-routing.module';
import { SigninComponent } from '@auth/pages/signin/signin.component';
import { SignupComponent } from '@auth/pages/signup/signup.component';

@NgModule({
  declarations: [SigninComponent, SignupComponent],
  imports: [FormsModule, AuthRoutingModule]
})
export class AuthModule {}
