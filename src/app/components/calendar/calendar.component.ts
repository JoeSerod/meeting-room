import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.less']
})
export class CalendarComponent implements OnInit {
  public selected: Date;
  constructor() { }

  ngOnInit(): void {
  }

}
