import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Produs } from 'src/app/clase/produs';

@Injectable({
  providedIn: 'root'
})
export class ServiciuProdusService {

  constructor(

    private http:HttpClient

  ) { }

  afisare_produs():Observable<Produs[]>{

    let url="http://localhost:8080/api/produs/afisare";

    return this.http.get<Produs[]>(url);
  }

  afisare_produs_cautare(produsCautat:string=""):Observable<Produs[]>{

    let url="http://localhost:8080/api/produs/afisare";

    return this.http.get<Produs[]>(url+"&produsCautat="+produsCautat);
  }

  afisare_produs_id(id:number):Observable<any>{

    let url="http://localhost:8080/api/produs/afisare/";

    return this.http.get<any>(url+id);
  }

  creare_produs(produs:Produs):Observable<any>{

    const url="http://localhost:8080/api/produs/adaugare";

    return this.http.post<any>(url,produs);

  }

  actualizare_produs(produs:Produs,id:number):Observable<any>{

    const url="http://localhost:8080/api/produs/actualizare/";
    return this.http.put<any>(url+id,produs);

  }

  stergere_produs(id:number){

    const url="http://localhost:8080/api/produs/stergere/"

    return this.http.delete<any>(url+id);

  }

  cautare_produs(camp:string):Observable<any>{

    const url="http://localhost:8080/api/produs/cautare/"

    return this.http.get<any>(url+camp);

  }

}
