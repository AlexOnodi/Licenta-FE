import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorie } from 'src/app/clase/categorie';
import { CategorieInterfata } from 'src/app/clase/categorie-interfata';

@Injectable({
  providedIn: 'root'
})
export class ServiciuCategorieService {

  constructor(

    private http:HttpClient

  ) { }

  afisare_categorie():Observable<Categorie[]>{

    const url="http://localhost:8080/api/categorie/afisare";

    return this.http.get<Categorie[]>(url);

  }

  afisare_categorie_dupa_id(id:number):Observable<any>{

    const url="http://localhost:8080/api/categorie/afisare/";

    return this.http.get<any>(url+id);

  }

  creare_categorie(categorie:Categorie):Observable<any>{

    const url="http://localhost:8080/api/categorie/adaugare";

    return this.http.post<any>(url,categorie);

  }

  stergere_categorie(id:number){

    const url="http://localhost:8080/api/categorie/stergere/";

    return this.http.delete<any>(url+id);

  }

  cautare_categorie(camp:string):Observable<any>{

    const url="http://localhost:8080/api/categorie/cautare/"

    return this.http.get<any>(url+camp);

  }


}
