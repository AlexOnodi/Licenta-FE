import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaAcasaComponent } from './pagini/pagina-acasa/pagina-acasa.component';
import { PaginaAdministratorComponent } from './pagini/pagina-administrator/pagina-administrator.component';
import { PaginaAutentificareComponent } from './pagini/pagina-autentificare/pagina-autentificare.component';
import { PaginaCosComponent } from './pagini/pagina-cos/pagina-cos.component';
import { PaginaCreareContComponent } from './pagini/pagina-creare-cont/pagina-creare-cont.component';
import { PaginaListaFavoriteComponent } from './pagini/pagina-lista-favorite/pagina-lista-favorite.component';
import { PaginaStartComponent } from './pagini/pagina-start/pagina-start.component';
import { DialogAdaugareProdusAdminComponent } from './pagini/dialog/dialog-adaugare-produs-admin/dialog-adaugare-produs-admin.component';
import { PaginaDescriereProdusComponent } from './pagini/pagina-descriere-produs/pagina-descriere-produs.component';

const routes: Routes = [

  //pagina-start
  {
    path:'',
    component:PaginaStartComponent,
    children:[

      {
        path:'',
        redirectTo:'./pagina-start',
        pathMatch:'full'
      },
      {
        path:'pagina-start',
        loadChildren:()=>import('./pagini/pagina-start/pagina-start.module').then(m=>m.PaginaStartModule)
      }

    ]
  },

  //pagina-acasa
  {
    path:'',
    component:PaginaAcasaComponent,

    children:[

      {
        path:'',
        redirectTo:'./pagina-acasa',
        pathMatch:'full'
      },
      {
        path:'pagina-acasa',
        loadChildren:()=>import('./pagini/pagina-acasa/pagina-acasa.module').then(m=>m.PaginaAcasaModule)
      }
    ]
  },

  //pagina-autentificare
  {
    path:'',
    component:PaginaAutentificareComponent,

    children:[

      {
        path:'',
        redirectTo:'./pagina-autentificare',
        pathMatch:'full'
      },
      {
        path:'pagina-autentificare',
        loadChildren:()=>import('./pagini/pagina-autentificare/pagina-autentificare.module').then(m=>m.PaginaAutentificareModule)
      }

    ]
  },

  //pagina-creare-cont
  {
    path:'',
    component:PaginaCreareContComponent,

    children:[

      {
        path:'',
        redirectTo:'./pagina-creare-cont',
        pathMatch:'full'
      },
      {
        path:'pagina-creare-cont',
        loadChildren:()=>import('./pagini/pagina-creare-cont/pagina-creare-cont.module').then(m=>m.PaginaCreareContModule)
      }

    ]
  },

  //pagina-administrator
  {
    path:'',
    component:PaginaAdministratorComponent,

    children:[

      {
        path:'',
        redirectTo:'./pagina-administrator',
        pathMatch:'full'
      },
      {
        path:'pagina-administrator',
        loadChildren:()=>import('./pagini/pagina-administrator/pagina-administrator.module').then(m=>m.PaginaAdministratorModule)
      }

    ]
  },

  //pagina-cos
  {
    path:'',
    component:PaginaCosComponent,

    children:[

      {
        path:'',
        redirectTo:'./pagina-cos',
        pathMatch:"full"
      },
      {
        path:'pagina-cos',
        loadChildren:()=>import('./pagini/pagina-cos/pagina-cos.module').then(m=>m.PaginaCosModule)
      }

    ]
  },

  //pagina-lista-favorite
  {
    path:'',
    component:PaginaListaFavoriteComponent,

    children:[

      {
        path:'',
        redirectTo:'./pagina-lista-favorite',
        pathMatch:'full'
      },
      {
        path:'pagina-lista-favorite',
        loadChildren:()=>import('./pagini/pagina-lista-favorite/pagina-lista-favorite.module').then(m=>m.PaginaListaFavoriteModule)
      }

    ]
  },
  
  {

    //path:'pdp/:id/:id_tip',component:PaginaDescriereProdusComponent
    path:'pdp/:id',component:PaginaDescriereProdusComponent
    //path:'pdp/:id',component:PaginaDescriereProdusUpdateComponent

  },
  //pagina-descriere-produs
  /*
  {

    path:'',
    component:PaginaDescriereProdusComponent,

    children:[

      {

        path:'',
        redirectTo:'./pagina-descriere-produs',
        pathMatch:'full'

      },
      {

        path:'pagina-descriere-produs',
        loadChildren:()=>import('./pagini/pagina-descriere-produs/pagina-descriere-produs.module').then(m=>m.PaginaDescriereProdusModule)

      }

    ]

  },
  */
  //dialog
  {
    path:'',
    component:DialogAdaugareProdusAdminComponent,

    children:[

      {
        path:'',
        redirectTo:'./dialog-creare-produs',
        pathMatch:'full'
      },
      {
        path:'dialog-creare-produs',
        loadChildren:()=>import('./pagini/dialog/dialog-adaugare-produs-admin/dialog-adaugare-produs-admin.module').then(m=>m.DialogAdaugareProdusAdminModule)
      }

    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
