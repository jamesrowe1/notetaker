//dependencies
const express = require("express");
const router = express.Router();
const path = require("path");

//open the index.html when the endpoint is /
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

//open the notes.html when the endpoint is notes
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

//export the .js
module.exports = router;
