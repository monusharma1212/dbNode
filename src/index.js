const express = require('express')
const app = express()
const port = 3000
require('dotenv').config();
const passport = require("passport");
const routes = require("./routes/api/v1/index");
const connectMongoDB = require('./db/mongoDB');
const providers = require('./service/provider');

app.use(express.json());
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
    app.use(passport.initialize());
    app.use(passport.session());

    providers();


// app.use('/static',express.static('public'))



connectMongoDB()  

console.log(process.env.PORT);

app.use('/api/v1',routes)

console.log(process.env.PORT);


app.listen(process.env.PORT, ()=>{
    console.log("Server Started at Port");
});   

// git fetch origin


// set cookies cookieparser(library) jwtjs token creater access and refresh token 

// verify tokens and refresh token 

// 