const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Welcome to the API');
});
router.use('/auth', require('./authRoutes'));
router.use('/users', require('./userRoutes'));
router.use('/recipes', require('./recipeRoutes'));

module.exports = router;