const express = require('express');
const foryouController = require('../controllers/foryouController'); 

const router = express.Router();

router.get('/', foryouController);

module.exports = router;