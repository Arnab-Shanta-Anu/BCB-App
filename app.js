const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const userRoute = require("./routes/userRoute");
const companyRoute = require("./routes/companyRoute");
const summeryRoute = require("./routes/summeryRoute");
const authRoute = require("./routes/authRoute");
const User = require("./models/user");

const dbURI = "mongodb://localhost:27017/BCB-App";
mongoose
  .connect(dbURI)
  .then((result) => {
    console.log("connected to db");
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
var jsonParser = bodyParser.json();
app.use(express.static("public"));

var urlencodedParser = bodyParser.urlencoded({ extended: false });
//register view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.redirect("/company/all");
});
app.use("/company/summery", summeryRoute);
app.use("/company", companyRoute);
app.use("/user", userRoute);
app.use("/auth", authRoute);

app.post("/login", (req, res) => {
  res.render("login", { title: "login" });
});
app.get("/register", (req, res) => {
  res.render("register", { title: "Register" });
});

//404
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
