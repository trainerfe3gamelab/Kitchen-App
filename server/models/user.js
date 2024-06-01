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
    },
    activity: {
        likes: {
            type: [
                {
                    recipe_id: {
                        type: Schema.Types.ObjectId,
                        ref: "Recipe",
                        required: true
                    }
                }
            ],
            default: []
        },
        saves: {
            type: [
                {
                    recipe_id: {
                        type: Schema.Types.ObjectId,
                        ref: "Recipe",
                        required: true
                    }
                }
            ],
            default: []
        },
    }
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;