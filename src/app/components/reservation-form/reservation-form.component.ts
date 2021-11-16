import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppComponent } from 'src/app/app.component';
import { SelectDateService } from 'src/app/services/selectDate.service';
import {Reservation} from "../../models/reservation.model";
import {ReservationService} from "../../services/reservation.service";


@Component({
  selector: 'reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.less'],
  providers: [ReservationService]
})
export class ReservationFormComponent implements OnInit {
  date: Date;
  name: String;
  startDate: Date;
  errorMessage: String;
  endDate: Date;
  submitting: Boolean;
  reservationFormModel :Reservation;
  options : Array<Object>;
  selectedRoom: String;
  constructor(
    public dialogRef: MatDialogRef<AppComponent>,
    private selectDateService :SelectDateService,
    private _reservationService: ReservationService,
  ) {
    this.reservationFormModel = new Reservation("",new Date(), new Date(), "");
    this.submitting = false;
    this.options = [
      {value:"1", viewValue:"Sala 1"},
      {value:"2", viewValue:"Sala 2"},
      {value:"3", viewValue:"Sala 3"},
    ]
   }

  ngOnInit(): void {
    this.selectDateService.currentDate.subscribe(date=>{
      this.date= date
      
    })
  }

  onChangeStartTime(e, type){
    let timeExp = e.match(/(\d+)\:(\d+) (\w+)/),
    hours = timeExp[3]==="AM"? timeExp[1]==="12"? 0 :timeExp[1]: timeExp[1]==="12"?12 :+timeExp[1]+12,
    minutes = timeExp[2];
 
    
    let time = new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate(), hours, minutes)
    if (type === "start") {
      this.startDate = time;
    }else{
      this.endDate = time;
    }
    
    
   
   
    
  }
  onSelectRoom(e){
    console.log(e.value);
    
    this.selectedRoom = "1";
    
  }
  onSubmit(form):void{
    this.submitting = true;
    if (this.startDate && this.endDate) {
      this.reservationFormModel.startDate = this.startDate;
      this.reservationFormModel.endDate = this.endDate;
      const dif =this.endDate.getTime()- this.startDate.getTime();
      const minDiff =dif/1000/60;
  
      if (minDiff <0) {
        this.errorMessage = "Los horarios no son válidos";
        this.submitting = false;
      } 
      else if(minDiff>120){
        this.errorMessage ="Solo puedes reservar la sala máximo 2 horas";
        this.submitting = false;
      }else{
    
        this._reservationService.addSchedule(this.reservationFormModel).subscribe(
          response =>{
            if (response.message) {
              console.log(response.message);
              
              switch (response.message) {
                case "success":
                  this.dialogRef.close()
                  break;
               case " The room is not available":
             
                 
                this.errorMessage= "La sala no esta disponible en el horario que seleccionaste";  
                this.submitting = false;
               break;
               case "The date has been expired":
                this.errorMessage= "El horario no esta disponible";  
                this.submitting = false;
                 break;
                default:
                 
                  
                  break;
              }
            }else{
              this.errorMessage= "No se ha apartado la sala. Inténtalo más tarde.";  
              this.submitting = false;
            }
         
            
          },
          error=>{
            this.errorMessage= "No se ha apartado la sala. Inténtalo más tarde.";  
            this.submitting = false;
            
          }
        );
        this.errorMessage = undefined;
 
      }
    } else{
      this.errorMessage="Selecciona los horarios";
      this.submitting = false;
    }
   
    
   
    
   
    
  }
}
