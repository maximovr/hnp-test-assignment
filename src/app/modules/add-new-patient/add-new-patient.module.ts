import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddNewPatientPage }    from './add-new-patient.page';
import { PatientCardComponent } from '../../shared/components/patient-card/patient-card.component';

const routes: Routes = [
  {
    path: '',
    component: AddNewPatientPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddNewPatientPage, PatientCardComponent]
})
export class AddNewPatientPageModule {}
