import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaDescriereProdusComponent } from './pagina-descriere-produs.component';

const routes: Routes = [

  {
    path:'',
    component:PaginaDescriereProdusComponent,

    children:[

      {
        //path:'pagina-descriere-produs',

        //path:'pdp/:id',
        path:'pdp/:id',
        component:PaginaDescriereProdusComponent
      }

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginaDescriereProdusRoutingModule { }
