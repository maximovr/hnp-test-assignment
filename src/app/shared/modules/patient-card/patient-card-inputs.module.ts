import { NgModule }                         from '@angular/core';
import { CommonModule }                     from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule }                      from '@ionic/angular';

import { IonicSelectableModule } from 'ionic-selectable';

import { PatientCardComponent } from './patient-card.component';

@NgModule({
  declarations: [PatientCardComponent],
  imports     : [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    IonicSelectableModule
  ],
  exports     : [PatientCardComponent]
})
export class PatientCardModule {
}
