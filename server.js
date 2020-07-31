//Dependencies
const express = require("express");
const path = require("path");
const apiroutes = require("./routes/apiroutes.js");
const htmlroutes = require("./routes/htmlroutes.js");
const bodyParser = require("body-parser");

//Set up the express app
const app = express();
const PORT = process.env.PORT || 9000;

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(apiroutes);
app.use(htmlroutes);

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
