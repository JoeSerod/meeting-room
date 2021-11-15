'use strict'
const Reservation = require("../utils/ReservationClass");


const controller = {
    getSchedule:async function (req, res) {
        try {
            const reservation = new Reservation();
            const date = req.body.date;
            const response = await reservation.getSchedule(date);
            console.log(response);
            return res.status(response.status).send(response.data);
        } catch (error) {
            return res.status(500).send({message:"error"})
        }
    },

   

    /**
     * Save the schedule for a room in reservation collection
     * @param {Request} req 
     * @param {Response} res 
     * @returns 
     */
     saveSchedule: async function (req, res) {
       try {
           const reservation = new Reservation();
           const params = req.body;
           const response = await reservation.saveSchedule(params);
           
           return res.status(response.status).send(response.body)

       } catch (error) {
        return res.status(500).send({message:"error"})
       }
    }
}

module.exports = controller;