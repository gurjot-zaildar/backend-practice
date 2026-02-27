const express = require("express");
const rateLimiter = require("express-rate-limit");

const app = express();
app.use(express.json())

const limiter = rateLimiter({
    window: 1*60*1000,
    max:100,
    message:"too many requests from this Ip, please try again after a minute"
})

app.post("/api/auth/register",limiter,(req,res)=>{
    res.status(201).json({
        message:"user register successfully"
    })
})


app.listen(3000,()=>{
    console.log("server is running on port 3000")
})