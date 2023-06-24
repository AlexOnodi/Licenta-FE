import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaAutentificareComponent } from './pagina-autentificare.component';

const routes: Routes = [

  {
    path:'',
    component:PaginaAutentificareComponent,

    children:[

      {
        path:'pagina-autentificare',
        component:PaginaAutentificareComponent
      }

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginaAutentificareRoutingModule { }
