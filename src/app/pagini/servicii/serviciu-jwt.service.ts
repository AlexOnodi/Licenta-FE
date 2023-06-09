import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class ServiciuJwtService {

  constructor() { }

  getEmail(token: string): string | null {
    let decodedToken: { [key: string]: string };

    decodedToken = jwt_decode(token);
    
    return decodedToken ? decodedToken['sub'] : null;
  }

}
