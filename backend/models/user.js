const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phNo: {
        type: String,
        required: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    cnfPassword: {
        type: String,
        require: true
    },
    verified: {
        type: Boolean,
        default: false
    },
    otp: String,
    addresses: [
        {
            name: String,
            mobileNo: String,
            buildApart: String,
            addressLine1: String,
            addressLine2: String,
            state: String,
            pincode: String,
            currentAdd: Boolean,
        }
    ],
    order: [
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "Order"
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }

});

const User = mongoose.model("User", userSchema);

module.exports = User