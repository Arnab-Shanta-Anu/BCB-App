const express = require("express");

const app = express();

app.listen(5000);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/all", (req, res) => {
  res.sendFile(__dirname + "/views/all-companies.html");
});

app.get("/all/:name", (req, res) => {
  res.sendFile(__dirname + "/views/company.html");
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/views/login.html");
});

//404
app.use((req, res) => {
  res.status(404).sendFile(__dirname + "/views/404.html");
});
