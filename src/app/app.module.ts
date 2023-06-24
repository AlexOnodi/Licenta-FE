import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginaStartComponent } from './pagini/pagina-start/pagina-start.component';
import { PaginaAcasaComponent } from './pagini/pagina-acasa/pagina-acasa.component';
import { PaginaAutentificareComponent } from './pagini/pagina-autentificare/pagina-autentificare.component';
import { PaginaCreareContComponent } from './pagini/pagina-creare-cont/pagina-creare-cont.component';
import { PaginaAdministratorComponent } from './pagini/pagina-administrator/pagina-administrator.component';
import { PaginaCosComponent } from './pagini/pagina-cos/pagina-cos.component';
import { PaginaListaFavoriteComponent } from './pagini/pagina-lista-favorite/pagina-lista-favorite.component';
import {MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { TipConectareUtilizatorComponent } from './pagini/dialog/tip-conectare-utilizator/tip-conectare-utilizator.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogAdaugareProdusAdminComponent } from './pagini/dialog/dialog-adaugare-produs-admin/dialog-adaugare-produs-admin.component';
import {MatSelectModule} from '@angular/material/select';
import { DialogAdaugareOptiuniComponent } from './pagini/dialog/dialog-adaugare-optiuni/dialog-adaugare-optiuni.component';
import { DialogAdaugareCategorieComponent } from './pagini/dialog/dialog-adaugare-categorie/dialog-adaugare-categorie.component';
import { DialogAdaugareSubcategorieComponent } from './pagini/dialog/dialog-adaugare-subcategorie/dialog-adaugare-subcategorie.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { DateAdapter } from '@angular/material/core';
import { MatNativeDateModule } from '@angular/material/core';
import { DialogAdaugareDescriereComponent } from './pagini/dialog/dialog-adaugare-descriere/dialog-adaugare-descriere.component';
import { DialogAdaugareAutorComponent } from './pagini/dialog/dialog-adaugare-autor/dialog-adaugare-autor.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTabsModule} from '@angular/material/tabs';
import { PaginaTabelCategorieComponent } from './pagini/pagina-tabel-categorie/pagina-tabel-categorie.component';
import { PaginaTabelSubcategorieComponent } from './pagini/pagina-tabel-subcategorie/pagina-tabel-subcategorie.component';
import { PaginaTabelDescriereComponent } from './pagini/pagina-tabel-descriere/pagina-tabel-descriere.component';
import { PaginaTabelAutorComponent } from './pagini/pagina-tabel-autor/pagina-tabel-autor.component';
import { PaginaTabelUtilizatorComponent } from './pagini/pagina-tabel-utilizator/pagina-tabel-utilizator.component';
import { PaginaTabelRolUtilizatorComponent } from './pagini/pagina-tabel-rol-utilizator/pagina-tabel-rol-utilizator.component';
import { PaginaTabelAdresaComponent } from './pagini/pagina-tabel-adresa/pagina-tabel-adresa.component';
import { PaginaCardProduseComponent } from './pagini/pagina-card-produse/pagina-card-produse.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { PaginaSliderImaginiComponent } from './pagini/pagina-slider-imagini/pagina-slider-imagini.component';
import {MatRippleModule} from '@angular/material/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { PaginaDescriereProdusComponent } from './pagini/pagina-descriere-produs/pagina-descriere-produs.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatChipsModule} from '@angular/material/chips';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatBadgeModule} from '@angular/material/badge';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { FiltruPipe } from './filtru.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PaginaStartComponent,
    PaginaAcasaComponent,
    PaginaAutentificareComponent,
    PaginaCreareContComponent,
    PaginaAdministratorComponent,
    PaginaCosComponent,
    PaginaListaFavoriteComponent,
    TipConectareUtilizatorComponent,
    DialogAdaugareProdusAdminComponent,
    DialogAdaugareOptiuniComponent,
    DialogAdaugareCategorieComponent,
    DialogAdaugareSubcategorieComponent,
    DialogAdaugareDescriereComponent,
    DialogAdaugareAutorComponent,
    PaginaTabelCategorieComponent,
    PaginaTabelSubcategorieComponent,
    PaginaTabelDescriereComponent,
    PaginaTabelAutorComponent,
    PaginaTabelUtilizatorComponent,
    PaginaTabelRolUtilizatorComponent,
    PaginaTabelAdresaComponent,
    PaginaCardProduseComponent,
    PaginaSliderImaginiComponent,
    PaginaDescriereProdusComponent,
    AppNavbarComponent,
    FiltruPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    HttpClientModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTabsModule,
    MatSidenavModule,
    MatRippleModule,
    MatGridListModule,
    MatExpansionModule,
    MatChipsModule,
    MatSnackBarModule,
    MatBadgeModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
