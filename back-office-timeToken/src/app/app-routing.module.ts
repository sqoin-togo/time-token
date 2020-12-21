import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import {AuthComponent} from "./pages/auth/login/auth.component";
import {RegisterComponent} from "./pages/auth/register/register.component";
import {AuthGuard} from "./pages/auth/auth.guard";
import { EmailValidationComponent } from './pages/auth/email-validation/email-validation.component';
import { PrivacyComponent } from './pages/auth/privacy/privacy.component';
import { NbAuthComponent } from './pages/auth/authentification.components';
import { LogoutComponent } from './pages/auth/logout/logout.component';
import { ResetComponent } from './pages/auth/reset/reset.component';
 

const routes: Routes = [
  //{ path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule',canActivate: [AuthGuard]  },
  { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule'},
  {
  path: 'auth',
  component: NbAuthComponent,
  children: [
  {
    path: 'login',
    component:AuthComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path: 'email-validation',
    component: EmailValidationComponent
  },
  {
    path: 'logout',
component: LogoutComponent
  },
  {
    path:'reset',
    component:ResetComponent,
  },

  ],
  },
  {
    path: 'privacy',
    component: PrivacyComponent
  },
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth/login' },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes ,config )],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
