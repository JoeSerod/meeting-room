import { Component, OnInit } from '@angular/core';
import {SelectDateService} from "../../services/selectDate.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.less'],
  providers:[DatePipe]

})
export class ScheduleComponent implements OnInit {
  public currentDate: String;
  constructor(
    private selectedDate: SelectDateService,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.selectedDate.currentDate.subscribe(event=>{

     
      let format = this.datePipe.transform(event,"EEEE dd  MMMM yyyy")
      this.currentDate= format;
    });
  }
  

}
