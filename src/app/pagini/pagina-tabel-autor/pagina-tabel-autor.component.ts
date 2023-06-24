import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ServiciuAutorService } from '../servicii/serviciu-autor.service';

@Component({
  selector: 'app-pagina-tabel-autor',
  templateUrl: './pagina-tabel-autor.component.html',
  styleUrls: ['./pagina-tabel-autor.component.css']
})
export class PaginaTabelAutorComponent implements OnInit{

  constructor(

    private serviciu_autor:ServiciuAutorService

  ){}

  ngOnInit(): void {
    
    this.afisare_autor();

  }

  displayedAutorColumns: string[] = ['id','nume','prenume','comenzi'];
  dataSourceAutor!:MatTableDataSource<any>;
  
  @ViewChild(MatPaginator) paginatorAutor!: MatPaginator;
  @ViewChild(MatSort) sortAutor!: MatSort;

  //filtru descriere
  //----------------------------------------------------------------------------
  applyFilterAutor(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
     this.dataSourceAutor.filter = filterValue.trim().toLowerCase();
 
     if (this.dataSourceAutor.paginator) {
      this.dataSourceAutor.paginator.firstPage();
    }
   }
 
   //----------------------------------------------------------------------------
 
   //metode pentru descriere
   //----------------------------------------------------------------------------
 
   afisare_autor(){
 
     this.serviciu_autor.afisare_autor().subscribe({
 
       next:(raspuns)=>{
 
         console.log(raspuns);
         this.dataSourceAutor=new MatTableDataSource(raspuns);
         this.dataSourceAutor.paginator=this.paginatorAutor;
         this.dataSourceAutor.sort=this.sortAutor;
 
       },error:(eroare)=>{
 
         alert("Eroare la primirea produselor!");
 
       }
 
     }
 
     )
 
   }
 
   //----------------------------------------------------------------------------

}
