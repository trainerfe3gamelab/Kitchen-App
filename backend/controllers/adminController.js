const User = require('../models/user');
const Recipe = require('../models/recipe');
const Nutrition = require('../models/nutrition');
const Admin = require('../models/admin');
const { comparePassword } = require("../utils/hashPass");
const jwt = require("jsonwebtoken");
const validateRequest = require("../utils/validateRequest");

// Get user by ID
const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({
                error: "User not found"
            });
        }
        res.json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Internal server error"
        });
    }
}

// Get user by username
const getUserByUsername = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.params.username });
        if (!user) {
            return res.status(404).json({
                error: "User not found"
            });
        }
        res.json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Internal server error"
        });
    }
}

const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        await User.findByIdAndDelete(userId);

        // Get all recipes of the user and delete them
        const recipes = await Recipe.find({ user_id: userId});
        const recipeIds = recipes.map(recipe => recipe._id);
        await Recipe.deleteMany({ user_id: userId});

        // Delete all nutrition data associated with the deleted recipes
        await Nutrition.deleteMany({ recipe_id: { $in: recipeIds }});

        res.status(200).json({ message: 'User and associated data deleted' });

    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
}

// Get recipe by id or title
const getRecipeByIdOrTitle = async (req, res) => {
    try {
        const { id, title } = req.query;

        let recipe;
        if (id) {
            // Find recipe by id
            recipe = await Recipe.findById(id);
        } else if (title) {
            // Find recipe by title
            recipe = await Recipe.findOne({ title: title });
        }

        if (!recipe) {
            return res.status(404).json({
                error: "Recipe not found"
            });
        }

        res.status(200).json({
            recipe
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Internal server error"
        });
    }
}

const deleteRecipeAdmin = async (req, res) => {
    try {
        // Find recipe by id
        const recipe = await Recipe.findById(req.params.id);

        // Check if recipe exists
        if (!recipe) {
            return res.status(404).json({
                error: "Recipe not found"
            });
        }

        // Delete nutrition data
        await Nutrition.deleteOne({ recipe_id: req.params.id });

        // Delete recipe
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

const getAdmin = async (req, res) => {
    try {
        const user = await Admin.findOne({ username: req.params.username }).select("-password");
        if (!user) {
            return res.json({
                error: "User not found"
            });
        }
        res.json(user);
    } catch (error) {
        res.json({
            error: "Server error"
        });
    }
}

const getUsers = async (req, res) => {
    try {
        const users = await User.find({}).select("-password");
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
}

const loginAdmin = async (req, res) => {
    try {
        let data

        const { isValid, filteredReq } = validateRequest(req.body, ["email", "password"])
        if (isValid) {
            data = filteredReq
        } else {
            return res.json({
                code: "BAD_REQUEST_LOGIN",
                error: "Invalid request body"
            })
        }

        // Check if email exists
        const user = await Admin.findOne({ email: data.email });
        if (!user) {
            return res.json({
                code: "EMAIL_NOT_FOUND",
                error: "Email does not exist"
            });
        }

        // // Check if password is correct
        const match = await comparePassword(data.password, user.password);

        if (match) {
            jwt.sign({ username: user.username, id: user._id }, process.env.JWT_SECRET, {}, (err, token) => {
                if (err) throw err;
                res.cookie("token", token, {
                    httpOnly: true
                });
                res.json({
                    id: user._id,
                    username: user.username,
                    token
                })
            })
        } else {
            return res.json({
                code: "PWD_NOT_MATCH",
                error: "Password is incorrect"
            });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({
            code: "INTERNAL_SERVER_ERROR",
            error: `Server error: ${error}`
        })
    }
};

// Logout
const logoutAdmin = (req, res) => {

    res.cookie("token", "", {
        httpOnly: true,
        expires: new Date(0)
    });

    res.json({
        message: "Logged out successfully"
    });
}

module.exports = {
    getUserById,
    getUserByUsername,
    deleteUser,
    getRecipeByIdOrTitle,
    deleteRecipeAdmin,
    getAdmin,
    getUsers,
    loginAdmin,
    logoutAdmin 
};