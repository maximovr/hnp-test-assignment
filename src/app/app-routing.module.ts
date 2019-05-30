import { NgModule }                                from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadChildren: './modules/home/home.module#HomePageModule'},
  {
    path        : 'add-new-patient',
    loadChildren: './modules/add-new-patient/add-new-patient.module#AddNewPatientPageModule'
  },
  {
    path        : 'list-of-patients',
    loadChildren: './modules/list-of-patients/list-of-patients.module#ListOfPatientsPageModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
