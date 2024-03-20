const User = require('../models/user');
const jwt = require("jsonwebtoken");

class otpScreenController {
    static async verify(req, res) {

        console.log("OTP verification page");
        const { otp, referralCode } = req.body;
        try {
            if (otp == '') {
                return res.json({ message: 'Invalid OTP' });
            }

            const user = await User.findOne({ otp: otp });
            const refUser = await User.findOne({ referralCode: referralCode });
            if (!user) {
                return res.json({ message: 'Invalid OTP' });
            }
            if (!user) {
                return res.json({ message: 'Invalid Refferal code!' });
            }

            user.verified = true;
            user.otp = "";
            await user.save();
            console.log("success verification");
            return res.json({ code: '200', message: 'OTP verification successful' });

        } catch (error) {
            console.error('Error verifying user:', error);
            return res.status(500).json({ message: 'Internal server error' });
        }

    }

}
module.exports = otpScreenController;