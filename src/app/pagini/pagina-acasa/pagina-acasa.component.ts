import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {ServiciuProdusService} from '../servicii/serviciu-produs.service';
import { Produs } from 'src/app/clase/produs';
import { ServiciuDescriereService } from '../servicii/serviciu-descriere.service';
import { Descriere } from 'src/app/clase/descriere';
import { MatDialog } from '@angular/material/dialog';
import {TipConectareUtilizatorComponent} from '../dialog/tip-conectare-utilizator/tip-conectare-utilizator.component';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, startWith, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Categorie } from 'src/app/clase/categorie';
import { ServiciuCategorieService } from '../servicii/serviciu-categorie.service';
import { Subcategorie } from 'src/app/clase/subcategorie';
import { ServiciuSubcategorieService } from '../servicii/serviciu-subcategorie.service';




@Component({
  selector: 'app-pagina-acasa',
  templateUrl: './pagina-acasa.component.html',
  styleUrls: ['./pagina-acasa.component.css']
})



export class PaginaAcasaComponent implements OnInit{

 data:any;
 data1!: Descriere[];
 produse: Produs[]=[];
 produse2:Produs[]=[];
 categorie:Categorie[]=[];
 subcategorie1:Subcategorie[]=[];
 produsCautat!:string;
 panelOpenState = false;
 arata_subcategorie:boolean=false;
 
 cautare_cuvant:FormGroup=new FormGroup({cauta:new FormControl('')});
 cautare_categorie:FormGroup=new FormGroup({cauta:new FormControl('')});
 public lista_produse:Array<any>=[];
 public lista_produse_dupa_categorie:Array<any>=[];

 @Output() cautare = new EventEmitter<string>();

  constructor(

    private serviciu_produs:ServiciuProdusService,

    private serviciu_descriere:ServiciuDescriereService,

    private dialog:MatDialog,

    private route:ActivatedRoute,
    
    private serviciu_categorie:ServiciuCategorieService,

    private serviciu_subcategorie:ServiciuSubcategorieService

  ){

    this.cautare_cuvant.get('cauta')?.valueChanges.pipe(

      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((v)=>this.serviciu_produs.cautare_produs(v))
    )
    .subscribe(

      (v)=>{

        this.lista_produse=v
      }
    )

    
  }

 
  subcategorie(){

    this.arata_subcategorie=!this.arata_subcategorie;

  }
 
 
  tip_conectare_utilizator(){

    this.dialog.open(TipConectareUtilizatorComponent,{

      width:'15%'

    });

  }

  ngOnInit():void{

    this.afisare_produse();
    this.afisare_produse_cautare();
    this.afisare_categorie();
    this.afisare_subcategorie();

  }

  

  cautaDupaDenumire(produsCautat:string){

    console.log(produsCautat);
    
  }

  afisare_produse(){

    this.serviciu_produs.afisare_produs()

    .subscribe((raspuns)=>{

      console.log(raspuns);

      for(let i=0;i<raspuns.length;i++){

        this.produse.push({

          id:raspuns[i].id,
          denumire:raspuns[i].denumire,
          data_adaugare:raspuns[i].data_adaugare,
          string_poza:raspuns[i].string_poza

        })

        

      }
      this.lista_produse=this.produse;
        console.log("lista produse pt cautare",this.lista_produse);

    }

    );

  }

  afisare_produse_cautare(){

    this.serviciu_produs.cautare_produs(this.produsCautat)

    .subscribe((raspuns)=>{

      console.log(raspuns);

      for(let i=0;i<raspuns.length;i++){

        this.produse2.push({

          id:raspuns[i].id,
          denumire:raspuns[i].denumire,
          data_adaugare:raspuns[i].data_adaugare,
          string_poza:raspuns[i].string_poza

        })

      }

    }

    );

  }

  afisare_categorie(){

    this.serviciu_categorie.afisare_categorie().subscribe((raspuns)=>{

      console.log(raspuns);

      for(let i=0;i<raspuns.length;i++){

        this.categorie.push({

          id:raspuns[i].id,
          denumire:raspuns[i].denumire

        });

      }

    });

  }

  afisare_categorie_specifica(cuvant_categorie:string="educativ"){

    this.serviciu_categorie.cautare_categorie(cuvant_categorie).subscribe((raspuns)=>{

      console.log("afiare dupa categorie",raspuns);

      for(let i=0;i<raspuns.lenght;i++){

        this.categorie.push({

          id:raspuns[i].id,
          denumire:raspuns[i].denumire

        })

      }

    })

  }

  afisare_subcategorie(){

    this.serviciu_subcategorie.afisare_subcategorie()

    .subscribe((raspuns)=>{

      console.log(raspuns);

      for(let i=0;i<raspuns.length;i++){

        this.subcategorie1.push({

          id:raspuns[i].id,
          tabela_categorie_entity_id:raspuns[i].tabela_categorie_entity_id,
          denumire_subcategorie:raspuns[i].denumire_subcategorie
          
        })

      }

    }

    );

  }

  sectiune(){

    document.getElementById("sectiune")!.scrollIntoView({behavior:"smooth"});

  }

  sectiune1(){

    document.getElementById("sectiune1")!.scrollIntoView({behavior:"smooth"});

  }

  sectiune4(){

    document.getElementById("sectiune4")!.scrollIntoView({behavior:"smooth"});

  }

  

 

}
