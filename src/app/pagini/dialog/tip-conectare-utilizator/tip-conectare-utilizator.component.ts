import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-tip-conectare-utilizator',
  templateUrl: './tip-conectare-utilizator.component.html',
  styleUrls: ['./tip-conectare-utilizator.component.css']
})
export class TipConectareUtilizatorComponent {

  constructor(private dialog:MatDialog){}

  inchide_dialog(){

    if(this.dialog){

      this.dialog.closeAll();

    }

  }


}
