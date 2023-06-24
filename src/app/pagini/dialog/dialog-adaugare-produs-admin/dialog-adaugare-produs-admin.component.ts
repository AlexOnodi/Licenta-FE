import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ServiciuProdusService } from '../../servicii/serviciu-produs.service';
import { ServiciuSubcategorieService } from '../../servicii/serviciu-subcategorie.service';
import { ProdusClasa } from 'src/app/clase/produs-clasa';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Produs } from 'src/app/clase/produs';


@Component({
  selector: 'app-dialog-adaugare-produs-admin',
  templateUrl: './dialog-adaugare-produs-admin.component.html',
  styleUrls: ['./dialog-adaugare-produs-admin.component.css']
})
export class DialogAdaugareProdusAdminComponent implements OnInit {


  
  produs=new ProdusClasa;
  subcategorieLista:any;
  raspunsReusit='';
  raspunsEsuat='';
  dialog_creare_produs!:FormGroup;
  campDenumireProdus=new FormControl(['',Validators.required]);
  campDataAdaugare=new FormControl(['',Validators.required]);
  campPozaProdus=new FormControl(['',Validators.required]);
  campIdSubcategorie=new FormControl(['',Validators.required]);
  campPret=new FormControl(['',Validators.required]);
  optiune:string="Salvare";



  constructor(
    
    private dialog:MatDialog,
    private serviciu_creare_produs:ServiciuProdusService,
    private serviciu_afisare_subcategorie:ServiciuSubcategorieService,
    @Inject(MAT_DIALOG_DATA) public actualizareDate:any,
  
  
    ){}

    ngOnInit(): void {
      
      this.afisare_subcategorie();
      

      
      this.dialog_creare_produs=new FormGroup({

        campDenumireProdus:new FormControl(['',Validators.required]),
        campDataAdaugare:new FormControl(['',Validators.required]),
        campPozaProdus:new FormControl(['',Validators.required]),
        campIdSubcategorie:new FormControl(['',Validators.required]),
        campPret:new FormControl(['',Validators.required])

      })
      
      console.log(this.actualizareDate);

      
     if(this.actualizareDate){

      this.optiune="Actualizare";
      
      this.dialog_creare_produs.controls['campDenumireProdus'].setValue(this.actualizareDate.campDenumireProdus);
      console.log(this.actualizareDate.campDenumireProdus)

     } 
     
     

    }

    afisare_subcategorie(){

      this.serviciu_afisare_subcategorie.afisare_subcategorie().subscribe((data:any)=>{

        this.subcategorieLista=data;

      })

    }

    adaugare_produs():void{

      if(this.dialog_creare_produs.valid){

        this.serviciu_creare_produs.creare_produs(this.produs).subscribe(

          raspuns=>{
  
            this.raspunsReusit=raspuns;
  
          },eroare=>{
  
            this.raspunsEsuat=eroare.error();
  
          }
  
        )

      }
      else{

        this.actualizare_produse();

      }

    }

    inchide_dialog(){

      this.dialog.closeAll();    

    }

    actualizare_produse(){}

    

  

}
