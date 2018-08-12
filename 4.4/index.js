var mongoClient = require("mongodb").MongoClient,
    url = "mongodb://localhost/sandbox";

mongoClient.connect(url, function (err, db) {
    var db = db.db('exampledb')
    if (err) console.log(err.stack);
    var humans = db.collection("humans");
    humans.insert({
        name: "Егор",
        age: 18
    }, function (err, result) {
        if (err) console.log(err.stack);
        console.log(result);
    });
});