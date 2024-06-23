require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require('./config/dbConfig')
const allowedOrigins = [
    process.env.CORS_ORIGIN_PROD,
    process.env.CORS_ORIGIN_DEV,
    process.env.CORS_ORIGIN_LOCAL
];

const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(cors({
    origin: process.env.CORS_ORIGIN_LOCAL,
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", require("./routes"));

app.listen(port, () => console.log(`Server is running on port ${port}`));
