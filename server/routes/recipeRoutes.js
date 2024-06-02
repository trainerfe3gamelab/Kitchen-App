const express = require("express");
const router = express.Router();
const { getPaginatedRecipes, getRecipeById, createRecipe, editRecipe, deleteRecipe, toggleLikeRecipe } = require("../controllers/recipeController");
const { authenticate, authCheck } = require("../middleware/auth");

// Get paginated recipes
router.get("/", getPaginatedRecipes);

// Get recipe by id
router.get("/:id", authCheck, getRecipeById);

// Create recipe
router.post("/", authenticate, createRecipe);

// Edit recipe
router.put("/:id", authenticate, editRecipe);

// Delete recipe
router.delete("/:id", authenticate, deleteRecipe);

// Toggle like recipe
router.post("/:id/like", authenticate, toggleLikeRecipe);

module.exports = router;