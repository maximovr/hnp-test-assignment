import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
}                           from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { AlertController }  from '@ionic/angular';
import { from, Observable } from 'rxjs';
import moment               from 'moment';
import numbertoWordsConverter from 'number-to-words';

import { DataService }       from '../../../services/data.service';
import { IDoctor, IPatient } from '../../interfaces';
import { map }               from 'rxjs/operators';

@Component({
  selector   : 'app-patient-card',
  templateUrl: './patient-card.component.html',
  styleUrls  : ['./patient-card.component.scss']
})
export class PatientCardComponent implements OnInit {
  @Input() public isEditable: boolean;
  @Input() public patient: IPatient | any = {};
  @Output() public formEmitter: EventEmitter<any> = new EventEmitter<any>();

  public doctors$: Observable<IDoctor[]> = this.dataService.getAllDoctors().pipe(
    map((doctors: IDoctor[]) => doctors.map((doctor: IDoctor) => {
      doctor.fullName = `${doctor.firstName} ${doctor.lastName}`;
      return doctor;
    }))
  );
  public patientForm: FormGroup          = this.fb.group({
    firstName: [{value: this.patient.firstName, disabled: this.isEditable}, Validators.required],
    lastName : ['', Validators.required],
    birthDate: ['', Validators.required],
    vat      : [''],
    doctor   : ['', Validators.required],
    addresses: this.fb.array([this.addAdress()])
  });

  constructor(
    private fb: FormBuilder,
    private alertController: AlertController,
    private dataService: DataService
  ) {
  }

  ngOnInit() {
    const vatControl = this.patientForm.get('vat');
    this.patientForm.get('birthDate').valueChanges.subscribe((date) => {
      if (!this.vatValidator(date)) {
        console.log('add');
        vatControl.setValidators([Validators.required]);
      } else {
        vatControl.clearValidators();
      }
      vatControl.updateValueAndValidity();
    });
  }

  public emitForm() {
    const invalidFields: string[] = this.findInvalidControls(this.patientForm);

    if (invalidFields.length) {
      return from(this.alertController.create({
        header   : 'Error',
        subHeader: 'Next fields have mistakes:',
        message  : invalidFields.join(', '),
        buttons  : ['OK']
      })).subscribe((x) => x.present());
    }

    this.formEmitter.next(this.patientForm);
  }

  public numberToWord(n: number) {
    return numbertoWordsConverter.toWordsOrdinal(++n);
  }

  public addOneMoreAddress() {
    (this.patientForm.controls['addresses'] as FormArray).push(this.addAdress());
  }

  private addAdress() {
    return this.fb.group({
      phoneNumber: ['', Validators.pattern(/^\+?[0-9\s]+$/g)],
      street: [''],
      city: [''],
      zipcode: [''],
      country: ['']
    })
  }

  private findInvalidControls(form): string[] {
    const invalid  = [];
    const controls = form.controls;

    for (const name in controls) {
      if (controls[name].invalid) {
        invalid.push(this.fieldNameToNormal(name));
      }
    }

    return invalid;
  }

  private fieldNameToNormal(name: string) {
    return name.replace(/^.|[A-Z]/g,
      (match, index) => index > 0 ? ` ${match.toLowerCase()}` : match.toUpperCase());
  }

  private vatValidator(date: string) {
    const years = moment().diff(date, 'years');
    return years > 18;
  }

}
