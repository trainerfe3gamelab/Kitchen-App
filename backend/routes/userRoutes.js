const express = require("express");
const router = express.Router();
const multer = require("multer");
const { getUser, getUserSavedRecipes, getUserLikedRecipes, registerUser, editUser, deleteUser } = require("../controllers/userController");
const { authenticate, authorize } = require("../middleware/auth");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Get user saved recipes by username
router.get("/:username/saved-recipes", authenticate, authorize, getUserSavedRecipes);

// Get user liked recipes by username
router.get("/:username/liked-recipes", authenticate, authorize, getUserLikedRecipes);

// Get user profile by username
router.get("/:username", getUser);

// Create user
router.post("/register", registerUser);

// Edit user profile by username
router.put("/:username", authenticate, authorize, upload.single('image'), editUser);

// Delete user profile by username
router.delete("/:username", authenticate, authorize, deleteUser);

module.exports = router;