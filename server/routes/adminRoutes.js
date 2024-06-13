const express = require("express"); 
const router = express.Router();
const { loginAdmin, logoutAdmin } = require("../controllers/adminController");  
const { deleteUser, deleteRecipeAdmin, getAdmin, getUsers } = require("../controllers/adminController");   

router.post("/login", loginAdmin);
router.post("/logout", logoutAdmin);
router.get("/users", getUsers);
router.delete("/user/:id", deleteUser);
router.delete("/recipe/:id", deleteRecipeAdmin);
router.get("/:username", getAdmin);

module.exports = router;