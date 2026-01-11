const mongoose = require("mongoose")


function connectToDB(){
    mongoose.connect("mongodb+srv://signingames115_db_user:9Wb688Z3JBYZLVGw@cluster0.41wquta.mongodb.net/cohort")
    .then(()=>{
        console.log("connected to DB")
    })
}

module.exports = connectToDB 