const mongoose = require("mongoose");
const { Schema } = mongoose;

const recipeSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    title: {
        type: String,
        required: true
    },
    image: String,
    description: {
        type: String,
        required: true
    },
    total_time: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        default: 0
    },
    ingredients: {
        type: [String],
        required: true
    },
    steps: {
        video: {
            type: String,
            default: ""
        },
        step: {
            type: [
                {
                    description: String,
                    image: String
                }
            ],
            required: true
        }
    },
    category: {
        type: [String],
        default: []
    }
});

const recipeModel = mongoose.model("Recipe", recipeSchema);

module.exports = recipeModel;