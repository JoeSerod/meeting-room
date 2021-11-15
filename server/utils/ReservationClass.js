const ReservationModel = require("../models/reservationModel");

class ReservationClass{
    constructor(props) {
        
    }
    /**
     * 
     * @param {Date} startDate 
     * @param {Date} endDate 
     * @return {Boolean} false if the room availabilty is false and true if it's available
     */
    async verifyAvailability (startDate, endDate, room) {
        console.log(startDate, endDate);
        return ReservationModel.find({
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
            if(value.length>0){
                return false;
            }
            return true;
            
        }).catch((error)=>{
            console.log(error);
            return false;
        })
    }
    /**
     * 
     * @param {Object} model 
     */
   async saveSchedule(params){
        const model = new ReservationModel();
        model.name = params.name;
        model.startDate = params.startDate;
        model.endDate = params.endDate;
        model.room = params.room;
        const available = await this.verifyAvailability(model.startDate, model.endDate, model.room);
        if(available){
            const response = model.save().then((docStored)=>{
            if(!docStored) return{status: 404, body:{message:"the room has not been reserved"}}
            return {status:200, body:{doc: docStored, message:"success"}};
            }).catch((err)=>{
            
                return {status: 500,body:{message:err}};
            })
            
            return response;
        } 
        return {status:200, body:{message:" The room is not available"}};
        
     
    }
    /**
     * 
     * @param {String} date 
     */
    async getSchedule(date){
        try {
            const toDate = new Date(date)
            const start = toDate;
            const end= new Date(toDate.getFullYear(), toDate.getMonth(), toDate.getDate(), 23, 59, 59);
            return ReservationModel.find({
                $and:[
                    {"startDate":{$gte: start}},
                    {"endDate":{$lte: end}},
                ]
            }).sort("startDate").then((value)=>{
                if (value.length>0) {
                    return {status: 200, data: value};
                } else{
                    return {status: 200, data:undefined};
                }
            }).catch((error)=>{
                return {status: 500, data: error};
            })
        } catch (error) {
            return {message: error}
        }
    }
    
}

module.exports = ReservationClass;