export class Reservation{
    constructor(
        public name: String,
        public startDate: Date,
        public endDate: Date,
        public room: String,
    ){}
}