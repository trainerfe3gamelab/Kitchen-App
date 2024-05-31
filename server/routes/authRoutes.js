const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/authController");
const { getProfile, getProfileResep } = require("../controllers/profileController");    

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile/:id", getProfile);
router.get("/profile/resep", getProfileResep);
router.get("/", (req, res) => {
    console.log(req.cookies);
    res.json({
        get: "jajal token",
        cookie: req.cookies
    });
})

module.exports = router;