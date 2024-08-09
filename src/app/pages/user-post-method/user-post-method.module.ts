import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserPostMethodPageRoutingModule } from './user-post-method-routing.module';

import { UserPostMethodPage } from './user-post-method.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserPostMethodPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [UserPostMethodPage],
})
export class UserPostMethodPageModule {}
