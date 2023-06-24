import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RolUtilizator } from 'src/app/clase/rol-utilizator';

@Injectable({
  providedIn: 'root'
})
export class ServiciuRolUtilizatorService {

  constructor(

    private http:HttpClient

  ) { }

  afisare_rol_utilizator():Observable<RolUtilizator[]>{

    const url='http://localhost:8080/api/rol/afisare';

    return this.http.get<RolUtilizator[]>(url);

  }

  creare_rol_utilizator(rol:RolUtilizator):Observable<RolUtilizator[]>{

    const url='http://localhost:8080/api/rol/creare';

    return this.http.post<RolUtilizator[]>(url,rol);

  }

  stergere_rol_utilizator(id:number){

    const url='http://localhost:8080/api/rol/stergere/';

    return this.http.delete<any>(url+id);

  }

}
