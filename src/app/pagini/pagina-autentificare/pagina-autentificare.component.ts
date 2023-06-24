import { Component, OnInit } from '@angular/core';
import { ServiciuAutentificareService } from '../servicii/serviciu-autentificare.service';
import { Router } from '@angular/router';
import { ServiciuUtilizatorService } from '../servicii/serviciu-utilizator.service';
import { Utilizator } from 'src/app/clase/utilizator';
import { FormControl, Validators } from '@angular/forms';
import { sequenceEqual } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ServiciuRolUtilizatorService } from '../servicii/serviciu-rol-utilizator.service';
import { RolUtilizator } from 'src/app/clase/rol-utilizator';

@Component({
  selector: 'app-pagina-autentificare',
  templateUrl: './pagina-autentificare.component.html',
  styleUrls: ['./pagina-autentificare.component.css']
})
export class PaginaAutentificareComponent implements OnInit{

  private utilizator:any;
  private rol:RolUtilizator[]=[];


  utilizator1:Utilizator[]=[];

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  util=new Utilizator;

  constructor(private authenticationService: ServiciuAutentificareService, private router: Router,private serviciu_utilizator:ServiciuUtilizatorService,private snackBar: MatSnackBar,private serviciuRol:ServiciuRolUtilizatorService){}

  ngOnInit(): void {
    
    this.afisare_utilizator();
    this.afisare__rol_utilizator();

  }

  login() {
    this.utilizator = {
      "username": (document.getElementById("email") as HTMLInputElement).value,
      "password": (document.getElementById("password") as HTMLInputElement).value
    }
    if (this.authenticationService.checkRequiredFields(this.utilizator) == false) {
      return;
    }

    this.authenticationService.authenticate(this.utilizator).subscribe(
      {
        /*
        next: (result: any) => {
        this.authenticationService.storeToken(result);
        this.router.navigateByUrl("/pagina-administrator");
        this.snackBar.open('Autentificare realizata cu succes', 'Iesi', {
          duration: 3000
        });
      },
      */

      next:()=>{

        if(this.utilizator.email="admin@gmail.com"){

          this.router.navigateByUrl("/pagina-administrator");

        }
        else{

          this.router.navigateByUrl("/pagina-acasa");

        }
        

      },
      
      error: () => {
        this.snackBar.open('Autentificare esuata', 'Iesi', {
          duration: 3000
        });
      }
    }
    );
  }


  afisare_utilizator(){

    this.serviciu_utilizator.afisare_utilizator().subscribe((raspuns)=>{

      console.log(raspuns);

      for(let i=0;i<raspuns.length;i++){

        this.utilizator1.push({
          id: raspuns[i].id,
          nume:raspuns[i].nume,
          prenume:raspuns[i].prenume,
          parola:raspuns[i].parola,
          telefon:raspuns[i].telefon,
          email:raspuns[i].email

        })

      }

    });

  }

  afisare__rol_utilizator(){

    this.serviciuRol.afisare_rol_utilizator().subscribe((raspuns)=>{

      console.log(raspuns);

      for(let i=0;i<raspuns.length;i++){

        this.rol.push({
          id: raspuns[i].id,
          tabela_utilizator_entity_id2:raspuns[i].tabela_utilizator_entity_id2,
          rol:raspuns[i].rol

        })

      }

    });

  }


}
