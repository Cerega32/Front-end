// var vjm = require("vue-jwt-mongo"),
//     express = require("express"),
//     app = express();
// let SECRET = `dm-P1Aik6mYDRAT-wn54$N7$d#MZZg266j"~RlZ._y}uJ.z3%K6:HrzXantNB:R`;
// var multer = require("multer");
// var upload = multer({ dest: './server/uploads' });
// var mongoClient = require('mongodb').MongoClient;
// app.use(express.static('client'));
// var vjmServer = vjm.Server({
//     mongoUrl: "mongodb://localhost/photofeed",
//     jwtSecret: SECRET
// });

// var database;
// app.use(express.static('./server/uploads'));
// app.use(express.static('./client'));

// app.post("/auth/register", vjmServer.registerHandler);
// app.post("/auth/login", vjmServer.loginHandler);

// app.post('/upload', [vjmServer.jwtProtector, upload.single('picture')],
//     function(request, response) {
//         database.collection('uploads').insert({
//             user: request.user.username,
//             image: request.file.filename,
//             date: new Date()
//         });
//         response.sendStatus(200);
//     });


//     app.get('/feed', vjmServer.jwtProtector, function(request, response) {
//         database.collection('uploads').find()
//             .sort({ date: -1 })
//             .limit(10)
//             .toArray(function(err, docs) {
//                 response.json(docs);
//             });
//     });

//     mongoClient.connect('mongodb://localhost/photofeed', function(err, db) {
//         database = db;
//         app.listen(80);
//     });
    
var express = require('express');
var vjm = require('vue-jwt-mongo');

var mongoClient = require('mongodb').MongoClient;

var multer = require('multer');
var vjmServer = vjm.Server({
    mongoUrl: 'mongodb://localhost/photofeed',
    jwtSecret: 'MY_SECRET_KEY'
});
var app = express();
var upload = multer({ dest: './uploads' });

var database;
app.use(express.static('./uploads'));
app.use(express.static('../client'));

app.post('/auth/register', vjmServer.registerHandler);
app.post('/auth/login', vjmServer.loginHandler);

app.post('/upload', [vjmServer.jwtProtector, upload.single('picture')],
    function(request, response) {
        database.collection('uploads').insert({
            user: request.user.username,
            image: request.file.filename,
            date: new Date()
        });
        response.sendStatus(200);
    });

app.get('/feed', vjmServer.jwtProtector, function(request, response) {
    database.collection('uploads').find()
        .sort({ date: -1 })
        .limit(10)
        .toArray(function(err, docs) {
            response.json(docs);
        });
});

mongoClient.connect('mongodb://localhost/photofeed', function(err, db) {
    database = db;
    app.listen(80);
});
