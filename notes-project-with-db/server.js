const express = require("express")
const connectToDB= require("./src/db/db")
const noteModel = require("./src/models/note.model")

const app = express()

connectToDB()

app.use(express.json())

app.post("/notes", async(req,res)=>{
    const {title,content}= req.body
   await noteModel.create({
        title,content
    })

    res.json({
        message:"note created successfully"
    })

})


app.get("/notes",async(req,res)=>{
    const notes = await noteModel.find()
    res.json({
        message:"notes fetch successfully",
        notes
    })
})

app.delete("/notes/:id",async(req,res)=>{
    const noteID= req.params.id

    await noteModel.findByIdAndDelete({
        _id:noteID
    })
    res.json({
        message:"note deleted successfully"
    })
})

app.patch("/notes/:id",async(req,res)=>{
    const noteID=req.params.id
    
    const {title,content}= req.body

    await noteModel.findByIdAndUpdate({
        _id:noteID
    },{
        title:title,
        content:content
    })
    res.json({
        message:"note updated successfully"
    })
})

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})