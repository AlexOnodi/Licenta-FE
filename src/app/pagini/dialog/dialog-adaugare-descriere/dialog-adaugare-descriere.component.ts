import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ServiciuProdusService } from '../../servicii/serviciu-produs.service';
import { ServiciuDescriereService } from '../../servicii/serviciu-descriere.service';
import { Descriere } from 'src/app/clase/descriere';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-adaugare-descriere',
  templateUrl: './dialog-adaugare-descriere.component.html',
  styleUrls: ['./dialog-adaugare-descriere.component.css']
})
export class DialogAdaugareDescriereComponent implements OnInit{

  descriere=new Descriere;
  produseLista:any;
  raspunsReusit="";
  raspunsEsuat="";
  dialog_creare_descriere!:FormGroup;
  campIdDescriere=new FormControl(['',Validators.required]);
  campTitluDescriere=new FormControl(['',Validators.required]);
  campTextDescriere=new FormControl(['',Validators.required]);
  campIdProdus=new FormControl(['',Validators.required]);
  



  constructor(

    private dialog:MatDialog,
    private serviciu_afisare_produs:ServiciuProdusService,
    private serviciu_creare_descriere:ServiciuDescriereService

  ){}

  ngOnInit(): void {
    
    this.dialog_creare_descriere=new FormGroup({

      campIdDescriere:new FormControl(['',Validators.required]),
      campTitluDescriere:new FormControl(['',Validators.required]),
      campTextDescriere:new FormControl(['',Validators.required]),
      campIdProdus:new FormControl(['',Validators.required])

    })

    this.afisare_produs();

  }

  afisare_produs(){

    this.serviciu_afisare_produs.afisare_produs().subscribe((data:any)=>{

      this.produseLista=data;

    })

  }

  adaugare_descriere():void{

      this.serviciu_creare_descriere.creare_descriere(this.descriere).subscribe(

        raspuns=>{

          console.log(raspuns);
          this.raspunsReusit=raspuns;

        },eroare=>{

          this.raspunsEsuat=eroare.error();

        }

      )

  }

  inchide_dialog(){

    this.dialog.closeAll();

  }

  

}
