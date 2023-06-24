import { Component, OnInit } from '@angular/core';
import { ServiciuFavoriteService } from '../pagini/servicii/serviciu-favorite.service';
import { MatDialog } from '@angular/material/dialog';
import { TipConectareUtilizatorComponent } from '../pagini/dialog/tip-conectare-utilizator/tip-conectare-utilizator.component';
import { ServiciuCosCumparaturiService } from '../pagini/servicii/serviciu-cos-cumparaturi.service';

@Component({
  selector: 'app-app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit{
  counter: number = 0;
  counter_cos: number=0;


  constructor(private serviciuFavotite: ServiciuFavoriteService,
    private dialog: MatDialog,private serviciuCos:ServiciuCosCumparaturiService){}


  ngOnInit(): void {
      this.afisareNumarProduseFavorite();
      this.afisareNumarCos();
  }


  afisareNumarProduseFavorite(){

    this.counter=0;

    this.serviciuFavotite.afisare_favorite().subscribe(
      (raspuns)=> {
        this.counter = raspuns.length
    }
    );
  }

  afisareNumarCos(){

      this.serviciuCos.afisare_cos().subscribe((raspuns)=>{

        this.counter_cos=raspuns.length

      })

  }

  tip_conectare_utilizator(){

    this.dialog.open(TipConectareUtilizatorComponent,{

      width:'15%'

    });

  }
}
