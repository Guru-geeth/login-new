import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { LoginPage } from './auth/login/login.page';
import { SignupPage } from './auth/signup/signup.page';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo:'signup',
  },
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginPage ,
  },
  {
    path: 'signup',
    pathMatch: 'full',
    component: SignupPage ,
  },

];
