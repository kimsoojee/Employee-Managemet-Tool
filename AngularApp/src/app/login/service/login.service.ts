import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  readonly rootURL = "https://localhost:44379"

  constructor(private http: HttpClient) { }

  registerUser(user: User) {
    const body: User = {
      Email: user.Email,
      Password: user.Password,
      ConfirmPassword: user.ConfirmPassword
    }
    var reqHeader = new HttpHeaders({'No-Auth':'True'});
    return this.http.post(this.rootURL + '/api/Account/Register', body, {headers : reqHeader});
  }

  userAuthentication(username, password) {
    var UserData = "username=" + username + "&password=" + password + "&grant_type=password";
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded',
                                      'No-Auth':'True',
                                    });
    return this.http.post(this.rootURL + '/token', UserData, { headers: reqHeader });
  }

  getUserInfo(){
    return  this.http.get(this.rootURL+'/api/Account/UserInfo', 
            { headers: new HttpHeaders({'Authorization': 'Bearer '+localStorage.getItem('userToken')})});
  }


}
