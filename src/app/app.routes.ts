import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { LoginPage } from './auth/login/login.page';
import { SignupPage } from './auth/signup/signup.page';

export const routes: Routes = [
  // {
  //   path: 'home',
  //   loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  // },
  {
    path: '',
    pathMatch: 'full',
    component: HomePage ,
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
  // {
  //   path: 'login',
  //   // loadComponent: () => import('./auth/login/login.page').then((m) => m.LoginPage), // Use loadComponent for standalone components
  // },
  // {
  //   path: 'signup',
  //   // loadComponent: () => import('./auth/signup/signup.page').then((m) => m.SignupPage), // Use loadComponent for standalone components
  // }
];
