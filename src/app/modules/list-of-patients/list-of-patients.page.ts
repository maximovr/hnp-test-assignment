import { Component, OnInit } from '@angular/core';

import { IDoctor, IPatient } from '../../shared/interfaces';
import { patients, doctors } from '../../data/simulation';
import { from, Observable }  from 'rxjs';
import { DataService }       from '../../services/data.service';

@Component({
  selector   : 'app-list-of-patients',
  templateUrl: './list-of-patients.page.html',
  styleUrls  : ['./list-of-patients.page.scss']
})
export class ListOfPatientsPage implements OnInit {
  public patientsList$: Observable<IPatient[]>;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.patientsList$ = this.dataService.getAllPatients();
  }


  getDoctor(docId): IDoctor | Object {
    const doctor: IDoctor | undefined = doctors.filter((doc) => doc.id === docId)[0];

    return !doctor ? 'Not Fround' : `${doctor.firstName} ${doctor.lastName}`;
  }

}
