import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CosCumparaturi } from 'src/app/clase/cos-cumparaturi';

@Injectable({
  providedIn: 'root'
})
export class ServiciuCosCumparaturiService {

  constructor(private http:HttpClient) { }

  afisare_cos():Observable<CosCumparaturi[]>{

    const url='http://localhost:8080/api/cos_per_produs/afisare';

    return this.http.get<CosCumparaturi[]>(url);

  }

  creare_cos(cos:CosCumparaturi):Observable<CosCumparaturi[]>{

    const url='http://localhost:8080/api/cos_per_produs/adaugare';

    return this.http.post<CosCumparaturi[]>(url,cos);

  }
}
