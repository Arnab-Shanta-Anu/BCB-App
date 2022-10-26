const express = require("express");
const mongoose = require("mongoose");

const userRoute = require("./routes/userRoute");
const companyRoute = require("./routes/companyRoute");
const summaryRoute = require("./routes/summaryRoute");
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

app.use("/summary", summaryRoute);
app.use("/company", companyRoute);
app.use("/user", userRoute);
app.use("/login", loginRoute);
app.use("/register", registerRoute);

app.get("/", (req, res) => {
  res.redirect("/company/all");
});
app.post("/search/:key", (req, res) => {
  const searchKey = req.params.key;
  Company.find({
    name: { $regex: new RegExp("^" + searchKey, "i") },
  })
    .limit(10)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
});
//404
app.use((req, res) => {
  res.status(404).render("404", { title: "404", req });
});
