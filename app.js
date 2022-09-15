const express = require("express");
const userRoute = require("./routes/userRoute");
const companyRoute = require("./routes/companyRoute");
const summeryRoute = require("./routes/summeryRoute");

const app = express();
app.use(express.json());

//register view engine
app.set("view engine", "ejs");

app.listen(5000);

app.get("/", (req, res) => {
  res.redirect("/login");
  res.render("index");
});
app.use("/company/summery", summeryRoute);
app.use("/company", companyRoute);
app.use("/user", userRoute);

//view all companies

app.get("/login", (req, res) => {
  res.render("login");
});

//404
app.use((req, res) => {
  res.status(404).render("404");
});
