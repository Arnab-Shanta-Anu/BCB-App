const express = require("express");

const app = express();

app.listen(5000);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});
app.get("/all", (req, res) => {
  res.sendFile(__dirname + "/views/all-companies.html");
});
app.get("/:name", (req, res) => {
  res.sendFile(__dirname + "/views/company.html");
});
