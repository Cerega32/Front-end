var express = require("express");
// var cors = require("cors");
var app = express();
var fs = require("fs");

//app.use(cors());

app.get("/", function(request, response) {
    response.send("Hello, Node.js!")
});

app.listen(3008);
