import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaListaFavoriteComponent } from './pagina-lista-favorite.component';

const routes: Routes = [

  {
    path:'',
    component:PaginaListaFavoriteComponent,

    children:[

      {
        path:'pagina-lista-favorite',
        component:PaginaListaFavoriteComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginaListaFavoriteRoutingModule { }
