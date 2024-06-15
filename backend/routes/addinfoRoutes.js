const express = require('express');
const router = express.Router();
const { getIngredients, getCategory } = require('../controllers/addinfoController');

router.get('/ingredients', getIngredients);
router.get('/category', getCategory);


module.exports = router;