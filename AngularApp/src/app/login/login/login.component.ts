import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoginError : boolean = false;
  blur: string;
  constructor(public service: LoginService, private _router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(userName,password) {
    return this.service.userAuthentication(userName,password).subscribe(
      (user: any) => { localStorage.setItem('userToken', user.access_token); 
                       this._router.navigate(['/employee']); 
                      },
      (err: HttpErrorResponse) => { this.isLoginError = true; },
      () => { console.log('Got a complete notification'); }
    );
  }

  OnBlur(value, name){
    if (value == "")
      this.blur = name + " is required";
    else
      this.blur = "";
  }

}
