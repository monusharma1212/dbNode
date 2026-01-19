const express = require('express')
const app = express()
const port = 3000
require('dotenv').config();
app.use(express.json());
// app.use('/static',express.static('public'))
const routes = require("./routes/api/v1/index");
const connectMongoDB = require('./db/mongoDB');

connectMongoDB()

console.log(process.env.PORT);

app.use('/api/v1',routes)

console.log(process.env.PORT);


app.listen(process.env.PORT, ()=>{
    console.log("Server Started at Port");
});   

// git fetch origin