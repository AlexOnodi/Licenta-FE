import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subcategorie } from 'src/app/clase/subcategorie';

@Injectable({
  providedIn: 'root'
})
export class ServiciuSubcategorieService {

  constructor(

    private http:HttpClient

  ) { }

  afisare_subcategorie():Observable<Subcategorie[]>{

    const url="http://localhost:8080/api/subcategorie/afisare";

    return this.http.get<Subcategorie[]>(url);

  }

  creare_subcategorie(subcategorie:Subcategorie):Observable<any>{

    const url="http://localhost:8080/api/subcategorie/adaugare";

    return this.http.post<any>(url,subcategorie);

  }

  stergere_subcategorie(id:number){

    const url="http://localhost:8080/api/subcategorie/stergere/";

    return this.http.delete<any>(url+id);

  }

}
