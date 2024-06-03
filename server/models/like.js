const mongoose = require("mongoose");
const { Schema } = mongoose;

const likeSchema = new Schema({
    recipe_id: {
        type: Schema.Types.ObjectId,
        ref: "Recipe",
        required: true
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    created_at: {
        type: Date,
        default: () => Date.now()
    }
});

const likeModel = mongoose.model("Like", likeSchema);

module.exports = likeModel;