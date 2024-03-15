const User = require('../models/user');
const jwt = require("jsonwebtoken");

class addressController {
    static async address(req, res) {
        try {
            const { token, scKi, address } = req.body;
            console.log("Inside controller")
            console.log('token is ', token);
            console.log('secret is ', address.name);

            const userID = jwt.verify(token, scKi);
            const user = await User.findById(userID.userId);
            const NewUser = user;

            NewUser.addresses.push({
                name: address.name,
                mobile: address.mobile,
                buildApart: address.buildApart,
                addLine1: address.addLine1,
                addLine2: address.addLine2,
                pinCode: address.pinCode,
                state: address.state,
                type: address.type,
            })
            console.log(NewUser)
            await NewUser.save()
            //found the userid, now using this user id add the address to the array of address
            console.log("Key is   : ", userID.userId)
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });

        }
    }

}
module.exports = addressController;