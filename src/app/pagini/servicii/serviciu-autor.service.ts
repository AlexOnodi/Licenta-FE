import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Autor } from 'src/app/clase/autor';

@Injectable({
  providedIn: 'root'
})
export class ServiciuAutorService {

  constructor(

    private http:HttpClient

  ) { }

  afisare_autor():Observable<Autor[]>{

    const url='http://localhost:8080/api/autor/afisare';

    return this.http.get<Autor[]>(url);

  }

  afisare_autor_dupa_id(id:number):Observable<any>{

    const url='http://localhost:8080/api/autor/afisare/';

    return this.http.get<any>(url+id);

  }

  creare_autor(autor:Autor):Observable<any>{

    const url='http://localhost:8080/api/autor/adaugare';
    return this.http.post<any>(url,autor);

  }

  stergere_autor(id:number){

    const url='http://localhost:8080/api/autor/stergere/';

    return this.http.delete<any>(url+id);

  }

}
