const express = require("express");
const { login } = require("../controllers/userController");

let router = express.Router();

router.post("/login", login);
//add user
router.post("/:id", (req, res) => {
  res.send("user add req");
});

//delete user
router.delete("/:id", (req, res) => {
  res.send("user dlt req");
});

//user modify
router.put("/:name", (req, res) => {
  res.send("user modify req");
});

module.exports = router;
