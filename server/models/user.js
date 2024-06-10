const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    image: {
        type: String,
        default: ""
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    website: {
        type: String,
        default: ""
    },
    bio: {
        type: String,
        default: ""
    },
    password: {
        type: String,
        required: true
    }
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;