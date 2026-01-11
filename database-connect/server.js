const express = require("express");
const connectToDB = require("./src/db/db")

connectToDB()

const server = express()

server.use(express.json())

server.post("/notes",(req,res)=>{
    const {title , discription}= req.body
})

server.get("/notes",(req,res)=>{
    res.send(req.body)
})

server.listen(3000,()=>{
    console.log("server is running on port 3000")
})