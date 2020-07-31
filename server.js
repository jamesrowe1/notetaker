//Dependencies
const express = require("express");
const path = require("path");
const apiroutes = require("./routes/apiroutes.js");
const htmlroutes = require("./routes/htmlroutes.js");
const bodyParser = require("body-parser");

//Set up the express app
const app = express();
const PORT = process.env.PORT || 9000;

//set up the parser to make stuff readable
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//use the apiroutes and htmlroutes files
app.use(apiroutes);
app.use(htmlroutes);

//start the server
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
