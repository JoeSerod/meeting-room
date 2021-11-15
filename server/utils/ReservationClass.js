const ReservationModel = require("../models/reservationModel");

class ReservationClass{
    constructor(props) {
        
    }
    /**
     * 
     * @param {Date} startDate 
     * @param {Date} endDate 
     */
    async verifyAvailability (startDate, endDate, room) {
        console.log(startDate, endDate);
        ReservationModel.find({
         $and:[
             { $or:[
                {$and:[
                    {"startDate":{$lt: startDate}},
                    {"endDate":{$gte: startDate}}
                ]},{ $and:[
                    {"startDate":{$lt: endDate}},
                    {"endDate":{ $gte: endDate}},
                ]}
              ]},
              {
                  "room": {$eq: room}
              }
            
         ]
        }).then((value)=>{
            console.log(value);
        })
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
        this.verifyAvailability(model.startDate, model.endDate, model.room);
        // const response = model.save().then((docStored)=>{
        //     if(!docStored) return{status: 404, body:{message:"the room has not been reserved"}}
        //     return {status:200, body:{doc: docStored, message:"success"}};
        // }).catch((err)=>{
         
        //     return {status: 500,body:{message:err}};
        // })
        
        // return response;
        return {"merr": "OK"}
    }
    
}

module.exports = ReservationClass;