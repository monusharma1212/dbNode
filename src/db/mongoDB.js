const mongoose = require("mongoose");

const connectMongoDB = async () => {
  try {
    console.log("sss");
    
    await mongoose.connect(process.env.METHOD_URL)
      .then(console.log("DB connected Succesfully"))
      .catch(console.log("DB is Not connected"));
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectMongoDB
