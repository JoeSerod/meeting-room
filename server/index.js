'user strict'

const mongoose = require("mongoose");
const config = require("./config/config");
const app = require("./app");



mongoose.Promise= global.Promise;
mongoose.connect(config.DB).then(()=>{
    console.log("works");
    app.listen("3700", ()=>{
        console.log("success");
    })
}).catch(err=>console.log(err));