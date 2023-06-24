import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ServiciuSubcategorieService } from '../servicii/serviciu-subcategorie.service';

@Component({
  selector: 'app-pagina-tabel-subcategorie',
  templateUrl: './pagina-tabel-subcategorie.component.html',
  styleUrls: ['./pagina-tabel-subcategorie.component.css']
})
export class PaginaTabelSubcategorieComponent implements OnInit{

  displayedSubcategorieColumns: string[] = ['id','denumire_subcategorie','comenzi'];
  dataSourceSubcategorie!:MatTableDataSource<any>;
  
  @ViewChild(MatPaginator) paginatorSubcategorie!: MatPaginator;
  @ViewChild(MatSort) sortSubcategorie!: MatSort;


  constructor(

    private serviciu_subcategorie:ServiciuSubcategorieService

  ){}

  ngOnInit(): void {
    
    this.afisare_subcategorie();

  }

  //filtru subcategorie
  //----------------------------------------------------------------------------
  applyFilterSubcategorie(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
     this.dataSourceSubcategorie.filter = filterValue.trim().toLowerCase();
 
     if (this.dataSourceSubcategorie.paginator) {
      this.dataSourceSubcategorie.paginator.firstPage();
    }
   }
 
   //----------------------------------------------------------------------------
 
   //metode pentru categorie
  //----------------------------------------------------------------------------

  afisare_subcategorie(){

    this.serviciu_subcategorie.afisare_subcategorie().subscribe({

      next:(raspuns)=>{

        console.log(raspuns);
        this.dataSourceSubcategorie=new MatTableDataSource(raspuns);
        this.dataSourceSubcategorie.paginator=this.paginatorSubcategorie;
        this.dataSourceSubcategorie.sort=this.sortSubcategorie;

      },error:(eroare)=>{

        alert("Eroare la primirea produselor!");

      }

    }

    )

  }

  //----------------------------------------------------------------------------


}
