import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import {registerLocaleData} from "@angular/common";
import localEs from "@angular/common/locales/es";
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { ReservationFormComponent } from './components/reservation-form/reservation-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatNativeDateModule} from "@angular/material/core";
import { MatFormFieldModule, MAT_FORM_FIELD } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { CalendarComponent } from './components/calendar/calendar.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {SelectDateService} from "./services/selectDate.service";
import {NgxMaterialTimepickerModule} from "ngx-material-timepicker";

registerLocaleData(localEs, "es")
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
    MatNativeDateModule,
    MatIconModule,
    MatFormFieldModule,
    NgxMaterialTimepickerModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule,
    SelectDateService,
    {provide: LOCALE_ID, useValue:"es"},
    {provide:MAT_FORM_FIELD, useValue:{appearance:"fill"}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
