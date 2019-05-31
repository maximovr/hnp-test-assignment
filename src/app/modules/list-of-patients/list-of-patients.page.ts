import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs';

import { IDoctor, IPatient } from '../../shared/interfaces';
import { Doctors }           from '../../data/simulation';
import { DataService }       from '../../services/data.service';

@Component({
  selector   : 'app-list-of-patients',
  templateUrl: './list-of-patients.page.html',
  styleUrls  : ['./list-of-patients.page.scss']
})
export class ListOfPatientsPage implements OnInit {
  public patientsList$: Observable<IPatient[]>;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.patientsList$ = this.dataService.getAllPatients();
  }

  getDoctor(docId): string {
    const doctor: IDoctor | undefined = Doctors.filter((doc) => doc.id === docId)[0];

    return !doctor ? 'Not Fround' : `${doctor.firstName} ${doctor.lastName}`;
  }

}
