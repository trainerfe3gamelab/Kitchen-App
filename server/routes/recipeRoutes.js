const express = require("express");
const router = express.Router();
const { getRecipes, getRecipe, createRecipe, editRecipe, deleteRecipe, toggleLikeRecipe } = require("../controllers/recipeController");
const { authenticate } = require("../middleware/auth");

// // Get recipe by id
// router.get("/:id", getRecipe);

// Create recipe
router.post("/", authenticate, createRecipe);

// Edit recipe
router.put("/:id", authenticate, editRecipe);

// Delete recipe
router.delete("/:id", authenticate, deleteRecipe);

// Toggle like recipe
router.post("/:id/like", authenticate, toggleLikeRecipe);

module.exports = router;