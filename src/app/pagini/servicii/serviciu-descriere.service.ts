import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Descriere } from 'src/app/clase/descriere';


@Injectable({
  providedIn: 'root'
})
export class ServiciuDescriereService {

  constructor(

    private http:HttpClient

  ) { }

  afisare_descriere():Observable<Descriere[]>{

    let url="http://localhost:8080/api/descriere/afisare";

    return this.http.get<Descriere[]>(url);

  }

  afisare_descriere_id(id:any):Observable<any>{

    const url="http://localhost:8080/api/descriere/afisare/";
    console.log("DESCRIPTION LOAD::",this.http.get<any>(url+id))

    return  this.http.get<any>(url+id);


  }

  creare_descriere(descriere:Descriere):Observable<any>{

    const url="http://localhost:8080/api/descriere/adaugare";

    return this.http.post<any>(url,descriere);

  }

  stergere_descriere(id:number){

    const url="http://localhost:8080/api/descriere/stergere/";

    return this.http.delete<any>(url+id);

  }

}
