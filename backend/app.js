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
const port = 3000;

// middleware
const corsOptions = {
    origin: function (origin, callback) {
        // Jika origin ada dalam daftar yang diizinkan atau permintaan tidak memiliki origin (misalnya permintaan dari Postman)
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", require("./routes"));

app.listen(port, () => console.log(`Server is running on port ${port}`));