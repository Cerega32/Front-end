var express = require("express"),
    app = express();

app.get("/folder/page", function(request, response) {
    var x = request.query.foo;
    response.send({ foo: x});
});

app.listen(3008);