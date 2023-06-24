import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiciuFormLogareService {

  constructor() { }
  
  validateEmail(email: string): boolean {
    let pattern = new RegExp("^[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}$");
    return pattern.test(email);
  }

  alertFieldRequired(field: string) {
    alert("Field required: " + field);
  }

}
