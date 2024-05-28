const mongoose = require("mongoose");
const { Schema } = mongoose;

const recipeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    image: String,
    description: String,
    total_time: String,
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