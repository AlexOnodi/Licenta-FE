import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiciuRolUtilizatorService } from '../servicii/serviciu-rol-utilizator.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-pagina-tabel-rol-utilizator',
  templateUrl: './pagina-tabel-rol-utilizator.component.html',
  styleUrls: ['./pagina-tabel-rol-utilizator.component.css']
})
export class PaginaTabelRolUtilizatorComponent implements OnInit{


  displayedUtilizatorRolColumns: string[] = ['id','rol','comenzi'];
  dataSourceUtilizatorRol!:MatTableDataSource<any>;
  
  @ViewChild(MatPaginator) paginatorUtilizatorRol!: MatPaginator;
  @ViewChild(MatSort) sortUtilizatorRol!: MatSort;

  constructor(

    private serviciu_rol_utilizator:ServiciuRolUtilizatorService

  ){}

  ngOnInit(): void {
    
    this.afisare_utilizatorRol();

  }

//filtru descriere
  //----------------------------------------------------------------------------
  applyFilterUtilizatorRol(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
     this.dataSourceUtilizatorRol.filter = filterValue.trim().toLowerCase();
 
     if (this.dataSourceUtilizatorRol.paginator) {
      this.dataSourceUtilizatorRol.paginator.firstPage();
    }
   }
 
   //----------------------------------------------------------------------------
 
   //metode pentru descriere
   //----------------------------------------------------------------------------
 
   afisare_utilizatorRol(){
 
     this.serviciu_rol_utilizator.afisare_rol_utilizator().subscribe({
 
       next:(raspuns)=>{
 
         console.log(raspuns);
         this.dataSourceUtilizatorRol=new MatTableDataSource(raspuns);
         this.dataSourceUtilizatorRol.paginator=this.paginatorUtilizatorRol;
         this.dataSourceUtilizatorRol.sort=this.sortUtilizatorRol;
 
       },error:(eroare)=>{
 
         alert("Eroare la primirea produselor!");
 
       }
 
     }
 
     )
 
   }
 
   //----------------------------------------------------------------------------

}
