import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListOfPatientsPage }      from './list-of-patients.page';
import { DataService }             from '../../services/data.service';
import { DateToLocalePipe }        from '../../shared/pipes/date-to-locale.pipe';
import { PatientDetailsComponent } from './patient-details/patient-details.component';

const routes: Routes = [
  {
    path: '',
    component: ListOfPatientsPage
  },
  {
    path:'details/:id',
    component: PatientDetailsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ListOfPatientsPage,
    PatientDetailsComponent,
    DateToLocalePipe],
  providers: [DataService]
})
export class ListOfPatientsPageModule {}
