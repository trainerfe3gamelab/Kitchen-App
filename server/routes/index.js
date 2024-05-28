const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Welcome to the API');
});
router.use('/auth', require('./authRoutes'));

module.exports = router;