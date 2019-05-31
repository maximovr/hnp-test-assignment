import { Injectable }       from '@angular/core';
import { from, Observable } from 'rxjs';

import { Doctors, Patients } from '../data/simulation';
import { IDoctor, IPatient } from '../shared/interfaces';
import { filter, map }       from 'rxjs/operators';

@Injectable()
export class DataService {

  public getAllDoctors(): Observable<IDoctor[]> {
    return from<IDoctor[][]>([Doctors]).pipe(
      map((doctors: IDoctor[]) => doctors.map((doctor: IDoctor) => {
        doctor.fullName = `${doctor.firstName} ${doctor.lastName}`;
        return doctor;
      }))
    );
  }

  public getAllPatients(): Observable<IPatient[]> {
    return from<IPatient[][]>([Patients]);
  }

  public getPatientById(id: number): Observable<IPatient | null> {
    return from(Patients).pipe(
      filter((patient) => patient.id === id)
    );
  }

}
