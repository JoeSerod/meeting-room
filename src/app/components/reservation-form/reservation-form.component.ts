import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SelectDateService } from 'src/app/services/selectDate.service';
import {Reservation} from "../../models/reservation.model";
@Component({
  selector: 'reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.less']
})
export class ReservationFormComponent implements OnInit {
  date: Date;
  name: String;
  startDate: Date;
  errorMessage: String;
  endDate: Date;
  reservationFormModel :Reservation;

  constructor(
    public dialog: MatDialog,
    private selectDateService :SelectDateService
  ) {
    this.reservationFormModel = new Reservation("",new Date(), new Date());
   }

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
  onChangeStartTime(e, type){
    let timeExp = e.match(/(\d+)\:(\d+) (\w+)/),
    hours = timeExp[3]==="AM"? timeExp[1]==="12"? 0 :timeExp[1]: timeExp[1]==="12"?12 :+timeExp[1]+12,
    minutes = timeExp[2];
 
    
    let time = new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate(), hours, minutes)
    if (type === "start") {
      this.startDate = time;
    }else{
      this.endDate = time;
    }
    
    
   
   
    
  }
  onSubmit(form):void{
    if (this.startDate && this.endDate) {
      this.reservationFormModel.startDate = this.startDate;
      this.reservationFormModel.endDate = this.endDate;
    }
    const dif =this.endDate.getTime()- this.startDate.getTime();
    const minDiff =dif/1000/60;
    console.log(minDiff);
    
    if (minDiff <0) {
      this.errorMessage = "Los horarios no son válidos"
    } 
    else if(minDiff>120){
      this.errorMessage ="Solo puedes reservar la sala máximo 2 horas"
    }else{
      this.errorMessage = undefined;
      console.log(this.reservationFormModel);
    }
    
   
    
  }
}
