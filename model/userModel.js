//mongoose
const mongoose = require("mongoose");
const userModel = mongoose.Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
        email: {
        type: String,
        require: true
    },
        password: {
        type: String,
        require: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
})


module.exports = userModel;