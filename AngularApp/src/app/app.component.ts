import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { phoneNumberValidator } from './phone-validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  countries = ['', 'USA', 'Germany', 'Italy', 'France'];
  contactForm: FormGroup;

  constructor() {
    this.contactForm = this.createFormGroup();
  }
  title = 'AngularApp';

  createFormGroup() {
    return new FormGroup({
      email: new FormControl('', [Validators.required]),
      mobile: new FormControl('', [Validators.required, phoneNumberValidator]),
      country: new FormControl('', [Validators.required])
    });
  }

  get mobile() {
    return this.contactForm.get('mobile');
  }

  revert() {
    this.contactForm.reset();
  }

  onSubmit() {
    console.log(this.contactForm.value)
  }


}

