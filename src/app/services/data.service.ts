import { Injectable } from '@angular/core';
import { from, Observable }              from 'rxjs';

import { doctors, patients } from '../data/simulation';
import { IDoctor, IPatient } from '../shared/interfaces';
import { filter }            from 'rxjs/operators';

@Injectable()
export class DataService {

  public getAllDoctors(): Observable<IDoctor[]> {
    return from<IDoctor[][]>([doctors]);
  }

  public getAllPatients(): Observable<IPatient[]> {
    return from<IPatient[][]>([patients]);
  }

  public getPatientById(id: number): Observable<IPatient | null> {
    return from(patients).pipe(
      filter((patient) => patient.id === id)
    )
  }

}
