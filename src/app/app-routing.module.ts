import { ReportsComponent } from './../components/reports/reports.component';
import { FieldsComponent } from './../components/fields/fields.component';
import { UsersComponent } from './../components/users/users.component';
import { AuthGuard } from './auth/auth.guard';
import { ForgotPassComponent } from './views/pages/forgot-pass/forgot-pass.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent, EmailLayoutComponent } from './containers';
import { Page404Component } from './views/pages/page404/page404.component';
import { Page500Component } from './views/pages/page500/page500.component';
import { LoginComponent } from './views/pages/login/login.component';
import { RegisterComponent } from './views/pages/register/register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home',
    },
    //canActivate: [AuthGuard],
    //canActivateChild: [AuthGuard],
    children: [
      {
        path: 'szemelyek',
        component: UsersComponent,
      },
      {
        path: 'palyak',
        component: FieldsComponent,
      },
      {
        path: 'riportok',
        component: ReportsComponent,
      },
    ],
  },

  {
    path: '404',
    component: Page404Component,
    data: {
      title: 'Page 404',
    },
  },
  {
    path: '500',
    component: Page500Component,
    data: {
      title: 'Page 500',
    },
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page',
    },
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page',
    },
  },
  {
    path: 'forgot-pass',
    component: ForgotPassComponent,
    data: {
      title: 'Elfelejtett jelszó',
    },
  },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking',
      // relativeLinkResolution: 'legacy'
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
