import {Injectable} from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class SelectDateService {
    private selected :BehaviorSubject<Date>;
    currentDate: Observable<Date>;
    date = new Date();
    // public selected: BehaviorSubject<Date>;
    constructor(){
        this.selected = new BehaviorSubject(this.date);
        this.currentDate = this.selected.asObservable();
    }
    updateDate(date:Date){
        this.selected.next(date);
    }
}