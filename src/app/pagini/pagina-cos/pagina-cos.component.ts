import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiciuAutorService } from '../servicii/serviciu-autor.service';
import { ServiciuCosCumparaturiService } from '../servicii/serviciu-cos-cumparaturi.service';
import { ServiciuProdusService } from '../servicii/serviciu-produs.service';
import { CosCumparaturi } from 'src/app/clase/cos-cumparaturi';
import { Produs } from 'src/app/clase/produs';



@Component({
  selector: 'app-pagina-cos',
  templateUrl: './pagina-cos.component.html',
  styleUrls: ['./pagina-cos.component.css']
})
export class PaginaCosComponent implements OnInit{

  cos:CosCumparaturi[]=[];
  cos_per_prod:CosCumparaturi[]=[];
  produse:Produs[]=[];
  produse2:Produs[]=[];
  id_cos!:number|null;
  counter!:number;
  cantitate:any;
  cantitate2!:number;
  pret_total!:number;
  

  constructor(

    private serviciuCos:ServiciuCosCumparaturiService,
    private serviciuProdus:ServiciuProdusService

  ){

    

  }

  ngOnInit(): void {
    
    this.afisare_cos();
    this.afisare_produse();
  }

 
  afisare_cos(){

    this.counter=0;

    this.serviciuCos.afisare_cos().subscribe((raspuns)=>{

      raspuns.forEach(cos=>{

        this.id_cos=cos.id;
        console.log("id cos",this.id_cos);
        //this.cantitate=cos.cantitate;
      
        console.log("cantitate",this.cantitate);


        this.serviciuProdus.afisare_produs_id(cos.tabela_produs_entity_id!).subscribe(data=>{

          this.produse.push(data),
          console.log("produse din cos",data)
          this.counter++;
          console.log('counter',this.counter)

        

        })

        
        

      })

      this.serviciuCos.afisare_cos().subscribe((raspuns)=>{


        console.log("produseCos",raspuns)

        for(let i=0;i<raspuns.length;i++){

          this.cos_per_prod.push({
  
            id:raspuns[i].id,
            tabela_produs_entity_id:raspuns[i].tabela_produs_entity_id,
            cantitate:raspuns[i].cantitate,

            
          })

          this.cantitate2=raspuns[i].cantitate
          console.log(this.cantitate2)
  
        }


      })
      

    })

  }

  afisare_produse(){

    this.serviciuProdus.afisare_produs()

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

  
  

}
