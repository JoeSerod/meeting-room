import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.less']
})
export class ReservationFormComponent implements OnInit {
  date: Date;
  name: String;
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }
  openFormDialog():void{
    const dialogRef = this.dialog.open(ReservationFormComponent,{
      width:"250px",
      data:{date: this.date, name:this.name}
    });
    dialogRef.afterClosed().subscribe(result=>{
      console.log("closed");
      
    })
    
  }
}
