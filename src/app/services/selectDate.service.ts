import {Injectable} from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class SelectDateService {
    date = new Date();
    public selected: BehaviorSubject<Date>;
    constructor(){
        this.selected = new BehaviorSubject(this.date);
    }
    updateDate(date:Date){
        this.selected.next(date);
    }
}