//dependencies
const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");
let notes = "";

fs.readFile("./db/db.json", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    notes = JSON.parse(data);
  }
});

router.get("/api/notes", async (req, res) => {
  res.json(notes);
});

router.post("/api/notes", async (req, res) => {
  //add an id = current length of the array
  req.body.id = parseInt(notes[notes.length - 1].id) + 1;
  console.log(req.body);
  //assign id as index in array
  notes.push(req.body);
  res.json(notes);
  fs.writeFileSync("./db/db.json", JSON.stringify(notes));
});

router.delete("/api/notes", async (req, res) => {
  //   res.json(notes);
});

module.exports = router;
