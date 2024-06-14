const express = require("express");
const router = express.Router();
const { getPaginatedRecipes, getRecipeById, createRecipe, editRecipe, deleteRecipe, toggleLikeRecipe, saveRecipe } = require("../controllers/recipeController");
const { authenticate, authCheck, verifyRecipeAuthor } = require("../middleware/auth");

// Get paginated recipes
router.get("/", getPaginatedRecipes);

// Get recipe by id
router.get("/:id", authCheck, getRecipeById);

// Create recipe
router.post("/", authenticate, createRecipe);

// Edit recipe
router.put("/:id", authenticate, verifyRecipeAuthor, editRecipe);

// Delete recipe
router.delete("/:id", authenticate, verifyRecipeAuthor, deleteRecipe);

// Toggle like recipe
router.post("/:id/like", authenticate, toggleLikeRecipe);

// Save or unsave recipe
router.post("/:id/save", authenticate, saveRecipe);

module.exports = router;