const mongoose = require("mongoose")

function connectToDB(){ mongoose.connect("url of DB")
.then(()=>{
console.log("server is connected to db")
})
}

module.exports = connectToDB;
