const bcrypt = require("bcrypt");
const Users = require("../model/users.model");
const sendMail = require("../service/nodemailer");

const registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExists = await Users.findOne({ email });
    if (userExists) {
      return res.status(400).json({
        success: false,
        data: null,
        message: "User already exists"
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);

<<<<<<< HEAD
    const user = await Users.create({
      ...req.body,
      password: hashPassword
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        data: null,
        message: "User not registered"
      });
    }

    const OTP = Math.floor(1000 + Math.random() * 9000);
    await Users.updateOne({ email }, { otp: OTP });

    await sendMail(email, "Registration OTP", `Your OTP is ${OTP}`);

    const userData = await Users.findOne({ email }).select("-password");

    return res.status(200).json({
      success: true,
      data: userData,
      message: "User registration complete"
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      data: null,
      message: "Internal Server Error: " + error.message
    });
  }
};

module.exports = { registerUser };
=======
module.exports = {
    registerUser
}

// har ek function ko module.export ke andar dalna h and uska route banana h 
// 
>>>>>>> ed2ec97ab21c83951fa2a6f41d0c842da4cee852
