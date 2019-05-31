import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfPatientsPage }      from './list-of-patients.page';
import { DateToLocalePipe }        from '../../shared/pipes/date-to-locale.pipe';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { DataService }             from '../../services/data.service';

describe('ListOfPatientsPage', () => {
  let component: ListOfPatientsPage;
  let fixture: ComponentFixture<ListOfPatientsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfPatientsPage, DateToLocalePipe, PatientDetailsComponent ],
      providers: [DataService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfPatientsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
