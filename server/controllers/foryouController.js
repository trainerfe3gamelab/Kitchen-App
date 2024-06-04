const Recipe = require('../models/recipe'); 

const foryouController = async (req, res) => {
    try {
        const { user_id } = req.query;
      
        const recipes = await Recipe.find({ user_id });

        res.status(200).json(recipes);
    } catch (error) {
        console.log(error);
        res.json({
            error: "Server error"
        });
    }
};

module.exports = foryouController;
