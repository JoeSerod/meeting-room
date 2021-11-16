import { Component, OnInit } from '@angular/core';
import {SelectDateService} from "../../services/selectDate.service";
import {DatePipe} from "@angular/common";
import { ReservationService} from "../../services/reservation.service";
import {Reservation} from "../../models/reservation.model";
import { MatDialog } from '@angular/material/dialog';
import { EditReservationFormComponent } from '../edit-reservation-form/edit-reservation-form.component';

@Component({
  selector: 'schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.less'],
  providers:[DatePipe, ReservationService]

})
export class ScheduleComponent implements OnInit {
  public currentDate: String;
  public scheduleList:{"1": Array<Object>,"2": Array<Object>, "3": Array<Object>};
  constructor(
    private selectedDate: SelectDateService,
    private datePipe: DatePipe,
    private _reservationService : ReservationService,
    public matDialog: MatDialog
  ) {
    
   }

   formatTime(date: Date){
      const format = this.datePipe.transform(date, "h:mm a");
      return format;
   }

  ngOnInit(): void {
    this.selectedDate.currentDate.subscribe(event=>{

     
      let format = this.datePipe.transform(event,"EEEE dd  MMMM yyyy")
      this.currentDate= format;
      this.scheduleList={
        "1":[],
        "2":[],
        "3":[]
      }
      const today = new Date();
      
      
    
      event.setHours(0,0, 0, 0);      
      this._reservationService.getScheduleByDate(event).subscribe((e)=>{
        if (typeof e === "object") {
          if (e!==null) {
            
            e.forEach(element => {
              let model = {
                _id: element._id,
                name: element.name,
                startTime: this.formatTime(element.startDate),
                endTime: this.formatTime(element.endDate),
                room: element.room
              }
              this.scheduleList[`${model.room}`].push(model);
            });
           
            
            
          }
          
        }
        
      });
    });
    
  }
  openEditDialog(data):void{
    const dialogRef =  this.matDialog.open(EditReservationFormComponent,{
      width:"50vh",
      height: "50vh",
      data: {
        startTime: data.startTime, 
        endTime: data.endTime,
         name: data.name, 
         id: data._id
        },
      panelClass:"dialog"
    })
    
  }

}
