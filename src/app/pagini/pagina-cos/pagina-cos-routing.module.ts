import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaCosComponent } from './pagina-cos.component';

const routes: Routes = [

  {
    path:'',
    component:PaginaCosComponent,

    children:[

      {
        path:'pagina-cos',
        component:PaginaCosComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginaCosRoutingModule { }
