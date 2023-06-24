import { Component, OnInit } from '@angular/core';
import { ServiciuFavoriteService } from '../servicii/serviciu-favorite.service';
import { Favorite } from 'src/app/clase/favorite';
import { ServiciuProdusService } from '../servicii/serviciu-produs.service';
import { Produs } from 'src/app/clase/produs';


@Component({
  selector: 'app-pagina-lista-favorite',
  templateUrl: './pagina-lista-favorite.component.html',
  styleUrls: ['./pagina-lista-favorite.component.css']
})
export class PaginaListaFavoriteComponent implements OnInit{


  favorite:Favorite[]=[];
  produse:Produs[]=[];
  favorite2!:Favorite;
  produs:Produs[]=[];
  produse2:Produs[] = [];
  denumire_produs:any;
  id_produs: any;
  counter!:number;
  valuta:string='Lei';
  id_favorit!:number | null;




  constructor(

    private serviciu_favorite:ServiciuFavoriteService,
    private serviciu_produse:ServiciuProdusService

  ){

    

  }

  ngOnInit(): void {
    
    
    this.afisare_produse();
    this.afisare_favorite();
    //this.afisare_produse_dupa_id2();
  }

  afisare_produse(){

    this.serviciu_produse.afisare_produs()

    .subscribe((raspuns)=>{

      console.log(raspuns);

      for(let i=0;i<raspuns.length;i++){

        this.produs.push({

          id:raspuns[i].id,
          denumire:raspuns[i].denumire,
          data_adaugare:raspuns[i].data_adaugare,
          string_poza:raspuns[i].string_poza
          
        })

      }

      console.log(this.produs);

    }

    );

  }

  afisare_produse_dupa_id2(id_produs:any){

    this.serviciu_produse.afisare_produs_id(id_produs)
  
    .subscribe(
  
      data=>{this.produse2=data
      console.log(data)}
      
  
    );
  
  }


  afisare_favorite(){

    this.counter=0;

    this.serviciu_favorite.afisare_favorite()

    .subscribe((raspuns)=>{
        raspuns.forEach(favorit => {

          this.id_favorit=favorit.id;
          console.log("id favorit",this.id_favorit);

          this.serviciu_produse.afisare_produs_id(favorit.tabela_produs_entity_id!)
          
           

                .subscribe(
                    data=>{this.produse2.push(data),
                      
                      console.log('produs-favorite',data)
                      this.counter++;
                      console.log('counter',this.counter)
                      
                    }

                   
              );


        })

    }

    );

    

  }

  stergere_produs_favorit(id:number){

    this.serviciu_favorite.stergere_favorite_dupa_id(id).subscribe({

      next:(raspuns)=>{

        alert("Produsul a fost sters din lista de favorite!");
        this.afisare_produse();

      },error:()=>{

        alert("Eroare produsul nu s-a putut sterge din lista de favorite!");

      }
    })


  }

  

}
