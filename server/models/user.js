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
    },
    activity: {
        likes: [
            {
                recipe_id: Schema.Types.ObjectId,
                ref: "Recipe"
            }
        ],
        saves: [
            {
                recipe_id: Schema.Types.ObjectId,
                ref: "Recipe"
            }
        ],
    }
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;