const express = require("express");
const mongodb = require("mongodb");

const router = express.Router();

//get organizations
router.get("/", async (req, res) => {
  const organizations = await loadOrganizationCollection();
  res.send(await organizations.find({}).toArray());
});
//add
router.post("/", async (req, res) => {
  const organizations = await loadOrganizationCollection();
  await organizations.insertOne({
    text: req.body.text,
    createdAt: new Date(),
  });
  res.status(201).send();
});
//delete
router.delete("/:id", async (req, res) => {
  const organizations = await loadOrganizationCollection();
  await organizations.deleteOne({ _id: new mongodb.ObjectId(req.params.id) });
  res.status(200).send();
});
//update

async function loadOrganizationCollection() {
  const client = await mongodb.MongoClient.connect(
    "mongodb://localhost:27017/BCB-App",
    {
      useNewUrlParser: true,
    }
  );
  return client.db("BCB-App").collection("organizations");
}

module.exports = router;
