import { Component, OnInit } from '@angular/core';
import { SelectDateService } from 'src/app/services/selectDate.service';
import {Reservation} from "../../models/reservation.model";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReservationFormComponent } from '../reservation-form/reservation-form.component';
import { Inject } from '@angular/core';


@Component({
  selector: 'app-edit-reservation-form',
  templateUrl: './edit-reservation-form.component.html',
  styleUrls: ['./edit-reservation-form.component.less']
})
export class EditReservationFormComponent implements OnInit {
  reservationFormModel :Reservation;
  errorMessage: String;
  submitting: Boolean;
  startTime: String;
  endTime: String;
  deleting: Boolean;
  constructor(
    private selectDateService :SelectDateService,
    public dialogRef: MatDialogRef<ReservationFormComponent>,
    @Inject(MAT_DIALOG_DATA) public reservationData:any,
  ) {
    this.reservationFormModel = new Reservation("",new Date(), new Date(), "");
    this.submitting = false;
    this.deleting = false;
   }

  ngOnInit(): void {
    this.startTime = this.reservationData.startTime;
    this.endTime = this.reservationData.endTime;
    
  }
  onSubmit(form):void{
    this.submitting = true;
    if (this.startTime && this.endTime) {
      const startDate = new Date(`${this.reservationData.date.split("T")[0]} ${this.startTime}`);
       const endDate =  new Date(`${this.reservationData.date.split("T")[0]} ${this.endTime}`);
       const dif =endDate.getTime()- startDate.getTime();
       const minDiff =dif/1000/60;
       if (minDiff<0) {
        this.errorMessage = "Los horarios no son válidos";
        this.submitting = false;
       }  else if(minDiff>120){
        this.errorMessage ="Solo puedes reservar la sala máximo 2 horas";
        this.submitting = false;
      } else{
     
        console.log("reserve");
        
      }
    }
    
    
   
 
    
  }
  onDelete(){
    this.deleting = true;
    console.log("deleting");
    
  }
  onChangeStartTime(event, type:String){
    if (type === "start") {
      this.startTime = event;
    }
    if (type === "end") {
      this.endTime = event;
    }
   
    
    
  }

}
