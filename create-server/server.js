const http = require("http")

const server=http.createServer((req,res)=>{
    res.end("hello its my server")
})

server.listen(3000,()=>{
    console.log("my server is running on localhost port 3000")
})