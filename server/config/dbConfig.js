const { mongoose } = require("mongoose");

// Database Connection
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("Database connected"))
    .catch((err) => console.log(err));

module.exports = mongoose;
