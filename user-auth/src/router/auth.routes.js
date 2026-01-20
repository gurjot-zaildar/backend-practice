const express = require("express")
const userModel = require("../model/user.model")


const router = express.Router()

router.post("/register",async(req,res)=>{
    const {username,password}=req.body
    
   const user = await userModel.create({
    username,password
   })

   res.status(201).json({
    message:"user register successfully",
    user
   })

})

router.post("/login",async(req,res)=>{
    const {username,password}=req.body
    const user = await userModel.findOne({
        username:username
    })
    if(!user){
        return res.status(401).json({
            message:"user account not found[invalid username] "
        })
    }

    const isPasswordValid = password == user.password

    if(!isPasswordValid){
        return res.status(401).json({
            message:"invalid password"
        })
    }

    res.status(200).json({
        message:"user loggedIn successfully"
    })

})


module.exports= router