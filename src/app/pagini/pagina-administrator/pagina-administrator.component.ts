import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAdaugareProdusAdminComponent } from '../dialog/dialog-adaugare-produs-admin/dialog-adaugare-produs-admin.component';
import { DialogAdaugareOptiuniComponent } from '../dialog/dialog-adaugare-optiuni/dialog-adaugare-optiuni.component';
import { DialogAdaugareCategorieComponent } from '../dialog/dialog-adaugare-categorie/dialog-adaugare-categorie.component';
import { DialogAdaugareSubcategorieComponent } from '../dialog/dialog-adaugare-subcategorie/dialog-adaugare-subcategorie.component';
import { DialogAdaugareDescriereComponent } from '../dialog/dialog-adaugare-descriere/dialog-adaugare-descriere.component';
import { DialogAdaugareAutorComponent } from '../dialog/dialog-adaugare-autor/dialog-adaugare-autor.component';
import { ServiciuProdusService } from '../servicii/serviciu-produs.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ServiciuCategorieService } from '../servicii/serviciu-categorie.service';
import { Categorie } from 'src/app/clase/categorie';

@Component({
  selector: 'app-pagina-administrator',
  templateUrl: './pagina-administrator.component.html',
  styleUrls: ['./pagina-administrator.component.css']
})
export class PaginaAdministratorComponent implements OnInit{

  displayedColumns: string[] = ['id','denumire_produs','data_adaugare','string_poza','comenzi'];
  displayedCategorieColumns: string[] = ['id','denumire_categorie','comenzi'];
  dataSource!: MatTableDataSource<any>;
  dataSourceCategorie!:MatTableDataSource<any>;
  categorie:Categorie[]=[];
  

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginatorCategorie!: MatPaginator;
  @ViewChild(MatSort) sortCategorie!: MatSort;

  constructor(

    private dialog:MatDialog,
    private serviciu_afisare_produse:ServiciuProdusService,
    private serviciu_stergere_produse:ServiciuProdusService,
   
    
  ){}

  ngOnInit(): void {
    
    this.afisare_produse();

  }

  formular_adaugare_produs_admin(){

    this.dialog.open(DialogAdaugareProdusAdminComponent,{

      width:'25%'

    })

  }

  dialog_optiuni_creare(){

    this.dialog.open(DialogAdaugareOptiuniComponent,{

      width:'15%'

    })

  }

  dialog_creare_categorie(){

    this.dialog.open(DialogAdaugareCategorieComponent,{

      width:'25%'

    })

  }

  dialog_creare_subcategorie(){

    this.dialog.open(DialogAdaugareSubcategorieComponent,{

      width:'25%'

    })

  }

  dialog_creare_descriere(){

    this.dialog.open(DialogAdaugareDescriereComponent,{

      width:'25%'
    })

  }

  dialog_creare_autor(){

    this.dialog.open(DialogAdaugareAutorComponent,{

      width:'25%'
    })

  }

  dialog_creare_variant(){}

  // filtru
  //-------------------------------------------------------------------
  applyFilterProdus(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  //-------------------------------------------------------------------

  // metode pentru produse
  //--------------------------------------------------------------------
  afisare_produse(){

    this.serviciu_afisare_produse.afisare_produs().subscribe({

      next:(raspuns)=>{

        //console.log(raspuns);
        this.dataSource=new MatTableDataSource(raspuns);
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort;

      },error:(eroare)=>{

        alert("Eroare la primirea produselor!");

      }

    }

    )

  }

  

  actualizare_produs(informatii:any){

    this.dialog.open(DialogAdaugareProdusAdminComponent,{

      width:'25%',
      data:informatii
      
    })

  }

  stergere_produs(id:number){

    this.serviciu_stergere_produse.stergere_produs(id).subscribe({

      next:(raspuns)=>{

        alert("Produsul a fost sters!");
        this.afisare_produse();

      },error:()=>{

        alert("Eroare produsul nu s-a putut sterge!");

      }

    })

  }
  //----------------------------------------------------------------------------


  
}
