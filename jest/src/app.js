const express = require("express")

const app = express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.status(200).json({
        message:"hello world"
    })
})

app.post("/api/auth/register",(req,res)=>{
    const{username , email , password}  = req.body;

    res.status(201).json({
        message:"user register successfully",
        user:{ username,email,password}
    })
})


module.exports=app;