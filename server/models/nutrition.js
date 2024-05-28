const mongoose = require("mongoose");
const { Schema } = mongoose;

const nutritionSchema = new Schema({
    recipe_id: {
        type: Schema.Types.ObjectId,
        ref: "Recipe",
        required: true
    },
    total_cal: String,
    total_fat: String,
    fatsat: String,
    protein: String,
    carb: String,
    sugar: String,
    salt: String
});

const nutritionModel = mongoose.model("Nutrition", nutritionSchema);

module.exports = nutritionModel;