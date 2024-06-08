const Recipe = require('../models/recipe'); 

const foryouController = async (req, res) => {
    try {
        const { user_id, category } = req.query;

        let query = {};

        // If user_id is given, add it to the query
        if (user_id) {
            query.user_id = user_id;
        }

        // If category is given, add it to the query
        if (category) {
            const categories = category.split(',');
            query.category = { $in: categories };
        }

        // Find recipes that match the query
        const recipes = await Recipe.find(query);

        res.status(200).json(recipes);
    } catch (error) {
        console.log(error);
        res.json({
            error: "Server error"
        });
    }
};

module.exports = foryouController;