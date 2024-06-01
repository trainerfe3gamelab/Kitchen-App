const express = require("express");
const router = express.Router();
const { getRecipes, getRecipe, createRecipe, editRecipe, deleteRecipe, likeRecipe } = require("../controllers/recipeController");
const { authenticate, authorize } = require("../middleware/auth");

// // Get recipe by id
// router.get("/:id", getRecipe);

// Create recipe
router.post("/", authenticate, createRecipe);

module.exports = router;