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
  if (notes.length !== 0) {
    req.body.id = parseInt(notes[0].id) + 1;
  } else {
    req.body.id = 0;
  }
  console.log(req.body.id);
  //assign id as index in array
  notes.unshift(req.body);
  res.json(notes);
  fs.writeFileSync("./db/db.json", JSON.stringify(notes));
});

router.delete("/api/notes/:id", async (req, res) => {
  //   res.json(notes);
  let id = parseInt(req.params.id);

  notes = notes.filter((note) => note.id !== id);
  console.log(notes);
  res.json(notes);
  fs.writeFileSync("./db/db.json", JSON.stringify(notes));
});

module.exports = router;
