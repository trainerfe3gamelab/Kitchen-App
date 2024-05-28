const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/authController");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/", (req, res) => {
    console.log(req.cookies);
    res.json({
        get: "jajal token",
        cookie: req.cookies
    });
})

module.exports = router;