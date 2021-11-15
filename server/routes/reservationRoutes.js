'use strict'

const express = require("express");
const router =new express.Router();
const ReservationController = require("../controllers/reservationController");

router.get("/get-schedule", ReservationController.getSchedule);
router.post("/save-schedule", ReservationController.saveSchedule);

module.exports = router;