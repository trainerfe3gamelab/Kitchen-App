const express = require("express");
const router = express.Router();
const { getRecipes, getRecipe, createRecipe, editRecipe, deleteRecipe, likeRecipe } = require("../controllers/recipeController");
const { authenticate } = require("../middleware/auth");

// // Get recipe by id
// router.get("/:id", getRecipe);

// Create recipe
router.post("/", authenticate, createRecipe);

// Edit recipe
router.put("/:id", authenticate, editRecipe);

module.exports = router;