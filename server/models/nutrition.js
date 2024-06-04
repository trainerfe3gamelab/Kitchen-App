const mongoose = require("mongoose");
const { Schema } = mongoose;

const nutritionSchema = new Schema({
    recipe_id: {
        type: Schema.Types.ObjectId,
        ref: "Recipe",
        required: true,
        unique: true
    },
    total_cal: String,
    total_fat: {
        g: String,
        akg: String
    },
    fatsat: {
        g: String,
        akg: String
    },
    protein: {
        g: String,
        akg: String
    },
    carb: {
        g: String,
        akg: String
    },
    sugar: {
        g: String
    },
    salt: {
        g: String,
        akg: String
    }
});

const nutritionModel = mongoose.model("Nutrition", nutritionSchema);

module.exports = nutritionModel;