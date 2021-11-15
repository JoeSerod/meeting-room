'use strict'

const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.get("/", (req, res)=>{
    res.status(200).send({
        "Message":"Welcome to Meeting Room API"
    })
})

module.exports= app;