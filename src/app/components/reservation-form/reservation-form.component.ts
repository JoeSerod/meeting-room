import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SelectDateService } from 'src/app/services/selectDate.service';

@Component({
  selector: 'reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.less']
})
export class ReservationFormComponent implements OnInit {
  date: Date;
  name: String;
  constructor(
    public dialog: MatDialog,
    private selectDateService :SelectDateService
  ) { }

  ngOnInit(): void {
    this.selectDateService.currentDate.subscribe(date=>{
      this.date= date
      
    })
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
  onChangeStartTime(e){
    let timeExp = e.match(/(\d+)\:(\d+) (\w+)/),
    hours = timeExp[3]==="AM"? timeExp[1]==="12"? 0 :timeExp[1]: timeExp[1]==="12"?12 :+timeExp[1]+12,
    minutes = timeExp[2];
    this.date.setHours(hours, minutes)
    
    console.log(this.date);
    
   
   
    
  }
}
