const AddInfo = require('../models/addinfo');

const getIngredients = async (req, res) => {
    try {
        const Ingredients = await AddInfo.find().select('ingredients');
        res.status(200).json(Ingredients);
    } catch (error) {
        console.log(error);
        res.json({
            error: "Server error"
        });
    }
}

const getCategory = async (req ,res) => {
    try {
        const Category = await AddInfo.find().select('category');
        res.status(200).json(Category);
    } catch (error) {
        console.log(error);
        res.json({
            error: "Server error"
        });
    }
}
module.exports = {
    getIngredients,
    getCategory
};