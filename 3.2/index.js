var express = require("express"),
    app = express();

app.get("/", function(request, response) {
    response.send("Hello, Node.js!")
});

app.listen(3008);
