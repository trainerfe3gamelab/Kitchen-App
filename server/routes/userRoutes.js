const express = require("express");
const router = express.Router();
const { getUser, editUser } = require("../controllers/userController");
const { authenticate, authorize } = require("../middleware/auth");

// Get user profile by username
router.get("/:username", getUser);

// Edit user profile by username
router.put("/:username", authenticate, authorize, editUser);

module.exports = router;