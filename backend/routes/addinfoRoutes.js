const express = require('express');
const router = express.Router();
const { getIngredients, getCategory } = require('../controllers/addinfoController');

router.get('/bahan', getIngredients);
router.get('/kategori', getCategory);


module.exports = router;