import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaCreareContComponent } from './pagina-creare-cont.component';

const routes: Routes = [

  {
    path:'',
    component:PaginaCreareContComponent,
    
    children:[

      {
        path:'pagina-creare-cont',
        component:PaginaCreareContComponent
      }

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginaCreareContRoutingModule { }
