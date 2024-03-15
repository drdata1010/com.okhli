const User = require('../models/user');
const jwt = require("jsonwebtoken");

class myAddressController {
    static async myAddress(req, res) {

        console.log('usjhnudhush');
        const { token, scKi } = req.body;

        const userID = jwt.verify(token, scKi);
        const user = await User.findById(userID.userId);

        console.log('user is :  ', user);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json(user.addresses);
    }

}
module.exports = myAddressController;