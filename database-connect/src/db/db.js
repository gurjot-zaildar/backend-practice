const mongoose = require("mongoose")


function connectToDB(){
    mongoose.connect("url of db")
    .then(()=>{
        console.log("connected to DB")
    })
}

module.exports = connectToDB 