import { NgModule }                         from '@angular/core';
import { CommonModule }                     from '@angular/common';
import { Routes, RouterModule }             from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListOfPatientsPage }      from './list-of-patients.page';
import { DataService }             from '../../services/data.service';
import { DateToLocalePipe }        from '../../shared/pipes/date-to-locale.pipe';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientCardModule }       from '../../shared/components/patient-card/patient-card-inputs.module';

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
    IonicModule,
    PatientCardModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    PatientDetailsComponent,
    ListOfPatientsPage,
    DateToLocalePipe],
  providers: [DataService]
})
export class ListOfPatientsPageModule {}
