import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Categorie } from 'src/app/clase/categorie';
import { ServiciuCategorieService } from '../../servicii/serviciu-categorie.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-adaugare-categorie',
  templateUrl: './dialog-adaugare-categorie.component.html',
  styleUrls: ['./dialog-adaugare-categorie.component.css']
})
export class DialogAdaugareCategorieComponent implements OnInit  {

  dialog_creare_categorie!:FormGroup;

  campDenumireCategorie=new FormControl(['',Validators.required]);

  categorie =new Categorie;

  raspunsReusit='';
  raspunsEsuat='';

  constructor(

    private serviciu_creare_categorie:ServiciuCategorieService,
    private dialog:MatDialog

  ){}

  inchide_dialog(){

    this.dialog.closeAll();

  }


  //fct de validare
  ngOnInit(): void {
    
    this.dialog_creare_categorie=new FormGroup({

      campDenumireCategorie:new FormControl(['',Validators.required]) 

    })

  }

  adaugare_categorie():void{

    this.serviciu_creare_categorie.creare_categorie(this.categorie).subscribe(

      raspuns=>{

        console.log(raspuns);

        this.raspunsReusit=raspuns;

      },eroare=>{

        this.raspunsEsuat=eroare.error();
      
      }
    )

  }

}
