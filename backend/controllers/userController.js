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

module.exports = { login };
