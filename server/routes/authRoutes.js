const express = require("express");
const router = express.Router();
const { loginUser, logoutUser } = require("../controllers/authController");
const { authenticate } = require("../middleware/auth");

router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/",authenticate, (req, res) => {
    res.json(req.user);
})

module.exports = router;