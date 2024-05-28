const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    image: String,
    username: String,
    fullName: String,
    email: {
        type: String,
        unique: true
    },
    website: String,
    bio: String,
    password: String
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;