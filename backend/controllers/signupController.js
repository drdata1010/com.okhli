const User = require('../models/user');
const nodemailer = require("nodemailer");

class signupController {
    static async signup(req, res) {
        try {
            const { user } = req.body;
            const name = user.name;
            const email = user.email;
            const phNo = user.phNo;
            const password = user.password;
            const cnfPassword = user.cnfPassword;

            //check if the Email is already registered
            const existingEmail = await User.findOne({ email });
            if (existingEmail) {
                return res.json({ code: '203', message: "Email already Registered!" });
            }

            //check if the Mobile No is already registered
            const existingPhNo = await User.findOne({ phNo });
            if (existingPhNo) {
                return res.json({ code: '204', message: "Mobile No. already Registered!" });
            }

            //generate OTP
            const otp = Math.floor(100000 + Math.random() * 900000);
            console.log("6 digit OTP is ", otp);

            const transporter = nodemailer.createTransport({
                //configure the email service
                service: "gmail",
                auth: {
                    user: "okhlitest@gmail.com",
                    pass: "tigj ottk kvui koev"
                }
            });

            //compose the email message
            const mailOptions = {
                from: "okhlitest@gmail.com",
                to: email,
                subject: "OTP for Email Verification",
                text: `Your OTP is: ${otp}`,
            };

            //send the email
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error('Error sending email:', error);
                    return res.json({ code: "205", message: 'Error sending OTP email.' });
                }
                console.log('Email sent:', info.response);
                res.json({ code: "206", userId: newUser.id, message: 'Email sent successfully.' });
            });

            //Create a new User
            const newUser = new User({ name, email, phNo, password, cnfPassword, otp, verified: false });
            //save user to the database
            const data = await newUser.save();

            return res.json({ code: "210", message: 'User Registered' });


        } catch (error) {
            console.log("error registering new User", error);
            res.status(500).json({ message: "Registration failed" });
        }
    }
}

module.exports = signupController;

