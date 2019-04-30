import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SigninPageComponent } from './pages/signin/signin.page';
import { SignupPageComponent } from './pages/signup/signup.page';

const authRoutes: Routes = [
  { path: 'signup', component: SignupPageComponent },
  { path: 'signin', component: SigninPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
