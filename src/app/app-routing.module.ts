import {NgModule} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {AuthGuard} from './_guards/auth.guard';
import {AllPoliciesComponent} from './all-policies/all-policies.component';
import {LandingComponent} from './landing/landing.component';

const routes: Routes = [
  // map '/home to login component
  {
    path: 'home',
    component: LoginComponent
  },
  // route for registration component
  {
    path: 'register',
    component: RegistrationComponent
  },

  // route for landing component, i.e. to general user page or admin page
  {
    path: 'landing',
    component: LandingComponent,
    canActivate: [AuthGuard]
  }, 
  // map '/' to '/home'as our default route
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];
// export const appRouterModule = RouterModule.forRoot(routes);
@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule {}
