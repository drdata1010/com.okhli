const User = require('../models/user');
const jwt = require("jsonwebtoken");

class addressController {
    static async address(req, res) {
        try {
            const { token, scKi, address } = req.body;

            console.log('token is ', token);
            console.log('secret is ', scKi);

            const userID = jwt.verify(token, scKi);

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