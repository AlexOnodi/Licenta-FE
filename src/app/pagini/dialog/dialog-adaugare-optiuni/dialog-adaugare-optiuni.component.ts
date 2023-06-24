import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAdaugareProdusAdminComponent } from '../dialog-adaugare-produs-admin/dialog-adaugare-produs-admin.component';

@Component({
  selector: 'app-dialog-adaugare-optiuni',
  templateUrl: './dialog-adaugare-optiuni.component.html',
  styleUrls: ['./dialog-adaugare-optiuni.component.css']
})
export class DialogAdaugareOptiuniComponent {

  constructor(private dialog:MatDialog){}

  inchide_dialog(){

    if(this.dialog){

      this.dialog.closeAll();

    }

  }

  redirectionare_dialog_adaugare_produs(){

    this.dialog.open(DialogAdaugareProdusAdminComponent,{

      width:'25%'
      
    })
  }

}
