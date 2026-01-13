const http = require('http');


const server = http.createServer((req,res)=>{
    res.write("hello WOrld");
    res.end();
})

server.listen(8080,()=>{
    console.log("server is runnign");
});