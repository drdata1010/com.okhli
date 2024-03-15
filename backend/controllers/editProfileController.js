const User = require('../models/user');
const jwt = require("jsonwebtoken");

class editProfileController {
    static async edit(req, res) {

        const { token, scKi, name, email, mobile, gender, age } = req.body;

        const userID = jwt.verify(token, scKi);
        const user = await User.findById(userID.userId);
        const NewUser = user;

        console.log('user is :  ', user);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        NewUser.push({
            name: name,
            email: email,
            mobile: mobile,
            gender: gender,
            age: age
        })
        await NewUser.save()


    }

}
module.exports = edit;