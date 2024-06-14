const mongoose = require("mongoose");
const { Schema } = mongoose;

const saveRecipeSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    recipe_id: {
        type: Schema.Types.ObjectId,
        ref: "Recipe",
        required: true
    },
    created_at: {
        type: Date,
        default: () => Date.now()
    }
});

const saveRecipeModel = mongoose.model("SaveRecipe", saveRecipeSchema);

module.exports = saveRecipeModel;