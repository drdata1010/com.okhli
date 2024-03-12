const User = require('../models/user');

class loginController {
    static async login(req, res) {
        try {
            // Your API logic here
            const data = { message: 'Hello from the backend!' };

            console.log('Hello from the backend!');
            res.status(200).json('mai hoon GIAN');
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

module.exports = loginController;

