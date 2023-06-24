import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiciuUtilizatorService } from '../servicii/serviciu-utilizator.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-pagina-tabel-utilizator',
  templateUrl: './pagina-tabel-utilizator.component.html',
  styleUrls: ['./pagina-tabel-utilizator.component.css']
})
export class PaginaTabelUtilizatorComponent implements OnInit{

  displayedUtilizatorColumns: string[] = ['id','nume','prenume','email','telefon','parola','comenzi'];
  dataSourceUtilizator!:MatTableDataSource<any>;
  
  @ViewChild(MatPaginator) paginatorUtilizator!: MatPaginator;
  @ViewChild(MatSort) sortUtilizator!: MatSort;

  constructor(

    private serviciu_utilizator:ServiciuUtilizatorService

  ){}

  ngOnInit(): void {
    
    this.afisare_utilizator();

  }

  //filtru descriere
  //----------------------------------------------------------------------------
  applyFilterUtilizator(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
     this.dataSourceUtilizator.filter = filterValue.trim().toLowerCase();
 
     if (this.dataSourceUtilizator.paginator) {
      this.dataSourceUtilizator.paginator.firstPage();
    }
   }
 
   //----------------------------------------------------------------------------
 
   //metode pentru descriere
   //----------------------------------------------------------------------------
 
   afisare_utilizator(){
 
     this.serviciu_utilizator.afisare_utilizator().subscribe({
 
       next:(raspuns)=>{
 
         console.log(raspuns);
         this.dataSourceUtilizator=new MatTableDataSource(raspuns);
         this.dataSourceUtilizator.paginator=this.paginatorUtilizator;
         this.dataSourceUtilizator.sort=this.sortUtilizator;
 
       },error:(eroare)=>{
 
         alert("Eroare la primirea produselor!");
 
       }
 
     }
 
     )
 
   }
 
   //----------------------------------------------------------------------------


}
