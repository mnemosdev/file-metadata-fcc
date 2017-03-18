"use strict";

var express = require("express");
var app = express();
var uploader = require("./api/api")(app);

app.use(express.static("public"));

app.listen(process.env.PORT || 3000, function(){
    console.log("listening");1
});