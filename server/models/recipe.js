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
    description: String,
    total_time: String,
    likes: Number,
    bahan: [String],
    steps: {
        video: String,
        step: [
            {
                description: String,
                image: String
            }
        ]
    },
    category: [String]
});

const recipeModel = mongoose.model("Recipe", recipeSchema);

module.exports = recipeModel;