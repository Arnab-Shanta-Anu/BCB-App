const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const userRoute = require("./routes/userRoute");
const companyRoute = require("./routes/companyRoute");
const summaryRoute = require("./routes/summaryRoute");

const dbURI = "mongodb://localhost:27017/BCB-App";
const connectMongo = async () => {
  await mongoose.connect(dbURI);
  app.listen(4000, () => {
    console.log("DB connected & server started on port 4000");
  });
};

connectMongo();
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});
app.use("/api/summaries", summaryRoute);
app.use("/api/companies", companyRoute);
app.use("/api/users", userRoute);
