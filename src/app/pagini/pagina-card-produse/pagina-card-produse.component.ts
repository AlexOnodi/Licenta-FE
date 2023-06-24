import { Component, OnInit } from '@angular/core';
import { ServiciuProdusService } from '../servicii/serviciu-produs.service';
import { Produs } from 'src/app/clase/produs';

@Component({
  selector: 'app-pagina-card-produse',
  templateUrl: './pagina-card-produse.component.html',
  styleUrls: ['./pagina-card-produse.component.css']
})
export class PaginaCardProduseComponent implements OnInit{



  produse: Produs[]=[];

  constructor(

    private serviciu_produs:ServiciuProdusService

  ){}

  ngOnInit(): void {
    
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

    }

    );

  }
  
}
