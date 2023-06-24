import { Component,OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-pagina-start',
  templateUrl: './pagina-start.component.html',
  styleUrls: ['./pagina-start.component.css']
})
export class PaginaStartComponent implements OnInit {

  constructor(

    private cale:Router

  ){}
  ngOnInit(): void {
    
    

  }

  spre_pagina_creare_cont(numePagina:string):void{

    this.cale.navigate([`${numePagina}`]);

  }

}
