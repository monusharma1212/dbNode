const express = require('express')
const app = express()
const port = 3000
require('dotenv').config();
app.use(express.json());
// app.use('/static',express.static('public'))
const routes = require("./routes/api/v1/index")


console.log(process.env.PORT);

app.use('/api/v1',routes)

app.listen(process.env.PORT, ()=>{
    console.log("Server Started at Port");
});