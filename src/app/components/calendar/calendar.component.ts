import { Component, OnInit } from '@angular/core';
import {SelectDateService} from "../../services/selectDate.service";

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.less'],
  
})
export class CalendarComponent implements OnInit {
  public selected: Date;
  constructor(
    private date: SelectDateService
  ) { }

  ngOnInit(): void {
    this.date.currentDate.subscribe(event=>console.log(event));
    
  }
  onSelect(event){
    this.selected = event;
    this.date.updateDate(this.selected);
    
  }
}
