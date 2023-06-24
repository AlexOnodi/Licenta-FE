import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiciuFormLogareService } from './serviciu-form-logare.service';

@Injectable({
  providedIn: 'root'
})
export class ServiciuAutentificareService {

  url: string = "http://localhost:8080/api/utilizator/autentificare";

  constructor(private http: HttpClient, private formUtil: ServiciuFormLogareService) { }

  checkRequiredFields(user: any): boolean {
    if (user.username == "") {
      this.formUtil.alertFieldRequired("Email address");
      return false;
    }

    if (!this.formUtil.validateEmail(user.username)) {
      alert("Email is not correct");
      return false;
    }

    if (user.password == "") {
      this.formUtil.alertFieldRequired("Password");
      return false;
    }

    return true;
  }

  authenticate(user: any): Observable<any> {
    const headers = {
      'content-type': 'application/json'
    }

    return this.http.post(this.url, user, { 'headers': headers });
  }

  storeToken(token: any) {
    localStorage.setItem("jwt", token.jwt);
  }

  deleteToken() {
    localStorage.removeItem('jwt');
  }
}
