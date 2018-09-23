var express = require("express"), 
bodyParser = require("body-parser"), 
app = express(); 
var database; 

var mongoClient = require("mongodb").MongoClient, 
url = "mongodb://localhost:27017/exampledb"; 


mongoClient.connect(url, { useNewUrlParser: true }, function(err, db) { 
    database = db; 
    app.listen(3009); 
}); 

app.use(bodyParser.urlencoded({ extended: false })); 

app.use(express.static("public/")); 

app.post("/enroll", function(request, response) { 
    var db=database.db('depot') 
    var humans = db.collection("humans"); 
    humans.insert({ 
        name: request.body.firstName, 
        age: request.body.secondName 
    }, function(err, result) { 
        // if(err) console.log(err.stack); 
        response.redirect("/records"); 
    }); 
}); 

app.get("/records", function(request, response) { 
    var db=database.db('depot') 
    var humans = db.collection("humans"); 
    humans.find({}).toArray(function(err, result) { 
        // if(err) console.log(err.stack); 
        response.send(result); 
}); 
// response.sendfile(index.html); 
//console.log(request.body); 
//response.redirect("/dfsjo"); 
});