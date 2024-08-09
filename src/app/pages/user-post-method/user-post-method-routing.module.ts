import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserPostMethodPage } from './user-post-method.page';

const routes: Routes = [
  {
    path: '',
    component: UserPostMethodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserPostMethodPageRoutingModule {}
