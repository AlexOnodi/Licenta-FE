import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaAcasaComponent } from './pagina-acasa.component';

const routes: Routes = [

  {
    path:'',
    component:PaginaAcasaComponent,

    children:[

      {
        path:'pagina-acasa',
        component:PaginaAcasaComponent
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginaAcasaRoutingModule { }
