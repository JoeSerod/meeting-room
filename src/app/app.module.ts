import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { ReservationFormComponent } from './components/reservation-form/reservation-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatNativeDateModule} from "@angular/material/core";

import { CalendarComponent } from './components/calendar/calendar.component';
import {MatDatepickerModule} from "@angular/material/datepicker";


@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    ReservationFormComponent,
    CalendarComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
