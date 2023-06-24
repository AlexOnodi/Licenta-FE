import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiciuCreareUtilizatorService } from '../servicii/serviciu-creare-utilizator.service';
import { Utilizator } from 'src/app/clase/utilizator';

@Component({
  selector: 'app-pagina-creare-cont',
  templateUrl: './pagina-creare-cont.component.html',
  styleUrls: ['./pagina-creare-cont.component.css']
})
export class PaginaCreareContComponent implements OnInit{

  formular_creare_cont!:FormGroup

  campNume=new FormControl(['',Validators.required]);
  campPrenume=new FormControl(['',Validators.required]);
  campEmail=new FormControl(['',Validators.required]);
  campTelefon=new FormControl(['',Validators.required]);
  campParola=new FormControl(['',Validators.required]);

  utilizator= new Utilizator;

  raspunsReusit='';
  raspunsEsuat='';

  constructor(
    
    private serviciu_creare_utilizator:ServiciuCreareUtilizatorService

    ){ }

  //fct pt validare campuri
  ngOnInit(): void {
    
    this.formular_creare_cont=new FormGroup({

      campNume:new FormControl(['',Validators.required]),
      campPrenume:new FormControl(['',Validators.required]),
      campEmail:new FormControl(['',Validators.required]),
      campTelefon:new FormControl(['',Validators.required]),
      campParola:new FormControl(['',Validators.required]),

    })

  }

  adauga_cont_utilizator():void{

    //console.log(this.formular_creare_cont.value)

    this.serviciu_creare_utilizator.creare_utilizator(this.utilizator).subscribe(

      raspuns=>{

        console.log(raspuns);

        this.raspunsReusit=raspuns;

      },eroare=>{

        this.raspunsEsuat=eroare.error;
        
      }

    );
    
  }

}
