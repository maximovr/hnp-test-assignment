import { CUSTOM_ELEMENTS_SCHEMA }                      from '@angular/core';
import { async, ComponentFixture, TestBed }            from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PatientCardComponent }  from './patient-card.component';
import { IonicModule }           from '@ionic/angular';
import { IonicSelectableModule } from 'ionic-selectable';
import { DataService }           from '../../../services/data.service';

describe('PatientCardComponent', () => {
  let component: PatientCardComponent;
  let fixture: ComponentFixture<PatientCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientCardComponent],
      imports: [FormsModule, ReactiveFormsModule, IonicModule, IonicSelectableModule ],
      providers: [DataService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
