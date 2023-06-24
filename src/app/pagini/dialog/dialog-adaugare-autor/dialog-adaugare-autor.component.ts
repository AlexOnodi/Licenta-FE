import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Autor } from 'src/app/clase/autor';
import { ServiciuProdusService } from '../../servicii/serviciu-produs.service';
import { ServiciuAutorService } from '../../servicii/serviciu-autor.service';

@Component({
  selector: 'app-dialog-adaugare-autor',
  templateUrl: './dialog-adaugare-autor.component.html',
  styleUrls: ['./dialog-adaugare-autor.component.css']
})
export class DialogAdaugareAutorComponent implements OnInit {

  dialog_creare_autor!:FormGroup;
  campNume=new FormControl(['',Validators.required]);
  campPrenume=new FormControl(['',Validators.required]);
  campIdProdus=new FormControl(['',Validators.required]);
  raspunsReusit='';
  raspunsEsuat='';
  autor=new Autor;
  produseLista:any;

  constructor(

    private dialog:MatDialog,
    private serviciu_afisare_produs:ServiciuProdusService,
    private serviciu_creare_autor:ServiciuAutorService

  ){}

  ngOnInit(): void {
   
    this.dialog_creare_autor=new FormGroup({

      campNume:new FormControl(['',Validators.required]),
      campPrenume:new FormControl(['',Validators.required]),
      campIdProdus:new FormControl(['',Validators.required])

    })

    this.afisare_produse();
    
  }

  afisare_produse(){

    this.serviciu_afisare_produs.afisare_produs().subscribe((data:any)=>{

      this.produseLista=data;

    })

  }


  adaugare_autor():void{

    this.serviciu_creare_autor.creare_autor(this.autor).subscribe(

      raspuns=>{

        console.log(raspuns);
        this.raspunsReusit=raspuns;

      },eroare=>{

        this.raspunsEsuat=eroare.erorr();

      }

    )

  }

  inchide_dialog(){

    this.dialog.closeAll();

  }


}
