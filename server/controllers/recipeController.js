const Recipe = require("../models/recipe");
const Like = require("../models/like");
const SaveRecipe = require("../models/saveRecipe");

// Get paginated recipes
const getPaginatedRecipes = async (req, res) => {
    try {

        // Get page, limit, category, sort and search query from request
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const category = req.query.category;
        const search = req.query.search;
        const popular = req.query.popular;
        const ingredients = req.query.ingredients;

        // Create query and sort objects
        let query = {};
        let sort = { createdAt: -1 }; // Default sort by createdAt

        // If category is provided, add it to query object
        if (category) {
            // const categories = category.split(",").map(cat => cat.trim());
            // query.category = { $in: categories };
            query.category = { $in: category.split(",") };
        }

        // If search query is provided, add it to query object
        if (search) {
            query.$text = { $search: search };
        }

        // If popular is "true", sort by likes in descending order
        if (popular === "true") {
            sort = { likes: -1 };
        }

        // If ingredients query is provided, add it to query object
        if (ingredients) {
            query.ingredients = { $all: ingredients.split(",") };
        }

        // Get total recipes count
        const totalRecipes = await Recipe.countDocuments();

        // Calculate total pages
        const totalPages = Math.ceil(totalRecipes / limit);

        // Get paginated recipes
        const recipes = await Recipe.find(query).select("user_id title image total_time likes category")
            .sort(sort)
            .skip((page - 1) * limit)
            .limit(limit);

        res.json({
            recipes,
            totalPages,
            currentPage: page,
            limit
        });

    } catch (error) {
        console.log(error);
        res.json({
            error: "Server error"
        });
    }
}

// Get recipe by id
const getRecipeById = async (req, res) => {
    try {

        // Find recipe by id
        const recipe = await Recipe.findById(req.params.id);

        if (!recipe) {
            return res.status(404).json({
                error: "Recipe not found"
            });
        }

        // Check if user is authenticated
        if (!req.user || !req.user.id) {
            return res.json({
                recipe: {
                    ...recipe._doc,
                    isLiked: false
                }
            });
        } else {
            // Check if user has liked the recipe
            const userLike = await Like.findOne({ recipe_id: req.params.id, user_id: req.user.id });

            res.json({
                recipe: {
                    ...recipe._doc,
                    isLiked: !!userLike
                }
            });
        }

    } catch (error) {
        console.log(error);
        res.json({
            error: "Server error"
        });
    }
}

// Create recipe
const createRecipe = async (req, res) => {
    try {

        // Get recipe data from request body
        const {
            title,
            image,
            description,
            total_time,
            ingredients,
            video,
            stepDescription,
            stepImage,
            category
        } = req.body;

        // Create new recipe
        const recipe = new Recipe({
            user_id: req.user.id,
            title,
            image,
            description,
            total_time,
            ingredients,
            steps: {
                video,
                step: stepDescription.map((description, index) => ({
                    description,
                    image: stepImage[index]
                })),
            },
            category
        });

        await recipe.save();

        // Send response
        res.json({
            message: "Recipe created successfully"
        });

    } catch (error) {
        console.log(error);
        res.json({
            error: "Server error"
        });
    }
}

// Edit recipe
const editRecipe = async (req, res) => {

    try {

        // Get recipe data from request body
        const {
            title,
            image,
            description,
            total_time,
            ingredients,
            video,
            stepDescription,
            stepImage,
            category
        } = req.body;

        // Find recipe by id
        const recipe = await Recipe.findById(req.params.id);

        // Check if recipe exists
        if (!recipe) {
            return res.status(404).json({
                error: "Recipe not found"
            });
        }

        // Check if user is authorized to edit recipe
        if (recipe.user_id.toString() !== req.user.id) {
            return res.status(403).json({
                error: "You are not authorized to edit this recipe"
            });
        }

        // Update recipe data
        recipe.title = title || recipe.title;
        recipe.image = image || recipe.image;
        recipe.description = description || recipe.description;
        recipe.total_time = total_time || recipe.total_time;
        recipe.ingredients = ingredients || recipe.ingredients;
        recipe.steps.video = video || recipe.steps.video;
        if (stepDescription && stepImage && stepDescription.length === stepImage.length) {
            recipe.steps.step = stepDescription.map((description, index) => ({
                description,
                image: stepImage[index]
            }));
        }
        recipe.category = category || recipe.category;

        await recipe.save();

        // Send response
        res.json({
            message: "Recipe updated successfully"
        });

    } catch (error) {
        console.log(error);
        res.json({
            error: "Server error"
        });
    }
}

// Delete recipe
const deleteRecipe = async (req, res) => {

    try {

        // Find recipe by id
        const recipe = await Recipe.findById(req.params.id);

        // Check if recipe exists
        if (!recipe) {
            return res.status(404).json({
                error: "Recipe not found"
            });
        }

        // Check if user is authorized to delete recipe
        if (recipe.user_id.toString() !== req.user.id) {
            return res.status(403).json({
                error: "You are not authorized to delete this recipe"
            });
        }

        await recipe.deleteOne();

        // Send response
        res.json({
            message: "Recipe deleted successfully"
        });

    } catch (error) {
        console.log(error);
        res.json({
            error: "Server error"
        });
    }

}

// Toggle like recipe
const toggleLikeRecipe = async (req, res) => {

    try {

        // Find recipe by id
        const recipe = await Recipe.findById(req.params.id).select("likes");

        // Check if recipe exists
        if (!recipe) {
            return res.status(404).json({
                error: "Recipe not found"
            });
        }

        // Find user like
        const userLike = await Like.findOne({ recipe_id: req.params.id, user_id: req.user.id });

        // Check if user has already liked the recipe
        if (!userLike) {

            // Create new like
            const like = new Like({
                recipe_id: req.params.id,
                user_id: req.user.id
            });

            await like.save();

            // Update recipe likes count
            await recipe.updateOne({ likes: recipe.likes + 1 });

            res.json({
                message: "Recipe liked successfully"
            });

        } else {

            // Unlike recipe
            await userLike.deleteOne();

            // Update recipe likes count
            await recipe.updateOne({ likes: recipe.likes - 1 });

            res.json({
                message: "Recipe unliked successfully"
            });
        }

    } catch (error) {
        console.log(error);
        res.json({
            error: "Server error"
        });
    }

}

// Save/unsave recipe
const saveRecipe = async (req, res) => {

    try {

        // Find recipe by id
        const recipe = await Recipe.findById(req.params.id);

        // Check if recipe exists
        if (!recipe) {
            return res.status(404).json({
                error: "Recipe not found"
            });
        }

        // Find user save recipe
        const userSave = await SaveRecipe.findOne({ recipe_id: req.params.id, user_id: req.user.id });

        // Check if user has already saved the recipe
        if (!userSave) {

            // Create new save recipe
            const saveRecipe = new SaveRecipe({
                recipe_id: req.params.id,
                user_id: req.user.id
            });

            await saveRecipe.save();

            res.json({
                message: "Recipe saved successfully"
            });

        } else {

            // Unsave recipe
            await userSave.deleteOne();

            res.json({
                message: "Recipe unsaved successfully"
            });
        }

    } catch (error) {
        console.log(error);
        res.json({
            error: "Server error"
        });
    }

}


module.exports = {
    getPaginatedRecipes,
    getRecipeById,
    createRecipe,
    editRecipe,
    deleteRecipe,
    toggleLikeRecipe,
    saveRecipe
};