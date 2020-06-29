import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import { User } from '../user.model';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User;
  EmailPlaceholder: string = "Email";
  blur: string;
  PasswordBlur: string;
  ConfirmBlur: string;

  constructor( public service: LoginService, private _router:Router) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.user = {
      Email: '',
      Password: '',
      ConfirmPassword: ''
    }
  }

  OnSubmit(form: NgForm) {
    this.service.registerUser(form.value).subscribe(
      res => { this.resetForm(form);
               console.log('Got a complete notification'); },
      (err) => console.error('Got an error: '),
      () => {console.log('Got a complete notification');}
      );
  }

  OnBlur(value, name){
    if (value == "")
      this.blur = name + " is required"
    else if (name == "ConfirmPassword" && this.user.Password != this.user.ConfirmPassword && this.user.ConfirmPassword != "")
      this.blur = "Password does not match"
    else
      this.blur = "";
  }
}
