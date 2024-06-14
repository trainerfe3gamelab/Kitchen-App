const mongoose = require("mongoose");
const { Schema } = mongoose;

const AddInfoSchema = new Schema ({
    ingredients : {
        type: [String],
    },
    category: {
        type: [
            {
                title:String,
                image:String
            }
        ]
    }
})

const add_info_model = mongoose.model("Add_info", AddInfoSchema);

module.exports = add_info_model;