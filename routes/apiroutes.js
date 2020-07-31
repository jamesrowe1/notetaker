//dependencies
const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");
let notes = "";

//read the db.json file, parse it and put it into notes
fs.readFile("./db/db.json", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    notes = JSON.parse(data);
  }
});

//this is the api holding all the notes
router.get("/api/notes", async (req, res) => {
  res.json(notes);
});

//when the note is made and a post request sent, send the req.body info to both notes and the db.json file
router.post("/api/notes", async (req, res) => {
  //add an id = 0 if empty array, otherwise id of last item + 1
  if (notes.length !== 0) {
    req.body.id = parseInt(notes[0].id) + 1;
  } else {
    req.body.id = 0;
  }
  //assign id as index in array
  notes.unshift(req.body);
  res.json(notes);
  fs.writeFileSync("./db/db.json", JSON.stringify(notes));
});

//when a delete request is sent, delete the identified note from notes and rewrite db.json without it
router.delete("/api/notes/:id", async (req, res) => {
  //   res.json(notes);
  let id = parseInt(req.params.id);

  notes = notes.filter((note) => note.id !== id);
  console.log(notes);
  res.json(notes);
  fs.writeFileSync("./db/db.json", JSON.stringify(notes));
});

//export
module.exports = router;
