const Recipe = require("../models/recipe");

// Get all recipes

// Create recipe
const createRecipe = async (req, res) => {
    try {

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

module.exports = {
    createRecipe
};