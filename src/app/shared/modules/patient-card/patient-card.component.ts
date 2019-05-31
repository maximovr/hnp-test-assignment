import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
}                             from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { AlertController }    from '@ionic/angular';
import { from }               from 'rxjs';
import moment                 from 'moment';
import numbertoWordsConverter from 'number-to-words';

import { DataService }                 from '../../../services/data.service';
import { IAddress, IDoctor, IPatient } from '../../interfaces';

@Component({
  selector   : 'app-patient-card',
  templateUrl: './patient-card.component.html',
  styleUrls  : ['./patient-card.component.scss']
})
export class PatientCardComponent implements OnInit {
  @Input() public isEditable: boolean;
  @Input() public patient: IPatient | any         = {};
  @Output() public formEmitter: EventEmitter<any> = new EventEmitter<any>();

  public doctors: IDoctor[];
  public patientForm: FormGroup;
  public addressTypes: any = [
    {name: 'Home', value: 'HOME'},
    {name: 'Second home', value: 'SECOND_HOME'},
    {name: 'Work', value: 'WORK'},
    {name: 'Holiday place', value: 'HOLIDAY'},
    {name: 'Close relative', value: 'RELATIVE'}
  ];

  constructor(
    private fb: FormBuilder,
    private alertController: AlertController,
    private dataService: DataService
  ) {
  }

  ngOnInit() {
    this.dataService.getAllDoctors().subscribe((doctors) => {
      this.doctors = doctors;
      this.initPatientForm(this.patient);
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

  public addOneMoreAddress(address?: IAddress) {
    (this.patientForm.controls.addresses as FormArray).push(this.addAdress(address));
  }

  public removeAddress(idx) {
    (this.patientForm.controls.addresses as FormArray).removeAt(idx);
  }

  public validatePhone(phone: FormControl) {
    let phoneValue = phone.value.replace(/\s/g, '');

    if (!/^\+/g.test(phone.value)) {
      phoneValue = `+36 ${phoneValue}`;

    }
    phone.setValue(phoneValue);
    phone.updateValueAndValidity();
  }

  private initPatientForm(patient: IPatient | any = {}) {
    this.patientForm = this.fb.group({
      firstName: [patient.firstName, Validators.required],
      lastName : [patient.lastName, Validators.required],
      birthDate: [patient.birthDate, Validators.required],
      vat      : [patient.vat],
      doctor   : [this.doctors[patient.doctor], Validators.required],
      addresses: this.fb.array([])
    });

    const vatControl = this.patientForm.get('vat');
    this.patientForm.get('birthDate').valueChanges.subscribe((date) => {
      if (!this.vatValidator(date)) {
        vatControl.setValidators([Validators.required]);
      } else {
        vatControl.clearValidators();
      }
      vatControl.updateValueAndValidity();
    });

    if (patient.addresses) {
      patient.addresses.forEach((address) => this.addOneMoreAddress(address));
    } else {
      this.addOneMoreAddress();
    }
  }

  private addAdress(address: IAddress | any = {}) {
    return this.fb.group({
      type   : [this.addressTypes.find((type) => type.value === address.type)],
      email  : [address.email, [Validators.required, Validators.email]],
      phone  : [address.phone, [Validators.required, Validators.pattern(/^\+?[0-9\s]+$/g)]],
      street : [address.street, Validators.required],
      city   : [address.city, Validators.required],
      zipcode: [address.zipcode, Validators.required],
      country: [address.country, Validators.required]
    });
  }

  private findInvalidControls(form): string[] {
    const invalid  = [];
    const controls = form.controls;

    for (const name in controls) {
      if (controls[name].invalid) {
        if (name === 'addresses') {
          controls[name].controls.forEach((addressControl) => {
            for (const addressName in addressControl.controls) {
              if (addressControl.controls[addressName].invalid) {
                invalid.push(this.fieldNameToNormal(addressName));
              }
            }
          });
        } else {
          invalid.push(this.fieldNameToNormal(name));
        }
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
