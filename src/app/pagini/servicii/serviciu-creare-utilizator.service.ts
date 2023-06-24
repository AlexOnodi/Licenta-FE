import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Utilizator } from 'src/app/clase/utilizator';

@Injectable({
  providedIn: 'root'
})
export class ServiciuCreareUtilizatorService {

  constructor(

    private http:HttpClient

  ) { }

  creare_utilizator(utilizator:Utilizator):Observable<any>{

    const url="http://localhost:8080/api/utilizator/adaugare";
    return this.http.post<any>(url,utilizator);

  }
}
