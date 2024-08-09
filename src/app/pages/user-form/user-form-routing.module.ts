import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserFormPage } from './user-form.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: UserFormPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), ReactiveFormsModule, FormsModule],
  exports: [RouterModule],
})
export class UserFormPageRoutingModule {}
