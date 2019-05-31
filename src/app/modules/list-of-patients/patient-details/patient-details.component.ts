import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';
import { DataService }       from '../../../services/data.service';
import { Observable }        from 'rxjs';
import { IPatient }          from '../../../shared/interfaces';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss'],
})
export class PatientDetailsComponent implements OnInit {
  public patient$: Observable<IPatient>;

  constructor(private route: ActivatedRoute,
              private dataService: DataService) {
  }

  ngOnInit() {
   const id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
   this.patient$ = this.dataService.getPatientById(id);
  }

}
