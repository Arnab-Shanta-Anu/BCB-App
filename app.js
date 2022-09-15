const express = require("express");
const userRoute = require("./routes/userRoute");
const companyRoute = require("./routes/companyRoute");
const summeryRoute = require("./routes/summeryRoute");

const app = express();
app.use(express.json());
app.use(express.static("public"));

//register view engine
app.set("view engine", "ejs");

app.listen(5000);

app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});
app.use("/company/summery", summeryRoute);
app.use("/company", companyRoute);
app.use("/user", userRoute);

//view all companies

app.get("/login", (req, res) => {
  res.render("login", { title: "login" });
});

//404
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
