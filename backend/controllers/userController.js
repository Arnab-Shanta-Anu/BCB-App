const jwt = require("jsonwebtoken");
const User = require("../models/user");

const generateToken = (id) => {
  return jwt.sign({ id }, "bcba2321", { expiresIn: "30d" });
};

const login = async (req, res) => {
  console.log(req.body);
  const user = await User.findOne({ employee_id: req.body.id }).exec();
  if (user.pass === req.body.password) {
    const data = {
      name: user.name,
      employee_id: user.employee_id,
      pass: user.pass,
      admin: user.admin,
      token: generateToken(user.employee_id),
    };
    res.status(200).json(data);
  }
};

const createUser = async (req, res) => {
  console.log(req.body);
  try {
    if (await User.findOne({ employee_id: req.body.employee_id })) {
      res.status(500).json({ msg: "already exists" });
    }
    const user = await User.create(req.body);
    const data = {
      name: user.name,
      employee_id: user.employee_id,
      pass: user.pass,
      admin: user.admin,
    };
    res.status(201).json(data);
  } catch (err) {
    console.log(err);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ name: 1 });
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.employee_id);
    res.status(204).json(user);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { login, createUser, getAllUsers, deleteUser };
