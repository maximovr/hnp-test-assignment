import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDetailsComponent } from './patient-details.component';
import { RouterTestingModule }     from '@angular/router/testing';
import { DataService }             from '../../../services/data.service';

describe('PatientDetailsComponent', () => {
  let component: PatientDetailsComponent;
  let fixture: ComponentFixture<PatientDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientDetailsComponent ],
      imports: [RouterTestingModule],
      providers: [DataService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
