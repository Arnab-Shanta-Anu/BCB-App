const express = require("express");

const app = express();

//register view engine
app.set("view engine", "ejs");

app.listen(5000);

app.get("/", (req, res) => {
  res.redirect("/login");
  res.render("index");
});

//view all companies
app.get("/company/all", (req, res) => {
  res.render("all-companies");
});

//view single company
app.get("/company/:name", (req, res) => {
  res.render("company");
});

//add a company
app.post("/company/:name", (req, res) => {
  res.send("company add req");
});

//delete a company
app.delete("/company/:name", (req, res) => {
  res.send("company delete req");
});

app.post("/company/modify/:name", (req, res) => {
  res.send("company modify req");
});

app.get("/company/summery/:name", (req, res) => {
  res.remder("company");
});

app.get("/login", (req, res) => {
  res.render("login");
});

//404
app.use((req, res) => {
  res.status(404).render("404");
});
