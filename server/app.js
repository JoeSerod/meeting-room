'use strict'

const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes/reservationRoutes");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/", routes)

module.exports= app;