import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full',
  },
  
  {
    path: 'landing',
    loadChildren: () =>
      import('./pages/landing/landing.module').then((m) => m.LandingPageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'user-form',
    loadChildren: () =>
      import('./pages/user-form/user-form.module').then(
        (m) => m.UserFormPageModule
      ),
  },
  {
    path: 'user-information',
    loadChildren: () => import('./pages/user-information/user-information.module').then( m => m.UserInformationPageModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./pages/users/users.module').then( m => m.UsersPageModule)
  },
  {
    path: 'user-post-method',
    loadChildren: () => import('./pages/user-post-method/user-post-method.module').then( m => m.UserPostMethodPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    ReactiveFormsModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
