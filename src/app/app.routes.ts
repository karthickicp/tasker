import { Routes } from '@angular/router';

import { AuthLayout, DashboardLayout } from './layouts';
import { HomeComponent, LoginComponent, SignupComponent } from './feature';
import { AuthGuard } from './core/guards/auth.guard';
import { NoAuthGuard } from './core/guards/noauth.guard';

export const routes: Routes = [
  {
    path: 'login',
    component: AuthLayout,
    children: [{ path: '', component: LoginComponent }],
    canActivate: [NoAuthGuard],
  },
  {
    path: 'signup',
    component: AuthLayout,
    children: [{ path: '', component: SignupComponent }],
    canActivate: [NoAuthGuard],
  },

  {
    path: '',
    component: DashboardLayout,
    children: [{ path: '', component: HomeComponent }],
    canActivate: [AuthGuard],
  },
];
