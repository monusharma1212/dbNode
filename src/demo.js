require('dotenv').config()

const connectMongoDB = require("./db/mongoDB");

console.log("demo");

connectMongoDB();