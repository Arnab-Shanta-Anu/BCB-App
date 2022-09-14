const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());

const organizations = require("./routes/api/organizations");
app.use("/api/organizations", organizations);

const port = 5000;

app.listen(port, () => console.log(`server started on port ${port}`));
