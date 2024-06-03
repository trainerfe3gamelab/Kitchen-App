const express = require("express");
const router = express.Router();
const { getUser, getUserSavedRecipes, registerUser, editUser, deleteUser } = require("../controllers/userController");
const { authenticate, authorize } = require("../middleware/auth");

// Get user saved recipes by user id
router.get("/:username/savedRecipes", authenticate, authorize, getUserSavedRecipes);

// Get user profile by username
router.get("/:username", getUser);

// Create user
router.post("/register", registerUser);

// Edit user profile by username
router.put("/:username", authenticate, authorize, editUser);

// Delete user profile by username
router.delete("/:username", authenticate, authorize, deleteUser);

module.exports = router;