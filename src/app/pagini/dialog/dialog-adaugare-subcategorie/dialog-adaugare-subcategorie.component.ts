import { Component, OnInit } from '@angular/core';
import { ServiciuCategorieService } from '../../servicii/serviciu-categorie.service';
import { CategorieInterfata } from 'src/app/clase/categorie-interfata';
import { ServiciuSubcategorieService } from '../../servicii/serviciu-subcategorie.service';
import { Subcategorie } from 'src/app/clase/subcategorie';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-adaugare-subcategorie',
  templateUrl: './dialog-adaugare-subcategorie.component.html',
  styleUrls: ['./dialog-adaugare-subcategorie.component.css']
})
export class DialogAdaugareSubcategorieComponent implements OnInit{

  categorie_interfata:CategorieInterfata[]=[];
  categorieLista: any;
  subcategorie=new Subcategorie;
  raspunsReusit='';
  raspunsEsuat='';
  dialog_creare_subcategorie!:FormGroup;
  campDenumireSubcategorie=new FormControl(['',Validators.required]);
  campIdCategorie=new FormControl(['',Validators.required]);

  constructor(

    private serviciu_afisare_categorie:ServiciuCategorieService,
    private serviciu_creare_subcategorie:ServiciuSubcategorieService,
    private dialog:MatDialog

  ){}


  ngOnInit(): void {
    
    this.afisare_categorie();

    this.dialog_creare_subcategorie=new FormGroup({

      campDenumireSubcategorie:new FormControl(['',Validators.required]),
      campIdCategorie:new FormControl(['',Validators.required])

    })
    
  }

  afisare_categorie(){

    this.serviciu_afisare_categorie.afisare_categorie().subscribe((data:any)=>{

      this.categorieLista=data;
      
    })
  
  }

  adaugare_subcategorie():void{

    this.serviciu_creare_subcategorie.creare_subcategorie(this.subcategorie).subscribe(

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

  /*
  afisare_categorie(){

    this.serviciu_afisare_categorie.afisare_categorie()

    .subscribe((raspuns)=>{

      console.log(raspuns);

      for(let i=0;i<raspuns.length;i++){

        this.categorie.push({

          id:raspuns[i].id,
          denumire_categorie:raspuns[i].denumire_categorie,
          

        })

      }

    }

    );

}
*/

}

