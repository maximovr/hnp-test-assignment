import { NgModule }                         from '@angular/core';
import { CommonModule }                     from '@angular/common';
import { Routes, RouterModule }             from '@angular/router';

import { IonicModule }       from '@ionic/angular';
import { AddNewPatientPage } from './add-new-patient.page';
import { DataService }       from '../../services/data.service';
import { PatientCardModule } from '../../shared/modules/patient-card/patient-card-inputs.module';

const routes: Routes = [
  {
    path     : '',
    component: AddNewPatientPage
  }
];

@NgModule({
  imports     : [
    CommonModule,
    IonicModule,
    PatientCardModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddNewPatientPage],
  providers   : [DataService]
})
export class AddNewPatientPageModule {
}
