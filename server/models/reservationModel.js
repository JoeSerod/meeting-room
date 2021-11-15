'use strict'

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReservationSchema = Schema({
    name: String,
    startDate: Date,
    endDate: Date,
    room: String,
});

module.exports = mongoose.model("Reservation", ReservationSchema);