import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ServiciuCategorieService } from '../servicii/serviciu-categorie.service';
import { MatTableDataSource } from '@angular/material/table';
import { Categorie } from 'src/app/clase/categorie';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-pagina-tabel-categorie',
  templateUrl: './pagina-tabel-categorie.component.html',
  styleUrls: ['./pagina-tabel-categorie.component.css']
})
export class PaginaTabelCategorieComponent implements OnInit{

  displayedCategorieColumns: string[] = ['id','denumire_categorie','comenzi'];
  dataSourceCategorie!:MatTableDataSource<any>;
  categorie:Categorie[]=[];
  
  @ViewChild(MatPaginator) paginatorCategorie!: MatPaginator;
  @ViewChild(MatSort) sortCategorie!: MatSort;



constructor(

  private serviciu_categorie:ServiciuCategorieService

){}

ngOnInit(): void {
  
  this.afisare_categorie();

}


  //filtru categorie
  //----------------------------------------------------------------------------
  applyFilterCategorie(event: Event) {
   const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceCategorie.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceCategorie.paginator) {
     this.dataSourceCategorie.paginator.firstPage();
   }
  }

  //----------------------------------------------------------------------------

  //metode pentru categorie
  //----------------------------------------------------------------------------

  afisare_categorie(){

    this.serviciu_categorie.afisare_categorie().subscribe({

      next:(raspuns1)=>{

        console.log(raspuns1);
        this.dataSourceCategorie=new MatTableDataSource(raspuns1);
        this.dataSourceCategorie.paginator=this.paginatorCategorie;
        this.dataSourceCategorie.sort=this.sortCategorie;

      },error:(eroare)=>{

        alert("Eroare la primirea produselor!");

      }

    }

    )

  }

  stergere_categorie(id:number){

    this.serviciu_categorie.stergere_categorie(id).subscribe({

      next:(raspuns)=>{

        alert("Produsul a fost sters!");
        this.afisare_categorie();

      },error:()=>{

        alert("Eroare produsul nu s-a putut sterge!");

      }

    })

  }

  //----------------------------------------------------------------------------


}
