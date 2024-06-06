const AddInfo = require('../models/addinfo');

const getIngredients = async (req, res) => {
    try {
        const Ingredients = await AddInfo.find().select('ingredients -_id');
        res.status(200).json(Ingredients[0]);
    } catch (error) {
        console.log(error);
        res.json({
            error: "Server error"
        });
    }
}

const getCategory = async (req ,res) => {
    try {
        const Category = await AddInfo.find().select('category -_id');
        res.status(200).json(Category[0]);
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