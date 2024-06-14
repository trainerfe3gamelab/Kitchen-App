const express = require("express");
const router = express.Router();
const searchNutritionByGizi = require("../controllers/searchgiziController");

router.get("/", searchNutritionByGizi);

module.exports = router;
