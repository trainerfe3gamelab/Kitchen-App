const express = require('express');
const forYouController = require('../controllers/forYouController');
const { authCheck } = require("../middleware/auth");

const router = express.Router();

router.get('/', authCheck, forYouController);

module.exports = router;