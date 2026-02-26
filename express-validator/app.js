const express = require("express")
const validators = require("./middleware/validator.middleware")

const app = express()
app.use(express.json())

app.post("/register",validators.registerValidationRules,(req,res)=>{
    const{ username , email , password} = req.body;
    res.status(200).json({
        message:"user register successfully"
    })
})

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})