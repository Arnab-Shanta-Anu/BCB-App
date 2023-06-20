const express = require("express");
const {
  login,
  createUser,
  getAllUsers,
  deleteUser,
} = require("../controllers/userController");

let router = express.Router();

router.get("/", getAllUsers);
router.post("/", login);
router.delete("/:employee_id", deleteUser);
router.post("/new", createUser);

module.exports = router;
