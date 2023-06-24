import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaAdministratorComponent } from './pagina-administrator.component';

const routes: Routes = [

  {
    path:'',
    component:PaginaAdministratorComponent,

    children:[

      {
        path:'pagina-administrator',
        component:PaginaAdministratorComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginaAdministratorRoutingModule { }
