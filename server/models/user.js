const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    image: String,
    username: {
        type: String,
        unique: true,
        required: true
    },
    fullName: String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    website: String,
    bio: String,
    password: {
        type: String,
        required: true
    }
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;