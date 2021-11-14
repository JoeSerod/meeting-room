import { Component, OnInit } from '@angular/core';
import {SelectDateService} from "../../services/selectDate.service";

@Component({
  selector: 'schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.less'],

})
export class ScheduleComponent implements OnInit {
  public currentDate: Date;
  constructor(
    private selectedDate: SelectDateService
  ) { }

  ngOnInit(): void {
    this.selectedDate.currentDate.subscribe(event=>this.currentDate= event);
  }
  

}
