const express = require("express")
const ejs = require("ejs");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"))
app.set("view engine","ejs")

app.post("/api",(req,res)=>{
    res.status(201).send({
        message:"api hit"
    })
})

app.get("/",(req,res)=>{
    res.render("index",{message:"hello gurjot"})
})


module.exports=app