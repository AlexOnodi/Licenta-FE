import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiciuDescriereService } from '../servicii/serviciu-descriere.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-pagina-tabel-descriere',
  templateUrl: './pagina-tabel-descriere.component.html',
  styleUrls: ['./pagina-tabel-descriere.component.css']
})
export class PaginaTabelDescriereComponent implements OnInit{

  displayedDescriereColumns: string[] = ['id','titlu_descriere','text_descriere','comenzi'];
  dataSourceDescriere!:MatTableDataSource<any>;
  
  @ViewChild(MatPaginator) paginatorDescriere!: MatPaginator;
  @ViewChild(MatSort) sortDescriere!: MatSort;

  constructor(

      private serviciu_descriere:ServiciuDescriereService

  ){}

  ngOnInit(): void {
    
    this.afisare_descriere();

  }

   //filtru descriere
  //----------------------------------------------------------------------------
  applyFilterDescriere(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
     this.dataSourceDescriere.filter = filterValue.trim().toLowerCase();
 
     if (this.dataSourceDescriere.paginator) {
      this.dataSourceDescriere.paginator.firstPage();
    }
   }
 
   //----------------------------------------------------------------------------
 
   //metode pentru descriere
   //----------------------------------------------------------------------------
 
   afisare_descriere(){
 
     this.serviciu_descriere.afisare_descriere().subscribe({
 
       next:(raspuns)=>{
 
         console.log(raspuns);
         this.dataSourceDescriere=new MatTableDataSource(raspuns);
         this.dataSourceDescriere.paginator=this.paginatorDescriere;
         this.dataSourceDescriere.sort=this.sortDescriere;
 
       },error:(eroare)=>{
 
         alert("Eroare la primirea produselor!");
 
       }
 
     }
 
     )
 
   }
 
   //----------------------------------------------------------------------------

}
