import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Favorite } from 'src/app/clase/favorite';
import { Produs } from 'src/app/clase/produs';

@Injectable({
  providedIn: 'root'
})
export class ServiciuFavoriteService {

  constructor(

    private http:HttpClient

  ) { }

  afisare_favorite():Observable<Favorite[]>{

    const url="http://localhost:8080/api/favorite/afisare";

    return this.http.get<Favorite[]>(url);

  }

  afisare_favorite_dupa_id(id:number):Observable<any>{

    const url="http://localhost:8080/api/favorite/afisare/";

    return this.http.get<any>(url+id);

  }

  creare_favorite(favorite:Favorite):Observable<any>{

    const url="http://localhost:8080/api/favorite/adaugare";

    return this.http.post<any>(url,favorite);

  }

  stergere_favorite_dupa_id(id:number){

    const url="http://localhost:8080/api/favorite/stergere/"

    return this.http.delete<any>(url+id);

  }

  actualizare_favorite(){}

}
