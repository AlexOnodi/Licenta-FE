import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilizator } from 'src/app/clase/utilizator';

@Injectable({
  providedIn: 'root'
})
export class ServiciuUtilizatorService {

  constructor(

    private http:HttpClient

  ) { }

  afisare_utilizator():Observable<Utilizator[]>{

    const url='http://localhost:8080/api/utilizator/afisare';

    return this.http.get<Utilizator[]>(url);

  }

  stergere_utilizator(id:number){

    const url='http://localhost:8080/api/utilizator/stergere/';

    return this.http.delete<any>(url+id);

  }

  creare_utilizator(utilizator:Utilizator):Observable<Utilizator[]>{

    const url='http://localhost:8080/api/utilizator/creare';

    return this.http.post<Utilizator[]>(url,utilizator);
  }

}
