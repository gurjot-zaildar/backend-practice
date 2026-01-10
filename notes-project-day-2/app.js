const express=require("express")

const app= express()

app.use(express.json())


const notes=[];

app.post("/notes",(req,res)=>{
    notes.push(req.body)
    res.json({
        message :"post done"
    })
})

app.get("/notes",(req,res)=>{
    res.json(notes)
})

app.delete("/notes:index",(req,res)=>{
    const index=req.params.index;
    delete notes[index]
    res.json({
        message : "delete done"
    })
})

app.patch("/notes:index",(req,res)=>{
    const index=req.params.index;
    const {title}=req.body;
    notes[index].title =title;
    res.json({
        message : "patch done"
    })
})

app.listen(3000,()=>{
    console.log("server is running on port 3000 ")
})