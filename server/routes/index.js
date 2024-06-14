const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Welcome to the API');
});
router.use('/auth', require('./authRoutes'));
router.use('/users', require('./userRoutes'));
router.use('/recipes', require('./recipeRoutes'));
router.use('/searchgizi', require('./searchgiziRoutes')); 
router.use('/forYou', require('./foryouRoutes'));
router.use('/', require('./addinfoRoutes'))
router.use('/admin', require('./adminRoutes'));

module.exports = router;