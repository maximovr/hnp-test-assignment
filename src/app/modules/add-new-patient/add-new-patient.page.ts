import { Component }       from '@angular/core';
import { Router }          from '@angular/router';
import { AlertController } from '@ionic/angular';
import { from }            from 'rxjs';

@Component({
  selector   : 'app-add-new-patient',
  templateUrl: './add-new-patient.page.html'
})
export class AddNewPatientPage {

  constructor(private router: Router,
              private alertController: AlertController) {
  }

  public formSender(form) {
    from(this.alertController.create({
      header   : 'Success',
      message  : 'New patient created',
      buttons  : ['OK']
    })).subscribe((x) => x.present() && this.router.navigate(['/list-of-patients']));
    console.log('Form received and sent to backend', form);
  }

}
