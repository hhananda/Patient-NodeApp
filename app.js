//console.log('Hello world');
var express = require("express");
var app = express();

var mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1/gsms');

var bodyparser = require("body-parser");

var path = require("path");
app.use(express.static(path.join(__dirname, "public")));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

var api = require("./api");
app.use("/api", api);


app.listen(3333, function () {
    console.log("started");
});