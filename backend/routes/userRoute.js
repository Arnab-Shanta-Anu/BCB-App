const express = require("express");
const { login, signup, getAllUsers } = require("../controllers/userController");

let router = express.Router();

router.get("/", getAllUsers);
router.post("/login", login);
router.post("/signup", signup);

module.exports = router;
