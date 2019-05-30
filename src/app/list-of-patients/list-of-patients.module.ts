import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListOfPatientsPage } from './list-of-patients.page';

const routes: Routes = [
  {
    path: '',
    component: ListOfPatientsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListOfPatientsPage]
})
export class ListOfPatientsPageModule {}
