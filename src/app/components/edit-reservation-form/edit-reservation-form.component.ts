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
  constructor(
    private selectDateService :SelectDateService,
    public dialogRef: MatDialogRef<ReservationFormComponent>,
    @Inject(MAT_DIALOG_DATA) public reservationData:any,
  ) {
    this.reservationFormModel = new Reservation("",new Date(), new Date(), "");
   }

  ngOnInit(): void {
    
    
  }
  onSubmit(form):void{

  }
  onChangeStartTime(event, type:String){

  }

}
