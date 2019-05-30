import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewPatientPage } from './add-new-patient.page';

describe('AddNewPatientPage', () => {
  let component: AddNewPatientPage;
  let fixture: ComponentFixture<AddNewPatientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewPatientPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewPatientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
