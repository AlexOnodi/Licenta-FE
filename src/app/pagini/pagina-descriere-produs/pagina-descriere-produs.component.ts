import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produs } from 'src/app/clase/produs';
import { ServiciuProdusService } from '../servicii/serviciu-produs.service';
import { ServiciuAutorService } from '../servicii/serviciu-autor.service';
import { ServiciuDescriereService } from '../servicii/serviciu-descriere.service';
import { ServiciuCategorieService } from '../servicii/serviciu-categorie.service';
import { ServiciuFavoriteService } from '../servicii/serviciu-favorite.service';
import { Favorite } from 'src/app/clase/favorite';
import { Autor } from 'src/app/clase/autor';
import { TipConectareUtilizatorComponent } from '../dialog/tip-conectare-utilizator/tip-conectare-utilizator.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-pagina-descriere-produs',
  templateUrl: './pagina-descriere-produs.component.html',
  styleUrls: ['./pagina-descriere-produs.component.css']
})
export class PaginaDescriereProdusComponent implements OnInit{

  produse1:Produs[]=[];
  produse2:any;
  route1:string='';
  id:string='';
  snapshot:any;
  idProdus!:number;
  descriere:any;
  categorie:any;
  favorite!: Favorite;
  raspunsReusit='';
  raspunsEsuat='';
  id_produs!:number;
  autor:Autor[]=[];
  valuta:string="Lei";
  cautare:string="Educativ";
  
  

  constructor(

    private serviciu_produs:ServiciuProdusService,
    private route: ActivatedRoute,
    private serviciu_autor:ServiciuAutorService,
    private serviciu_descriere:ServiciuDescriereService,
    private serviciu_categorie:ServiciuCategorieService,
    private serviciu_favorite:ServiciuFavoriteService,
    private dialog:MatDialog,
    private snackBar: MatSnackBar
  ){
    //this.id=+<string>this.route.snapshot.paramMap.get('id');
    this.snapshot=route.snapshot;
    this.route1=this.snapshot.routeConfig.path;
    this.id = this.snapshot.params.id;


    
  }

  ngOnInit(): void {
    
    //const produsId = this.route.snapshot.paramMap.get('id');
    //this.produse = this.serviciu_produs.afisare_produs_id(produsId);

    this.incarcaDetalii();
    this.afisare_produse_dupa_id();
    this.afisare_produse_dupa_id2();
    this.afisare_autor();
    this.afisare_descriere();
    this.afisare_categorie();
    
  }

  tip_conectare_utilizator(){

    this.dialog.open(TipConectareUtilizatorComponent,{

      width:'15%'

    });

  }

  incarcaDetalii(){


    const produsId = this.route.snapshot.paramMap.get('id');
    this.idProdus=parseInt(produsId!);
    console.log(this.idProdus);

    this.id_produs=this.idProdus;
    console.log(this.id_produs);
    
    
  }

  afisare_produse_dupa_id(){

    this.serviciu_produs.afisare_produs_id(this.idProdus)

    .subscribe((raspuns)=>{

      console.log(raspuns);

      for(let i=0;i<raspuns.length;i++){

        this.produse1.push({

          id:raspuns[i].id,
          denumire:raspuns[i].denumire,
          data_adaugare:raspuns[i].data_adaugare,
          string_poza:raspuns[i].string_poza,
          pret:raspuns[i].pret

        })

      }

    }

    );

  }


afisare_produse_dupa_id2(){

  this.serviciu_produs.afisare_produs_id(this.idProdus)

  .subscribe(

    data=>{this.produse2=data
    console.log(data)}
    

  );

}

afisare_autor(){

  this.serviciu_autor.afisare_autor().subscribe((raspuns=>{

    console.log(raspuns);
    for(let i=0;i<raspuns.length;i++){

      this.autor.push({

        id:raspuns[i].id,
        nume:raspuns[i].nume,
        prenume:raspuns[i].prenume,
        tabela_produs_entity_id:raspuns[i].tabela_produs_entity_id

      })

    }

  }));

}

afisare_descriere(){

  this.serviciu_descriere.afisare_descriere().subscribe((raspuns=>{

    console.log(raspuns);
    for(let i=0;i<raspuns.length;i++){

      this.descriere.push({

        id:raspuns[i].id,
        titlu_descriere:raspuns[i].titlu_descriere,
        text_descriere:raspuns[i].text_descriere,
        tabela_produs_entity_id:raspuns[i].tabela_produs_entity_id

      })

    }

  }));

  

}

afisare_categorie(){

  this.serviciu_categorie.cautare_categorie(this.cautare).subscribe((raspuns)=>{

    console.log(raspuns);

    for(let i=0;i<raspuns.lenght;i++){

      this.categorie.push({

        id:raspuns[i].id,
        denumire:raspuns[i].denumire

      })

    }

  })

}


creare_favorite(){
  this.favorite = {id:null,
    tabela_produs_entity_id: this.produse2.id}

  this.serviciu_favorite.creare_favorite(this.favorite).subscribe(
    {
      next:(raspuns) => {
      this.raspunsReusit=raspuns;
      this.snackBar.open('Adaugat la favorite cu succes', 'Iesi', {
        duration: 3000
      });
    },
    error: () => {
      this.snackBar.open('Eroare', 'Iesi', {
        duration: 3000
      });
    }
  }
  );

}


}
