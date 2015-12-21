//console.log('Hello world');
var express = require("express");
var app = express();

var mongoose = require("mongoose");
mongoose.connect('mongodb://' + process.env.IP +'/gsms');

var bodyparser = require("body-parser");

var path = require("path");
app.use(express.static(path.join(__dirname, "public")));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

var api = require("./api");
app.use("/api", api);


app.listen(process.env.PORT,  process.env.IP, function () {
    console.log("started");
});