const express = require("express");
const mongoose = require("mongoose");

const userRoute = require("./routes/userRoute");
const companyRoute = require("./routes/companyRoute");
const summeryRoute = require("./routes/summeryRoute");
const loginRoute = require("./routes/loginRoute");
const registerRoute = require("./routes/registerRoute");

const Company = require("./models/company");

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
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//register view engine
app.set("view engine", "ejs");

app.use("/summery", summeryRoute);
app.use("/company", companyRoute);
app.use("/user", userRoute);
app.use("/login", loginRoute);
app.use("/register", registerRoute);

app.get("/", (req, res) => {
  res.redirect("/company/all");
});
app.get("/search/:name", (req, res) => {
  Company.find({ name: { $regex: req.params.name } })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});
//404
app.use((req, res) => {
  res.status(404).render("404", { title: "404", req });
});
