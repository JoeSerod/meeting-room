import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReservationFormComponent } from './components/reservation-form/reservation-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'meeting-room';
  date : Date;
  name: String;
  constructor(
    public dialog: MatDialog
  ){

  }
  ngOnInit(){

  }
  openFormDialog():void{
    console.log("dialog");
    const dialogRef =  this.dialog.open(ReservationFormComponent,{
      width:"50vh",
      height: "50vh",
      data: {date: this.date, name: this.name},
      panelClass:"dialog"
    })
  }
}
