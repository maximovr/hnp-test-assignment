import { NgModule }                         from '@angular/core';
import { CommonModule }                     from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule }             from '@angular/router';

import { IonicModule }           from '@ionic/angular';
import { IonicSelectableModule } from 'ionic-selectable';

import { AddNewPatientPage }    from './add-new-patient.page';
import { PatientCardComponent } from '../../shared/components/patient-card/patient-card.component';
import { DataService }          from '../../services/data.service';

const routes: Routes = [
  {
    path     : '',
    component: AddNewPatientPage
  }
];

@NgModule({
  imports     : [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    IonicSelectableModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddNewPatientPage, PatientCardComponent],
  providers   : [DataService]
})
export class AddNewPatientPageModule {
}
