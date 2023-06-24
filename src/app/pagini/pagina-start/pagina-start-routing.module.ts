import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaStartComponent } from './pagina-start.component';

const routes: Routes = [

  {
    path:'',
    component:PaginaStartComponent,

    children:[

      {
        path:'pagina-start',
        component:PaginaStartComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginaStartRoutingModule { }
