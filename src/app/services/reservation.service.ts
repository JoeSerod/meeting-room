import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs";
import {Reservation} from "../models/reservation.model";
import { Global } from "./global";

@Injectable()
export class ReservationService{
    public url: string;
    constructor(
        private _http: HttpClient,
    ){
        this.url = Global.url;
    }

    addSchedule(form:Reservation):Observable<any>{
       
        
        let params = JSON.stringify(form);
        let headers = new HttpHeaders().set("Content-Type", "application/json");
        return this._http.post(`${this.url}/save-schedule`, params, {headers: headers});
    }

    getScheduleByDate(date: Date):Observable<any>{
        let params = JSON.stringify({date: date});
        let headers = new HttpHeaders().set("Content-Type", "application/json");
        return this._http.post(`${this.url}/get-schedule`, params, {headers: headers})
    }

}

