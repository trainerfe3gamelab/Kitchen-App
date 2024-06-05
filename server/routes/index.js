const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Welcome to the API');
});
router.use('/auth', require('./authRoutes'));
router.use('/users', require('./userRoutes'));
router.use('/recipes', require('./recipeRoutes'));
router.use('/searchgizi', require('./searchgiziRoutes')); 
router.use('/untuk_kamu', require('./foryouRoutes'));
router.use('/', require('./addinfoRoutes'))

module.exports = router;