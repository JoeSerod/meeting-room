'use strict'
const ReservationModel = require("../models/reservationModel");


const controller = {
    getSchedule: function (req, res) {
        try {
            return res.status(200).send({
                message: "get schedule route OK"
            })
        } catch (error) {
            
        }
    },
    /**
     * 
     * @param {Request} req 
     * @param {Response} res 
     * @returns 
     */
    saveSchedule: function (req, res) {
       try {
           const model = new ReservationModel();
           const params = req.body;
           model.name = params.name;
           model.startDate = params.startDate;
           model.endDate = params.endDate;
           model.room = params.room;
           model.save((err, docStored)=>{
               console.log(err, docStored);
               if(err) return res.status(500).send({message:"error while saving data"});
               if(!docStored) return res.status(404).send({message:"the room has not been reserved"})

               return res.status(200).send({doc: docStored, message:"success"});
           })
//            const [name, startDate, endDate, room] = params;
// console.log(name);
        // return res.status(200).send({
        //     message: params
        // })
       } catch (error) {
           
       }
    }
}

module.exports = controller;