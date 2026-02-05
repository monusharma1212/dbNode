
const nodemailer = require('nodemailer');


const sendMail = async (email, subject ,message) => {
    try {

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'monukumarsharma070@gmail.com',
                pass: 'ldyq gttx umfc rjad'
                

            }
        });

        let mailOptions = {
            from: 'monukumarsharma070@gmail.com',
            to: email,
            subject: subject,
            text: 'That was easy!'
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
                return 'Email sent: ' + info.response
            }
        });

    } catch (error) {
        throw new Error("Send Email Error"+error.message)

    }
}

module.exports = sendMail;