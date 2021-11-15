import { Component, OnInit } from '@angular/core';
import {SelectDateService} from "../../services/selectDate.service";
import {DatePipe} from "@angular/common";
import { ReservationService} from "../../services/reservation.service";
import {Reservation} from "../../models/reservation.model";

@Component({
  selector: 'schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.less'],
  providers:[DatePipe, ReservationService]

})
export class ScheduleComponent implements OnInit {
  public currentDate: String;
  public scheduleList: Array<Reservation>;
  constructor(
    private selectedDate: SelectDateService,
    private datePipe: DatePipe,
    private _reservationService : ReservationService,
  ) {
   }

  ngOnInit(): void {
    this.selectedDate.currentDate.subscribe(event=>{

     
      let format = this.datePipe.transform(event,"EEEE dd  MMMM yyyy")
      this.currentDate= format;
   
      event.setHours(0,0,0);
      this._reservationService.getScheduleByDate(event).subscribe((e)=>{
        if (typeof e === "object") {
          if (e!==null) {
            
            this.scheduleList = e.map(element => {
             let model = new Reservation(element.name, element.startDate, element.endDate, element.room);
              return model;
            });
            console.log(this.scheduleList);
            
            
          }
          
        }
        
      });
    });
    
  }
  

}
