'use strict'

const express = require("express");
const router =new express.Router();
const ReservationController = require("../controllers/reservationController");

router.post("/get-schedule", ReservationController.getSchedule);
router.post("/save-schedule", ReservationController.saveSchedule);

module.exports = router;