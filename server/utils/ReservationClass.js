const ReservationModel = require("../models/reservationModel");

class ReservationClass{
    constructor(props) {
        
    }
    /**
     * 
     * @param {Object} model 
     */
    saveSchedule(params){
        const model = new ReservationModel();
        model.name = params.name;
        model.startDate = params.startDate;
        model.endDate = params.endDate;
        model.room = params.room;
        const response = model.save().then((docStored)=>{
            if(!docStored) return{status: 404, body:{message:"the room has not been reserved"}}
            return {status:200, body:{doc: docStored, message:"success"}};
        }).catch((err)=>{
         
            return {status: 500,body:{message:err}};
        })
        
        return response;
    }
    
}

module.exports = ReservationClass;